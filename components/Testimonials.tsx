"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Amara Okafor",
    role: "BSc Computer Science, University of Leeds",
    country: "🇬🇧 United Kingdom",
    initials: "AO",
    text: "Xlinks made my UK dream come true. From the moment I walked into their office in D-Line, I knew I was in safe hands. They handled my UCAS application, CAS letter, and visa process seamlessly. I landed in Leeds in September 2024 with zero stress. Truly a world-class team!",
    rating: 5,
    color: "from-emerald-500 to-teal-600",
    program: "Undergraduate",
  },
  {
    name: "Chidi Nwosu",
    role: "MBA Graduate, University of Toronto",
    country: "🇨🇦 Canada",
    initials: "CN",
    text: "I tried twice on my own to get a Canadian study permit and failed both times. Xlinks took my case, prepared every document meticulously, and got my visa approved in 6 weeks. Their visa interview coaching was exceptional. I'm now finishing my MBA in Toronto!",
    rating: 5,
    color: "from-red-500 to-red-700",
    program: "Postgraduate",
  },
  {
    name: "Blessing Eze",
    role: "Nursing Studies, Macquarie University",
    country: "🇦🇺 Australia",
    initials: "BE",
    text: "Their IELTS class alone was worth every naira. I scored 7.5 overall after just 8 weeks of training. Then they helped me secure admission and full scholarship documentation for Macquarie. The airport pickup arranged through Xlinks made me feel so welcomed. 10/10!",
    rating: 5,
    color: "from-yellow-500 to-orange-600",
    program: "Undergraduate",
  },
  {
    name: "Emeka Adeyemi",
    role: "MEng Engineering, Dublin City University",
    country: "🇮🇪 Ireland",
    initials: "EA",
    text: "Xlinks didn't just process my application — they guided me through every step with patience and professionalism. When I had doubts about my choice of university, they sat with me for two hours discussing options. That kind of personal touch sets them apart from every other agency.",
    rating: 5,
    color: "from-green-600 to-emerald-700",
    program: "Postgraduate",
  },
  {
    name: "Ngozi Obi",
    role: "French Language Graduate",
    country: "🇫🇷 France-bound",
    initials: "NO",
    text: "I enrolled in the French language program at Xlinks with zero knowledge of the language. In four months, I passed the DELF B1 exam and secured admission to Sciences Po Paris. Their instructor was patient, methodical, and absolutely dedicated. I cannot thank them enough!",
    rating: 5,
    color: "from-indigo-500 to-purple-600",
    program: "Language Training",
  },
  {
    name: "Kelechi Eze",
    role: "BSc Business, University of Malta",
    country: "🇲🇹 Malta",
    initials: "KE",
    text: "Malta wasn't on my radar until Xlinks introduced me to it. Their thorough knowledge of EU education pathways opened my eyes. They secured my university placement, Schengen visa, and even arranged accommodation. Now I'm studying in the heart of the Mediterranean — surreal!",
    rating: 5,
    color: "from-teal-500 to-cyan-600",
    program: "Undergraduate",
  },
  {
    name: "Tamuno Briggs",
    role: "Family Holiday, Dubai & Maldives",
    country: "🇦🇪 United Arab Emirates",
    initials: "TB",
    text: "We booked our entire family vacation through Xlinks — flights, hotels, a Dubai city tour, and a Maldives getaway. Everything was seamless from visa to check-in. Their travel desk handled every detail so we could just relax and enjoy. We're already planning our next trip with them!",
    rating: 5,
    color: "from-amber-500 to-orange-600",
    program: "Holiday & Tour Package",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const next = useCallback(() => setActive((a) => (a + 1) % testimonials.length), []);
  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 9000);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <section
      id="testimonials"
      className="max-w-6xl mx-auto section-padding bg-background"
      aria-labelledby="testimonials-heading"
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
            Client Stories
          </span>
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-4"
          >
            Real Journeys,{" "}
            <span className="gradient-text">Real Success</span>
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Hundreds of students and travelers have trusted Xlinks with their biggest journeys —
            from university placements to dream holidays. Here are just a few of their stories.
          </p>
        </motion.div>

        {/* Featured testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mb-8"
        >
          <div
            className="bg-gradient-to-br from-emerald-900 to-teal-900 rounded-3xl p-8 md:p-12 overflow-hidden"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Background quote */}
            <Quote className="absolute top-6 right-6 w-20 h-20 text-white/5" aria-hidden="true" />

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-6">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${testimonials[active].color} flex items-center justify-center text-xl font-black text-white flex-shrink-0 shadow-lg`}
                    aria-hidden="true"
                  >
                    {testimonials[active].initials}
                  </div>
                  <div>
                    <p className="text-xl font-black text-white">{testimonials[active].name}</p>
                    <p className="text-emerald-300 text-sm font-medium">{testimonials[active].role}</p>
                    <p className="text-teal-300 text-sm">{testimonials[active].country}</p>
                  </div>
                </div>

                <div className="flex mb-4" aria-label={`${testimonials[active].rating} out of 5 stars`}>
                  {[...Array(testimonials[active].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                  ))}
                </div>

                <blockquote className="text-lg text-white/90 leading-relaxed max-w-3xl">
                  &quot;{testimonials[active].text}&quot;
                </blockquote>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" aria-hidden="true" />
              </button>
              <div className="flex gap-2" role="tablist" aria-label="Testimonial navigation">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    role="tab"
                    aria-selected={i === active}
                    aria-label={`Testimonial ${i + 1}`}
                    className={`h-2 rounded-full transition-all ${
                      i === active ? "w-6 bg-emerald-400" : "w-2 bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Grid of all testimonials (compact) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
              onClick={() => setActive(i)}
              className={`text-left p-5 rounded-2xl border transition-all duration-200 ${
                i === active
                  ? "bg-emerald-50 dark:bg-emerald-950/50 border-emerald-300 dark:border-emerald-700 shadow-md"
                  : "bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-800 hover:border-emerald-200 dark:hover:border-emerald-800 hover:shadow-md"
              }`}
              aria-pressed={i === active}
              aria-label={`View testimonial from ${t.name}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center text-sm font-black text-white flex-shrink-0`}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">{t.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{t.country}</p>
                </div>
              </div>
              <div className="flex gap-0.5 mb-2" aria-hidden="true">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">{t.text}</p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
