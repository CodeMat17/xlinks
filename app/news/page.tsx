import type { Metadata } from "next";
import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";
import { ArrowRight, Calendar, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "News & Updates",
  description:
    "Latest news, tips, and updates from Xlinks Education and Travel Consult — study abroad guides, visa tips, destination spotlights, and travel stories.",
};

function PhotoPlaceholder({
  label = "Article Photo",
  hint = "Replace with article image",
  className = "",
}: {
  label?: string;
  hint?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative rounded-t-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 border-b-2 border-dashed border-gray-300 dark:border-gray-700 flex items-center justify-center ${className}`}>
      <div className="text-center text-gray-400 dark:text-gray-600 p-6">
        <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mx-auto mb-2">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
        <p className="text-xs font-semibold">{label}</p>
        <p className="text-[10px] mt-0.5">{hint}</p>
      </div>
    </div>
  );
}

const articles = [
  {
    category: "Company News",
    categoryColor: "bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300",
    date: "May 2025",
    title: "Xlinks Celebrates 500+ Students Successfully Placed Abroad",
    excerpt:
      "A major milestone for our team and the hundreds of Nigerian students whose lives we have helped transform. Read how our Port Harcourt office has grown into a trusted name in international education.",
    photoLabel: "Celebration / Team Photo",
    photoHint: "800 × 500 px recommended",
  },
  {
    category: "Study Abroad",
    categoryColor: "bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300",
    date: "April 2025",
    title: "Top 5 Reasons to Study in the United Kingdom in 2025",
    excerpt:
      "The UK remains one of the world's top study destinations. From globally ranked universities to post-study work visas, here are five compelling reasons to make Britain your academic home.",
    photoLabel: "UK Campus / Landmark Photo",
    photoHint: "800 × 500 px recommended",
  },
  {
    category: "Visa Tips",
    categoryColor: "bg-amber-100 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300",
    date: "March 2025",
    title: "How to Pass Your IELTS Exam on the First Attempt",
    excerpt:
      "Our certified IELTS instructors share their proven strategies for acing all four bands — Listening, Reading, Writing, and Speaking. Start your preparation the smart way.",
    photoLabel: "Student Studying / Classroom Photo",
    photoHint: "800 × 500 px recommended",
  },
  {
    category: "Destination Spotlight",
    categoryColor: "bg-purple-100 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300",
    date: "February 2025",
    title: "Malta: The Hidden Gem for Nigerian Students in Europe",
    excerpt:
      "Affordable tuition, English-taught programmes, Schengen access, and beautiful Mediterranean weather — discover why Malta is fast becoming a favourite destination for our students.",
    photoLabel: "Malta Skyline / Campus Photo",
    photoHint: "800 × 500 px recommended",
  },
  {
    category: "Travel Stories",
    categoryColor: "bg-rose-100 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300",
    date: "January 2025",
    title: "A Family Holiday Review: Dubai & Maldives with Xlinks Travel",
    excerpt:
      "One family shares their experience booking a Dubai city tour and Maldives getaway through Xlinks. Flights, hotels, visas, and transfers — all handled seamlessly from Port Harcourt.",
    photoLabel: "Dubai / Maldives Holiday Photo",
    photoHint: "800 × 500 px recommended",
  },
  {
    category: "Study Abroad",
    categoryColor: "bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300",
    date: "December 2024",
    title: "Canada vs. Australia: Which Is Better for Nigerian Students?",
    excerpt:
      "Two of the most popular destinations among our clients — but which is the better fit for you? We break down tuition costs, work rights, visa processes, and quality of life.",
    photoLabel: "Canada / Australia Comparison Photo",
    photoHint: "800 × 500 px recommended",
  },
];

const categories = ["All", "Company News", "Study Abroad", "Visa Tips", "Destination Spotlight", "Travel Stories"];

export default function NewsPage() {
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

      {/* Featured Article */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center mb-16">
            <PhotoPlaceholder
              label="Featured Article Photo"
              hint="Recommended: 1000 × 650 px"
              className="aspect-video rounded-2xl border-2"
            />
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full mb-4">
                <Tag className="w-3 h-3" aria-hidden="true" />
                Company News
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mb-4 leading-tight">
                Xlinks Celebrates 500+ Students Successfully Placed Abroad
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                A major milestone for our team and the hundreds of Nigerian students whose lives
                we have helped transform. Read how our Port Harcourt office has grown into one of
                Nigeria&apos;s most trusted names in international education and travel.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                <Calendar className="w-4 h-4" aria-hidden="true" />
                May 2025
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold rounded-xl shadow-lg shadow-emerald-500/30 transition-all duration-200 hover:-translate-y-0.5">
                Get In Touch
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Category filter bar */}
          <div className="flex flex-wrap gap-2 mb-10" role="list" aria-label="Article categories">
            {categories.map((cat) => (
              <span
                key={cat}
                role="listitem"
                className={`px-4 py-2 rounded-full text-sm font-semibold cursor-pointer transition-colors ${
                  cat === "All"
                    ? "bg-emerald-600 text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 hover:text-emerald-600 dark:hover:text-emerald-400"
                }`}>
                {cat}
              </span>
            ))}
          </div>

          {/* Articles grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, i) => (
              <article
                key={i}
                className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-emerald-200 dark:hover:border-emerald-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <PhotoPlaceholder
                  label={article.photoLabel}
                  hint={article.photoHint}
                  className="aspect-video"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full ${article.categoryColor}`}>
                      <Tag className="w-3 h-3" aria-hidden="true" />
                      {article.category}
                    </span>
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
                    <span className="inline-flex items-center gap-1 text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:gap-2 transition-all cursor-pointer">
                      Read More <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

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
