import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import heroImage from "@/public/hero-graduate.jpg";
import { destinations } from "@/lib/site";

/**
 * Server component by design: no client JS, no mount animation, no rotating
 * text. The <h1> and the LCP image are in the first HTML byte the browser
 * receives, which is what keeps LCP and CLS at zero cost.
 */
export default function Hero() {
  return (
    <section
      className="brand-gradient relative isolate overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Decorative layers. Pointer-events-none so they never eat clicks. */}
      <div
        className="dot-field pointer-events-none absolute inset-0 opacity-60"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-32 -right-24 h-[32rem] w-[32rem] rounded-full bg-support-500/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-brand-400/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="shell relative pt-28 pb-20 sm:pt-32 lg:pt-40 lg:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* ---------- Copy ---------- */}
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
              <MapPin className="h-4 w-4 text-brand-300" aria-hidden="true" />
              <span className="font-display text-xs font-bold tracking-wide text-white sm:text-sm">
                Port Harcourt, Nigeria
              </span>
            </p>

            <h1
              id="hero-heading"
              className="mt-6 text-(length:--text-h1) font-extrabold text-white"
            >
              Your gateway to study
              <br className="hidden sm:block" />{" "}
              <span className="text-brand-300">and travel abroad</span>
            </h1>

            <p className="mt-6 max-w-xl text-(length:--text-fluid-lg) leading-relaxed text-white/80">
              Admissions, visas, IELTS and language training, flights and
              holidays — handled end to end by advisers who have walked the
              route before. One office, eleven destinations, no guesswork.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Book a free consultation
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/services" className="btn-on-dark">
                Explore our services
              </Link>
            </div>

            {/* Destination list doubles as hero copy and as crawlable,
                keyword-rich text — better than burying it in an image. */}
            <div className="mt-10">
              <h2 className="font-display text-2xs font-bold tracking-[0.16em] text-white/70 uppercase">
                Destinations we place students in
              </h2>
              <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2" role="list">
                {destinations.map((d) => (
                  <li
                    key={d.code}
                    className="flex items-center gap-1.5 text-sm font-medium text-white/75"
                  >
                    <span aria-hidden="true">{d.flag}</span>
                    {d.short}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ---------- Portrait ---------- */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <figure className="relative m-0 overflow-hidden rounded-3xl border border-white/15 shadow-xl">
              <Image
                src={heroImage}
                alt="A graduate in cap and gown smiling in a university library"
                sizes="(min-width: 1024px) 45vw, (min-width: 640px) 28rem, 92vw"
                className="aspect-[4/5] w-full object-cover object-[58%_28%] sm:aspect-[4/3] lg:aspect-[5/6]"
                placeholder="blur"
                priority
                fetchPriority="high"
              />
              {/* Bottom scrim: guarantees the caption chip stays legible
                  regardless of what the photo does down there. */}
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-brand-950/85 to-transparent"
                aria-hidden="true"
              />
              <figcaption className="absolute inset-x-4 bottom-4 flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 backdrop-blur-md">
                  <Sparkles
                    className="h-3.5 w-3.5 text-accent-300"
                    aria-hidden="true"
                  />
                  <span className="font-display text-xs font-bold text-white">
                    Admissions guidance
                  </span>
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 backdrop-blur-md">
                  <ShieldCheck
                    className="h-3.5 w-3.5 text-brand-300"
                    aria-hidden="true"
                  />
                  <span className="font-display text-xs font-bold text-white">
                    Visa support
                  </span>
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      {/* Wave joins the hero to the page background. Fixed height so it can
          never contribute layout shift. */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 leading-[0]"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="h-10 w-full sm:h-16"
          focusable="false"
        >
          <path
            d="M0 80h1440V38c-240-40-480 40-720 0S240 78 0 38z"
            className="fill-canvas"
          />
        </svg>
      </div>
    </section>
  );
}
