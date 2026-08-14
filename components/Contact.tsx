"use client";

import { useId, useRef, useState } from "react";
import {
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { contact, services as serviceNames } from "@/lib/site";

const mapsUrl =
  "https://maps.google.com/?q=No.+35+Ndele+Street+D-Line+Port+Harcourt+Nigeria";

const contactInfo = [
  {
    icon: MapPin,
    label: "Office address",
    value: `${contact.street}, ${contact.city}, ${contact.region}, ${contact.countryName}`,
    href: mapsUrl,
    external: true,
  },
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: contact.phone,
    href: contact.phoneHref,
    external: false,
  },
  {
    icon: Mail,
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
    external: false,
  },
  {
    icon: Clock,
    label: "Office hours",
    value: "Mon – Fri: 8:00 am – 6:00 pm · Sat: 9:00 am – 3:00 pm",
    href: null,
    external: false,
  },
];

const serviceOptions = [...serviceNames, "General Enquiry"];

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
  company: "", // honeypot
};

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState<string | null>(null);

  const errorRef = useRef<HTMLParagraphElement>(null);
  const successRef = useRef<HTMLHeadingElement>(null);
  const formId = useId();

  const field = (key: keyof typeof form) => `${formId}-${key}`;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const missingFields = () =>
    [
      !form.name.trim() && "your name",
      !form.email.trim() && "your email address",
      !form.message.trim() && "a message",
    ].filter(Boolean) as string[];

  const fail = (msg: string) => {
    setError(msg);
    // Move focus to the message so screen-reader users hear it immediately
    // rather than discovering it only if they happen to navigate back up.
    requestAnimationFrame(() => errorRef.current?.focus());
  };

  const handleWhatsApp = () => {
    const missing = missingFields();
    if (missing.length) {
      fail(`Please add ${missing.join(", ")} before sending.`);
      return;
    }
    setError(null);

    const lines = [
      `*Name:* ${form.name}`,
      `*Email:* ${form.email}`,
      form.phone && `*Phone:* ${form.phone}`,
      form.service && `*Service:* ${form.service}`,
      `*Message:* ${form.message}`,
    ].filter(Boolean);

    const text = `Hello Xlinks, I'd like to enquire:\n\n${lines.join("\n")}`;
    window.open(
      `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const missing = missingFields();
    if (missing.length) {
      fail(`Please add ${missing.join(", ")} before sending.`);
      return;
    }

    setStatus("sending");
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) throw new Error(data.error || "Something went wrong.");

      setStatus("sent");
      setForm(emptyForm);
      requestAnimationFrame(() => successRef.current?.focus());
    } catch (err) {
      setStatus("idle");
      fail(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    }
  };

  return (
    <section id="contact" className="section" aria-labelledby="contact-heading">
      <div className="shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Get in touch</p>
          <h2
            id="contact-heading"
            className="mt-3 text-(length:--text-h2) font-extrabold text-ink"
          >
            Start your journey <span className="brand-text">today</span>
          </h2>
          <p className="lede mt-4">
            Tell us what you are planning. An adviser will come back to you —
            the consultation is free and there is no obligation afterwards.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-5 lg:gap-10">
          {/* ---------- Details ---------- */}
          <div className="space-y-4 lg:col-span-2">
            <ul className="space-y-4">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                const content = (
                  <>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 dark:bg-brand-950/60">
                      <Icon
                        className="h-5 w-5 text-brand-700 dark:text-brand-300"
                        aria-hidden="true"
                      />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-display text-2xs font-bold tracking-[0.14em] text-ink-subtle uppercase">
                        {item.label}
                      </span>
                      <span className="mt-1 block text-sm font-semibold wrap-break-word text-ink">
                        {item.value}
                      </span>
                    </span>
                  </>
                );

                return (
                  <li key={item.label}>
                    {item.href ? (
                      <a
                        href={item.href}
                        {...(item.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="card-interactive flex items-start gap-4 p-5"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="card flex items-start gap-4 p-5">
                        {content}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="brand-gradient relative flex aspect-video flex-col items-center justify-center overflow-hidden rounded-2xl p-6 text-center transition-shadow hover:shadow-lg"
            >
              <MapPin className="h-9 w-9 text-brand-300" aria-hidden="true" />
              <span className="mt-3 font-display text-base font-bold text-white">
                Find us on the map
              </span>
              <span className="mt-1 text-sm text-white/70">
                D-Line, Port Harcourt
              </span>
              <span className="mt-4 rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium text-white">
                Open in Google Maps
              </span>
            </a>
          </div>

          {/* ---------- Form ---------- */}
          <div className="lg:col-span-3">
            <div className="card p-6 sm:p-8">
              {status === "sent" ? (
                <div className="flex flex-col items-center py-12 text-center">
                  <CheckCircle2
                    className="h-14 w-14 text-brand-600 dark:text-brand-400"
                    aria-hidden="true"
                  />
                  <h3
                    ref={successRef}
                    tabIndex={-1}
                    className="mt-4 font-display text-xl font-extrabold text-ink outline-none"
                  >
                    Message sent
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-ink-muted">
                    Your enquiry is with our team. We normally reply within one
                    working day.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="btn-secondary mt-7"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h3 className="font-display text-lg font-extrabold text-ink">
                    Book a free consultation
                  </h3>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <Label htmlFor={field("name")} className="font-bold">
                        Full name{" "}
                        <span className="text-brand-700 dark:text-brand-300">*</span>
                      </Label>
                      <Input
                        id={field("name")}
                        name="name"
                        type="text"
                        required
                        maxLength={120}
                        autoComplete="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor={field("email")} className="font-bold">
                        Email address{" "}
                        <span className="text-brand-700 dark:text-brand-300">*</span>
                      </Label>
                      <Input
                        id={field("email")}
                        name="email"
                        type="email"
                        required
                        maxLength={200}
                        autoComplete="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor={field("phone")} className="font-bold">
                        Phone / WhatsApp
                      </Label>
                      <Input
                        id={field("phone")}
                        name="phone"
                        type="tel"
                        maxLength={40}
                        autoComplete="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+234 000 000 0000"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor={field("service")} className="font-bold">
                        Service of interest
                      </Label>
                      {/* Native <select>: the Radix trigger was not a real form
                          control, so the value never took part in validation or
                          autofill, and mobile lost the OS picker. */}
                      <select
                        id={field("service")}
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="h-10 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base text-ink shadow-xs transition-colors outline-none focus-visible:border-ring md:text-sm"
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mt-4 space-y-1.5">
                    <Label htmlFor={field("message")} className="font-bold">
                      Your message{" "}
                      <span className="text-brand-700 dark:text-brand-300">*</span>
                    </Label>
                    <Textarea
                      id={field("message")}
                      name="message"
                      required
                      rows={5}
                      maxLength={5000}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your study or travel plans, where you'd like to go, and anything you're unsure about."
                      className="resize-y"
                    />
                  </div>

                  {/* Honeypot. Hidden from sight and from assistive tech, but
                      still filled in by naive bots. */}
                  <div className="sr-only" aria-hidden="true">
                    <label htmlFor={field("company")}>
                      Company (leave this empty)
                    </label>
                    <input
                      id={field("company")}
                      name="company"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={form.company}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="btn-primary flex-1 py-3.5 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {status === "sending" ? (
                        <>
                          <svg
                            className="h-5 w-5 animate-spin"
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden="true"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                            />
                          </svg>
                          Sending…
                        </>
                      ) : (
                        <>
                          Send by email
                          <Send className="h-4 w-4" aria-hidden="true" />
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsApp}
                      className="btn flex-1 bg-[#25D366] py-3.5 text-white shadow-md hover:-translate-y-0.5 hover:bg-[#1ebe5a] hover:shadow-lg"
                    >
                      Send by WhatsApp
                      <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Live region is always present so the message is announced
                      when it appears, not just when the node is created. */}
                  <div role="alert" aria-live="assertive" className="mt-4">
                    {error && (
                      <p
                        ref={errorRef}
                        tabIndex={-1}
                        className="rounded-xl bg-destructive/10 px-4 py-3 text-center text-sm font-medium text-destructive outline-none"
                      >
                        {error}
                      </p>
                    )}
                  </div>

                  <p className="mt-3 text-center text-xs text-ink-subtle">
                    Free consultation · No obligation · We reply within one
                    working day
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
