import React from 'react'
import {BsInstagram, BsFacebook} from "react-icons/bs"

const footer = () => {
  return (
    <div className='w-full h-[250px] p-10 text-xl bg-[#fcfd0c]'>
        <div className="links flex gap-10  font-semibold justify-center">
            <a href="/">Accueil</a>
            <a href="/menu">Menu</a>
            <a href="#gallery">Galerie</a>



        </div>
        <br />
        <div className="social flex justify-center gap-10 ">
            <a href="https://www.instagram.com/7skysrestaurant/">
            <BsInstagram className="text-3xl " />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100083896606406"><BsFacebook className="text-3xl " />
</a>
        </div>
        <br />
        <p className='text-black-200 text-center'>Akid lotfi, Bir El Djir, Oran Algeria</p>
        <p className='text-center'>Copyright © 2023 7sky's restaurant. All Rights Reserved.</p>
    </div>
  )
}

export default footer