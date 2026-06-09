import type { Metadata } from "next";
import PageWrapper from "@/components/PageWrapper";
import VisaProcessingContent from "@/components/VisaProcessingContent";

export const metadata: Metadata = {
  title: "Visa Processing",
  description:
    "Professional visa application support with a 98% success rate. Study visas, tourist visas, and full pre-departure briefings — we handle it all.",
};

export default function VisaProcessingPage() {
  return (
    <PageWrapper>
      <VisaProcessingContent />
    </PageWrapper>
  );
}
