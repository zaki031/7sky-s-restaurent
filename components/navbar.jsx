import React from "react";

const navbar = () => {
  return (
    <div className="navbar text-white flex justify-between  px-[50px] py-[30px]">
      <a href="/" className="font-bold text-2xl">7 Sky's</a>
      <div className="links hidden sm:flex gap-[50px]">
        <a href="/">Accueil</a>
        <a href="menu" className="">Menu</a>
        <a href="">Gallery</a>
        <a className="bg-[#fcfd0c] rounded-xl mt-[-5px] p-2 text-[#1E1E1E]">0698 88 13 62</a>
      </div>
    </div>
  );
};

export default navbar;
