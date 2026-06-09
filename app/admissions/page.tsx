import type { Metadata } from "next";
import PageWrapper from "@/components/PageWrapper";
import AdmissionsContent from "@/components/AdmissionsContent";

export const metadata: Metadata = {
  title: "University Admissions",
  description:
    "Expert university admissions guidance for undergraduate, postgraduate, and diploma programs across our 50+ partner universities in 11 countries.",
};

export default function AdmissionsPage() {
  return (
    <PageWrapper>
      <AdmissionsContent />
    </PageWrapper>
  );
}
