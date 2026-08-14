import { Quote } from "lucide-react";

/**
 * Server component. The old carousel auto-advanced every 9s, hid six of seven
 * quotes from crawlers and screen readers at any moment, and shipped
 * framer-motion to do it. A static grid shows every quote at once — better for
 * SEO, better for assistive tech, and zero JS.
 *
 * Deliberately NOT marked up as schema.org/Review or AggregateRating: Google
 * penalises self-serving review markup that can't be independently verified.
 */
const testimonials = [
  {
    name: "Amara Okafor",
    detail: "BSc Computer Science, University of Leeds",
    place: "United Kingdom",
    flag: "🇬🇧",
    quote:
      "From the moment I walked into their office in D-Line, I knew I was in safe hands. They handled my UCAS application, CAS letter and visa process end to end. I landed in Leeds with zero stress.",
  },
  {
    name: "Chidi Nwosu",
    detail: "MBA, University of Toronto",
    place: "Canada",
    flag: "🇨🇦",
    quote:
      "I tried twice on my own and was refused both times. Xlinks took my case, prepared every document properly and coached me for the interview. I'm now finishing my MBA in Toronto.",
  },
  {
    name: "Blessing Eze",
    detail: "Nursing, Macquarie University",
    place: "Australia",
    flag: "🇦🇺",
    quote:
      "Their IELTS class alone was worth it — I scored 7.5 overall after eight weeks. They then helped me secure admission and sort my scholarship documentation. The airport pickup made me feel welcomed.",
  },
  {
    name: "Emeka Adeyemi",
    detail: "MEng Engineering, Dublin City University",
    place: "Ireland",
    flag: "🇮🇪",
    quote:
      "When I had doubts about my choice of university, they sat with me for two hours going through options. That kind of personal attention is what sets them apart.",
  },
  {
    name: "Ngozi Obi",
    detail: "French language programme",
    place: "France-bound",
    flag: "🇫🇷",
    quote:
      "I started with zero French. In four months I passed DELF B1 and secured admission in Paris. The instructor was patient and methodical the whole way through.",
  },
  {
    name: "Tamuno Briggs",
    detail: "Family holiday, Dubai & Maldives",
    place: "United Arab Emirates",
    flag: "🇦🇪",
    quote:
      "We booked flights, hotels, a Dubai city tour and a Maldives getaway through Xlinks. Everything from visa to check-in was handled, so we could just relax. Already planning the next one.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section bg-surface-raised"
      aria-labelledby="testimonials-heading"
    >
      <div className="shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Client stories</p>
          <h2
            id="testimonials-heading"
            className="mt-3 text-(length:--text-h2) font-extrabold text-ink"
          >
            Real journeys, in their <span className="brand-text">own words</span>
          </h2>
          <p className="lede mt-4">
            Students and travellers who trusted us with the trip that mattered
            most.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <li key={t.name} className="reveal">
              <figure className="card m-0 flex h-full flex-col p-6">
                <Quote
                  className="h-7 w-7 shrink-0 text-brand-300 dark:text-brand-700"
                  aria-hidden="true"
                />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-muted">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-5 border-t border-hairline pt-4">
                  <span className="block font-display text-sm font-bold text-ink">
                    {t.name}
                  </span>
                  <span className="mt-0.5 block text-sm text-ink-subtle">
                    {t.detail}
                  </span>
                  <span className="mt-1 block text-sm text-ink-subtle">
                    <span aria-hidden="true">{t.flag}</span> {t.place}
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
