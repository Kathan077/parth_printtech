import Navbar from "@/components/Navbar/Navbar";
import VideoSlider from "@/components/Home/VideoSlider/VideoSlider";
import WhoWeAre from "@/components/Home/WhoWeAre/WhoWeAre";
import MarketsWeServe from "@/components/Home/MarketsWeServe/MarketsWeServe";
import Products from "@/components/Home/Products/Products";
import Clients from "@/components/Home/Clients/Clients";
import Testimonials from "@/components/Home/Testimonials/Testimonials";
import OurValues from "@/components/Home/OurValues/OurValues";
import Footer from "@/components/Footer/Footer";
import { fetchHomeData } from "@/lib/api";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata = {
  title: "Parth Printtech | Leading Shrink Sleeve & Packaging Film Manufacturer in India",
  description:
    "Parth Printtech LLP is India's leading manufacturer of high-precision PVC & PETG shrink sleeves, roll-fed BOPP wrap-around labels, heat transfer labels (HTL), and plain PVC shrink film based in Kalol, Gandhinagar, Gujarat.",
  keywords: [
    "PVC shrink sleeve manufacturer India",
    "PETG shrink sleeve labels Gujarat",
    "BOPP wrap around labels manufacturer",
    "Heat transfer labels HTL India",
    "Plain PVC shrink film supplier Kalol",
    "Shrink sleeve bottle label printing",
    "Rotogravure bottle packaging films",
    "Parth Printtech Kalol Gandhinagar",
    "Beverage bottle labeling solutions",
    "Tamper evident packaging labels India"
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Parth Printtech | Leading Shrink Sleeve & Packaging Film Manufacturer in India",
    description:
      "Gujarat's premier manufacturer of custom printed PVC & PETG shrink sleeves, BOPP wrap-around bottle labels, heat transfer labels, and industrial packaging films.",
    url: "/",
    siteName: "Parth Printtech",
    images: [
      {
        url: "/logo/world_map_blueprint.png",
        width: 1200,
        height: 630,
        alt: "Parth Printtech Packaging Solutions",
      },
    ],
  },
};

export default async function Home() {
  const homeData = await fetchHomeData();

  return (
    <div>
      <Navbar />
      <VideoSlider data={homeData?.heroSlides} heroVideo={homeData?.heroVideo} />
      <WhoWeAre data={homeData?.whoWeAre} />
      <MarketsWeServe data={homeData?.markets} />
      <Products data={homeData?.featuredProducts} />
      <Clients data={homeData?.clients} />
      <Testimonials data={homeData?.testimonials} />
      <OurValues data={homeData?.values} />
      <Footer />
    </div>
  );
}
