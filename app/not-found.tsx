import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you were looking for doesn't exist.",
  robots: { index: false, follow: true },
};

const suggestions = [
  { href: "/services", label: "Our services" },
  { href: "/admissions", label: "University admissions" },
  { href: "/visa-processing", label: "Visa processing" },
  { href: "/news", label: "News & insights" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact us" },
];

export default function NotFound() {
  return (
    <PageWrapper>
      <section className="section">
        <div className="shell-narrow text-center">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50 dark:bg-brand-950/60">
            <Compass
              className="h-8 w-8 text-brand-700 dark:text-brand-300"
              aria-hidden="true"
            />
          </span>

          <p className="eyebrow mt-8">Error 404</p>
          <h1 className="mt-3 text-(length:--text-h1) font-extrabold text-ink">
            We couldn&apos;t find that page
          </h1>
          <p className="lede mx-auto mt-5 max-w-lg">
            The link may be out of date, or the page may have moved. Here is
            where most people are heading.
          </p>

          <ul className="mt-10 flex flex-wrap justify-center gap-2.5">
            {suggestions.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  className="inline-block rounded-full border border-hairline bg-surface px-4 py-2 font-display text-sm font-semibold text-ink-muted transition-colors hover:border-brand-300 hover:text-brand-700 dark:hover:border-brand-700 dark:hover:text-brand-300"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link href="/" className="btn-primary mt-10">
            Back to the homepage
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </PageWrapper>
  );
}
