"use client"

import Image from "next/image";
import { assets, testimonialsData } from "./assests";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <motion.div
    initial={{opacity: 0, x: -100}}
    transition={{duration: 1.5}}
    whileInView={{opacity: 1, x: 0}}
    viewport={{ once: true }}  
    className="container mx-auto mb-4 py-10 lg:px-32 w-full overflow-hidden" id='Testimonials'>
     <h1 className='text-2xl sm:text-4xl mb-2 font-bold text-center'>Customer <span className='underline underline-offset-4 under decoration-1 font-light'>Testimonials</span></h1>
    <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Real Stories from Those Who Found a Home With Us</p>


    <div className='flex flex-wrap justify-center gap-8'>
      {
      testimonialsData.map((testimonial, index) => (
        <div key={index} className='max-w-[340px] shadow-lg rounded px-8 py-12 text-center'>
          <h2 className='text-xl text-gray-700 font-medium'>{testimonial.name}</h2>
          <p className='text-gray-500 mb-4 text-sm'>{testimonial.title}</p>
          <div className='flex justify-center text-red-500 gap-1 mb-4'>
            {Array.from({ length: testimonial.rating }, (item, index) => (
              <Image key={index} src={assets.starIcon} alt=""></Image>
            ))}
          </div>
          <p className=''>{testimonial.text}</p>

        </div>
      ))
      }
    </div>
    </motion.div>
  )
}

export default Testimonials;
