import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import PageHero from "@/components/PageHero";
import About from "@/components/About";
import Team from "@/components/Team";
import VideoInView from "@/components/VideoInView";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Xlinks Educational and Travel Consult is a study abroad and travel consultancy in Port Harcourt, Nigeria, established in September 2023. Our story, mission, milestones and team.",
  alternates: { canonical: "/about" },
};

const milestones = [
  {
    year: "September 2023",
    event: "Xlinks is established in Port Harcourt, Rivers State.",
  },
  {
    year: "Early 2024",
    event: "First 100 students placed at universities in the UK and Canada.",
  },
  {
    year: "Mid 2024",
    event:
      "Language centre opens, offering IELTS, French, German and Spanish classes.",
  },
  {
    year: "Late 2024",
    event:
      "Travel and tours division expands with holiday packages to Dubai, the Maldives and Europe.",
  },
  {
    year: "2025",
    event:
      "Over 500 students placed abroad, with applications going to 50+ partner universities.",
  },
];

const officeFacts = [
  "Monday to Friday, 8:00 am – 6:00 pm",
  "Saturday, 9:00 am – 3:00 pm",
  "Walk-in consultations welcome, free of charge",
  "Phone and video consultations also available",
];

export default function AboutPage() {
  return (
    <PageWrapper>
      <PageHero
        eyebrow="Our story"
        title="About"
        highlight="Xlinks"
        lede="An education and travel consultancy built on straight advice, real partnerships and staying reachable after the visa decision."
        crumbs={[{ href: "/about", label: "About" }]}
      />

      <About />

      {/* ---------- Office ---------- */}
      <section className="section bg-surface-raised" aria-labelledby="office-heading">
        <div className="shell">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="eyebrow">Our office</p>
              <h2
                id="office-heading"
                className="mt-3 text-(length:--text-h2) font-extrabold text-ink"
              >
                Come and see us in{" "}
                <span className="brand-text">Port Harcourt</span>
              </h2>
              <p className="lede mt-5">
                We are at {contact.street}, {contact.city}. Walk in for a free
                consultation, or book a time that suits you.
              </p>

              <ul className="mt-8 space-y-3">
                {officeFacts.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 dark:bg-brand-900"
                      aria-hidden="true"
                    >
                      <Check className="h-3 w-3 text-brand-700 dark:text-brand-300" />
                    </span>
                    <span className="text-sm text-ink-muted">{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact" className="btn-secondary mt-9">
                Book a free consultation
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="reveal overflow-hidden rounded-3xl bg-brand-950 shadow-lg">
              <VideoInView
                src="/xlinks_video.mp4"
                label="A short tour of the Xlinks office in Port Harcourt"
                className="aspect-video w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Milestones ---------- */}
      <section className="section" aria-labelledby="milestones-heading">
        <div className="shell-narrow">
          <div className="text-center">
            <p className="eyebrow">Our journey</p>
            <h2
              id="milestones-heading"
              className="mt-3 text-(length:--text-h2) font-extrabold text-ink"
            >
              Key <span className="brand-text">milestones</span>
            </h2>
          </div>

          <ol className="mt-12 space-y-8 border-l-2 border-brand-200 pl-8 dark:border-brand-800">
            {milestones.map((m) => (
              <li key={m.year} className="reveal relative">
                <span
                  className="absolute top-1.5 -left-[2.3125rem] h-4 w-4 rounded-full border-4 border-canvas bg-brand-600"
                  aria-hidden="true"
                />
                <p className="font-display text-2xs font-bold tracking-[0.16em] text-brand-700 uppercase dark:text-brand-300">
                  {m.year}
                </p>
                <p className="mt-1.5 text-ink-muted">{m.event}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Team />
    </PageWrapper>
  );
}
