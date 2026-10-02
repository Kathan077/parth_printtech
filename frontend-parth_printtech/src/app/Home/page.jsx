import Navbar from "@/components/Navbar/Navbar";
import WhoWeAre from "@/components/Home/WhoWeAre/WhoWeAre";
import { fetchHomeData } from "@/lib/api";
import styles from "../page.module.css";

export const dynamic = 'force-dynamic';

export default async function Home() {
  const homeData = await fetchHomeData();
  return (
    <div>
      <Navbar />
      <WhoWeAre data={homeData?.whoWeAre} />
    </div>
  );
}
