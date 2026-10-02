import { fetchProductById } from "@/lib/api";
import ProductDetailPageClient from "./ProductDetailPageClient";
import { productsData } from "../productsData";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://parthprinttech.com";

// Keyword dictionaries for individual products to maximize search ranking
const productKeywordsMap = {
  "pvc-shrink-sleeves": [
    "PVC shrink sleeves manufacturer India",
    "custom printed PVC shrink sleeve labels",
    "tamper evident PVC shrink neck bands",
    "360 degree bottle label printing Gujarat",
    "58 percent shrinkage PVC film",
    "rotogravure printed PVC sleeves Kalol",
    "beverage bottle shrink sleeve supplier",
    "cosmetics jar PVC sleeve label"
  ],
  "petg-shrink-sleeves": [
    "PETG shrink sleeves manufacturer India",
    "eco-friendly recyclable PETG shrink film",
    "78 percent high shrinkage sleeve labels",
    "aerosol can PETG shrink sleeves",
    "contour bottle PETG packaging labels",
    "sustainable shrink sleeve printing Gujarat",
    "PETG vs PVC shrink sleeve comparison",
    "premium beverage PETG shrink labels"
  ],
  "bopp-wrap-around-labels": [
    "BOPP wrap around labels manufacturer",
    "roll fed BOPP bottle labels India",
    "mineral water bottle BOPP labels",
    "pearlised and transparent BOPP labels",
    "hot melt adhesive BOPP wrap around labels",
    "high speed rotary labeling film Gujarat",
    "carbonated soft drink bottle labels",
    "BOPP film printing Kalol Gandhinagar"
  ],
  "heat-transfer-labels": [
    "Heat transfer labels HTL manufacturer India",
    "direct plastic container heat transfer printing",
    "scratch proof HTL labels for PE PP PET containers",
    "lube oil container heat transfer labels",
    "paint bucket HTL printing Gujarat",
    "seamless no-label look container decoration",
    "UV cured heat transfer label supplier",
    "chemical resistant container labeling"
  ],
  "plain-pvc-shrink-film": [
    "plain PVC shrink film rolls manufacturer",
    "unprinted PVC shrink film Gujarat",
    "layflat and centerfold PVC shrink wrap rolls",
    "industrial PVC shrink film supplier Kalol",
    "promotional multi-pack PVC shrink film",
    "tamper proof clear shrink packaging film",
    "heat sealable PVC shrink film India",
    "bulk packaging shrink wrap rolls"
  ]
};

export async function generateMetadata({ params }) {
  const { id } = await params;
  let product = await fetchProductById(id);

  if (!product) {
    product = productsData.find((p) => p.id === id);
  }

  if (!product) {
    return {
      title: "Packaging Solution | Parth Printtech",
      description: "Custom shrink sleeves and industrial packaging film solutions by Parth Printtech.",
    };
  }

  const keywords = productKeywordsMap[id] || [
    `${product.title} manufacturer`,
    `${product.title} India`,
    `${product.title} supplier Gujarat`,
    "industrial packaging labels",
  ];

  const imageUrl = product.image?.startsWith("http")
    ? product.image
    : `${siteUrl}${product.image}`;

  return {
    title: `${product.title} Manufacturer & Exporter in India`,
    description: `${product.detailedDescription || product.description} Engineered by Parth Printtech with custom specifications for high-speed automated packaging lines.`,
    keywords: keywords,
    alternates: {
      canonical: `/products/${id}`,
    },
    openGraph: {
      title: `${product.title} | Parth Printtech Packaging Solutions`,
      description: product.description,
      url: `/products/${id}`,
      type: "article",
      images: [
        {
          url: imageUrl,
          width: 800,
          height: 600,
          alt: `${product.title} - Parth Printtech`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.title} | Parth Printtech`,
      description: product.description,
      images: [imageUrl],
    },
  };
}

export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  let product = await fetchProductById(id);

  if (!product) {
    product = productsData.find((p) => p.id === id);
  }

  const imageUrl = product?.image?.startsWith("http")
    ? product.image
    : `${siteUrl}${product?.image || "/logo/world_map_blueprint.png"}`;

  // Schema.org Product & BreadcrumbList Structured Data
  const productSchema = product
    ? {
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.title,
        image: imageUrl,
        description: product.detailedDescription || product.description,
        category: product.category,
        brand: {
          "@type": "Brand",
          name: "Parth Printtech",
        },
        manufacturer: {
          "@type": "Organization",
          name: "Parth Printtech LLP",
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "INR",
          price: "Contact for Quote",
          availability: "https://schema.org/InStock",
          url: `${siteUrl}/products/${id}`,
          seller: {
            "@type": "Organization",
            name: "Parth Printtech LLP",
          },
        },
        additionalProperty: product.specs?.map((spec) => ({
          "@type": "PropertyValue",
          name: spec.label,
          value: spec.value,
        })) || [],
      }
    : null;

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
        name: "Products",
        item: `${siteUrl}/products`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product?.title || "Product Details",
        item: `${siteUrl}/products/${id}`,
      },
    ],
  };

  return (
    <>
      {productSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ProductDetailPageClient initialProduct={product} />
    </>
  );
}
