import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronDown, Phone } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import PageHero from "@/components/PageHero";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers on studying abroad from Nigeria: admissions timelines, required documents, visa processing, IELTS and language courses, flights, tours and our Port Harcourt office hours.",
  alternates: { canonical: "/faqs" },
};

/**
 * One source of truth for both the rendered accordion and the FAQPage
 * structured data below, so an answer can never appear on the page in one
 * wording and in search results in another.
 *
 * Several answers were softened from the previous copy: the "98% visa success
 * rate — one of the highest in Nigeria", the "most trusted consultancy in
 * Rivers State" claim, and the IELTS band-score prediction were all specific
 * or superlative claims we cannot evidence. FAQ answers are quoted directly
 * into search results, so unverifiable claims carry the most risk here.
 */
const faqGroups = [
  {
    category: "General",
    faqs: [
      {
        q: "What is Xlinks Educational and Travel Consult?",
        a: "Xlinks Educational and Travel Consult is a registered study abroad and travel agency based in Port Harcourt, Nigeria. We provide end-to-end support for students applying to universities abroad and for individuals and families planning travel — covering admissions, visa processing, language training, flight booking and holiday packages.",
      },
      {
        q: "Where is your office located?",
        a: `Our office is at ${contact.street}, ${contact.city}, ${contact.region}, Nigeria. We are open Monday to Friday, 8:00 am to 6:00 pm, and Saturday, 9:00 am to 3:00 pm. Walk-ins and appointments are both welcome.`,
      },
      {
        q: "Do you charge a consultation fee?",
        a: "No. Your initial consultation is free. We would rather you understand your options properly before committing to anything.",
      },
      {
        q: "How long has Xlinks been in operation?",
        a: "Xlinks was established on 30 September 2023. Since then we have placed over 500 students at universities across 11 countries and expanded into language training and travel services.",
      },
    ],
  },
  {
    category: "Study abroad",
    faqs: [
      {
        q: "Which countries do you support for university admissions?",
        a: "We support admissions to universities in the United Kingdom, Canada, the United States, Australia, Ireland, Malta, Finland, Austria, China, Cyprus and New Zealand — 11 countries in total, with 50+ partner institutions.",
      },
      {
        q: "How long does the admissions process take?",
        a: "It depends on the destination and the institution. UK admissions through UCAS commonly take four to eight weeks after submission. Canadian and Australian applications typically take six to twelve weeks. We manage the timeline and keep you updated throughout.",
      },
      {
        q: "What documents do I need to start my application?",
        a: "Usually: academic transcripts and certificates, a valid international passport, a statement of purpose, reference letters, proof of English proficiency such as an IELTS score, and a CV. We give you a tailored checklist once we know your destination and programme.",
      },
      {
        q: "Do you help with scholarship applications?",
        a: "Yes. We do not award scholarships ourselves, but we identify scholarship and bursary opportunities at partner universities and government-funded schemes, and guide you through applying for them.",
      },
      {
        q: "Can I apply to multiple universities?",
        a: "Yes, and we usually recommend it. Applying to a spread of institutions — some ambitious, some safe — meaningfully improves your chances. We help you prioritise based on your profile, budget and career goals.",
      },
    ],
  },
  {
    category: "Visa processing",
    faqs: [
      {
        q: "How do you improve my chances of a visa approval?",
        a: "Most avoidable refusals come down to the file rather than the applicant: missing evidence, inconsistent financials, or a weak explanation of intent. We build the document set to the specific embassy's requirements, run a compliance review before submission, and prepare you for the interview with mock questions.",
      },
      {
        q: "How long does visa processing take?",
        a: "Processing times vary by country. UK student visas are commonly decided within three weeks, Canadian study permits can take eight to twelve weeks, and Australian student visas are usually processed in four to six weeks. We advise on when to apply so the decision lands before your intake.",
      },
      {
        q: "What happens if my visa is refused?",
        a: "We go through the refusal letter with you, identify the specific ground cited, and advise honestly on whether a reapplication, an appeal or a change of plan is the better route. We will tell you if we think reapplying is unlikely to succeed.",
      },
      {
        q: "Do you offer interview coaching?",
        a: "Yes. Visa support includes preparation sessions with mock interviews and a review of the questions most likely to come up for your visa category and destination.",
      },
    ],
  },
  {
    category: "Language training",
    faqs: [
      {
        q: "What languages do you teach?",
        a: "Our language centre offers IELTS preparation in English, plus French (A1–C1), German (A1–B2) and Spanish (A1–B2). All courses are taught by certified instructors.",
      },
      {
        q: "How long are the language courses?",
        a: "It depends on the programme and your starting level. Intensive IELTS preparation typically runs six to eight weeks. French, German and Spanish courses range from three to twelve months depending on the proficiency level you are aiming for.",
      },
      {
        q: "Do you offer online classes?",
        a: "Yes. Every language course is available both in person at our Port Harcourt office and online by video call, with morning and evening schedules for working professionals and full-time students.",
      },
      {
        q: "What IELTS score can I expect after training?",
        a: "We cannot promise a band score, and you should be cautious of anyone who does — results depend on your starting level and the work you put in. What we do is run timed mock exams throughout the course so you always know where you stand and what to focus on.",
      },
    ],
  },
  {
    category: "Travel & tours",
    faqs: [
      {
        q: "Can you book flights for me?",
        a: "Yes. Our travel desk books flights for individuals, families and groups, whether for study, business or leisure, comparing routes and fares to find the best available option.",
      },
      {
        q: "Do you offer group travel packages?",
        a: "Yes. We put together group tour packages for families, corporate teams, church groups and school excursions, which often include discounted flights, shared accommodation, guided tours and travel insurance.",
      },
      {
        q: "What is included in your holiday packages?",
        a: "Packages are built around what you need and can include visa assistance, return flights, hotel accommodation, airport transfers, city tours and excursions, travel insurance and support while you are abroad.",
      },
      {
        q: "Do you arrange airport pickup at the destination?",
        a: "Yes. Through local partners at major destinations we arrange airport pickup and transfer to your accommodation, so your arrival is already sorted before you land.",
      },
    ],
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqGroups.flatMap((group) =>
    group.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  ),
};

export default function FAQsPage() {
  return (
    <PageWrapper>
      <PageHero
        eyebrow="Got questions?"
        title="Frequently asked"
        highlight="questions"
        lede="Admissions, visas, language training and travel — the questions we get asked most, answered straight."
        crumbs={[{ href: "/faqs", label: "FAQs" }]}
      />

      <section className="section" aria-label="Frequently asked questions">
        <div className="shell-narrow">
          {faqGroups.map((group) => (
            <div key={group.category} className="mt-12 first:mt-0">
              <h2 className="eyebrow">{group.category}</h2>

              <div className="mt-5 space-y-3">
                {group.faqs.map((faq) => (
                  /* Native <details> keeps every answer in the DOM for
                     crawlers and screen readers, and needs no JavaScript. */
                  <details
                    key={faq.q}
                    name={group.category}
                    className="group card overflow-hidden"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-display text-sm font-bold text-ink transition-colors hover:bg-brand-50 dark:hover:bg-brand-950/40 [&::-webkit-details-marker]:hidden">
                      {faq.q}
                      <ChevronDown
                        className="h-5 w-5 shrink-0 text-brand-700 transition-transform duration-200 group-open:rotate-180 dark:text-brand-300"
                        aria-hidden="true"
                      />
                    </summary>
                    <p className="border-t border-hairline px-5 py-4 text-sm leading-relaxed text-ink-muted">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          ))}

          {/* Still stuck */}
          <div className="card mt-16 p-8 text-center sm:p-10">
            <h2 className="text-(length:--text-h3) font-extrabold text-ink">
              Still have a question?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-ink-muted">
              Ask us directly. There is no charge for a conversation and no
              obligation afterwards.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="btn-primary">
                Contact us
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a href={contact.phoneHref} className="btn-outline">
                <Phone className="h-4 w-4" aria-hidden="true" />
                {contact.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
    </PageWrapper>
  );
}
