import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpen,
  Check,
  CheckCircle,
  ClipboardList,
  FileText,
  GraduationCap,
  Lightbulb,
  Users,
} from "lucide-react";
import PageHero from "@/components/PageHero";

const programs = [
  {
    icon: BookOpen,
    title: "Undergraduate",
    description:
      "Bachelor's degrees across our partner universities in eleven countries, matched to your WAEC/NECO results and budget.",
  },
  {
    icon: Award,
    title: "Postgraduate",
    description:
      "Master's and PhD programmes chosen around your field, your funding and the post-study work rights of each country.",
  },
  {
    icon: GraduationCap,
    title: "Diploma & foundation",
    description:
      "Pathway and foundation routes for applicants who don't yet meet direct entry — a legitimate way in, not a detour.",
  },
];

const steps = [
  {
    icon: Lightbulb,
    step: "01",
    title: "Free consultation",
    description:
      "We go through your academic record, your budget and your goals, and tell you plainly what is realistic.",
  },
  {
    icon: ClipboardList,
    step: "02",
    title: "Course & university shortlist",
    description:
      "We shortlist programmes and institutions that fit your profile and your preferred destination — usually a mix of ambitious and safe.",
  },
  {
    icon: FileText,
    step: "03",
    title: "Documents & statement",
    description:
      "Transcripts, references, English proficiency scores and a statement of purpose that reads like you rather than a template.",
  },
  {
    icon: Users,
    step: "04",
    title: "Submission",
    description:
      "We complete the forms, run compliance checks on every document, and submit to each institution before its deadline.",
  },
  {
    icon: CheckCircle,
    step: "05",
    title: "Offers & follow-up",
    description:
      "We chase the universities, prepare you for any interview, and help you compare offers before you accept one.",
  },
  {
    icon: Award,
    step: "06",
    title: "Scholarships & funding",
    description:
      "We flag the scholarships and bursaries you are actually eligible for, and help you assemble the applications.",
  },
];

const requirements = [
  "Academic transcripts and certificates",
  "English proficiency score (IELTS, TOEFL or equivalent)",
  "Personal statement or statement of purpose",
  "Letters of recommendation",
  "Valid international passport",
  "Completed application forms",
];

export default function AdmissionsContent() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="University"
        highlight="admissions"
        lede="From choosing a course that actually fits to holding the offer letter — we do the work and keep you informed at every stage."
        crumbs={[
          { href: "/services", label: "Services" },
          { href: "/admissions", label: "Admissions" },
        ]}
      >
        <Link href="/contact" className="btn-primary">
          Start your application
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </PageHero>

      {/* Programmes */}
      <section className="section" aria-labelledby="programs-heading">
        <div className="shell">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Programmes we cover</p>
            <h2
              id="programs-heading"
              className="mt-3 text-(length:--text-h2) font-extrabold text-ink"
            >
              Find the right <span className="brand-text">academic route</span>
            </h2>
          </div>

          <ul className="mt-12 grid gap-4 sm:grid-cols-3">
            {programs.map((p) => {
              const Icon = p.icon;
              return (
                <li key={p.title} className="card-interactive reveal p-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 dark:bg-brand-950/60">
                    <Icon
                      className="h-6 w-6 text-brand-700 dark:text-brand-300"
                      aria-hidden="true"
                    />
                  </span>
                  <h3 className="mt-5 font-display text-base font-bold text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-subtle">
                    {p.description}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-surface-raised" aria-labelledby="admissions-process-heading">
        <div className="shell">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">How it works</p>
            <h2
              id="admissions-process-heading"
              className="mt-3 text-(length:--text-h2) font-extrabold text-ink"
            >
              Our <span className="brand-text">admissions process</span>
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

      {/* Requirements */}
      <section className="section" aria-labelledby="requirements-heading">
        <div className="shell">
          <div className="brand-gradient reveal relative isolate mx-auto max-w-4xl overflow-hidden rounded-3xl p-8 sm:p-10">
            <div className="dot-field pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
            <div className="relative">
              <h2
                id="requirements-heading"
                className="text-(length:--text-h2) font-extrabold text-white"
              >
                What you&apos;ll need
              </h2>
              <p className="mt-3 text-sm text-white/70">
                The documents most universities ask for. We help you prepare
                every one of them.
              </p>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {requirements.map((req) => (
                  <li key={req} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/15"
                      aria-hidden="true"
                    >
                      <Check className="h-3 w-3 text-brand-300" />
                    </span>
                    <span className="text-sm text-white/85">{req}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact" className="btn-primary mt-9">
                Book a free consultation
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
