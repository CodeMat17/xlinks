import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * Per-country university counts were removed: they summed far beyond the
 * "50+ partner universities" figure used everywhere else on the site, which
 * reads as inflated the moment anyone adds them up.
 */
const countries = [
  {
    flag: "🇬🇧",
    name: "United Kingdom",
    highlight: "Russell Group and modern universities, one-year master's",
    featured: true,
  },
  {
    flag: "🇨🇦",
    name: "Canada",
    highlight: "Post-graduation work permits and a route to residency",
    featured: true,
  },
  {
    flag: "🇺🇸",
    name: "United States",
    highlight: "The widest choice of programmes and campus scholarships",
    featured: true,
  },
  {
    flag: "🇦🇺",
    name: "Australia",
    highlight: "Generous student work rights and post-study stay-back",
    featured: true,
  },
  { flag: "🇮🇪", name: "Ireland", highlight: "English-speaking EU" },
  { flag: "🇲🇹", name: "Malta", highlight: "Small, English-taught EU campuses" },
  { flag: "🇫🇮", name: "Finland", highlight: "Highly ranked public system" },
  { flag: "🇦🇹", name: "Austria", highlight: "Low tuition, central Europe" },
  { flag: "🇨🇳", name: "China", highlight: "Scholarship-heavy intakes" },
  { flag: "🇨🇾", name: "Cyprus", highlight: "Affordable European study" },
  { flag: "🇳🇿", name: "New Zealand", highlight: "Safe, welcoming campuses" },
];

export default function Destinations() {
  const featured = countries.filter((c) => c.featured);
  const others = countries.filter((c) => !c.featured);

  return (
    <section id="destinations" className="section" aria-labelledby="destinations-heading">
      <div className="shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Study &amp; travel destinations</p>
          <h2
            id="destinations-heading"
            className="mt-3 text-(length:--text-h2) font-extrabold text-ink"
          >
            Eleven countries we <span className="brand-text">know well</span>
          </h2>
          <p className="lede mt-4">
            Each has its own entry requirements, funding rules and visa quirks.
            We&apos;ll tell you honestly which ones fit your profile — and
            which don&apos;t.
          </p>
        </div>

        {/* Featured four */}
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((country) => (
            <li
              key={country.name}
              className="brand-gradient reveal relative overflow-hidden rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="block text-4xl" aria-hidden="true">
                {country.flag}
              </span>
              <h3 className="mt-3 font-display text-lg font-bold text-white">
                {country.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">
                {country.highlight}
              </p>
            </li>
          ))}
        </ul>

        {/* Remaining seven */}
        <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {others.map((country) => (
            <li key={country.name} className="card reveal p-4">
              <span className="block text-3xl" aria-hidden="true">
                {country.flag}
              </span>
              <h3 className="mt-2 font-display text-sm font-bold text-ink">
                {country.name}
              </h3>
              <p className="mt-1 text-xs text-ink-subtle">{country.highlight}</p>
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <Link href="/contact" className="btn-secondary">
            Find the right destination for you
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
