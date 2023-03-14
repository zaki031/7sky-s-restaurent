import React from 'react'
import Image from 'next/image'
import img1 from '../public/gallerie/1.png'
import img2 from '../public/gallerie/2.png'
import img3 from '../public/gallerie/3.png'
import img4 from '../public/gallerie/4.png'
import img5 from '../public/gallerie/5.png'
import img6 from '../public/gallerie/6.png'
import img7 from '../public/gallerie/7.png'
import img8 from '../public/gallerie/8.png'





const gallery = () => {
  return (
    <div>
        <section>
            <h1 className='font-bold text-7xl text-[#fcfd0c] text-center'>Gallerie</h1>
            <br /><br /><br />
            <div className="gallery">

                <div className="">
                    <Image alt='pizza' className='hover: duration-200 ease-in hover:-translate-y-1 ' src={img1}></Image>
                </div>
                <div className="w-stretch">
                    <Image alt='pizza' className='hover: duration-200 ease-in hover:-translate-y-1 ' src={img3}></Image>
                </div>
                <div className="">
                    <Image alt='pizza' className='hover: duration-200 ease-in hover:-translate-y-1 ' src={img4}></Image>
                </div>
                <div className="h-stretch">
                    <Image alt='pizza' className='hover: duration-200 ease-in hover:-translate-y-1 ' src={img2}></Image>
                </div>
                <div className="">
                    <Image alt='pizza' className='hover: duration-200 ease-in hover:-translate-y-1 ' src={img6}></Image>
                </div>
                <div className="w-stretch">
                    <Image alt='pizza' className='hover: duration-200 ease-in hover:-translate-y-1 ' src={img8}></Image>
                </div>
                <div className="h-stretch">
                    <Image alt='pizza' className='hover: duration-200 ease-in hover:-translate-y-1 ' src={img5}></Image>
                </div>
                <div className="">
                    
                    <Image alt='pizza' className='hover: duration-200 ease-in hover:-translate-y-1 ' src={img7}></Image>
                </div>
            </div>
        </section>
    </div>
  )
}

export default gallery