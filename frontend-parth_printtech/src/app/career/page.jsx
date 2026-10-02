import { fetchCareerData } from "@/lib/api";
import CareerPageClient from "./CareerPageClient";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://parthprinttech.com";

export const metadata = {
  title: "Careers at Parth Printtech | Packaging & Printing Industry Jobs",
  description:
    "Explore career opportunities at Parth Printtech LLP in Kalol, Gujarat. Join our team in rotogravure printing, packaging engineering, quality assurance, and global sales.",
  keywords: [
    "Packaging industry jobs Gujarat",
    "Printing technician vacancies Kalol",
    "Rotogravure machine operator jobs",
    "Parth Printtech careers Gandhinagar",
    "Industrial packaging careers India"
  ],
  alternates: {
    canonical: "/career",
  },
  openGraph: {
    title: "Careers at Parth Printtech",
    description:
      "Build your career in advanced industrial packaging and high-precision rotogravure printing with Parth Printtech LLP.",
    url: "/career",
    images: [
      {
        url: "/logo/world_map_blueprint.png",
        width: 1200,
        height: 630,
        alt: "Careers at Parth Printtech",
      },
    ],
  },
};

export default async function CareerPage() {
  const careerData = await fetchCareerData();

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
        name: "Careers",
        item: `${siteUrl}/career`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CareerPageClient initialData={careerData} />
    </>
  );
}
