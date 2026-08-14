import type { Metadata } from "next";
import PageWrapper from "@/components/PageWrapper";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";
import { contact, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Book a free study abroad or travel consultation with Xlinks in Port Harcourt. Call, WhatsApp, email, or visit us at No. 35 Ndele Street, Bishop House, D-Line.",
  alternates: { canonical: "/contact" },
};

const contactLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: `${siteUrl}/contact`,
  name: "Contact Xlinks Educational and Travel Consult",
  mainEntity: { "@id": `${siteUrl}/#organization` },
};

export default function ContactPage() {
  return (
    <PageWrapper>
      <PageHero
        eyebrow="Get in touch"
        title="Contact"
        highlight="us"
        lede={`Send us a message, call ${contact.phone}, or walk into our office in D-Line, Port Harcourt. The first consultation is free.`}
        crumbs={[{ href: "/contact", label: "Contact" }]}
      />
      <Contact />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactLd) }}
      />
    </PageWrapper>
  );
}
