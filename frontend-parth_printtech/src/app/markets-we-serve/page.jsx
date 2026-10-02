import { fetchMarketsData } from "@/lib/api";
import MarketsPageClient from "./MarketsPageClient";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://parthprinttech.com";

export const metadata = {
  title: "Markets We Serve | Beverage, Food, Pharma & Cosmetic Packaging Labels",
  description:
    "Parth Printtech delivers engineered shrink sleeve labels and packaging films tailored for Beverages, Mineral Water, Dairy, FMCG Food, Pharmaceuticals, Cosmetics, Agro-Chemicals, and Automotive Lubricants.",
  keywords: [
    "Beverage bottle shrink sleeve labels",
    "Mineral water bottle BOPP labels",
    "Pharmaceutical tamper evident bottle seals",
    "Cosmetic jar heat transfer labels",
    "Agro chemical container packaging sleeves",
    "Dairy product shrink sleeve labels",
    "Automotive lube oil container HTL printing",
    "Food packaging films manufacturer Gujarat"
  ],
  alternates: {
    canonical: "/markets-we-serve",
  },
  openGraph: {
    title: "Markets We Serve | Parth Printtech",
    description:
      "Engineered packaging labels for global brands across Beverages, FMCG, Pharma, Cosmetics, and Industrial Sectors.",
    url: "/markets-we-serve",
    images: [
      {
        url: "/logo/world_map_blueprint.png",
        width: 1200,
        height: 630,
        alt: "Markets We Serve - Parth Printtech",
      },
    ],
  },
};

export default async function MarketsWeServePage() {
  const marketsData = await fetchMarketsData();

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
        name: "Markets We Serve",
        item: `${siteUrl}/markets-we-serve`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <MarketsPageClient initialData={marketsData} />
    </>
  );
}
