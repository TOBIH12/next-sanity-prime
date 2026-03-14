import Image from "next/image";
import { assets } from "../assests";

const Footer = () => {
  return (
     <div className='pt-10 px-4 md:px-20 lg:px-32 w-full overflow-hidden bg-gray-900' id='Footer'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
        <div className='w-full md:w-1/3 mb-6 md:mb-0'>
            <Image src={assets.sanityPrimeLogo} height={90} alt="logo" priority></Image>
            <p className='text-gray-400 mt-1'>With a focus on safety, quality workmanship, and dependable service, Sanity Prime Tech is committed to helping restaurants, catering businesses, and homeowners build and maintain kitchens that perform at their best.</p>
        </div>
        <div className='w-full md:w-1/5 mb-8 md:mb-0'>
            <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
            <ul className='text-gray-400 flex flex-col gap-2'>
                <a href="#Header" className='hover:text-white'>Home</a>
                <a href="#About" className='hover:text-white'>About us</a>
                <a href="#Contact" className='hover:text-white'>Contact us</a>
                <a href="#" className='hover:text-white'>Privacy policy</a>
            </ul>
        </div>
        <div className='w-full md:w-1/3'>
        <h3 className='text-white text-lg font-bold mb-4'>Subscribe to out newsletter</h3>
        <p className='text-gray-400 mb-4 max-w-80'>
            The latest news, articles, and resources, sent to your inbox weekly.
        </p>
        <div className='flex gap-2'>
            <input type="email" placeholder='Enter your Email' className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto' />
            <button className='py-2 px-4 rounded bg-blue-500 text-white'>Subscribe</button>
        </div>
        </div>
      </div>

      {/* COPYRIGHT LISCENCE */}
      
      <div className='text-gray-500 py-2 border-t border-gray-700 text-center mt-10'>
        Copyright 2026 &copy; Tobi.Dev All Rights Reserved. <br />
      </div>
    </div>
  )
}

export default Footer;
