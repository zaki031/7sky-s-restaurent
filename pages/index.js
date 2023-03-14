import Head from "next/head";
import { Inter } from "@next/font/google";
import Navbar from "../components/navbar";
import Accueil from "../components/home";
import Gallery from "../components/gallery";
import Footer from "../components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[#1E1E1E] overflow-hidden">
      <Head>
        <title>7sky's restaurant</title>
      </Head>
      <Navbar/>
      <Accueil/>
      <Gallery/>
      <br /><br /><br />
      <Footer />
      
    </div>
  );
}
