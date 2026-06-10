import type { Metadata } from "next";
import NewsImage from "@/components/NewsImage";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageWrapper from "@/components/PageWrapper";
import { ArrowLeft, Calendar } from "lucide-react";
import { articles } from "../data";
import ShareButton from "./ShareButton";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found" };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) notFound();

  const related = articles.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative pt-24 pb-12 gradient-bg overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-semibold mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to News
          </Link>
          <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
            <span className="text-white/60 text-sm flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {article.date}
            </span>
            <ShareButton title={article.title} />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            {article.title}
          </h1>
        </div>
      </section>

      {/* Article Body */}
      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-10">
            <NewsImage
              src={article.photoUrl}
              alt={article.title}
              fill
              className=""
              sizes="(max-width: 896px) 100vw, 896px"

            />
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6 font-medium">
              {article.excerpt}
            </p>
            {article.body.map((paragraph, i) => (
              <p key={i} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-5">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-gray-100 dark:border-gray-800">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:gap-3 transition-all">
              <ArrowLeft className="w-4 h-4" />
              Back to all news
            </Link>
          </div>

          {/* Related articles */}
          {related.length > 0 && (
            <div className="mt-16">
              <h2 className="text-xl font-black text-gray-900 dark:text-white mb-6">Related Articles</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/news/${rel.slug}`}
                    className="group bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-emerald-200 dark:hover:border-emerald-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                    <div className="relative aspect-video">
                      <NewsImage
                        src={rel.photoUrl}
                        alt={rel.title}
                        fill
                        className=""
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-sm font-black text-gray-900 dark:text-white leading-snug group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {rel.title}
                      </h3>
                      <p className="text-xs text-gray-400 mt-2 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {rel.date}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </PageWrapper>
  );
}
