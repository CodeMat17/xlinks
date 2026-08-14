import {
  Car,
  FileCheck,
  FileStack,
  GraduationCap,
  Home,
  Languages,
  Map,
  Plane,
  Shield,
} from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "University admissions",
    description:
      "Course and university shortlisting against your grades and budget, application assembly, personal statements, and follow-up until the offer letter is in your hand.",
    featured: true,
  },
  {
    icon: FileCheck,
    title: "Visa processing",
    description:
      "Document preparation, financial evidence review, interview coaching and submission support for study, visitor and transit visas.",
  },
  {
    icon: Languages,
    title: "Language training",
    description:
      "IELTS preparation plus French, German and Spanish classes with certified instructors, in person at our Port Harcourt centre or online.",
  },
  {
    icon: Plane,
    title: "Flight booking",
    description:
      "Fare comparison and ticketing for study, business or leisure travel, including group bookings and flexible student fares where available.",
  },
  {
    icon: Map,
    title: "Tours & holiday packages",
    description:
      "Tailored holiday, sightseeing and group tour itineraries for individuals, families and corporate groups.",
  },
  {
    icon: Home,
    title: "Accommodation booking",
    description:
      "Student halls, shared apartments and homestays near your campus, plus hotel reservations for holidays and business trips.",
  },
  {
    icon: Car,
    title: "Airport pickup",
    description:
      "Arrival transfers arranged with local partners at your destination, so your first hour in a new country is already handled.",
  },
  {
    icon: FileStack,
    title: "Document authentication",
    description:
      "Certification and authentication of educational and personal documents so they are recognised by institutions abroad.",
  },
  {
    icon: Shield,
    title: "Travel insurance",
    description:
      "Travel and student insurance cover arranged alongside your booking, matched to your destination's visa requirements.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section" aria-labelledby="services-heading">
      <div className="shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">What we offer</p>
          <h2
            id="services-heading"
            className="mt-3 text-(length:--text-h2) font-extrabold text-ink"
          >
            Nine services, <span className="brand-text">one relationship</span>
          </h2>
          <p className="lede mt-4">
            Most people arrive needing three or four of these at once. Handling
            them together is what keeps the timeline — and the paperwork — from
            falling apart.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <li
                key={service.title}
                className={`reveal relative flex flex-col rounded-2xl border p-6 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  service.featured
                    ? "border-transparent bg-brand-800 text-white shadow-lg dark:bg-brand-800"
                    : "border-hairline bg-surface shadow-sm"
                }`}
              >
                {service.featured && (
                  <span className="absolute top-6 right-6 rounded-full bg-accent-400 px-2.5 py-1 font-display text-2xs font-bold text-brand-950">
                    Most requested
                  </span>
                )}

                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                    service.featured
                      ? "bg-white/15"
                      : "bg-brand-50 dark:bg-brand-950/60"
                  }`}
                >
                  <Icon
                    className={`h-6 w-6 ${
                      service.featured
                        ? "text-white"
                        : "text-brand-700 dark:text-brand-300"
                    }`}
                    aria-hidden="true"
                  />
                </span>

                <h3
                  className={`mt-5 font-display text-base font-bold ${
                    service.featured ? "text-white" : "text-ink"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    service.featured ? "text-white/80" : "text-ink-subtle"
                  }`}
                >
                  {service.description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
