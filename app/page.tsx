import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  FileCheck,
  GraduationCap,
  Languages,
  MessagesSquare,
  PlaneTakeoff,
  Route,
  Send,
} from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import { destinations } from "@/lib/site";

const featuredServices = [
  {
    icon: GraduationCap,
    title: "University admissions",
    href: "/admissions",
    description:
      "Course and university shortlisting, application assembly, personal statements and offer follow-up across our partner institutions.",
  },
  {
    icon: FileCheck,
    title: "Visa processing",
    href: "/visa-processing",
    description:
      "Document preparation, financial evidence review, interview coaching and submission support for study and visitor visas.",
  },
  {
    icon: Languages,
    title: "Language training",
    href: "/services#language",
    description:
      "In-house IELTS preparation plus French, German and Spanish classes taught by certified instructors.",
  },
  {
    icon: PlaneTakeoff,
    title: "Travel & holidays",
    href: "/services#destinations",
    description:
      "Flights, hotels, airport transfers, travel insurance and tailored holiday or group tour packages.",
  },
];

const whyPoints = [
  "Over 500 students placed in universities abroad since 2023",
  "End-to-end visa support: documents, coaching and submission",
  "In-house language centre for IELTS, French, German and Spanish",
  "Applications submitted to 50+ partner universities in 11 countries",
  "One team for admissions, visas, flights, accommodation and tours",
  "Aftercare that continues once you land in your destination country",
];

const process = [
  {
    icon: MessagesSquare,
    step: "01",
    title: "Free consultation",
    body: "We sit down with you — in the office or on a call — to understand your grades, budget and where you actually want to end up.",
  },
  {
    icon: Route,
    step: "02",
    title: "Your shortlist",
    body: "We map realistic courses, universities and countries against your profile, then agree the plan and the timeline together.",
  },
  {
    icon: Send,
    step: "03",
    title: "Apply & prepare",
    body: "We assemble and submit your applications, prepare your visa file, and run IELTS or language training if you need it.",
  },
  {
    icon: PlaneTakeoff,
    step: "04",
    title: "Depart & settle",
    body: "Flights, accommodation, insurance and airport pickup are arranged, and we stay reachable after you arrive.",
  },
];

export default function Home() {
  return (
    <PageWrapper>
      <Hero />
      <Stats />

      {/* ---------- Why Xlinks ---------- */}
      <section className="section" aria-labelledby="why-heading">
        <div className="shell">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <figure className="reveal relative m-0 overflow-hidden rounded-3xl shadow-lg">
              <Image
                src="/team_with_vpresident.jpg"
                alt="The Xlinks team meeting the Vice President of International Affairs and Recruitment for Algoma University, Canada"
                width={800}
                height={600}
                sizes="(min-width: 1024px) 45vw, 92vw"
                className="aspect-4/3 w-full object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-brand-950 via-brand-950/85 to-transparent p-5 pt-12 text-sm text-white/85">
                Our team with the Vice President of International Affairs and
                Recruitment for Algoma University, Canada, at the Partners
                Connect Summit.
              </figcaption>
            </figure>

            <div>
              <p className="eyebrow">Why Xlinks</p>
              <h2
                id="why-heading"
                className="mt-3 text-(length:--text-h2) font-extrabold text-ink"
              >
                One team, from the first question to{" "}
                <span className="brand-text">the day you land</span>
              </h2>
              <p className="lede mt-5">
                Since September 2023 we have been helping students and
                travellers from Port Harcourt and across Nigeria reach
                universities and destinations abroad — without the guesswork,
                the runaround, or the agent who disappears once the fee clears.
              </p>

              <ul className="mt-8 space-y-3">
                {whyPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 dark:bg-brand-900"
                      aria-hidden="true"
                    >
                      <Check className="h-3 w-3 text-brand-700 dark:text-brand-300" />
                    </span>
                    <span className="text-sm text-ink-muted">{point}</span>
                  </li>
                ))}
              </ul>

              <Link href="/about" className="btn-secondary mt-9">
                More about us
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Services ---------- */}
      <section className="section bg-surface-raised" aria-labelledby="services-heading">
        <div className="shell">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">What we do</p>
            <h2
              id="services-heading"
              className="mt-3 text-(length:--text-h2) font-extrabold text-ink"
            >
              Everything the journey needs,{" "}
              <span className="brand-text">under one roof</span>
            </h2>
            <p className="lede mt-4">
              Four services that most people need together — so you are not
              stitching together an agent, a tutor and a travel desk yourself.
            </p>
          </div>

          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featuredServices.map((service) => {
              const Icon = service.icon;
              return (
                <li key={service.title} className="reveal">
                  {/* Whole card is the link target — bigger hit area than a
                      trailing "read more", and one tab stop instead of two. */}
                  <Link
                    href={service.href}
                    className="card-interactive group flex h-full flex-col p-6"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 transition-colors group-hover:bg-brand-100 dark:bg-brand-950/60 dark:group-hover:bg-brand-900">
                      <Icon
                        className="h-6 w-6 text-brand-700 dark:text-brand-300"
                        aria-hidden="true"
                      />
                    </span>
                    <h3 className="mt-5 font-display text-base font-bold text-ink">
                      {service.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-subtle">
                      {service.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 font-display text-sm font-bold text-brand-700 dark:text-brand-300">
                      Learn more
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-10 text-center">
            <Link href="/services" className="btn-outline">
              See all services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Process ---------- */}
      <section className="section" aria-labelledby="process-heading">
        <div className="shell">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">How it works</p>
            <h2
              id="process-heading"
              className="mt-3 text-(length:--text-h2) font-extrabold text-ink"
            >
              Four steps, <span className="brand-text">no surprises</span>
            </h2>
          </div>

          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.step} className="card reveal relative p-6">
                  <span
                    className="font-display text-4xl font-extrabold text-brand-100 dark:text-brand-900"
                    aria-hidden="true"
                  >
                    {item.step}
                  </span>
                  <Icon
                    className="absolute top-6 right-6 h-6 w-6 text-brand-600 dark:text-brand-400"
                    aria-hidden="true"
                  />
                  <h3 className="mt-3 font-display text-base font-bold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-subtle">
                    {item.body}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* ---------- Destinations ---------- */}
      <section
        className="brand-gradient relative isolate overflow-hidden"
        aria-labelledby="destinations-heading"
      >
        <div className="dot-field pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="shell relative py-16 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-display text-(length:--text-eyebrow) font-bold tracking-[0.16em] text-brand-300 uppercase">
              Where we send people
            </p>
            <h2
              id="destinations-heading"
              className="mt-3 text-(length:--text-h2) font-extrabold text-white"
            >
              Eleven destinations, one office
            </h2>
          </div>

          <ul className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-2.5">
            {destinations.map((d) => (
              <li
                key={d.code}
                className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm"
              >
                <span className="text-lg" aria-hidden="true">
                  {d.flag}
                </span>
                <span className="font-display text-sm font-semibold text-white">
                  {d.name}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-10 text-center">
            <Link href="/services#destinations" className="btn-primary">
              Explore destinations
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />
    </PageWrapper>
  );
}
