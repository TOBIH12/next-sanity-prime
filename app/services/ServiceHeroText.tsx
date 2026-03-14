"use client"

import { motion } from "framer-motion"

const ServiceHeroText = () => {
  return (
    <motion.div
       initial={{opacity: 0, y: 100}}
       transition={{duration: 1.5}}
       whileInView={{opacity: 1, y: 0}}
       viewport={{ once: true }} 
       className="container text-center mx-auto text-white">
      <h1 className='text-5xl sm:text-6xl md:text-[90px] inline-block max-w-4xl pt-20'>
        What we Offer
      </h1>
      <div className='space-x-6 mt-16 flex-column md:flex-row flex flex-col justify-center items-center gap-4'>
        <a href="tel:+2347012715335" className='bg-blue-500 px-8 py-3 rounded'>Book a service now</a>
    </div>
    </motion.div>
  )
}

export default ServiceHeroText;
