"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Globe, Building2, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Students Placed",
    description: "Successfully admitted worldwide",
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-100 dark:bg-emerald-950/50",
  },
  {
    icon: Globe,
    value: 11,
    suffix: "+",
    label: "Travel Destinations",
    description: "Study & holiday destinations covered",
    color: "text-teal-600 dark:text-teal-400",
    bg: "bg-teal-100 dark:bg-teal-950/50",
  },
  {
    icon: Building2,
    value: 50,
    suffix: "+",
    label: "Partner Universities",
    description: "Accredited institutions worldwide",
    color: "text-green-600 dark:text-green-400",
    bg: "bg-green-100 dark:bg-green-950/50",
  },
  {
    icon: TrendingUp,
    value: 98,
    suffix: "%",
    label: "Visa Success Rate",
    description: "Industry-leading approval record",
    color: "text-cyan-600 dark:text-cyan-400",
    bg: "bg-cyan-100 dark:bg-cyan-950/50",
  },
  // {
  //   icon: Trophy,
  //   value: 2,
  //   suffix: "+ yrs",
  //   label: "Years of Excellence",
  //   description: "Established September 30, 2023",
  //   color: "text-emerald-600 dark:text-emerald-400",
  //   bg: "bg-emerald-100 dark:bg-emerald-950/50",
  // },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start = Math.min(start + step, target);
      setCount(Math.floor(start));
      if (start >= target) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} aria-label={`${target}${suffix}`}>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="py-16 bg-gradient-to-b from-background via-emerald-50/30 to-background dark:via-emerald-950/20"
      aria-label="Our achievements and statistics"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group bg-white dark:bg-gray-900/80 rounded-2xl p-5 text-center shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:border-emerald-200 dark:hover:border-emerald-800 transition-all duration-300 hover:-translate-y-1${i === stats.length - 1 && stats.length % 2 !== 0 ? " col-span-2 max-w-[50%] mx-auto w-full md:col-span-1 md:max-w-none md:mx-0" : ""}`}
              >
                <div className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center mx-auto mb-3`}>
                  <Icon className={`w-6 h-6 ${stat.color}`} aria-hidden="true" />
                </div>
                <div className={`text-3xl font-black ${stat.color} mb-1`}>
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm font-bold text-gray-800 dark:text-gray-100 mb-1">{stat.label}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{stat.description}</div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
