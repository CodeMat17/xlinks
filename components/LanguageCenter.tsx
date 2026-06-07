"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen, Award, Clock, Users } from "lucide-react";

const courses = [
  {
    flag: "🇬🇧",
    name: "IELTS Preparation",
    description:
      "Comprehensive IELTS training covering all four bands — Reading, Writing, Listening, and Speaking. Achieve your target band score with our expert tutors.",
    features: ["All 4 bands covered", "Mock exams included", "Band 6.5+ guarantee focus", "Flexible schedules"],
    level: "Beginner to Advanced",
    color: "border-blue-200 dark:border-blue-900/50",
    iconBg: "bg-blue-50 dark:bg-blue-950/30",
    iconColor: "text-blue-600 dark:text-blue-400",
    badge: "Most Popular",
    badgeColor: "bg-blue-600",
  },
  {
    flag: "🇫🇷",
    name: "French Language",
    description:
      "Learn French from absolute beginners to advanced proficiency. Ideal for students planning to study in France, Canada (Québec), or French-speaking African countries.",
    features: ["DELF/DALF exam prep", "Conversational fluency", "Grammar mastery", "Cultural insights"],
    level: "A1 – C1",
    color: "border-indigo-200 dark:border-indigo-900/50",
    iconBg: "bg-indigo-50 dark:bg-indigo-950/30",
    iconColor: "text-indigo-600 dark:text-indigo-400",
    badge: null,
    badgeColor: "",
  },
  {
    flag: "🇩🇪",
    name: "German Language",
    description:
      "Master German for study in Austria, Germany, or Switzerland. Perfect for those eyeing technical universities and scholarship opportunities in DACH countries.",
    features: ["Goethe exam prep", "Technical vocabulary", "Business German", "Study permit support"],
    level: "A1 – B2",
    color: "border-yellow-200 dark:border-yellow-900/50",
    iconBg: "bg-yellow-50 dark:bg-yellow-950/30",
    iconColor: "text-yellow-600 dark:text-yellow-400",
    badge: "In Demand",
    badgeColor: "bg-yellow-600",
  },
  {
    flag: "🇪🇸",
    name: "Spanish Language",
    description:
      "Learn Spanish — the world's second most spoken language. Open doors to Spain, Latin America, and a global network of 500 million native speakers.",
    features: ["DELE exam preparation", "Latin American Spanish", "Conversational practice", "Online & in-person"],
    level: "A1 – B2",
    color: "border-orange-200 dark:border-orange-900/50",
    iconBg: "bg-orange-50 dark:bg-orange-950/30",
    iconColor: "text-orange-600 dark:text-orange-400",
    badge: null,
    badgeColor: "",
  },
];

export default function LanguageCenter() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="language"
      className="section-padding bg-gradient-to-b from-emerald-50/50 to-background dark:from-emerald-950/20 dark:to-background"
      aria-labelledby="language-heading"
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
            Language Center
          </span>
          <h2
            id="language-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-4"
          >
            Speak the World's{" "}
            <span className="gradient-text">Languages</span>
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Our certified language instructors prepare you for international exams, study abroad
            requirements, and real-world communication while traveling. Classes available in-person and online.
          </p>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 p-6 bg-gradient-to-r from-emerald-600 to-teal-700 rounded-2xl"
        >
          {[
            { icon: BookOpen, label: "4 Languages", sub: "Available now" },
            { icon: Users, label: "300+ Graduates", sub: "Passed exams" },
            { icon: Award, label: "Certified Tutors", sub: "Expert instructors" },
            { icon: Clock, label: "Flexible Hours", sub: "Morning & evening" },
          ].map(({ icon: Icon, label, sub }, i) => (
            <div key={i} className="text-center text-white">
              <Icon className="w-6 h-6 mx-auto mb-2 text-emerald-200" aria-hidden="true" />
              <p className="font-bold text-base">{label}</p>
              <p className="text-xs text-emerald-200">{sub}</p>
            </div>
          ))}
        </motion.div>

        {/* Course cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {courses.map((course, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className={`bg-white dark:bg-gray-900 rounded-2xl p-6 border-2 ${course.color} hover:shadow-xl hover:border-emerald-400 dark:hover:border-emerald-600 transition-all duration-300 hover:-translate-y-1 relative`}
            >
              {course.badge && (
                <span className={`absolute top-4 right-4 text-xs font-bold text-white px-2.5 py-1 rounded-full ${course.badgeColor}`}>
                  {course.badge}
                </span>
              )}
              <div className="text-4xl mb-3" role="img" aria-label={`${course.name} flag`}>
                {course.flag}
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">{course.name}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">{course.description}</p>
              <ul className="space-y-1.5 mb-4" aria-label={`${course.name} features`}>
                {course.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="pt-3 border-t border-gray-100 dark:border-gray-800">
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  Level: {course.level}
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center mt-10"
        >
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold rounded-xl shadow-lg shadow-emerald-500/30 transition-all duration-200 hover:-translate-y-0.5"
          >
            Enrol in a Language Course
          </a>
        </motion.div>
      </div>
    </section>
  );
}
