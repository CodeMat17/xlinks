"use client";
import { useState } from "react";
import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";
import { ChevronDown, ArrowRight } from "lucide-react";

const faqGroups = [
  {
    category: "General Questions",
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-950/30",
    faqs: [
      {
        q: "What is Xlinks Educational and Travel Consult?",
        a: "Xlinks Educational and Travel Consult is a licensed study abroad and travel agency based in Port Harcourt, Nigeria. We provide end-to-end services for students seeking to study internationally and for individuals and families planning travel — including university admissions, visa processing, language training, flight booking, and holiday packages.",
      },
      {
        q: "Where is your office located?",
        a: "Our office is at No. 35 Ndele Street, Bishop House, D-Line, Port Harcourt, Rivers State, Nigeria. We are open Monday–Friday 8:00 am–6:00 pm and Saturday 9:00 am–3:00 pm. Walk-ins and appointments are both welcome.",
      },
      {
        q: "Do you charge a consultation fee?",
        a: "No — your initial consultation with our advisors is completely free. We believe in helping you make the right decision before any commitment is made.",
      },
      {
        q: "How long has Xlinks been in operation?",
        a: "Xlinks was established on 30th September 2023. In a short time, we have placed over 500 students in universities across 11 countries and grown into one of the most trusted education and travel consultancies in Rivers State.",
      },
    ],
  },
  {
    category: "Study Abroad",
    color: "text-teal-600 dark:text-teal-400",
    bg: "bg-teal-50 dark:bg-teal-950/30",
    faqs: [
      {
        q: "Which countries do you support for university admissions?",
        a: "We support admissions to universities in the United Kingdom, Canada, United States, Australia, Ireland, Malta, Finland, Austria, China, Cyprus, and New Zealand — a total of 11 countries with 50+ partner institutions.",
      },
      {
        q: "How long does the admissions process take?",
        a: "It depends on the destination and institution. UK admissions via UCAS can take 4–8 weeks after submission. Canadian and Australian applications typically take 6–12 weeks. We manage the entire timeline and keep you updated every step of the way.",
      },
      {
        q: "What documents do I need to start my application?",
        a: "Typically you will need: academic transcripts and certificates, a valid international passport, a statement of purpose, references/recommendation letters, proof of English proficiency (e.g. IELTS score), and a CV/resume. Our advisors will give you a tailored document checklist based on your chosen destination and programme.",
      },
      {
        q: "Do you help with scholarship applications?",
        a: "Yes. While we do not provide scholarships ourselves, our advisors are experienced in identifying scholarship opportunities at partner universities and government-funded programmes, and we guide you through the application process.",
      },
      {
        q: "Can I apply to multiple universities?",
        a: "Absolutely. We recommend applying to a range of institutions to maximise your chances. Our team will help you prioritise universities that match your profile, budget, and career goals.",
      },
    ],
  },
  {
    category: "Visa Processing",
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-950/30",
    faqs: [
      {
        q: "What is your visa success rate?",
        a: "Our visa success rate is 98% — one of the highest in Nigeria. This is the result of meticulous document preparation, thorough interview coaching, and our experienced visa processing team.",
      },
      {
        q: "How long does visa processing take?",
        a: "Processing times vary by country. UK Student Visas are typically decided within 3 weeks. Canadian Study Permits can take 8–12 weeks. Australian Student Visas are usually processed within 4–6 weeks. We track your application throughout and advise you on the best timing to apply.",
      },
      {
        q: "What happens if my visa is refused?",
        a: "In the rare event of a refusal, we analyse the refusal letter, identify the reason, and work with you on a reapplication strategy. Many of our reapplication cases have been successful. Our team will advise on the best course of action for your specific situation.",
      },
      {
        q: "Do you offer interview coaching?",
        a: "Yes. Our visa processing package includes interview preparation sessions where we conduct mock interviews, review likely questions, and ensure you present yourself confidently to the embassy or high commission.",
      },
    ],
  },
  {
    category: "Language Training",
    color: "text-green-600 dark:text-green-400",
    bg: "bg-green-50 dark:bg-green-950/30",
    faqs: [
      {
        q: "What languages do you teach?",
        a: "Our in-house Language Center offers IELTS preparation (English), French (A1–C1), German (A1–B2), and Spanish (A1–B2). All courses are taught by certified instructors.",
      },
      {
        q: "How long are the language courses?",
        a: "Course duration varies by programme and starting level. Our intensive IELTS preparation is typically 6–8 weeks. French, German, and Spanish courses range from 3 to 12 months depending on your target proficiency level.",
      },
      {
        q: "Do you offer online classes?",
        a: "Yes. All our language courses are available both in-person at our Port Harcourt office and online via video call. We offer morning and evening class schedules to suit working professionals and full-time students.",
      },
      {
        q: "What IELTS band score can I expect after training?",
        a: "Most students who complete our full IELTS preparation programme achieve a band score of 6.5 or higher. Individual results depend on your starting level and the effort you put in. We provide mock exams throughout the course to track your progress.",
      },
    ],
  },
  {
    category: "Travel & Tours",
    color: "text-cyan-600 dark:text-cyan-400",
    bg: "bg-cyan-50 dark:bg-cyan-950/30",
    faqs: [
      {
        q: "Can you book flights for me?",
        a: "Yes. Our travel desk arranges competitive flight bookings for individuals, families, and groups — whether for study, business, or leisure. We compare routes and fares to get you the best deal.",
      },
      {
        q: "Do you offer group travel packages?",
        a: "Yes. We design customised group tour packages for families, corporate teams, church groups, and school excursions. Group packages often include discounted flights, shared accommodation, guided tours, and travel insurance.",
      },
      {
        q: "What is included in your holiday packages?",
        a: "Our holiday packages are fully customisable and can include: visa assistance, round-trip flights, hotel accommodation, airport transfers, city tours and excursions, travel insurance, and emergency support while abroad.",
      },
      {
        q: "Do you arrange airport pickup at the destination?",
        a: "Yes. Through our network of local partners at major destinations, we can arrange reliable airport pickup and transfers to your accommodation — ensuring a smooth and stress-free arrival.",
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-white dark:bg-gray-900 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 transition-colors"
        aria-expanded={open}>
        <span className="font-bold text-gray-900 dark:text-white text-sm leading-snug">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>
      {open && (
        <div className="px-5 pb-5 pt-2 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQsPage() {
  return (
    <PageWrapper>
      {/* Page Hero */}
      <section className="relative pt-24 pb-16 gradient-bg overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sm font-bold text-emerald-300 uppercase tracking-widest mb-3">
            Got Questions?
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-5 leading-tight">
            Frequently Asked <span className="text-emerald-300">Questions</span>
          </h1>
          <p className="text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about studying abroad, visa processing, language
            training, and travel with Xlinks. Can&apos;t find your answer? Contact us directly.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {faqGroups.map((group, gi) => (
              <div key={gi}>
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl ${group.bg} mb-6`}>
                  <span className={`text-sm font-black uppercase tracking-widest ${group.color}`}>
                    {group.category}
                  </span>
                </div>
                <div className="space-y-3">
                  {group.faqs.map((faq, fi) => (
                    <FAQItem key={fi} q={faq.q} a={faq.a} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Still have questions */}
          <div className="mt-16 text-center py-12 px-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-3xl border border-emerald-100 dark:border-emerald-900/50">
            <div className="text-4xl mb-4" aria-hidden="true">💬</div>
            <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-3">
              Still Have Questions?
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-md mx-auto">
              Our expert advisors are happy to answer any question you have — free of charge,
              no commitment required.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold rounded-xl shadow-lg shadow-emerald-500/30 transition-all duration-200 hover:-translate-y-0.5">
                Contact Us
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
              <a
                href="tel:+2349134523615"
                className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-emerald-600 text-emerald-600 dark:text-emerald-400 dark:border-emerald-500 font-bold rounded-xl hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-600 dark:hover:text-white transition-all duration-200">
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
