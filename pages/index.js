import Head from "next/head";
import { Inter } from "@next/font/google";
import Navbar from "../components/navbar";
import Accueil from "../components/home";
import Menu from "../components/menu"
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[#1E1E1E] w-screen">
      <Head>
        <title>Create Next App</title>
        
        
        {/* you weren't importing the "bold" weight  and doing it in the wrong place */}
      </Head>
      <Navbar />
      <Accueil />
      <Menu/>
    </div>
  );
}
