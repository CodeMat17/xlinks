import type { Metadata } from "next";
import PageWrapper from "@/components/PageWrapper";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Xlinks Education and Travel Consult. Book a free consultation for study abroad, visa processing, language training, or travel packages. Based in Port Harcourt, Nigeria.",
};

export default function ContactPage() {
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
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-5 leading-tight">
            Contact <span className="text-emerald-300">Us</span>
          </h1>
          <p className="text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
            Ready to start your journey? Fill in the form below or visit our office in Port Harcourt.
            One of our expert advisors will respond within 24 hours — free consultation, no commitment.
          </p>
        </div>
      </section>

      {/* Contact form & info */}
      <Contact />
    </PageWrapper>
  );
}
