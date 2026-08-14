import type { Metadata } from "next";
import PageWrapper from "@/components/PageWrapper";
import VisaProcessingContent from "@/components/VisaProcessingContent";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Visa Processing",
  description:
    "Study, tourist and visit visa application support from Port Harcourt: tailored document checklists, financial evidence review, compliance checks, interview coaching and pre-departure briefings.",
  alternates: { canonical: "/visa-processing" },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Visa Processing Support",
  serviceType: "Visa application assistance",
  provider: { "@id": `${siteUrl}/#organization` },
  areaServed: { "@type": "Country", name: "Nigeria" },
  description:
    "Support for study, tourist and visit visa applications, including document preparation, compliance review, submission guidance and pre-departure briefings.",
  url: `${siteUrl}/visa-processing`,
};

export default function VisaProcessingPage() {
  return (
    <PageWrapper>
      <VisaProcessingContent />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
    </PageWrapper>
  );
}
