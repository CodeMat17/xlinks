"use client";
import { ArrowUpRight, MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Our Services" },
  { href: "/news", label: "News" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact Us" },
];

const serviceLinks = [
  { href: "/services", label: "University Admissions" },
  { href: "/services", label: "Visa Processing" },
  { href: "/services#language", label: "IELTS Preparation" },
  { href: "/services", label: "Flight Booking" },
  { href: "/services", label: "Tours & Holiday Packages" },
  { href: "/services", label: "Accommodation & Hotel Booking" },
  { href: "/services", label: "Travel Insurance" },
];

const destinations = [
  "United Kingdom", "Canada", "United States", "Australia",
  "Ireland", "Malta", "Finland", "Austria", "China", "Cyprus", "New Zealand",
];

const socials = [
  {
    name: "Facebook",
    href: "https://facebook.com/profile.php?id=61552975177961",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/xlinklanguages1720?igsh=MnJob2YxYmhldHV2",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-gray-950 dark:bg-gray-950 text-gray-300"
      role="contentinfo"
      aria-label="Site footer">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-700 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
            Your Future — and Your Next Trip — Deserve the Experts
          </h2>
          <p className="text-emerald-100 mb-6 max-w-xl mx-auto">
            Let the experts at Xlinks Educational and Travel Consult guide you through university
            placements, visa processing, language training, and unforgettable holiday and tour packages.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-emerald-700 font-bold rounded-xl hover:bg-emerald-50 transition-colors shadow-xl">
            Start Your Journey
            <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                alt="Xlinks Educational and Travel Consult logo"
                src="/xlinks_logo.webp"
                width={50}
                height={50}
                className="rounded-3xl object-cover"
                priority
              />
              <div>
                <span className="block text-base font-black text-emerald-400 tracking-tight">
                  XLINKS
                </span>
                <span className="block text-[10px] font-semibold text-teal-400 tracking-widest uppercase -mt-0.5">
                  Educational and Travel Consult
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Nigeria&apos;s premier study abroad and travel agency. We turn your global education
              and travel dreams into reality.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" aria-hidden="true" />
                <span className="text-gray-400">
                  No. 35 Ndele Street, Bishop House, D-Line, Port Harcourt
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" aria-hidden="true" />
                <a href="tel:+2349134523615" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  +234 913 452 3615
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-500 flex-shrink-0" aria-hidden="true" />
                <a
                  href="mailto:info@xlinkseducationalandtravels.org"
                  className="text-gray-400 hover:text-emerald-400 transition-colors">
                  info@xlinkseducationalandtravels.org
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer quick links">
            <h3 className="text-sm font-black text-white uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5" role="list">
              {quickLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5 group">
                    <span
                      className="w-1 h-1 rounded-full bg-emerald-600 group-hover:bg-emerald-400 transition-colors"
                      aria-hidden="true"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Footer services">
            <h3 className="text-sm font-black text-white uppercase tracking-widest mb-5">
              Our Services
            </h3>
            <ul className="space-y-2.5" role="list">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5 group">
                    <span
                      className="w-1 h-1 rounded-full bg-emerald-600 group-hover:bg-emerald-400 transition-colors"
                      aria-hidden="true"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Destinations + Social */}
          <div>
            <h3 className="text-sm font-black text-white uppercase tracking-widest mb-5">
              Destinations
            </h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {destinations.map((d) => (
                <span
                  key={d}
                  className="text-xs text-gray-400 bg-gray-800 px-2.5 py-1 rounded-full">
                  {d}
                </span>
              ))}
            </div>
            <h3 className="text-sm font-black text-white uppercase tracking-widest mb-4">
              Follow Us
            </h3>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${social.name}`}
                  className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-emerald-700 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>
            © {currentYear}{" "}
            <span className="text-emerald-500 font-semibold">
              Xlinks Educational and Travel Consult
            </span>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
