import dynamic from "next/dynamic";
import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import { ArrowRight, CheckCircle2, GraduationCap, FileCheck, Languages, Plane } from "lucide-react";
import Image from "next/image";

const Testimonials = dynamic(() => import("@/components/Testimonials"));

function PhotoPlaceholder({
  label = "Photo Placeholder",
  hint = "Replace with your photo",
  className = "",
}: {
  label?: string;
  hint?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-700 flex items-center justify-center ${className}`}>
      <div className="text-center text-gray-400 dark:text-gray-600 p-8">
        <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mx-auto mb-3">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
        <p className="text-sm font-semibold">{label}</p>
        <p className="text-xs mt-1">{hint}</p>
      </div>
    </div>
  );
}

const featuredServices = [
  {
    icon: GraduationCap,
    title: "University Admissions",
    description:
      "Expert guidance for applications at 50+ partner universities across 11 countries. We ensure your application stands out.",
    color: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-50 dark:bg-emerald-950/30",
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
  {
    icon: FileCheck,
    title: "Visa Processing",
    description:
      "Comprehensive visa support with a 98% success rate — document prep, interview coaching, and submission assistance.",
    color: "from-teal-500 to-cyan-600",
    bg: "bg-teal-50 dark:bg-teal-950/30",
    iconColor: "text-teal-600 dark:text-teal-400",
  },
  {
    icon: Languages,
    title: "Language Training",
    description:
      "Professional IELTS, French, German, and Spanish classes with certified trainers and proven pass records.",
    color: "from-green-500 to-emerald-600",
    bg: "bg-green-50 dark:bg-green-950/30",
    iconColor: "text-green-600 dark:text-green-400",
  },
  {
    icon: Plane,
    title: "Tours & Travel",
    description:
      "Custom holiday and group tour packages worldwide — flights, hotels, visas, and airport transfers all arranged.",
    color: "from-cyan-500 to-teal-600",
    bg: "bg-cyan-50 dark:bg-cyan-950/30",
    iconColor: "text-cyan-600 dark:text-cyan-400",
  },
];

const whyChoosePoints = [
  "Over 500 students successfully placed in universities abroad",
  "98% visa approval rate — among the best in Nigeria",
  "In-house language center for IELTS, French, German & Spanish",
  "Partnerships with 50+ accredited universities in 11 countries",
  "End-to-end support: admissions, visa, flights, accommodation & tours",
  "Dedicated aftercare from Port Harcourt to your destination country",
];

const destinations = [
  { flag: "🇬🇧", name: "UK" },
  { flag: "🇨🇦", name: "Canada" },
  { flag: "🇺🇸", name: "USA" },
  { flag: "🇦🇺", name: "Australia" },
  { flag: "🇮🇪", name: "Ireland" },
  { flag: "🇲🇹", name: "Malta" },
  { flag: "🇫🇮", name: "Finland" },
  { flag: "🇦🇹", name: "Austria" },
  { flag: "🇨🇳", name: "China" },
  { flag: "🇨🇾", name: "Cyprus" },
  { flag: "🇳🇿", name: "New Zealand" },
];

export default function Home() {
  return (
    <PageWrapper>
      {/* Hero */}
      <Hero />

      {/* Stats */}
      <Stats />

      {/* Why Choose Xlinks */}
      <section className='section-padding bg-gradient-to-b from-emerald-50/50 to-background dark:from-emerald-950/20 dark:to-background'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            {/* Photo placeholder */}
            <div className='relative'>
              {/* <PhotoPlaceholder
                label="Office / Team Photo"
                hint="Recommended: 800 × 600 px"
                className="aspect-[4/3] shadow-2xl shadow-emerald-500/10"
              /> */}
              <div>
                <Image
                  alt='team_with_vice-president_international_affairs_for_Algoma_university_Canada'
                  width={800}
                  height={500}
                  src='/team_with_vpresident.jpg'
                  className='rounded-xl object-cover aspect-4/3'
                />
                <p className="absolute bg-linear-to-t from-black/80 to-black/30 p-4 bottom-0 text-sm text-white rounded-b-xl">Team with the Vice President of International Affairs and Recruitment for Algoma University, Canada, at the Partners Connect Summit in 2026.</p>
              </div>
              {/* <div className='absolute -bottom-5 -right-3 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-5 text-white shadow-xl shadow-emerald-500/30'>
                <p className='text-3xl font-black leading-none'>500+</p>
                <p className='text-xs font-semibold text-emerald-100 mt-1'>
                  Students Placed
                </p>
              </div> */}
            </div>

            {/* Content */}
            <div>
              <span className='inline-block text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-3'>
                Why Choose Us
              </span>
              <h2 className='text-3xl sm:text-4xl font-black text-gray-900 dark:text-white mb-5 leading-tight'>
                Nigeria&apos;s Most Trusted{" "}
                <span className='gradient-text'>
                  Education &amp; Travel Partner
                </span>
              </h2>
              <p className='text-gray-600 dark:text-gray-300 mb-7 leading-relaxed'>
                Since September 2023, Xlinks Education and Travel Consult has
                been helping students and travelers from Port Harcourt and
                across Nigeria achieve their international dreams — with
                honesty, expertise, and genuine care.
              </p>

              <ul className='space-y-3 mb-8' aria-label='Why choose Xlinks'>
                {whyChoosePoints.map((point, i) => (
                  <li key={i} className='flex items-start gap-3'>
                    <CheckCircle2
                      className='w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5'
                      aria-hidden='true'
                    />
                    <span className='text-sm text-gray-600 dark:text-gray-300'>
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href='/about'
                className='inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold rounded-xl shadow-lg shadow-emerald-500/30 transition-all duration-200 hover:-translate-y-0.5'>
                Learn More About Us
                <ArrowRight className='w-5 h-5' aria-hidden='true' />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className='section-padding bg-background'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-12'>
            <span className='inline-block text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-3'>
              What We Offer
            </span>
            <h2 className='text-3xl sm:text-4xl font-black text-gray-900 dark:text-white mb-4'>
              Everything You Need,{" "}
              <span className='gradient-text'>One Destination</span>
            </h2>
            <p className='text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto'>
              From first enquiry to landing abroad and your next holiday —
              Xlinks handles everything.
            </p>
          </div>

          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10'>
            {featuredServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={i}
                  className='group bg-white dark:bg-gray-900/80 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:border-emerald-200 dark:hover:border-emerald-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1'>
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${service.bg}`}>
                    <Icon
                      className={`w-6 h-6 ${service.iconColor}`}
                      aria-hidden='true'
                    />
                  </div>
                  <h3 className='text-base font-bold text-gray-900 dark:text-white mb-2'>
                    {service.title}
                  </h3>
                  <p className='text-sm text-gray-500 dark:text-gray-400 leading-relaxed'>
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className='text-center'>
            <Link
              href='/services'
              className='inline-flex items-center gap-2 px-8 py-3.5 border-2 border-emerald-600 text-emerald-600 dark:text-emerald-400 dark:border-emerald-500 font-bold rounded-xl hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-600 dark:hover:text-white transition-all duration-200'>
              View All Services
              <ArrowRight className='w-5 h-5' aria-hidden='true' />
            </Link>
          </div>
        </div>
      </section>

      {/* Destinations Strip */}
      <section className='py-12 bg-gradient-to-r from-emerald-950 via-teal-900 to-emerald-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <p className='text-center text-emerald-300 font-bold uppercase tracking-widest text-sm mb-8'>
            We Place Students &amp; Travelers in 11 Countries
          </p>
          <div className='flex flex-wrap justify-center gap-4'>
            {destinations.map((d) => (
              <div
                key={d.name}
                className='flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2'>
                <span className='text-xl' aria-hidden='true'>
                  {d.flag}
                </span>
                <span className='text-sm font-semibold text-white'>
                  {d.name}
                </span>
              </div>
            ))}
          </div>
          <div className='text-center mt-8'>
            <Link
              href='/services'
              className='inline-flex items-center gap-2 px-6 py-3 bg-white text-emerald-700 font-bold rounded-xl hover:bg-emerald-50 transition-colors text-sm'>
              Explore All Destinations
              <ArrowRight className='w-4 h-4' aria-hidden='true' />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />
    </PageWrapper>
  );
}
