import { fetchProductsData } from "@/lib/api";
import ProductsPageClient from "./ProductsPageClient";
import { productsData } from "./productsData";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://parthprinttech.com";

export const metadata = {
  title: "Products & Packaging Solutions | PVC, PETG & BOPP Labels",
  description:
    "Explore world-class packaging films and labels manufactured by Parth Printtech: Custom PVC Shrink Sleeves, Eco-Friendly PETG Sleeves, High-Speed BOPP Wrap-Around Labels, Heat Transfer Labels (HTL), and Plain PVC Shrink Film.",
  keywords: [
    "PVC shrink sleeves manufacturer",
    "PETG shrink sleeve labels India",
    "BOPP wrap around labels roll fed",
    "Heat transfer labels HTL containers",
    "Plain PVC shrink film rolls Gujarat",
    "Bottle label printing factory",
    "Rotogravure printed shrink packaging",
    "Tamper proof shrink seals"
  ],
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "Products & Packaging Solutions | Parth Printtech",
    description:
      "High-precision rotogravure printed shrink sleeves, BOPP wrap-around labels, and heat transfer labels engineered for container decoration.",
    url: "/products",
    images: [
      {
        url: "/logo/world_map_blueprint.png",
        width: 1200,
        height: 630,
        alt: "Parth Printtech Products Catalog",
      },
    ],
  },
};

export default async function ProductsPage() {
  const { header, products } = await fetchProductsData();

  // Schema.org ItemList Schema for Product Catalog
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: (products && products.length > 0 ? products : productsData).map(
      (prod, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: prod.title,
        url: `${siteUrl}/products/${prod.id}`,
        description: prod.description,
      })
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <ProductsPageClient
        initialProducts={products}
        initialHeader={header}
      />
    </>
  );
}
