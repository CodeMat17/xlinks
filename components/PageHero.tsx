import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { siteUrl } from "@/lib/site";

export type Crumb = { href: string; label: string };

/**
 * Shared header for every non-home page. Renders the visible breadcrumb and
 * the matching BreadcrumbList JSON-LD from one array, so the two can't drift.
 */
export default function PageHero({
  eyebrow,
  title,
  highlight,
  lede,
  crumbs = [],
  children,
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  lede?: string;
  crumbs?: Crumb[];
  children?: React.ReactNode;
}) {
  const trail: Crumb[] = [{ href: "/", label: "Home" }, ...crumbs];

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: `${siteUrl}${c.href === "/" ? "" : c.href}`,
    })),
  };

  return (
    <section className="brand-gradient relative isolate overflow-hidden">
      <div className="dot-field pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-support-500/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="shell relative pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-20">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1 text-sm">
            {trail.map((c, i) => {
              const last = i === trail.length - 1;
              return (
                <li key={c.href} className="flex items-center gap-1">
                  {i > 0 && (
                    <ChevronRight
                      className="h-3.5 w-3.5 text-white/40"
                      aria-hidden="true"
                    />
                  )}
                  {last ? (
                    <span className="font-medium text-white/70" aria-current="page">
                      {c.label}
                    </span>
                  ) : (
                    <Link
                      href={c.href}
                      className="text-white/70 transition-colors hover:text-white"
                    >
                      {c.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>

        <div className="mt-8 max-w-3xl">
          {eyebrow && (
            <p className="font-display text-(length:--text-eyebrow) font-bold tracking-[0.16em] text-brand-300 uppercase">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-3 text-(length:--text-h1) font-extrabold text-white">
            {title}
            {highlight && <span className="text-brand-300"> {highlight}</span>}
          </h1>
          {lede && (
            <p className="mt-5 text-(length:--text-fluid-lg) leading-relaxed text-white/80">
              {lede}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 leading-[0]" aria-hidden="true">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="h-8 w-full sm:h-12" focusable="false">
          <path d="M0 60h1440V28c-240-32-480 32-720 0S240 58 0 28z" className="fill-canvas" />
        </svg>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
    </section>
  );
}
