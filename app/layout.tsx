import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const siteUrl = "https://xlinkseducationalandtravels.org";
const siteName = "Xlinks Educational & Travel Consult";
const siteDescription =
  "Nigeria's premier study abroad and travel agency in Port Harcourt. Expert visa processing, university admissions, IELTS preparation, language training, flight booking, and holiday & tour packages for UK, Canada, USA, Australia & 11 countries. Start your global education and travel journey today.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Study Abroad & Travel Agency – Port Harcourt, Nigeria`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "study abroad agency Nigeria",
    "study abroad Port Harcourt",
    "travel agency Port Harcourt",
    "UK student visa Nigeria",
    "Canada study visa Nigeria",
    "Australia student visa Nigeria",
    "IELTS preparation Port Harcourt",
    "university admissions Nigeria",
    "educational and travel consult Port Harcourt",
    "Xlinks Educational and Travel Consult",
    "study in UK from Nigeria",
    "study in Canada from Nigeria",
    "visa processing Nigeria",
    "overseas education consultancy Nigeria",
    "study abroad Rivers State",
    "German language classes Port Harcourt",
    "French language classes Port Harcourt",
    "holiday and tour packages Nigeria",
    "flight booking Nigeria",
    "travel insurance Nigeria",
    "airport pickup abroad",
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: siteUrl,
    siteName,
    title: `${siteName} | Study Abroad & Travel Agency – Port Harcourt, Nigeria`,
    description: siteDescription,
    images: [
      {
        url: `/opengraph-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${siteName} – Your Gateway to Education & Travel`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Study Abroad & Travel Agency`,
    description: siteDescription,
    images: [`/opengraph-image.jpg`],
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "Education & Travel",
  verification: {},
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description: siteDescription,
  foundingDate: "2023-09-30",
  address: {
    "@type": "PostalAddress",
    streetAddress: "No. 35 Ndele Street, Bishop House, D-Line",
    addressLocality: "Port Harcourt",
    addressRegion: "Rivers State",
    addressCountry: "NG",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+2349134523615",
    contactType: "customer service",
    availableLanguage: ["English"],
  },
  sameAs: [
    "https://facebook.com/xlinkseducationalconsult",
    "https://instagram.com/xlinkseducational",
    "https://twitter.com/xlinksedconsult",
  ],
  areaServed: [
    "Nigeria",
    "United Kingdom",
    "Canada",
    "United States",
    "Australia",
    "Ireland",
    "Malta",
    "Finland",
    "Austria",
    "China",
    "Cyprus",
    "New Zealand",
  ],
  serviceType: [
    "University Admissions",
    "Visa Processing",
    "IELTS Preparation",
    "Language Training",
    "Flight Booking",
    "Tours & Holiday Packages",
    "Accommodation & Hotel Booking",
    "Travel Insurance",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} h-full`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-9999 focus:px-4 focus:py-2 focus:bg-emerald-700 focus:text-white focus:font-bold focus:rounded-lg focus:shadow-lg"
        >
          Skip to main content
        </a>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
