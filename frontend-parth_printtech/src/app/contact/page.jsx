import { fetchContactData } from "@/lib/api";
import ContactPageClient from "./ContactPageClient";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://parthprinttech.com";

export const metadata = {
  title: "Contact Us & Request Quote | Parth Printtech Kalol Gujarat",
  description:
    "Connect with packaging specialists at Parth Printtech LLP for custom shrink sleeve quotes, material samples, and cylinder technical consultations. Factory located in Kalol GIDC, Gandhinagar, Gujarat, India.",
  keywords: [
    "Contact Parth Printtech",
    "Request shrink sleeve quotation",
    "Packaging film supplier contact number Gujarat",
    "Parth Printtech Kalol GIDC address",
    "Bottle label printing inquiry India",
    "Shrink sleeve sample request"
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Parth Printtech | Quotations & Packaging Consultation",
    description:
      "Reach out to Parth Printtech LLP for premium shrink sleeves, BOPP labels, and HTL quotations. Rapid 24hr response guaranteed.",
    url: "/contact",
    images: [
      {
        url: "/logo/world_map_blueprint.png",
        width: 1200,
        height: 630,
        alt: "Contact Parth Printtech",
      },
    ],
  },
};

export default async function ContactPage() {
  const contactData = await fetchContactData();

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Parth Printtech LLP",
    description: "Contact page for industrial packaging and shrink sleeve inquiries.",
    url: `${siteUrl}/contact`,
    mainEntity: {
      "@type": "LocalBusiness",
      name: "Parth Printtech LLP",
      telephone: "+91-9978888056",
      email: "info@parthprinttech.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "47/8, G.I.D.C., Kalol - 382725 (N.G.)",
        addressLocality: "Kalol",
        addressRegion: "Gujarat",
        postalCode: "382725",
        addressCountry: "IN",
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact Us",
        item: `${siteUrl}/contact`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ContactPageClient initialData={contactData} />
    </>
  );
}
