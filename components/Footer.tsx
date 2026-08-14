import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { contact, destinations, siteName, socials } from "@/lib/site";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About us" },
  { href: "/services", label: "Our services" },
  { href: "/news", label: "News & insights" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact us" },
];

const serviceLinks = [
  { href: "/admissions", label: "University admissions" },
  { href: "/visa-processing", label: "Visa processing" },
  { href: "/services#language", label: "IELTS & language training" },
  { href: "/services", label: "Flight booking" },
  { href: "/services#destinations", label: "Tours & holiday packages" },
  { href: "/services", label: "Accommodation booking" },
  { href: "/services", label: "Travel insurance" },
];

const socialIcons: Record<string, React.ReactNode> = {
  Facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
  Instagram: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  ),
};

function FooterNav({
  heading,
  links,
}: {
  heading: string;
  links: { href: string; label: string }[];
}) {
  return (
    <nav aria-label={heading}>
      <h2 className="font-display text-2xs font-bold tracking-[0.16em] text-white uppercase">
        {heading}
      </h2>
      <ul className="mt-5 space-y-2.5">
        {links.map((link) => (
          <li key={link.href + link.label}>
            <Link
              href={link.href}
              className="text-sm text-white/65 transition-colors hover:text-brand-300"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto">
      {/* ---- Closing CTA ---- */}
      <section
        className="brand-gradient relative isolate overflow-hidden"
        aria-labelledby="footer-cta-heading"
      >
        <div className="dot-field pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="shell relative py-16 text-center sm:py-20">
          <h2
            id="footer-cta-heading"
            className="mx-auto max-w-2xl text-(length:--text-h2) font-extrabold text-white"
          >
            Ready to take the next step?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/75">
            Tell us where you want to go. We&apos;ll map out the admissions,
            visa and travel route to get you there — the first conversation is
            free.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-primary">
              Book a free consultation
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a href={contact.phoneHref} className="btn-on-dark">
              <Phone className="h-4 w-4" aria-hidden="true" />
              {contact.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ---- Site footer ---- */}
      <div className="bg-brand-950 text-white">
        <div className="shell py-14 lg:py-16">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand + contact */}
            <div>
              <div className="flex items-center gap-2.5">
                <Image
                  src="/xlinks_logo.webp"
                  alt=""
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-xl object-cover"
                />
                <span className="leading-tight">
                  <span className="block font-display text-base font-extrabold text-white">
                    XLINKS
                  </span>
                  <span className="block font-display text-[0.5625rem] font-bold tracking-[0.14em] text-brand-300 uppercase">
                    Educational &amp; Travel Consult
                  </span>
                </span>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-white/65">
                Study abroad and travel consultancy based in Port Harcourt,
                helping Nigerians reach universities and destinations worldwide.
              </p>

              <address className="mt-6 space-y-3 text-sm not-italic">
                <div className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
                  <span className="text-white/65">
                    {contact.street}, {contact.city}, {contact.region}
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
                  <a
                    href={contact.phoneHref}
                    className="text-white/65 transition-colors hover:text-brand-300"
                  >
                    {contact.phone}
                  </a>
                </div>
                <div className="flex items-start gap-2.5">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
                  <a
                    href={`mailto:${contact.email}`}
                    className="break-all text-white/65 transition-colors hover:text-brand-300"
                  >
                    {contact.email}
                  </a>
                </div>
              </address>
            </div>

            <FooterNav heading="Explore" links={quickLinks} />
            <FooterNav heading="Services" links={serviceLinks} />

            {/* Destinations + social */}
            <div>
              <h2 className="font-display text-2xs font-bold tracking-[0.16em] text-white uppercase">
                Destinations
              </h2>
              <ul className="mt-5 flex flex-wrap gap-1.5">
                {destinations.map((d) => (
                  <li
                    key={d.code}
                    className="rounded-full bg-white/10 px-2.5 py-1 text-xs text-white/75"
                  >
                    {d.short}
                  </li>
                ))}
              </ul>

              <h2 className="mt-8 font-display text-2xs font-bold tracking-[0.16em] text-white uppercase">
                Follow us
              </h2>
              <ul className="mt-4 flex gap-2.5">
                {socials.map((social) => (
                  <li key={social.name}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${siteName} on ${social.name}`}
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white/75 transition-colors hover:bg-brand-600 hover:text-white"
                    >
                      {socialIcons[social.name]}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-sm text-white/70 sm:flex-row">
            <p>
              © {year} {siteName}. All rights reserved.
            </p>
            <p>Port Harcourt, Nigeria · Established 2023</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
