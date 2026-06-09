import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";
import About from "@/components/About";
import { CheckCircle2, ArrowRight } from "lucide-react";

const Team = dynamic(() => import("@/components/Team"));
const Process = dynamic(() => import("@/components/Process"));
const VideoInView = dynamic(() => import("@/components/VideoInView"));

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Xlinks Education and Travel Consult — Nigeria's leading study abroad and travel agency based in Port Harcourt. Our story, mission, vision, and expert team.",
};

const milestones = [
  { year: "Sep 2023", event: "Xlinks officially established in Port Harcourt, Nigeria." },
  { year: "Early 2024", event: "First 100 students successfully placed in UK and Canadian universities." },
  { year: "Mid 2024", event: "Language Center launched, offering IELTS, French, German & Spanish classes." },
  { year: "Late 2024", event: "Travel & Tours division expanded with holiday packages to Dubai, Maldives & Europe." },
  { year: "2025", event: "500+ students placed abroad. Partnerships with 50+ accredited universities worldwide." },
];

export default function AboutPage() {
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
            Our Story
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-5 leading-tight">
            About <span className="text-emerald-300">Xlinks</span>
          </h1>
          <p className="text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
            Nigeria&apos;s premier education and travel consultancy — built on integrity,
            expertise, and an unwavering commitment to your success.
          </p>
        </div>
      </section>

      {/* About content */}
      <About />

      {/* Office Photo Placeholder */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-3">
                Our Office
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white mb-5 leading-tight">
                Visit Us in <span className="gradient-text">Port Harcourt</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-5 leading-relaxed">
                Our friendly team is ready to welcome you to our office at No. 35 Ndele Street,
                Bishop House, D-Line, Port Harcourt. Walk in for a free consultation or book an
                appointment online.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Monday – Friday: 8:00 am – 6:00 pm",
                  "Saturday: 9:00 am – 3:00 pm",
                  "Free walk-in consultations welcome",
                  "Virtual / phone consultations also available",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-gray-600 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold rounded-xl shadow-lg shadow-emerald-500/30 transition-all duration-200 hover:-translate-y-0.5">
                Book a Free Consultation
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-emerald-500/20 ring-1 ring-emerald-100 dark:ring-emerald-900/50 bg-black">
              <VideoInView
                src="/xlinks_video.mp4"
                className="w-full h-full object-cover aspect-video"
              />
              <div className="absolute inset-0 rounded-2xl ring-inset ring-1 ring-white/10 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="section-padding bg-gradient-to-b from-emerald-50/50 to-background dark:from-emerald-950/20 dark:to-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-3">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white mb-4">
              Key <span className="gradient-text">Milestones</span>
            </h2>
          </div>
          <ol className="relative border-l-2 border-emerald-200 dark:border-emerald-800 space-y-8 ml-4">
            {milestones.map((m, i) => (
              <li key={i} className="relative pl-8">
                <span className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-md">
                  <span className="w-2 h-2 rounded-full bg-white" />
                </span>
                <span className="inline-block text-xs font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-1">
                  {m.year}
                </span>
                <p className="text-gray-700 dark:text-gray-300 font-medium">{m.event}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Team */}
      <Team />

      {/* How It Works */}
      <Process />
    </PageWrapper>
  );
}
