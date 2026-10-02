import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import AboutHero from '@/components/About/AboutHero';
import AboutFounders from '@/components/About/AboutFounders';
import AboutVisionMission from '@/components/About/AboutVisionMission';
import AboutHistory from '@/components/About/AboutHistory';
import Footer from '@/components/Footer/Footer';
import { fetchAboutData } from '@/lib/api';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://parthprinttech.com";

export const metadata = {
  title: "About Us | Parth Printtech - Leaders in Shrink Sleeve & Packaging Engineering",
  description:
    "Learn about Parth Printtech LLP: A trusted industrial manufacturer and exporter of PVC & PETG shrink sleeves, BOPP wrap-around labels, and flexible packaging films located in Kalol GIDC, Gandhinagar, Gujarat.",
  keywords: [
    "About Parth Printtech",
    "Shrink sleeve manufacturer company profile",
    "Rotogravure printing factory Gujarat",
    "Packaging film manufacturers Kalol GIDC",
    "Parth Printtech directors and founders",
    "Bottle label engineering Gujarat India"
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Parth Printtech - Packaging Innovators",
    description:
      "Precision engineering, rotogravure printing excellence, and cutting-edge shrink sleeve label production since 2009 in Kalol, Gujarat.",
    url: "/about",
    images: [
      {
        url: "/logo/world_map_blueprint.png",
        width: 1200,
        height: 630,
        alt: "About Parth Printtech Factory & Team",
      },
    ],
  },
};

export default async function AboutPage() {
  const aboutData = await fetchAboutData();

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
        name: "About Us",
        item: `${siteUrl}/about`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main style={{ minHeight: '100vh', overflow: 'hidden' }}>
        <AboutHero data={aboutData?.hero} />
        <AboutFounders data={aboutData?.founders} />
        <AboutVisionMission data={aboutData?.visionMission} />
        <AboutHistory data={aboutData?.history} />
      </main>
      <Footer />
    </>
  );
}
