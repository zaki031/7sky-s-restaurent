import Menu from  '../components/menu'
import Navbar from '../components/navbar';
import Head from "next/head";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });


const menu = () => {
    return ( 
        
        <div className='bg-[#1E1E1E] overflow-hidden'>
        <Head>
            <title>7sky's Menu</title>
        </Head>
        <Navbar/>
            <br /><br />
        <Menu/>
        
        </div>
     );
}
 
export default menu;