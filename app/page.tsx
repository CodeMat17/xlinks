import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const Stats = dynamic(() => import("@/components/Stats"));
const Services = dynamic(() => import("@/components/Services"));
const About = dynamic(() => import("@/components/About"));
const Process = dynamic(() => import("@/components/Process"));
const Destinations = dynamic(() => import("@/components/Destinations"));
const LanguageCenter = dynamic(() => import("@/components/LanguageCenter"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const Team = dynamic(() => import("@/components/Team"));
const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));
const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton"));

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="overflow-x-hidden w-full">
        <Hero />
        <Stats />
        <Services />
        <About />
        <Process />
        <Destinations />
        <LanguageCenter />
        <Testimonials />
        <Team />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
