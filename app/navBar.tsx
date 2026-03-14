"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import { assets } from "./assests";
import Image from "next/image";


const NavBar = ({header, about, projects, testimonials}: any) => {
   const [showMobileMenu, setShowMobileMenu] = useState(false);



 useEffect(() => {
    if(showMobileMenu){
        document.body.style.overflow = 'hidden'
    }else{
        document.body.style.overflow = 'auto'
    }

    return () => {
        document.body.style.overflow = 'auto'; // Reset overflow when component unmounts
    }
 }, [showMobileMenu])

  return (
    <div className='absolute top-0 left-0 w-full z-10'>
        <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>

            <Link href="/">
            <Image src={assets.sanityPrimeLogo} alt="Nav Logo" className="w-[14rem]"></Image>
            </Link>

            <ul className='hidden md:flex gap-7 text-white'>
                <a href={header} className='cursor-pointer hover:text-gray-400'>Home</a>
                <a href={about} className='cursor-pointer hover:text-gray-400'>About</a>
                <a href={projects} className='cursor-pointer hover:text-gray-400'>Projects</a>
                <a href={testimonials} className='cursor-pointer hover:text-gray-400'>Testimonials</a>
            </ul>
           

             <Image src={assets.menuIcon} onClick={() => setShowMobileMenu(true)} className='w-7 cursor-pointer md:hidden' alt="menu icon"></Image>
        </div>
      {/* ------------------------ MOBILE MENU ---------------------------------- */}
       <div className={`md:hidden ${ showMobileMenu ? 'fixed w-full' : 'h-0 w-0'} top-0 right-0 bottom-0 bg-white shadow-lg overflow-hidden transition-all duration-300 ease-in-out z-20`}>
            <div className='flex justify-end p-6 cursor-pointer'> 
                <Image src={assets.crossIcon} onClick={() => setShowMobileMenu(false)} className='w-6' alt="cross icon"></Image>
            </div>
            <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-black text-lg font-semibold'>
                <a href={header} className='px-4 py-2 inline-block hover:bg-gray-200 ' onClick={() => setShowMobileMenu(false)}>Home</a>
                <a href={about} className='px-4 py-2 inline-block hover:bg-gray-200' onClick={() => setShowMobileMenu(false)}>About</a>
                <a href={projects} className='px-4 py-2 inline-block hover:bg-gray-200' onClick={() => setShowMobileMenu(false)}>Projects</a>
                <a href={testimonials} className='px-4 py-2 inline-block hover:bg-gray-200' onClick={() => setShowMobileMenu(false)}>Testimonials</a>
            </ul>
        </div> 


    </div>
  )
}

export default NavBar;
