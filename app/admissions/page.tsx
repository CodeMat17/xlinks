import type { Metadata } from "next";
import PageWrapper from "@/components/PageWrapper";
import AdmissionsContent from "@/components/AdmissionsContent";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "University Admissions",
  description:
    "Undergraduate, postgraduate, diploma and foundation admissions support for Nigerian students — course shortlisting, statements of purpose, applications and scholarship guidance across 50+ partner universities in 11 countries.",
  alternates: { canonical: "/admissions" },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "University Admissions Support",
  serviceType: "Education consultancy",
  provider: { "@id": `${siteUrl}/#organization` },
  areaServed: { "@type": "Country", name: "Nigeria" },
  description:
    "End-to-end university application support for Nigerian students applying to institutions abroad, covering course selection, documentation, submission and scholarships.",
  url: `${siteUrl}/admissions`,
};

export default function AdmissionsPage() {
  return (
    <PageWrapper>
      <AdmissionsContent />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
    </PageWrapper>
  );
}
