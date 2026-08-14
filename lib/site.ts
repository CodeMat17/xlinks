/**
 * Single source of truth for site-wide constants.
 * Anything that appears in more than one place (metadata, JSON-LD, footer,
 * contact page, WhatsApp link) lives here so the values cannot drift apart.
 */

export const siteUrl = "https://xlinkseducationalandtravels.org";

export const siteName = "Xlinks Educational and Travel Consult";
export const siteShortName = "Xlinks";

export const siteDescription =
  "Study abroad and travel consultancy in Port Harcourt, Nigeria. University admissions, visa processing, IELTS and language training, flight booking, and holiday packages for the UK, Canada, USA, Australia and 7 more destinations.";

export const contact = {
  phone: "+234 913 452 3615",
  phoneHref: "tel:+2349134523615",
  whatsapp: "2349134523615",
  email: "info@xlinkseducationalandtravels.org",
  street: "No. 35 Ndele Street, Bishop House, D-Line",
  city: "Port Harcourt",
  region: "Rivers State",
  country: "NG",
  countryName: "Nigeria",
} as const;

export const whatsappUrl = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
  "Hello Xlinks! I'd like to know more about your study abroad and travel services.",
)}`;

export const socials = [
  {
    name: "Facebook",
    href: "https://facebook.com/profile.php?id=61552975177961",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/xlinklanguages1720",
  },
] as const;

export const destinations = [
  { code: "GB", flag: "🇬🇧", name: "United Kingdom", short: "UK" },
  { code: "CA", flag: "🇨🇦", name: "Canada", short: "Canada" },
  { code: "US", flag: "🇺🇸", name: "United States", short: "USA" },
  { code: "AU", flag: "🇦🇺", name: "Australia", short: "Australia" },
  { code: "IE", flag: "🇮🇪", name: "Ireland", short: "Ireland" },
  { code: "MT", flag: "🇲🇹", name: "Malta", short: "Malta" },
  { code: "FI", flag: "🇫🇮", name: "Finland", short: "Finland" },
  { code: "AT", flag: "🇦🇹", name: "Austria", short: "Austria" },
  { code: "CN", flag: "🇨🇳", name: "China", short: "China" },
  { code: "CY", flag: "🇨🇾", name: "Cyprus", short: "Cyprus" },
  { code: "NZ", flag: "🇳🇿", name: "New Zealand", short: "New Zealand" },
] as const;

export const services = [
  "University Admissions",
  "Visa Processing",
  "IELTS Preparation",
  "Language Training",
  "Flight Booking",
  "Tours & Holiday Packages",
  "Accommodation & Hotel Booking",
  "Travel Insurance",
] as const;

export const foundingDate = "2023-09-30";
