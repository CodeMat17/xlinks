import Link from "next/link";
import {
  ArrowRight,
  Check,
  ClipboardList,
  FileCheck,
  MapPin,
  MessageSquare,
  Plane,
  Send,
  ShieldCheck,
  Star,
} from "lucide-react";
import PageHero from "@/components/PageHero";

const visaTypes = [
  {
    icon: FileCheck,
    title: "Study visa",
    description:
      "Documentation, financial evidence and interview preparation for student visa applications, matched to the rules of each destination country.",
    featured: true,
  },
  {
    icon: MapPin,
    title: "Tourist & visit visa",
    description:
      "Guidance on embassy requirements, supporting documents and itineraries for holiday, family and business visits.",
  },
  {
    icon: Plane,
    title: "Travel & relocation support",
    description:
      "Pre-departure briefings, travel documentation checks and practical relocation advice so arrival is not a shock.",
  },
];

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Initial assessment",
    description:
      "We review your purpose of travel, destination and personal circumstances to identify the correct visa category.",
  },
  {
    icon: ClipboardList,
    step: "02",
    title: "Document checklist",
    description:
      "You get a checklist built for your specific embassy and visa type — not a generic list that leaves gaps.",
  },
  {
    icon: FileCheck,
    step: "03",
    title: "Document preparation",
    description:
      "We review and help assemble financial statements, acceptance letters, itineraries and supporting evidence.",
  },
  {
    icon: ShieldCheck,
    step: "04",
    title: "Compliance review",
    description:
      "A full check before submission to catch the errors and omissions that cause most avoidable refusals.",
  },
  {
    icon: Send,
    step: "05",
    title: "Submission & tracking",
    description:
      "We walk you through submission and biometrics, then follow the application so nothing stalls unnoticed.",
  },
  {
    icon: Star,
    step: "06",
    title: "Pre-departure briefing",
    description:
      "Once approved: travel tips, what to expect at the border, and who to contact at your destination.",
  },
];

const documents = [
  "Valid international passport (at least 6 months' validity)",
  "Completed visa application form",
  "Recent passport-size photographs",
  "University acceptance letter (study visa)",
  "Proof of funds and bank statements",
  "Travel itinerary or flight reservation",
  "Accommodation confirmation",
  "English proficiency certificate, where required",
];

/**
 * The "98% visa success rate" figure that used to headline this page has been
 * replaced. It is a specific, checkable performance claim that we cannot
 * evidence, and it sat directly beside a call to action — the exact placement
 * that turns an unverified statistic into a misleading one. Restore it only
 * with records to back it up.
 */
const facts = [
  { value: "11", label: "Countries covered" },
  { value: "500+", label: "Applicants supported" },
  { value: "Same week", label: "Typical first response" },
  { value: "End to end", label: "Documents to departure" },
];

export default function VisaProcessingContent() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Visa"
        highlight="processing"
        lede="Most refusals come down to paperwork that was avoidable. We prepare the file properly, check it twice, and prepare you for the interview."
        crumbs={[
          { href: "/services", label: "Services" },
          { href: "/visa-processing", label: "Visa processing" },
        ]}
      >
        <Link href="/contact" className="btn-primary">
          Talk to a visa adviser
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </PageHero>

      {/* Facts */}
      <section className="section-tight" aria-label="Visa service at a glance">
        <div className="shell">
          <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {facts.map((f) => (
              <li key={f.label} className="card reveal p-5 text-center">
                <p className="font-display text-xl font-extrabold text-brand-700 sm:text-2xl dark:text-brand-300">
                  {f.value}
                </p>
                <p className="mt-1 text-sm text-ink-subtle">{f.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Visa types */}
      <section className="section" aria-labelledby="visa-types-heading">
        <div className="shell">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">What we handle</p>
            <h2
              id="visa-types-heading"
              className="mt-3 text-(length:--text-h2) font-extrabold text-ink"
            >
              Visas we <span className="brand-text">work on</span>
            </h2>
          </div>

          <ul className="mt-12 grid gap-4 sm:grid-cols-3">
            {visaTypes.map((v) => {
              const Icon = v.icon;
              return (
                <li
                  key={v.title}
                  className={`reveal relative flex flex-col rounded-2xl border p-6 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg ${
                    v.featured
                      ? "border-transparent bg-brand-800 text-white shadow-lg"
                      : "border-hairline bg-surface shadow-sm"
                  }`}
                >
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                      v.featured ? "bg-white/15" : "bg-brand-50 dark:bg-brand-950/60"
                    }`}
                  >
                    <Icon
                      className={`h-6 w-6 ${
                        v.featured ? "text-white" : "text-brand-700 dark:text-brand-300"
                      }`}
                      aria-hidden="true"
                    />
                  </span>
                  <h3
                    className={`mt-5 font-display text-base font-bold ${
                      v.featured ? "text-white" : "text-ink"
                    }`}
                  >
                    {v.title}
                  </h3>
                  <p
                    className={`mt-2 text-sm leading-relaxed ${
                      v.featured ? "text-white/80" : "text-ink-subtle"
                    }`}
                  >
                    {v.description}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-surface-raised" aria-labelledby="visa-process-heading">
        <div className="shell">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">How it works</p>
            <h2
              id="visa-process-heading"
              className="mt-3 text-(length:--text-h2) font-extrabold text-ink"
            >
              Our <span className="brand-text">visa process</span>
            </h2>
          </div>

          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((s) => {
              const Icon = s.icon;
              return (
                <li key={s.step} className="card reveal relative p-6">
                  <span
                    className="absolute top-5 right-6 font-display text-3xl font-extrabold text-brand-100 select-none dark:text-brand-900"
                    aria-hidden="true"
                  >
                    {s.step}
                  </span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 dark:bg-brand-950/60">
                    <Icon
                      className="h-5 w-5 text-brand-700 dark:text-brand-300"
                      aria-hidden="true"
                    />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-subtle">
                    {s.description}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Documents */}
      <section className="section" aria-labelledby="documents-heading">
        <div className="shell">
          <div className="brand-gradient reveal relative isolate mx-auto max-w-4xl overflow-hidden rounded-3xl p-8 sm:p-10">
            <div className="dot-field pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
            <div className="relative">
              <h2
                id="documents-heading"
                className="text-(length:--text-h2) font-extrabold text-white"
              >
                Documents to have ready
              </h2>
              <p className="mt-3 text-sm text-white/70">
                Requirements vary by country and visa class. This is the common
                core — we&apos;ll give you the exact list for your case.
              </p>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {documents.map((doc) => (
                  <li key={doc} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/15"
                      aria-hidden="true"
                    >
                      <Check className="h-3 w-3 text-brand-300" />
                    </span>
                    <span className="text-sm text-white/85">{doc}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact" className="btn-primary mt-9">
                Get your document checklist
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
