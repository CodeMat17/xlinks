"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const countries = [
  {
    flag: "🇬🇧",
    name: "United Kingdom",
    universities: "200+",
    highlight: "Top Russell Group Universities",
    color: "from-blue-600 to-blue-800",
    popular: true,
  },
  {
    flag: "🇨🇦",
    name: "Canada",
    universities: "180+",
    highlight: "Post-Study Work Permits",
    color: "from-red-600 to-red-800",
    popular: true,
  },
  {
    flag: "🇺🇸",
    name: "United States",
    universities: "250+",
    highlight: "World-Renowned Ivy League",
    color: "from-blue-700 to-red-700",
    popular: true,
  },
  {
    flag: "🇦🇺",
    name: "Australia",
    universities: "150+",
    highlight: "Quality of Life & Work Rights",
    color: "from-yellow-600 to-red-700",
    popular: true,
  },
  {
    flag: "🇮🇪",
    name: "Ireland",
    universities: "30+",
    highlight: "English-Speaking EU Country",
    color: "from-green-700 to-green-900",
    popular: false,
  },
  {
    flag: "🇲🇹",
    name: "Malta",
    universities: "20+",
    highlight: "EU Citizenship Gateway",
    color: "from-red-700 to-gray-800",
    popular: false,
  },
  {
    flag: "🇫🇮",
    name: "Finland",
    universities: "25+",
    highlight: "Top-Ranked Education System",
    color: "from-blue-600 to-white/50",
    popular: false,
  },
  {
    flag: "🇦🇹",
    name: "Austria",
    universities: "20+",
    highlight: "Heart of Europe",
    color: "from-red-700 to-gray-700",
    popular: false,
  },
  {
    flag: "🇨🇳",
    name: "China",
    universities: "100+",
    highlight: "Scholarships Available",
    color: "from-red-600 to-yellow-600",
    popular: false,
  },
  {
    flag: "🇨🇾",
    name: "Cyprus",
    universities: "15+",
    highlight: "Affordable European Education",
    color: "from-orange-500 to-yellow-600",
    popular: false,
  },
  {
    flag: "🇳🇿",
    name: "New Zealand",
    universities: "20+",
    highlight: "Safe & Welcoming Environment",
    color: "from-teal-600 to-blue-700",
    popular: false,
  },
];

export default function Destinations() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="destinations"
      className="section-padding bg-gradient-to-b from-background to-emerald-50/50 dark:to-emerald-950/20"
      aria-labelledby="destinations-heading"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-3">
            Study Destinations
          </span>
          <h2
            id="destinations-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-4"
          >
            Explore <span className="gradient-text">11 Countries</span>
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            We have partner universities and placement expertise across these world-class destinations.
            Your dream country is just a consultation away.
          </p>
        </motion.div>

        {/* Popular destinations */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
          {countries.filter((c) => c.popular).map((country, i) => (
            <motion.article
              key={country.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-800 to-teal-900 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-6 relative z-10">
                <span className="text-5xl block mb-3 text-white" role="img" aria-label={`Flag of ${country.name}`}>
                  {country.flag}
                </span>
                <h3 className="text-lg font-black text-white/90 mb-1">{country.name}</h3>
                <p className="text-emerald-200 text-sm font-medium mb-3">{country.highlight}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/60">{country.universities} Universities</span>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-300 group-hover:gap-2 transition-all">
                    Explore <ArrowRight className="w-3 h-3" aria-hidden="true" />
                  </span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" aria-hidden="true" />
            </motion.article>
          ))}
        </div>

        {/* Other destinations */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
          {countries.filter((c) => !c.popular).map((country, i) => (
            <motion.article
              key={country.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
              className="group bg-white dark:bg-gray-900 rounded-xl p-4 text-center border border-gray-100 dark:border-gray-800 hover:border-emerald-200 dark:hover:border-emerald-800 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
            >
              <span className="text-3xl block mb-2" role="img" aria-label={`Flag of ${country.name}`}>
                {country.flag}
              </span>
              <p className="text-xs font-bold text-gray-800 dark:text-gray-200">{country.name}</p>
              <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-1">{country.universities}</p>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center mt-10"
        >
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold rounded-xl shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-200 hover:-translate-y-0.5"
          >
            Find Your Destination
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
