import { UserRound } from "lucide-react";

/**
 * The previous version listed a card literally named "Team Member" with an
 * invented biography next to the founder. Placeholder people are worse than
 * fewer people, so this shows only the person we can actually name and
 * describes the wider team in prose. Add real profiles (name, role, photo)
 * to `team` as they become available.
 */
const team = [
  {
    name: "Ogechukwu Oleh",
    role: "Founder & Chief Executive",
    bio: "Founded Xlinks in 2023 after years working in international education and student placement, with the aim of giving Nigerian students advice they could actually trust.",
    photo: null as string | null,
  },
];

export default function Team() {
  return (
    <section id="team" className="section" aria-labelledby="team-heading">
      <div className="shell">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow">Our team</p>
            <h2
              id="team-heading"
              className="mt-3 text-(length:--text-h2) font-extrabold text-ink"
            >
              The people behind <span className="brand-text">your application</span>
            </h2>
            <p className="lede mt-5">
              Admissions counsellors, visa specialists and certified language
              instructors work out of our Port Harcourt office. You get a named
              adviser who stays with your case from consultation to arrival —
              not a different person every time you call.
            </p>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {team.map((member) => (
              <li key={member.name} className="card reveal flex gap-5 p-6">
                <span className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-brand-50 dark:bg-brand-950/60">
                  {member.photo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={member.photo}
                      alt=""
                      width={64}
                      height={64}
                      className="h-16 w-16 object-cover"
                    />
                  ) : (
                    <UserRound
                      className="h-7 w-7 text-brand-700 dark:text-brand-300"
                      aria-hidden="true"
                    />
                  )}
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-ink">
                    {member.name}
                  </h3>
                  <p className="mt-0.5 font-display text-sm font-bold text-brand-700 dark:text-brand-300">
                    {member.role}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-subtle">
                    {member.bio}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
