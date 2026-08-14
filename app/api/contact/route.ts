import { NextResponse } from "next/server";
import { Resend } from "resend";
import ContactEmail from "@/emails/ContactEmail";
import { contact, services } from "@/lib/site";

const resend = new Resend(process.env.RESEND_API_KEY);

/** Caps every field so a single request can't post megabytes of text. */
const LIMITS = {
  name: 120,
  email: 200,
  phone: 40,
  service: 80,
  message: 5000,
} as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function clean(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  // Strip CR/LF: these fields end up in mail headers (subject, reply-to),
  // where a newline is the classic header-injection vector.
  return value.replace(/[\r\n]+/g, " ").trim().slice(0, max);
}

export async function POST(req: Request) {
  try {
    const body: unknown = await req.json();
    if (typeof body !== "object" || body === null) {
      return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    }

    const raw = body as Record<string, unknown>;

    // Honeypot: a real user never sees this field, so anything in it is a bot.
    // Report success so the bot doesn't learn to retry.
    if (clean(raw.company, 100)) {
      return NextResponse.json({ success: true });
    }

    const name = clean(raw.name, LIMITS.name);
    const email = clean(raw.email, LIMITS.email);
    const phone = clean(raw.phone, LIMITS.phone);
    const service = clean(raw.service, LIMITS.service);
    // Message is the mail body, not a header, so newlines are kept.
    const message =
      typeof raw.message === "string"
        ? raw.message.trim().slice(0, LIMITS.message)
        : "";

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please provide your name, email address and a message." },
        { status: 400 },
      );
    }

    if (!EMAIL_RE.test(email)) {
      return NextResponse.json(
        { error: "That email address doesn't look right." },
        { status: 400 },
      );
    }

    // Only accept a service we actually offer, so the subject line can't be
    // used to inject arbitrary text.
    const safeService =
      service && ([...services, "General Enquiry"] as string[]).includes(service)
        ? service
        : "General Enquiry";

    if (!process.env.RESEND_API_KEY) {
      console.error("[contact/route] RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "The contact form is temporarily unavailable. Please call or use WhatsApp." },
        { status: 503 },
      );
    }

    const { error } = await resend.emails.send({
      from: "Xlinks Contact Form <onboarding@resend.dev>",
      to: contact.email,
      replyTo: email,
      subject: `New enquiry: ${safeService} — ${name}`,
      react: ContactEmail({ name, email, phone, service: safeService, message }),
    });

    if (error) {
      console.error("[contact/route] resend error", error);
      return NextResponse.json(
        { error: "We couldn't send your message. Please try WhatsApp or call us." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact/route]", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try WhatsApp or call us." },
      { status: 500 },
    );
  }
}
