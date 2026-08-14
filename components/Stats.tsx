import { Building2, Globe, ShieldCheck, Users } from "lucide-react";

/**
 * Static server component. The previous version pulled framer-motion plus an
 * IntersectionObserver into the client bundle to animate numbers counting up —
 * a decorative effect that delayed the numbers being readable and inflated JS
 * on the most-visited page. Numbers now render in the first paint.
 */
const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Students placed",
    detail: "Admitted to universities abroad since 2023",
  },
  {
    icon: Globe,
    value: "11",
    label: "Destinations",
    detail: "Study and travel countries we cover",
  },
  {
    icon: Building2,
    value: "50+",
    label: "Partner universities",
    detail: "Institutions we submit applications to",
  },
  {
    icon: ShieldCheck,
    value: "End to end",
    label: "Visa support",
    detail: "Documents, coaching and submission",
  },
];

export default function Stats() {
  return (
    <section className="section-tight" aria-label="Xlinks at a glance">
      <div className="shell">
        <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <li
                key={stat.label}
                className="card-interactive reveal flex flex-col p-5 sm:p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 dark:bg-brand-950/60">
                  <Icon
                    className="h-5 w-5 text-brand-700 dark:text-brand-300"
                    aria-hidden="true"
                  />
                </span>
                <p className="mt-4 font-display text-2xl font-extrabold text-ink sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 font-display text-sm font-bold text-ink">
                  {stat.label}
                </p>
                <p className="mt-1.5 text-sm text-ink-subtle">{stat.detail}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
