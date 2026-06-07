"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageSquare, Search, FileCheck, Plane } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: MessageSquare,
    title: "Free Consultation",
    description:
      "Book a free consultation with our expert advisors. We assess your profile, academic background, goals, and preferred destination to create your personalised study plan.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    step: "02",
    icon: Search,
    title: "University Selection",
    description:
      "We match you with the best universities from our 50+ partner institutions based on your qualifications, budget, and career objectives. You choose, we confirm.",
    color: "from-teal-500 to-cyan-600",
  },
  {
    step: "03",
    icon: FileCheck,
    title: "Application & Visa",
    description:
      "Our team prepares and submits your application documents, offers letter follow-up, and manages your entire visa application process with a 98% success rate.",
    color: "from-green-500 to-emerald-600",
  },
  {
    step: "04",
    icon: Plane,
    title: "Fly & Thrive",
    description:
      "Whether you're relocating to study or heading off on a holiday, we arrange your flights, accommodation, airport pickup, and travel insurance — and stay in touch after you land.",
    color: "from-cyan-500 to-teal-600",
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="section-padding bg-gradient-to-b from-background to-emerald-50/50 dark:to-emerald-950/20"
      aria-labelledby="process-heading"
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
            How It Works
          </span>
          <h2
            id="process-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-4"
          >
            Your Journey in{" "}
            <span className="gradient-text">4 Simple Steps</span>
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            "The journey of a thousand miles begins with a single message." Send us a message today and
            watch your future unfold.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line */}
          <div
            className="hidden lg:block absolute top-[3.5rem] left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-emerald-200 via-teal-300 to-emerald-200 dark:from-emerald-900 dark:via-teal-800 dark:to-emerald-900"
            aria-hidden="true"
          />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:border-emerald-200 dark:hover:border-emerald-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto mb-4 shadow-lg relative z-10`}>
                  <Icon className="w-8 h-8 text-white" aria-hidden="true" />
                </div>
                <span className="text-5xl font-black text-gray-100 dark:text-gray-800 absolute top-4 right-4">
                  {step.step}
                </span>
                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-3">{step.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{step.description}</p>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold rounded-xl shadow-lg shadow-emerald-500/30 transition-all duration-200 hover:-translate-y-0.5"
          >
            Begin Your Journey Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}
