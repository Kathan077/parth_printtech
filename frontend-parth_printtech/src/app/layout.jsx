import { Plus_Jakarta_Sans, Geist_Mono, Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import BackgroundAnimation from "@/components/BackgroundAnimation/BackgroundAnimation";

// Using Plus Jakarta Sans for a highly professional body font
const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Using Outfit for modern, premium, geometric headings
const outfit = Outfit({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

// Using Playfair Display for ultra-premium elegant accents
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://parthprinttech.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Parth Printtech | Leading Shrink Sleeve & Packaging Film Manufacturer in India",
    template: "%s | Parth Printtech",
  },
  description:
    "Parth Printtech LLP is a premier manufacturer and exporter of PVC & PETG shrink sleeves, BOPP wrap-around labels, heat transfer labels (HTL), and plain PVC shrink films based in Kalol GIDC, Gandhinagar, Gujarat, India.",
  keywords: [
    "PVC shrink sleeves manufacturer",
    "PETG shrink sleeve labels",
    "BOPP wrap around labels",
    "Heat transfer labels HTL India",
    "Plain PVC shrink film rolls",
    "Shrink sleeve label printing Gujarat",
    "Packaging film manufacturer Kalol Gandhinagar",
    "Rotogravure bottle label printing India",
    "Tamper evident neck bands",
    "Custom beverage bottle labels",
    "Cosmetic jar packaging sleeves",
    "Parth Printtech Kalol",
    "Parth Printtech LLP",
    "Industrial packaging solutions Gujarat",
    "Shrink film exporter India"
  ],
  authors: [{ name: "Parth Printtech LLP", url: siteUrl }],
  creator: "Parth Printtech LLP",
  publisher: "Parth Printtech LLP",
  category: "Manufacturing & Industrial Packaging",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Parth Printtech LLP",
    title: "Parth Printtech | Leading Shrink Sleeve & Packaging Film Manufacturer in India",
    description:
      "High-precision rotogravure printed PVC & PETG shrink sleeves, BOPP roll-fed labels, and heat transfer labels engineered for beverage, food, cosmetics, and pharmaceutical brands.",
    images: [
      {
        url: "/logo/world_map_blueprint.png",
        width: 1200,
        height: 630,
        alt: "Parth Printtech - World-Class Packaging Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Parth Printtech | Shrink Sleeve & Packaging Label Manufacturer",
    description:
      "Manufacturer and exporter of custom PVC/PETG shrink sleeves, BOPP wrap-around labels, and heat transfer films in Gujarat, India.",
    images: ["/logo/world_map_blueprint.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-token",
  },
};

export default function RootLayout({ children }) {
  // Schema.org Structured Data: Organization & LocalBusiness
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": `${siteUrl}/#organization`,
    name: "Parth Printtech LLP",
    legalName: "Parth Printtech LLP",
    url: siteUrl,
    logo: `${siteUrl}/logo/world_map_blueprint.png`,
    image: `${siteUrl}/logo/world_map_blueprint.png`,
    description:
      "Premier manufacturer and exporter of PVC & PETG shrink sleeves, BOPP wrap-around labels, heat transfer labels, and plain PVC shrink film.",
    telephone: ["+91 99788 88056", "+91 97247 77606"],
    email: "info@parthprinttech.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "47/8, G.I.D.C., Kalol - 382725 (N.G.)",
      addressLocality: "Kalol",
      addressRegion: "Gujarat",
      postalCode: "382725",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "23.2386",
      longitude: "72.4965",
    },
    priceRange: "$$",
    areaServed: [
      {
        "@type": "Country",
        name: "India",
      },
      {
        "@type": "Place",
        name: "Worldwide",
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    sameAs: [
      "https://twitter.com",
      "https://instagram.com",
      "https://linkedin.com",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: "Parth Printtech",
    description: "Leading Shrink Sleeve & Packaging Film Manufacturer in India",
    publisher: {
      "@id": `${siteUrl}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/products?search={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${geistMono.variable} ${outfit.variable} ${playfair.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        <BackgroundAnimation />
        {children}
      </body>
    </html>
  );
}
