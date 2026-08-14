import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, ChevronRight } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import ArticleCover from "@/components/ArticleCover";
import { articles } from "../data";
import ShareButton from "./ShareButton";
import { siteName, siteUrl } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return { title: "Article not found" };

  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/news/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      url: `${siteUrl}/news/${article.slug}`,
      publishedTime: article.isoDate,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
    },
  };
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) notFound();

  const related = articles.filter((a) => a.slug !== slug).slice(0, 3);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${siteUrl}/news/${article.slug}#article`,
    headline: article.title,
    description: article.excerpt,
    datePublished: article.isoDate,
    dateModified: article.isoDate,
    articleSection: article.topic,
    inLanguage: "en-NG",
    author: { "@id": `${siteUrl}/#organization` },
    publisher: { "@id": `${siteUrl}/#organization` },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/news/${article.slug}`,
    },
    isPartOf: { "@id": `${siteUrl}/news#blog` },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "News", item: `${siteUrl}/news` },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `${siteUrl}/news/${article.slug}`,
      },
    ],
  };

  return (
    <PageWrapper>
      {/* ---------- Header ---------- */}
      <header className="brand-gradient relative isolate overflow-hidden">
        <div className="dot-field pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />

        <div className="shell relative pt-28 pb-14 sm:pt-32">
          <nav aria-label="Breadcrumb" className="mx-auto max-w-3xl">
            <ol className="flex flex-wrap items-center gap-1 text-sm">
              <li>
                <Link href="/" className="text-white/70 transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-1">
                <ChevronRight className="h-3.5 w-3.5 text-white/40" aria-hidden="true" />
                <Link href="/news" className="text-white/70 transition-colors hover:text-white">
                  News
                </Link>
              </li>
            </ol>
          </nav>

          <div className="mx-auto mt-8 max-w-3xl">
            <p className="font-display text-2xs font-bold tracking-[0.16em] text-brand-300 uppercase">
              {article.topic}
            </p>
            <h1 className="mt-3 text-(length:--text-h1) font-extrabold text-white">
              {article.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <p className="flex items-center gap-1.5 text-sm text-white/70">
                <Calendar className="h-4 w-4" aria-hidden="true" />
                <time dateTime={article.isoDate}>{article.date}</time>
              </p>
              <ShareButton title={article.title} />
            </div>
          </div>
        </div>
      </header>

      {/* ---------- Body ---------- */}
      <article className="section">
        <div className="shell">
          <div className="mx-auto max-w-3xl">
            <ArticleCover
              photoUrl={article.photoUrl}
              topic={article.topic}
              title={article.title}
              sizes="(min-width: 768px) 48rem, 92vw"
              priority
              className="aspect-video w-full rounded-2xl"
            />

            <p className="mt-10 text-(length:--text-fluid-lg) leading-relaxed font-medium text-ink">
              {article.excerpt}
            </p>

            <div className="mt-6 space-y-5">
              {article.body.map((paragraph, i) => (
                <p key={i} className="leading-relaxed text-ink-muted">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Inline CTA */}
            <aside className="card mt-12 p-6 sm:p-8">
              <h2 className="font-display text-base font-bold text-ink">
                Thinking about making the move?
              </h2>
              <p className="mt-2 text-sm text-ink-muted">
                Talk it through with an adviser at {siteName}. The first
                consultation is free and there is no obligation.
              </p>
              <Link href="/contact" className="btn-primary mt-5">
                Book a free consultation
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </aside>

            <p className="mt-10 border-t border-hairline pt-8">
              <Link
                href="/news"
                className="inline-flex items-center gap-2 font-display text-sm font-bold text-brand-700 dark:text-brand-300"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Back to all news
              </Link>
            </p>
          </div>
        </div>
      </article>

      {/* ---------- Related ---------- */}
      {related.length > 0 && (
        <section className="section bg-surface-raised" aria-labelledby="related-heading">
          <div className="shell">
            <h2
              id="related-heading"
              className="font-display text-(length:--text-h3) font-extrabold text-ink"
            >
              Related articles
            </h2>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((rel) => (
                <li key={rel.slug}>
                  <Link
                    href={`/news/${rel.slug}`}
                    className="card-interactive group flex h-full flex-col overflow-hidden"
                  >
                    <ArticleCover
                      photoUrl={rel.photoUrl}
                      topic={rel.topic}
                      title={rel.title}
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 92vw"
                      className="aspect-video w-full"
                    />
                    <div className="flex flex-1 flex-col p-5">
                      <span className="font-display text-2xs font-bold tracking-[0.14em] text-brand-700 uppercase dark:text-brand-300">
                        {rel.topic}
                      </span>
                      <h3 className="mt-2 font-display text-sm leading-snug font-bold text-ink">
                        {rel.title}
                      </h3>
                      <p className="mt-3 flex items-center gap-1.5 text-sm text-ink-subtle">
                        <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                        <time dateTime={rel.isoDate}>{rel.date}</time>
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
    </PageWrapper>
  );
}
