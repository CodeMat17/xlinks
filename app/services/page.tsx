import type { Metadata } from "next";
import dynamic from "next/dynamic";
import PageWrapper from "@/components/PageWrapper";
import Services from "@/components/Services";

const LanguageCenter = dynamic(() => import("@/components/LanguageCenter"));
const Destinations = dynamic(() => import("@/components/Destinations"));

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore Xlinks full range of services: university admissions, visa processing, IELTS preparation, language training, flight booking, tours & holiday packages, accommodation, and more.",
};

export default function ServicesPage() {
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
            What We Offer
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-5 leading-tight">
            Our <span className="text-emerald-300">Services</span>
          </h1>
          <p className="text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
            From university admissions and visa processing to language training, flights,
            and holiday packages — everything you need, under one roof.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <div id="admissions">
        <Services />
      </div>

      {/* Language Center */}
      <div id="language">
        <LanguageCenter />
      </div>

      {/* Destinations */}
      <div id="tours">
        <Destinations />
      </div>
    </PageWrapper>
  );
}
