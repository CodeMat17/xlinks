import type { Metadata } from "next";
import PageWrapper from "@/components/PageWrapper";
import PageHero from "@/components/PageHero";
import Services from "@/components/Services";
import LanguageCenter from "@/components/LanguageCenter";
import Destinations from "@/components/Destinations";
import { services as serviceNames, siteName, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "University admissions, visa processing, IELTS and language training, flight booking, tours and holiday packages, accommodation, airport pickup, document authentication and travel insurance — from our Port Harcourt office.",
  alternates: { canonical: "/services" },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: `Services offered by ${siteName}`,
  itemListElement: serviceNames.map((name, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name,
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: { "@type": "Country", name: "Nigeria" },
    },
  })),
};

export default function ServicesPage() {
  return (
    <PageWrapper>
      <PageHero
        eyebrow="What we offer"
        title="Our"
        highlight="services"
        lede="Admissions, visas, language training, flights and holidays — handled by one team, so nothing falls between two agents."
        crumbs={[{ href: "/services", label: "Services" }]}
      />

      <Services />
      <LanguageCenter />
      <Destinations />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
    </PageWrapper>
  );
}
