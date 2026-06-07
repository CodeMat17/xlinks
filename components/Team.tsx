"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Mail } from "lucide-react";

const team = [
  {
    name: "Team Member",
    role: "Founder & CEO",
    initials: "XL",
    bio: "Visionary leader with extensive experience in international education and student placement.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    name: "Team Member",
    role: "Head of Admissions",
    initials: "HA",
    bio: "Expert in university applications across the UK, Canada, and Australia with 5+ years experience.",
    color: "from-teal-500 to-cyan-600",
  },
  {
    name: "Team Member",
    role: "Visa Processing Lead",
    initials: "VP",
    bio: "Certified immigration specialist with a track record of 98% visa approval rates.",
    color: "from-green-500 to-emerald-600",
  },
  {
    name: "Team Member",
    role: "Language Trainer",
    initials: "LT",
    bio: "Certified IELTS and French language instructor committed to students achieving their target scores.",
    color: "from-cyan-500 to-teal-600",
  },
  {
    name: "Team Member",
    role: "Travel & Tours Lead",
    initials: "TT",
    bio: "Plans flights, holidays, and tour packages with an eye for detail, helping clients explore the world stress-free.",
    color: "from-emerald-600 to-green-500",
  },
];

export default function Team() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="team"
      className="section-padding bg-background"
      aria-labelledby="team-heading"
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
            Our Team
          </span>
          <h2
            id="team-heading"
            className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white mb-4"
          >
            The Experts Behind{" "}
            <span className="gradient-text">Your Success</span>
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Our dedicated team of professionals brings together decades of combined experience in
            international education, visa processing, language training, and travel planning.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {team.map((member, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:border-emerald-200 dark:hover:border-emerald-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div
                className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center text-2xl font-black text-white mx-auto mb-4 shadow-lg`}
                aria-hidden="true"
              >
                {member.initials}
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white">{member.name}</h3>
              <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-3">{member.role}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">{member.bio}</p>
              <div className="flex justify-center gap-3">
                {/* <button
                  aria-label={`${member.name}'s LinkedIn profile`}
                  className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                </button> */}
                {/* <button
                  aria-label={`Email ${member.name}`}
                  className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-colors"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                </button> */}
              </div>
            </motion.article>
          ))}
        </div>

   
      </div>
    </section>
  );
}
