import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import PageHero from "@/components/PageHero";
import ArticleCover from "@/components/ArticleCover";
import { articles } from "./data";
import { siteName, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "News & Insights",
  description:
    "Study abroad guides, visa advice and travel updates from Xlinks Educational and Travel Consult — scholarships, IELTS preparation, country comparisons and destination guides for Nigerian students.",
  alternates: { canonical: "/news" },
};

/**
 * Server component. The previous version was `"use client"`, which meant the
 * route could not export metadata at all — it inherited the site-wide title
 * and description. It also paginated 13 articles behind client-side state,
 * hiding five of them from crawlers entirely. Everything now renders in HTML.
 */
const blogLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${siteUrl}/news#blog`,
  name: `${siteName} — News & Insights`,
  url: `${siteUrl}/news`,
  publisher: { "@id": `${siteUrl}/#organization` },
  blogPost: articles.map((a) => ({
    "@type": "BlogPosting",
    headline: a.title,
    description: a.excerpt,
    datePublished: a.isoDate,
    url: `${siteUrl}/news/${a.slug}`,
    author: { "@id": `${siteUrl}/#organization` },
  })),
};

export default function NewsPage() {
  const [lead, ...rest] = articles;

  return (
    <PageWrapper>
      <PageHero
        eyebrow="News & insights"
        title="Guides, updates and"
        highlight="honest advice"
        lede="What we've learned placing students abroad — country comparisons, visa guidance, scholarship rounds and travel notes."
        crumbs={[{ href: "/news", label: "News" }]}
      />

      <section className="section" aria-label="All articles">
        <div className="shell">
          {/* Lead article */}
          <Link
            href={`/news/${lead.slug}`}
            className="card-interactive group grid overflow-hidden lg:grid-cols-2"
          >
            <ArticleCover
              photoUrl={lead.photoUrl}
              topic={lead.topic}
              title={lead.title}
              sizes="(min-width: 1024px) 50vw, 92vw"
              priority
              className="aspect-video lg:aspect-auto lg:h-full"
            />
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              <span className="font-display text-2xs font-bold tracking-[0.14em] text-brand-700 uppercase dark:text-brand-300">
                {lead.topic}
              </span>
              <h2 className="mt-3 text-(length:--text-h3) font-extrabold text-ink">
                {lead.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {lead.excerpt}
              </p>
              <p className="mt-5 flex items-center gap-4 text-sm text-ink-subtle">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                  <time dateTime={lead.isoDate}>{lead.date}</time>
                </span>
                <span className="flex items-center gap-1.5 font-display font-bold text-brand-700 dark:text-brand-300">
                  Read article
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </p>
            </div>
          </Link>

          {/* The rest */}
          <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((article) => (
              <li key={article.slug} className="reveal">
                <Link
                  href={`/news/${article.slug}`}
                  className="card-interactive group flex h-full flex-col overflow-hidden"
                >
                  <ArticleCover
                    photoUrl={article.photoUrl}
                    topic={article.topic}
                    title={article.title}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 92vw"
                    className="aspect-video w-full"
                  />
                  <div className="flex flex-1 flex-col p-5">
                    <span className="font-display text-2xs font-bold tracking-[0.14em] text-brand-700 uppercase dark:text-brand-300">
                      {article.topic}
                    </span>
                    <h2 className="mt-2 font-display text-base leading-snug font-bold text-ink">
                      {article.title}
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-subtle">
                      {article.excerpt}
                    </p>
                    <p className="mt-4 flex items-center gap-1.5 text-sm text-ink-subtle">
                      <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                      <time dateTime={article.isoDate}>{article.date}</time>
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogLd) }}
      />
    </PageWrapper>
  );
}
