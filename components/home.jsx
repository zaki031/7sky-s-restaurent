import React from "react";
import img from "../public/home.jpg";
import Image from "next/image";
import {BsFillTelephoneForwardFill} from "react-icons/bs"
import menu from "./menu";
const home = () => {
  return (
    <div className=" text-white  h-screen items-center pt-20 p-[50px] justify-between flex">
      <svg className="h-full w-full absolute inset-0 z-[0] opacity-5"  viewBox="0 0 1376 768">
      <g mask="url(&quot;#SvgjsMask1013&quot;)" fill="none">
        <path d="M1179.82 551.54L1213.22 551.54L1213.22 569.54L1179.82 569.54z" fill="rgba(245, 215, 41, 1)"></path>
        <path d="M524.32 491.22L543.7 491.22L543.7 521.62L524.32 521.62z" fill="rgba(245, 215, 41, 1)"></path>
        <path d="M1303.7 223.13L1334.12 223.13L1334.12 296.05L1303.7 296.05z" fill="rgba(245, 215, 41, 1)"></path>
        <path d="M963.29 243.13L1016.71 243.13L1016.71 245.01L963.29 245.01z" stroke="rgba(245, 215, 41, 1)"></path>
        <path d="M752.04 555.32 a69.08 69.08 0 1 0 138.16 0 a69.08 69.08 0 1 0 -138.16 0z" fill="rgba(245, 215, 41, 1)"></path>
        <path d="M1308.9 657.58L1316.43 657.58L1316.43 664.48L1308.9 664.48z" stroke="rgba(66, 68, 90, 1)"></path>
        <path d="M1078.98 470.26L1107.48 470.26L1107.48 498.76L1078.98 498.76z" fill="rgba(95, 198, 255, 1)"></path>
        <path d="M434.35 79.05L438.77 79.05L438.77 83.47L434.35 83.47z" stroke="rgba(95, 198, 255, 1)"></path>
        <path d="M203.59 387.45L253.09 387.45L253.09 424.77L203.59 424.77z" fill="rgba(95, 198, 255, 1)"></path>
        <path d="M391.38 103.64 a51.18 51.18 0 1 0 102.36 0 a51.18 51.18 0 1 0 -102.36 0z" stroke="rgba(66, 68, 90, 1)"></path>
        <path d="M412.5 732.62L469.76 732.62L469.76 787.97L412.5 787.97z" stroke="rgba(66, 68, 90, 1)"></path>
        <path d="M970.07 392.74L1023.6 392.74L1023.6 446.27L970.07 446.27z" fill="rgba(245, 215, 41, 1)"></path>
        <path d="M654.76 287.57L694.05 287.57L694.05 326.86L654.76 326.86z" stroke="rgba(66, 68, 90, 1)"></path>
        <path d="M1278.68 97.16L1300.57 97.16L1300.57 144.92L1278.68 144.92z" stroke="rgba(66, 68, 90, 1)"></path>
        <path d="M705.77 345.35 a63.98 63.98 0 1 0 127.96 0 a63.98 63.98 0 1 0 -127.96 0z" stroke="rgba(95, 198, 255, 1)"></path>
        <path d="M307.5 728.12a72.25 72.25 0 1 0-69.93-126.46z" stroke="rgba(245, 215, 41, 1)"></path>
        <path d="M1000.71 178.05a26.25 26.25 0 1 0-49.27 18.14z" fill="rgba(245, 215, 41, 1)"></path>
        <path d="M24.45 298.94 a20.14 20.14 0 1 0 40.28 0 a20.14 20.14 0 1 0 -40.28 0z" fill="rgba(245, 215, 41, 1)"></path>
        <path d="M943.91 764.96a74.76 74.76 0 1 0 145.6-34.04z" stroke="rgba(245, 215, 41, 1)"></path>
        <path d="M1343.23 38.91L1388.95 38.91L1388.95 84.63L1343.23 84.63z" fill="rgba(95, 198, 255, 1)"></path>
        <path d="M673.59 475.17a30.12 30.12 0 1 0-60.23 0.93z" stroke="rgba(66, 68, 90, 1)"></path>
        <path d="M769.97 106.78 a45.72 45.72 0 1 0 91.44 0 a45.72 45.72 0 1 0 -91.44 0z" fill="rgba(245, 215, 41, 1)"></path>
        <path d="M953.5 36.45 a45.71 45.71 0 1 0 91.42 0 a45.71 45.71 0 1 0 -91.42 0z" stroke="rgba(245, 215, 41, 1)"></path>
    </g>
    <defs>
        <mask id="SvgjsMask1013">
            <rect width="1376" height="768" fill="#ffffff"></rect>
        </mask>
    </defs>
</svg>
      <div className="flex relative bottom-8 gap-y-12 flex-col">
        <div className=" flex flex-col">
        <p className=" uppercase text-blue-100 tracking-widest  relative left-2 text-2xl mb-[-40px] ">Arwah</p>
        <h1 className="font-bold uppercase max-w-2xl relative bottom-4 text-7xl z-1 ">
          {" "}
          <br />
          OU DECOUVRI EL <span className="text-[#fcfd0c] text-7xl">BENA</span> ENDNA!!
        </h1>
        </div>
        <div className="flex gap-x-12 z-[1] relative">
          <a  href="tel:+213541126006" className=" bg-white transition-all hover:bg-blue-100 duration-300 ease-out hover:-translate-y-1 shadow-xl shadow-stone-700 text-[#1E1E1E] items-center font-bold w-64 px-8 flex justify-between  h-14 rounded-lg">
              <BsFillTelephoneForwardFill className="text-xl text-stone-600" />Commandez doka!
          </a>
          <a
            href="/menu"
            className="text-md cursor-pointer items-center font-semibold transition-all hover:outline-blue-100 duration-300 ease-out hover:-translate-y-1 flex px-8 text-center text-white outline outline-[#fcfd0c]   rounded-lg"
          >
            7sky's menu
          </a>
        </div>

        {/* <a href="" className='text-[#fcfd0c] text-3xl'><i class="uil uil-instagram"></i></a>
        <a href="" className='text-[#fcfd0c] text-3xl'><i class="uil uil-map-marker"></i></a>     */}
      </div>



      <div className="relative">
        <div className="border-[#fcfd0c] rotate-3 border-2 w-[600px] h-[400px] absolute z-[0] rounded-xl"></div>
        {/* use object cover or else you'll mess up the images ASPECT RATIO */}
        <Image
          src={img}
          className="rounded-xl object-cover  w-[600px] h-[400px] z-[5] rotate-[-3deg]"
          width={500}
          height={500}
        ></Image>

        <p className="text-gray-300 relative top-4 text-center mt-4">
          {" "}
          <i className="uil uil-map-marker"></i> 7sky's restaurent, Akid Lotfi, Oran
        </p>
      </div>
    </div>
  );
};

export default home;
