"use client"

import { motion } from "framer-motion";
import { assets } from "../assests"
import Image from "next/image";

const images = [
   {image: assets.hMedix},
   {image: assets.nordic},
   {image: assets.akaraCafe}
];

const Clients = () => {
  return (
    <motion.div
    initial={{opacity: 0, x: 100}}
    transition={{duration: 1.5}}
    whileInView={{opacity: 1, x: 0}}
    viewport={{ once: true }}  
    className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-10 w-full overflow-hidden'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Our <span className='underline underline-offset-4 decoration-1 under font-light'>Clients</span></h1>

        <p className='text-center text-gray-500 max-w-80 mb-8 mx-auto'>Famous clients we've worked with</p>

        <div className="flex flex-col gap-5 md:gap-1 md:flex-row justify-between mt-9">
            {
                images.map((image, index) => <Image key={index} src={image.image} alt="clients logos" className="w-full p-5 md:w-1/4"></Image>)
            }
        </div>
    </motion.div>
  )
}

export default Clients;
