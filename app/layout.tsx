import type { Metadata, Viewport } from "next";
import { Nunito, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import {
  contact,
  destinations,
  foundingDate,
  services,
  siteDescription,
  siteName,
  siteUrl,
  socials,
} from "@/lib/site";

/* Both families are variable fonts: one woff2 each, every weight, no FOUT
   swap-in of a second file. `adjustFontFallback` is on by default, which
   metric-matches the fallback and keeps CLS at zero. */
const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} — Study Abroad & Travel Agency in Port Harcourt`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  referrer: "origin-when-cross-origin",
  formatDetection: { telephone: true, address: true, email: true },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: siteUrl,
    siteName,
    title: `${siteName} — Study Abroad & Travel Agency in Port Harcourt`,
    description: siteDescription,
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: `${siteName} — your gateway to education and travel abroad`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} — Study Abroad & Travel Agency`,
    description: siteDescription,
    images: ["/opengraph-image.jpg"],
  },
  alternates: { canonical: "/" },
  category: "Education",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1f1a" },
  ],
};

/* One @graph so the organisation, its physical location and the site itself
   are explicitly the same entity rather than three unlinked blobs. */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["EducationalOrganization", "TravelAgency", "LocalBusiness"],
      "@id": `${siteUrl}/#organization`,
      name: siteName,
      alternateName: "Xlinks",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        "@id": `${siteUrl}/#logo`,
        url: `${siteUrl}/xlinks_logo.jpg`,
        contentUrl: `${siteUrl}/xlinks_logo.jpg`,
        caption: siteName,
      },
      image: { "@id": `${siteUrl}/#logo` },
      description: siteDescription,
      foundingDate,
      address: {
        "@type": "PostalAddress",
        streetAddress: contact.street,
        addressLocality: contact.city,
        addressRegion: contact.region,
        addressCountry: contact.country,
      },
      telephone: contact.phone,
      email: contact.email,
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: contact.phone,
          email: contact.email,
          contactType: "customer service",
          areaServed: "NG",
          availableLanguage: ["English"],
        },
      ],
      sameAs: socials.map((s) => s.href),
      areaServed: [
        { "@type": "Country", name: "Nigeria" },
        ...destinations.map((d) => ({ "@type": "Country", name: d.name })),
      ],
      knowsAbout: [...services],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      description: siteDescription,
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en-NG",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-NG"
      className={`${nunito.variable} ${jakarta.variable}`}
      suppressHydrationWarning
    >
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main-content"
          className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-4 focus-visible:left-4 focus-visible:z-100 focus-visible:rounded-xl focus-visible:bg-brand-800 focus-visible:px-5 focus-visible:py-3 focus-visible:font-display focus-visible:text-sm focus-visible:font-bold focus-visible:text-white focus-visible:shadow-xl"
        >
          Skip to main content
        </a>
        <ThemeProvider>{children}</ThemeProvider>
        <script
          type="application/ld+json"
          // Data is authored above as a literal, never from user input.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
