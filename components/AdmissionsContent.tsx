"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  GraduationCap,
  FileText,
  BookOpen,
  Award,
  CheckCircle,
  Users,
  Lightbulb,
  ClipboardList,
} from "lucide-react";
import Link from "next/link";

const programs = [
  {
    icon: BookOpen,
    title: "Undergraduate Programs",
    description:
      "Start your academic journey with our curated selection of bachelor's degree programs across 50+ partner universities in 11 countries.",
    bg: "bg-emerald-50 dark:bg-emerald-950/30",
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
  {
    icon: Award,
    title: "Postgraduate Programs",
    description:
      "Advance your career with Masters and PhD programs tailored to your field of expertise. We match you with the right institution and course.",
    bg: "bg-teal-50 dark:bg-teal-950/30",
    iconColor: "text-teal-600 dark:text-teal-400",
  },
  {
    icon: GraduationCap,
    title: "Diploma & Foundation",
    description:
      "Pathway and foundation programs designed to bridge the gap and prepare you for full degree entry at top universities.",
    bg: "bg-green-50 dark:bg-green-950/30",
    iconColor: "text-green-600 dark:text-green-400",
  },
];

const steps = [
  {
    icon: Lightbulb,
    step: "01",
    title: "Free Consultation",
    description:
      "We assess your academic background, interests, and career goals to identify the best-fit universities and programs for you.",
  },
  {
    icon: ClipboardList,
    step: "02",
    title: "Course & University Selection",
    description:
      "Our advisors shortlist programs and institutions that match your profile, budget, and preferred destination country.",
  },
  {
    icon: FileText,
    step: "03",
    title: "Documentation & SOP",
    description:
      "We guide you in preparing transcripts, references, English proficiency scores (IELTS/equivalent), and a compelling Statement of Purpose.",
  },
  {
    icon: Users,
    step: "04",
    title: "Application Submission",
    description:
      "We handle the full application process — form filling, document review, compliance checks, and timely submission to your chosen institutions.",
  },
  {
    icon: CheckCircle,
    step: "05",
    title: "Offer & Follow-Up",
    description:
      "After submission we track your application, assist with interview preparation if required, and help you evaluate and accept your offer.",
  },
  {
    icon: Award,
    step: "06",
    title: "Scholarship Guidance",
    description:
      "We identify scholarship and funding opportunities to reduce the financial burden of your studies abroad.",
  },
];

const requirements = [
  "Academic transcripts and certificates",
  "English proficiency scores (IELTS, TOEFL, or equivalent)",
  "Personal statement / Statement of Purpose",
  "Letters of recommendation",
  "Valid international passport",
  "Completed application forms",
];

export default function AdmissionsContent() {
  const heroRef = useRef(null);
  const stepsRef = useRef(null);
  const reqRef = useRef(null);
  const stepsInView = useInView(stepsRef, { once: true, margin: "-80px" });
  const reqInView = useInView(reqRef, { once: true, margin: "-80px" });

  return (
    <>
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative pt-24 pb-16 gradient-bg overflow-hidden"
      >
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
              University{" "}
              <span className="text-emerald-300">Admissions</span>
            </h1>
            <p className="text-lg text-white/75 max-w-2xl mx-auto leading-relaxed mb-8">
              From choosing the right program to receiving your offer letter —
              we guide you every step of the way to your dream university.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-emerald-700 font-bold shadow-lg hover:bg-emerald-50 transition-colors"
            >
              Start Your Application
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Programs */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-3">
              Programs We Cover
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white">
              Find Your Perfect{" "}
              <span className="gradient-text">Academic Path</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {programs.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-2xl p-6 bg-white dark:bg-gray-900/80 border border-gray-100 dark:border-gray-800 hover:border-emerald-200 dark:hover:border-emerald-800 hover:shadow-lg transition-all"
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${p.bg}`}
                  >
                    <Icon className={`w-6 h-6 ${p.iconColor}`} aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {p.description}
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
              Our <span className="gradient-text">Admissions Process</span>
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
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 bg-emerald-50 dark:bg-emerald-950/30">
                    <Icon
                      className="w-5 h-5 text-emerald-600 dark:text-emerald-400"
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

      {/* Requirements */}
      <section ref={reqRef} className="section-padding bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={reqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="rounded-2xl p-8 sm:p-10 bg-gradient-to-br from-emerald-600 to-teal-700 text-white shadow-xl shadow-emerald-500/20"
          >
            <h2 className="text-2xl sm:text-3xl font-black mb-2">
              Typical Requirements
            </h2>
            <p className="text-white/70 mb-7 text-sm">
              Documents most universities require. We help you prepare every one.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {requirements.map((req, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <CheckCircle
                    className="w-5 h-5 shrink-0 text-emerald-300 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-emerald-700 font-bold hover:bg-emerald-50 transition-colors shadow-lg"
              >
                Book a Free Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
