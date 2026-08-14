import { Check, Eye, Heart, Target } from "lucide-react";
import { contact, destinations } from "@/lib/site";

const values = [
  {
    icon: Target,
    label: "Mission",
    text: "To connect ambitious Nigerians with credible institutions and destinations abroad through honest, expert and affordable consultancy.",
  },
  {
    icon: Eye,
    label: "Vision",
    text: "To be the education and travel consultancy West Africans recommend to each other — because the advice was straight and the outcome was real.",
  },
  {
    icon: Heart,
    label: "Values",
    text: "Integrity, expertise and follow-through: from the first enquiry to long after you have landed.",
  },
];

const highlights = [
  `Office at ${contact.street}, ${contact.city}`,
  "Registered educational and travel consultancy",
  "Applications submitted to 50+ partner universities",
  "Post-visa support, relocation help and travel assistance",
  "In-house language centre for IELTS, French, German and Spanish",
  "Tailored holiday and tour packages for individuals and groups",
];

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <div className="shell">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: identity panel */}
          <div className="brand-gradient reveal relative isolate overflow-hidden rounded-3xl p-8 sm:p-10">
            <div className="dot-field pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
            <div className="relative">
              <p className="font-display text-2xs font-bold tracking-[0.16em] text-brand-300 uppercase">
                Established
              </p>
              <p className="mt-2 font-display text-6xl font-extrabold text-white">
                2023
              </p>
              <p className="mt-1 text-sm text-white/70">
                30 September 2023 · Port Harcourt, Rivers State
              </p>

              <p className="mt-8 text-white/85">
                We started Xlinks because too many capable Nigerian students
                were losing money and years to agents who vanished after the
                deposit. We built the opposite of that.
              </p>

              <ul className="mt-8 space-y-4 border-t border-white/15 pt-8">
                {values.map((v) => {
                  const Icon = v.icon;
                  return (
                    <li key={v.label} className="flex items-start gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10">
                        <Icon className="h-4.5 w-4.5 text-brand-300" aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block font-display text-sm font-bold text-white">
                          {v.label}
                        </span>
                        <span className="mt-1 block text-sm leading-relaxed text-white/70">
                          {v.text}
                        </span>
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Right: prose */}
          <div>
            <p className="eyebrow">About us</p>
            <h2
              id="about-heading"
              className="mt-3 text-(length:--text-h2) font-extrabold text-ink"
            >
              A study abroad and travel consultancy{" "}
              <span className="brand-text">built on follow-through</span>
            </h2>

            <p className="lede mt-5">
              Xlinks Educational and Travel Consult helps students and
              travellers in Port Harcourt and across Nigeria get where they are
              going — admission, visa, flight, accommodation and the part
              afterwards that most agents skip.
            </p>

            <p className="mt-4 text-ink-muted">
              We place students in{" "}
              <strong className="font-semibold text-brand-700 dark:text-brand-300">
                {destinations.map((d) => d.name).join(", ")}
              </strong>
              , and we plan flights, holidays and tour packages worldwide. Our
              involvement does not end at the visa decision or the booking
              confirmation — we stay in contact through the whole journey.
            </p>

            <ul className="mt-8 space-y-3">
              {highlights.map((point) => (
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
          </div>
        </div>
      </div>
    </section>
  );
}
