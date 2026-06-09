"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";
import NewsImage from "@/components/NewsImage";
import { ArrowRight, Calendar, Search } from "lucide-react";
import { articles } from "./data";



const PAGE_SIZE = 12;

export default function NewsPage() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return articles;
    return articles.filter((a) => a.title.toLowerCase().includes(q));
  }, [search]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function handleSearch(value: string) {
    setSearch(value);
    setPage(1);
  }

  return (
    <PageWrapper>
      {/* Page Hero */}
      <section className="relative pt-24 pb-16 gradient-bg overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sm font-bold text-emerald-300 uppercase tracking-widest mb-3">
            Latest from Xlinks
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-5 leading-tight">
            News &amp; <span className="text-emerald-300">Updates</span>
          </h1>
          <p className="text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
            Study abroad guides, visa tips, destination spotlights, and travel stories — stay
            informed on everything that matters for your international journey.
          </p>
        </div>
      </section>

      {/* Articles Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">

          {/* Search */}
          <div className="relative max-w-xl mx-auto mb-10">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" aria-hidden="true" />
            <input
              type="search"
              placeholder="Search news by title…"
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm shadow-sm"
            />
          </div>

          {/* Articles grid */}
          {paginated.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginated.map((article, i) => (
                <article
                  key={article.slug}
                  className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-emerald-200 dark:hover:border-emerald-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  <div className="relative aspect-video rounded-t-2xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                    <NewsImage
                      src={article.photoUrl}
                      alt={article.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3" aria-hidden="true" />
                        {article.date}
                      </span>
                    </div>
                    <h3 className="text-base font-black text-gray-900 dark:text-white mb-3 leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                      <Link
                        href={`/news/${article.slug}`}
                        className="inline-flex items-center gap-1 text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:gap-2 transition-all">
                        Read More <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-gray-400 dark:text-gray-600">
              <Search className="w-10 h-10 mx-auto mb-3 opacity-40" />
              <p className="text-lg font-semibold">No articles found for &ldquo;{search}&rdquo;</p>
              <p className="text-sm mt-1">Try a different search term.</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="px-4 py-2 rounded-lg text-sm font-semibold border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 hover:text-emerald-600 dark:hover:text-emerald-400 disabled:opacity-40 disabled:cursor-not-allowed transition-colors">
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  onClick={() => setPage(n)}
                  className={`w-10 h-10 rounded-lg text-sm font-bold transition-colors ${
                    n === page
                      ? "bg-emerald-600 text-white shadow-md"
                      : "border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 hover:text-emerald-600 dark:hover:text-emerald-400"
                  }`}>
                  {n}
                </button>
              ))}
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="px-4 py-2 rounded-lg text-sm font-semibold border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 hover:text-emerald-600 dark:hover:text-emerald-400 disabled:opacity-40 disabled:cursor-not-allowed transition-colors">
                Next
              </button>
            </div>
          )}

          {/* CTA */}
          <div className="text-center mt-14 py-12 px-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-3xl border border-emerald-100 dark:border-emerald-900/50">
            <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-3">
              Ready to Start Your Own Journey?
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-md mx-auto">
              Get a free consultation with one of our expert advisors today.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold rounded-xl shadow-lg shadow-emerald-500/30 transition-all duration-200 hover:-translate-y-0.5">
              Book a Free Consultation
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
