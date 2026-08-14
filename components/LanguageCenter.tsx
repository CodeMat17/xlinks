import Link from "next/link";
import { ArrowRight, Award, BookOpen, Clock, Laptop } from "lucide-react";

const courses = [
  {
    flag: "🇬🇧",
    name: "IELTS preparation",
    level: "Beginner to advanced",
    description:
      "Structured training across all four skills — reading, writing, listening and speaking — with mock exams under timed conditions.",
    features: [
      "All four skills covered",
      "Timed mock exams",
      "Individual band feedback",
      "Morning & evening groups",
    ],
    badge: "Most requested",
  },
  {
    flag: "🇫🇷",
    name: "French",
    level: "A1 – C1",
    description:
      "From absolute beginner to advanced. Built for students heading to France, Québec, or francophone African universities.",
    features: [
      "DELF / DALF exam prep",
      "Conversational fluency",
      "Grammar foundations",
      "Cultural orientation",
    ],
  },
  {
    flag: "🇩🇪",
    name: "German",
    level: "A1 – B2",
    description:
      "For study in Germany, Austria or Switzerland, where language level is often the gate to tuition-free technical programmes.",
    features: [
      "Goethe exam prep",
      "Technical vocabulary",
      "Business German",
      "Study-permit language support",
    ],
    badge: "In demand",
  },
  {
    flag: "🇪🇸",
    name: "Spanish",
    level: "A1 – B2",
    description:
      "The world's second-most spoken native language, opening study and work routes across Spain and Latin America.",
    features: [
      "DELE exam preparation",
      "Latin American Spanish",
      "Conversation practice",
      "Online & in person",
    ],
  },
];

const facts = [
  { icon: BookOpen, label: "4 languages", detail: "Taught year-round" },
  { icon: Award, label: "Certified tutors", detail: "Exam-experienced instructors" },
  { icon: Clock, label: "Flexible hours", detail: "Morning and evening groups" },
  { icon: Laptop, label: "In person or online", detail: "Port Harcourt centre or remote" },
];

export default function LanguageCenter() {
  return (
    <section
      id="language"
      className="section bg-surface-raised"
      aria-labelledby="language-heading"
    >
      <div className="shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Language centre</p>
          <h2
            id="language-heading"
            className="mt-3 text-(length:--text-h2) font-extrabold text-ink"
          >
            Speak the language <span className="brand-text">before you land</span>
          </h2>
          <p className="lede mt-4">
            Language scores gate admissions and visas alike. Our instructors
            prepare you for the exam that stands between you and your offer.
          </p>
        </div>

        {/* Facts bar */}
        <ul className="brand-gradient mt-12 grid grid-cols-2 gap-6 rounded-2xl p-6 lg:grid-cols-4">
          {facts.map(({ icon: Icon, label, detail }) => (
            <li key={label} className="text-center">
              <Icon className="mx-auto h-6 w-6 text-brand-300" aria-hidden="true" />
              <p className="mt-2 font-display text-sm font-bold text-white">{label}</p>
              <p className="mt-0.5 text-xs text-white/70">{detail}</p>
            </li>
          ))}
        </ul>

        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <li key={course.name} className="card-interactive reveal relative flex flex-col p-6">
              {course.badge && (
                <span className="absolute top-6 right-6 rounded-full bg-accent-100 px-2.5 py-1 font-display text-2xs font-bold text-accent-900 dark:bg-accent-900 dark:text-accent-100">
                  {course.badge}
                </span>
              )}
              <span className="text-4xl" aria-hidden="true">
                {course.flag}
              </span>
              <h3 className="mt-3 font-display text-base font-bold text-ink">
                {course.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-subtle">
                {course.description}
              </p>
              <ul className="mt-4 flex-1 space-y-1.5">
                {course.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-ink-muted">
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500"
                      aria-hidden="true"
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <p className="mt-4 border-t border-hairline pt-3 font-display text-sm font-bold text-brand-700 dark:text-brand-300">
                Level: {course.level}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <Link href="/contact" className="btn-secondary">
            Enrol in a language course
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
