import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";

const Footer = dynamic(() => import("@/components/Footer"));
const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton"));

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main id="main-content" className="overflow-x-hidden w-full">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
