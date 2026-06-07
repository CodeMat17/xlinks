"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  GraduationCap, FileCheck, Languages, Plane, Home, Car, FileStack, Shield, Map,
} from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "University Admissions",
    description:
      "Expert guidance through application processes at our 50+ partner universities across 11 countries. We ensure your application stands out.",
    color: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-50 dark:bg-emerald-950/30",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    highlight: true,
  },
  {
    icon: FileCheck,
    title: "Visa Processing",
    description:
      "Comprehensive visa application support with 98% success rate. Includes document preparation, interview coaching, and submission assistance.",
    color: "from-teal-500 to-cyan-600",
    bg: "bg-teal-50 dark:bg-teal-950/30",
    iconColor: "text-teal-600 dark:text-teal-400",
    highlight: false,
  },
  {
    icon: Languages,
    title: "Language Training",
    description:
      "Professional IELTS, French, German, and Spanish preparation classes. Certified trainers with proven success records.",
    color: "from-green-500 to-emerald-600",
    bg: "bg-green-50 dark:bg-green-950/30",
    iconColor: "text-green-600 dark:text-green-400",
    highlight: false,
  },
  {
    icon: Plane,
    title: "Flight Booking",
    description:
      "Competitive flight deals and booking assistance for study, business, or leisure travel. Group and private travel arrangements available.",
    color: "from-cyan-500 to-teal-600",
    bg: "bg-cyan-50 dark:bg-cyan-950/30",
    iconColor: "text-cyan-600 dark:text-cyan-400",
    highlight: false,
  },
  {
    icon: Map,
    title: "Tours & Holiday Packages",
    description:
      "Custom-designed vacation, sightseeing, and group tour packages to top destinations worldwide — for individuals, families, and corporate groups.",
    color: "from-emerald-500 to-cyan-600",
    bg: "bg-emerald-50 dark:bg-emerald-950/30",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    highlight: false,
  },
  {
    icon: Home,
    title: "Accommodation & Hotel Booking",
    description:
      "Accommodation search and booking — student halls, shared apartments, and homestays, plus hotel reservations for vacations and business trips.",
    color: "from-emerald-600 to-green-500",
    bg: "bg-emerald-50 dark:bg-emerald-950/30",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    highlight: false,
  },
  {
    icon: Car,
    title: "Airport Pickup",
    description:
      "Reliable airport transfer services at your destination. Our local partners ensure a smooth, stress-free arrival experience.",
    color: "from-teal-600 to-emerald-500",
    bg: "bg-teal-50 dark:bg-teal-950/30",
    iconColor: "text-teal-600 dark:text-teal-400",
    highlight: false,
  },
  {
    icon: FileStack,
    title: "Document Authentication",
    description:
      "Professional certification and authentication of educational and personal documents for international recognition.",
    color: "from-green-600 to-teal-500",
    bg: "bg-green-50 dark:bg-green-950/30",
    iconColor: "text-green-600 dark:text-green-400",
    highlight: false,
  },
  {
    icon: Shield,
    title: "Travel Insurance",
    description:
      "Comprehensive travel and student insurance packages to keep you protected throughout your international journey.",
    color: "from-cyan-600 to-green-500",
    bg: "bg-cyan-50 dark:bg-cyan-950/30",
    iconColor: "text-cyan-600 dark:text-cyan-400",
    highlight: false,
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      className="section-padding bg-background"
      aria-labelledby="services-heading"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-3">
            What We Offer
          </span>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-4"
          >
            Premium Services,{" "}
            <span className="gradient-text">One Destination</span>
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            From first enquiry to landing abroad and your next holiday — we handle everything.
            Xlinks is your one-stop solution for all education and travel needs.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`group relative rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 cursor-default ${
                  service.highlight
                    ? "bg-gradient-to-br from-emerald-600 to-teal-700 border-transparent shadow-xl shadow-emerald-500/30 text-white"
                    : "bg-white dark:bg-gray-900/80 border-gray-100 dark:border-gray-800 hover:border-emerald-200 dark:hover:border-emerald-800 hover:shadow-lg"
                }`}
              >
                {service.highlight && (
                  <span className="absolute top-4 right-4 text-xs font-bold bg-white/20 text-white px-2.5 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    service.highlight ? "bg-white/20" : service.bg
                  }`}
                >
                  <Icon
                    className={`w-6 h-6 ${service.highlight ? "text-white" : service.iconColor}`}
                    aria-hidden="true"
                  />
                </div>
                <h3
                  className={`text-base font-bold mb-2 ${
                    service.highlight ? "text-white" : "text-gray-900 dark:text-white"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    service.highlight ? "text-white/80" : "text-gray-500 dark:text-gray-400"
                  }`}
                >
                  {service.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
