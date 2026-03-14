import { FaPhone } from "react-icons/fa";

const HeroSection = () => {
  return (
   <div
       className="container text-center mx-auto text-white">
      <h1 className='text-5xl sm:text-6xl md:text-[90px] inline-block max-w-4xl pt-20'>
        The best affordable Kitchen & Gas solutions
      </h1>
      <div className='space-x-6 mt-16 flex-column md:flex-row flex flex-col justify-center items-center gap-4'>
        <a href="#Projects" className='border border-white px-8 py-3 rounded'>Projects</a>
        <a href="tel:+2347012715335" className='flex justify-between gap-2 bg-blue-500 px-8 py-3 rounded'>
          <h1>Call Now</h1>
          <FaPhone className="mt-1"/>
        </a>
    </div>
    </div>
  )
}

export default HeroSection;
