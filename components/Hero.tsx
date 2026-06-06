"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, MapPin, Star, Users, Award } from "lucide-react";

const destinations = ["United Kingdom", "Canada", "Australia", "United States", "Ireland", "New Zealand"];

const floatingCards = [
  { icon: "🎓", label: "500+ Students Placed", color: "from-emerald-500 to-teal-600" },
  { icon: "🌍", label: "11 Countries", color: "from-teal-500 to-cyan-600" },
  { icon: "⭐", label: "98% Visa Success", color: "from-green-500 to-emerald-600" },
];

export default function Hero() {
  const [currentDest, setCurrentDest] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDest((prev) => (prev + 1) % destinations.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Welcome to Xlinks Educational Consult"
    >
      {/* Background */}
      <div className="absolute inset-0 gradient-bg" aria-hidden="true" />

      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-teal-400/20 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-emerald-300/20 blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
            >
              <MapPin className="w-4 h-4 text-emerald-300" aria-hidden="true" />
              <span className="text-sm font-semibold text-white/90">The Best Study Abroad Agency</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-4"
            >
              Your Gateway to
              <span className="block text-emerald-300">Global Education</span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-bold text-white/80 mt-2">
                in{" "}
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentDest}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="text-teal-300 inline-block"
                    aria-live="polite"
                  >
                    {destinations[currentDest]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/75 mb-8 max-w-lg leading-relaxed"
            >
              Expert admissions, visa processing, language training, and travel support,
              everything you need to study abroad, all in one place since 2023.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-emerald-700 font-bold rounded-xl hover:bg-emerald-50 transition-all duration-200 shadow-xl shadow-black/20 hover:shadow-2xl hover:-translate-y-0.5"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="#about"
                onClick={(e) => { e.preventDefault(); document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" }); }}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-bold rounded-xl transition-all duration-200"
              >
                <Play className="w-4 h-4 fill-current" aria-hidden="true" />
                Learn More
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-4"
            >
              <div className="flex -space-x-2" aria-hidden="true">
                {["AO", "CN", "BE", "EA"].map((initials, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-white bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-xs font-bold text-white"
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1" aria-label="5 star rating">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-sm text-white/70 font-medium">Trusted by 500+ students</p>
              </div>
            </motion.div>
          </div>

          {/* Right – Decorative Cards */}
          <div className="hidden lg:block relative" aria-hidden="true">
            <div className="relative w-full h-[500px]">
              {/* Central globe */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-72 h-72 rounded-full border-2 border-white/10" />
                <div className="absolute w-56 h-56 rounded-full border border-white/10" />
                <div className="absolute w-40 h-40 rounded-full border border-white/10" />
              </motion.div>

              {/* Globe icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-emerald-500/30 to-teal-500/30 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <span className="text-6xl" role="img" aria-label="Globe">🌐</span>
                </div>
              </div>

              {/* Floating stat cards */}
              {floatingCards.map((card, i) => {
                const positions = [
                  "top-8 right-4",
                  "bottom-16 right-0",
                  "bottom-8 left-4",
                ];
                const delays = [0.6, 0.8, 1.0];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: delays[i], duration: 0.5 }}
                    className={`absolute ${positions[i]} bg-white/15 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 flex items-center gap-3`}
                  >
                    <span className="text-2xl">{card.icon}</span>
                    <span className="text-sm font-bold text-white whitespace-nowrap">{card.label}</span>
                  </motion.div>
                );
              })}

              {/* Destination pins */}
              {["🇬🇧", "🇨🇦", "🇦🇺", "🇺🇸", "🇮🇪"].map((flag, i) => {
                const pinPositions = [
                  { top: "20%", left: "65%" },
                  { top: "35%", left: "20%" },
                  { top: "65%", left: "70%" },
                  { top: "55%", left: "30%" },
                  { top: "75%", left: "50%" },
                ];
                return (
                  <motion.div
                    key={i}
                    style={pinPositions[i]}
                    className="absolute flex items-center justify-center"
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 2 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center shadow-lg">
                      <span className="text-xl text-white">{flag}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 80L1440 80L1440 40C1200 0 960 80 720 40C480 0 240 80 0 40L0 80Z" className="fill-background" />
        </svg>
      </div>
    </section>
  );
}
