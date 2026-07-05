import { NextResponse } from "next/server";
import { Resend } from "resend";
import ContactEmail from "@/emails/ContactEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, service, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    await resend.emails.send({
      from: "Xlinks Contact Form <onboarding@resend.dev>",
      to: "info@xlinkseducationalandtravels.org",
      replyTo: email,
      subject: `New Enquiry: ${service || "General"} — ${name}`,
      react: ContactEmail({ name, email, phone, service, message }),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact/route]", err);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
