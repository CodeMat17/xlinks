"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, Target, Eye, Heart } from "lucide-react";

const values = [
  { icon: Target, label: "Mission", text: "To bridge the gap between ambitious Nigerians and world-class institutions and destinations by providing honest, expert, and affordable study abroad and travel consultancy." },
  { icon: Eye, label: "Vision", text: "To be West Africa's most trusted education and travel agency — transforming lives one journey at a time through quality international placements and unforgettable travel experiences." },
  { icon: Heart, label: "Values", text: "Integrity, excellence, customer-first service, and continuous support from first enquiry to landing abroad and beyond." },
];

const highlights = [
  "Located at No. 35 Ndele Street, Bishop House, D-Line, Port Harcourt",
  "Registered and licensed educational and travel consultancy firm",
  "Partnerships with 50+ accredited universities worldwide",
  "Dedicated post-visa support, relocation, and travel assistance",
  "In-house language center for IELTS, French, German & Spanish",
  "Tailored holiday, tour, and travel packages for individuals and groups",
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="section-padding bg-gradient-to-b from-emerald-50/50 to-background dark:from-emerald-950/20 dark:to-background"
      aria-labelledby="about-heading"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Main image card */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-600 to-teal-700 aspect-4/4 shadow-2xl shadow-emerald-500/20">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-white text-center">
                <div className="text-7xl mb-4 flex items-center gap-2" aria-hidden="true"><span>🎓</span><span>✈️</span></div>
                <p className="text-2xl font-black">Established</p>
                <p className="text-5xl font-black text-emerald-200">2023</p>
                <p className="text-sm text-white/70 mt-2">September 30, 2023</p>
                <p className="text-base font-semibold text-white/90 mt-4 max-w-xs leading-relaxed">
                  Nigeria&apos;s premier study abroad and travel agency, helping dreams take flight.
                </p>
              </div>
              {/* Decorative dots */}
              <div className="absolute top-4 right-4 grid grid-cols-4 gap-1" aria-hidden="true">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/20" />
                ))}
              </div>
            </div>

            {/* Value cards */}
            {/* <div className="grid grid-cols-3 gap-3 mt-4">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <div
                    key={i}
                    className="bg-white dark:bg-gray-900 rounded-xl p-4 text-center border border-emerald-100 dark:border-emerald-900/50 shadow-sm"
                  >
                    <Icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400 mx-auto mb-2" aria-hidden="true" />
                    <p className="text-xs font-bold text-gray-700 dark:text-gray-200">{v.label}</p>
                  </div>
                );
              })}
            </div> */}
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span className="inline-block text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-3">
              About Us
            </span>
            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white mb-6 leading-tight"
            >
              Nigeria&apos;s Leading{" "}
              <span className="gradient-text">Education &amp; Travel Partner</span>
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mb-5 leading-relaxed">
              Xlinks Educational &amp; Travel Consult is a leading study abroad and travel agency in
              Nigeria. We are your one-stop solution for everything you need to study, explore, and
              travel internationally — from securing admission to booking your next holiday.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              We help students pursue their dreams of studying in the{" "}
              <strong className="text-emerald-700 dark:text-emerald-400">United Kingdom, United States,
              Canada, Ireland, Australia, Malta, Finland, Austria, China, Cyprus, and New Zealand</strong>,
              and we help travelers plan seamless flights, holidays, and tour packages to destinations
              around the world. Our commitment doesn&apos;t end at the visa or the booking — we follow up
              with every client through their entire journey.
            </p>

            {/* Highlights */}
            <ul className="space-y-3 mb-8" aria-label="Key highlights about Xlinks">
              {highlights.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-600 dark:text-gray-300">{point}</span>
                </li>
              ))}
            </ul>

            {/* Mission/Vision/Values */}
            <div className="space-y-4">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/50">
                    <div className="w-9 h-9 rounded-lg bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-800 dark:text-gray-100 mb-0.5">{v.label}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{v.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
