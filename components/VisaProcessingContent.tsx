"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FileCheck,
  Plane,
  MapPin,
  ShieldCheck,
  CheckCircle,
  ClipboardList,
  MessageSquare,
  Send,
  Star,
} from "lucide-react";
import Link from "next/link";

const visaTypes = [
  {
    icon: FileCheck,
    title: "Study Visa",
    description:
      "Professional guidance for student visa applications. We help you prepare accurate documentation, meet embassy requirements, and maximise your chances of approval.",
    bg: "bg-emerald-50 dark:bg-emerald-950/30",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    highlight: true,
  },
  {
    icon: MapPin,
    title: "Tourist / Visit Visa",
    description:
      "Expert assistance with tourist and visit visa applications — documentation guidance, application processes, and clarity on embassy requirements.",
    bg: "bg-teal-50 dark:bg-teal-950/30",
    iconColor: "text-teal-600 dark:text-teal-400",
    highlight: false,
  },
  {
    icon: Plane,
    title: "Travel & Relocation Support",
    description:
      "Pre-departure briefings, travel documentation guidance, and basic relocation tips so you arrive at your destination fully prepared.",
    bg: "bg-green-50 dark:bg-green-950/30",
    iconColor: "text-green-600 dark:text-green-400",
    highlight: false,
  },
];

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Initial Assessment",
    description:
      "We review your travel or study purpose, destination country, and personal documents to determine the right visa category for you.",
  },
  {
    icon: ClipboardList,
    step: "02",
    title: "Document Checklist",
    description:
      "We provide a tailored checklist of every document required by the embassy or consulate for your specific visa type.",
  },
  {
    icon: FileCheck,
    step: "03",
    title: "Document Preparation",
    description:
      "Our team reviews and helps you prepare all supporting documents — financial statements, acceptance letters, itineraries, and more.",
  },
  {
    icon: ShieldCheck,
    step: "04",
    title: "Application Review",
    description:
      "Before submission we conduct a thorough compliance check to catch errors or missing items that could cause delays or refusals.",
  },
  {
    icon: Send,
    step: "05",
    title: "Submission & Tracking",
    description:
      "We guide you through the submission process and follow up on your application status so nothing falls through the cracks.",
  },
  {
    icon: Star,
    step: "06",
    title: "Pre-Departure Briefing",
    description:
      "Once approved, we provide a pre-departure briefing — travel tips, what to expect at the border, and key contacts at your destination.",
  },
];

const documents = [
  "Valid international passport (min. 6 months validity)",
  "Completed visa application form",
  "Recent passport-size photographs",
  "University acceptance letter (study visa)",
  "Proof of financial means / bank statements",
  "Travel itinerary or flight booking",
  "Accommodation confirmation",
  "English proficiency certificate (where required)",
];

const stats = [
  { value: "98%", label: "Visa Success Rate" },
  { value: "11+", label: "Countries Covered" },
  { value: "500+", label: "Visas Processed" },
  { value: "24h", label: "Response Time" },
];

export default function VisaProcessingContent() {
  const stepsRef = useRef(null);
  const docsRef = useRef(null);
  const stepsInView = useInView(stepsRef, { once: true, margin: "-80px" });
  const docsInView = useInView(docsRef, { once: true, margin: "-80px" });

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-16 gradient-bg overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <span className="inline-block text-sm font-bold text-emerald-300 uppercase tracking-widest mb-3">
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-5 leading-tight">
              Visa <span className="text-emerald-300">Processing</span>
            </h1>
            <p className="text-lg text-white/75 max-w-2xl mx-auto leading-relaxed mb-8">
              Professional visa support with a{" "}
              <span className="text-emerald-300 font-bold">98% success rate</span>. Study
              visas, tourist visas, and full pre-departure guidance — handled by experts.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-emerald-700 font-bold shadow-lg hover:bg-emerald-50 transition-colors"
            >
              Apply Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <p className="text-3xl font-black text-emerald-600 dark:text-emerald-400">
                  {s.value}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visa Types */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-3">
              Visa Types
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white">
              We Handle <span className="gradient-text">All Visa Categories</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {visaTypes.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`rounded-2xl p-6 border transition-all hover:-translate-y-1 ${
                    v.highlight
                      ? "bg-gradient-to-br from-emerald-600 to-teal-700 border-transparent shadow-xl shadow-emerald-500/30 text-white"
                      : "bg-white dark:bg-gray-900/80 border-gray-100 dark:border-gray-800 hover:border-emerald-200 dark:hover:border-emerald-800 hover:shadow-lg"
                  }`}
                >
                  {v.highlight && (
                    <span className="inline-block text-xs font-bold bg-white/20 text-white px-2.5 py-1 rounded-full mb-3">
                      Most Requested
                    </span>
                  )}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                      v.highlight ? "bg-white/20" : v.bg
                    }`}
                  >
                    <Icon
                      className={`w-6 h-6 ${v.highlight ? "text-white" : v.iconColor}`}
                      aria-hidden="true"
                    />
                  </div>
                  <h3
                    className={`text-base font-bold mb-2 ${
                      v.highlight ? "text-white" : "text-gray-900 dark:text-white"
                    }`}
                  >
                    {v.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      v.highlight ? "text-white/80" : "text-gray-500 dark:text-gray-400"
                    }`}
                  >
                    {v.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section
        ref={stepsRef}
        className="section-padding bg-gray-50 dark:bg-gray-900/50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-3">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white">
              Our <span className="gradient-text">Visa Process</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 28 }}
                  animate={stepsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.09 }}
                  className="relative rounded-2xl p-6 bg-white dark:bg-gray-900/80 border border-gray-100 dark:border-gray-800 hover:border-emerald-200 dark:hover:border-emerald-800 hover:shadow-lg transition-all"
                >
                  <span className="absolute top-5 right-5 text-3xl font-black text-emerald-100 dark:text-emerald-900 select-none">
                    {s.step}
                  </span>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 bg-teal-50 dark:bg-teal-950/30">
                    <Icon
                      className="w-5 h-5 text-teal-600 dark:text-teal-400"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {s.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Documents Required */}
      <section ref={docsRef} className="section-padding bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={docsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="rounded-2xl p-8 sm:p-10 bg-gradient-to-br from-teal-600 to-emerald-700 text-white shadow-xl shadow-teal-500/20"
          >
            <h2 className="text-2xl sm:text-3xl font-black mb-2">
              Common Documents Required
            </h2>
            <p className="text-white/70 mb-7 text-sm">
              Exact requirements vary by country. We'll give you a personalised checklist.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {documents.map((doc, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <CheckCircle
                    className="w-5 h-5 shrink-0 text-emerald-300 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-teal-700 font-bold hover:bg-teal-50 transition-colors shadow-lg"
              >
                Get a Free Visa Assessment
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
