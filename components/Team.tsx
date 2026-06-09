"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const team = [
  {
    name: "Ogechukwu Oleh",
    role: "Founder & CEO",
    bio: "Visionary leader with extensive experience in international education and student placement.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    name: "Team Member",
    role: "Head of Admissions",
    bio: "Expert in university applications across the UK, Canada, and Australia with 5+ years experience.",
    color: "from-teal-500 to-cyan-600",
  },

 
];

function MemberPhotoPlaceholder({ color }: { color: string }) {
  return (
    <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-700 flex flex-col items-center justify-center mb-4">
      {/* Gradient top strip as a colour hint */}
      <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${color}`} aria-hidden="true" />
      <svg
        className="w-10 h-10 text-gray-300 dark:text-gray-600 mb-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
      <p className="text-xs text-gray-400 dark:text-gray-600 font-medium">Profile Photo</p>
      <p className="text-[10px] text-gray-300 dark:text-gray-700">400 × 400 px</p>
    </div>
  );
}

export default function Team() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="team"
      className="section-padding bg-background"
      aria-labelledby="team-heading"
      ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14">
          <span className="inline-block text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-3">
            Our Team
          </span>
          <h2
            id="team-heading"
            className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white mb-4">
            The Experts Behind{" "}
            <span className="gradient-text">Your Success</span>
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Our dedicated team of professionals brings together decades of combined experience in
            international education, visa processing, language training, and travel planning.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white dark:bg-gray-900 rounded-2xl p-5 border border-gray-100 dark:border-gray-800 hover:border-emerald-200 dark:hover:border-emerald-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
              <MemberPhotoPlaceholder color={member.color} />
              <h3 className="text-base font-bold text-gray-900 dark:text-white">{member.name}</h3>
              <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-3">
                {member.role}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{member.bio}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
