import Link from "next/link"
import { assets } from "./assests"
import Image from "next/image"
import { motion } from "framer-motion"


const AboutCard = () => {
  return (
     <motion.div
    initial={{opacity: 0, x: -100}}
    transition={{duration: 1.5}}
    whileInView={{opacity: 1, x: 0}}
    viewport={{ once: true }} 
    className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden rounded' id='About'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1 under font-light'>Our Brand</span></h1>
     <p className='text-gray-500 max-w-80 text-center mb-8'>Passionate About Quality, Dedicated to Your Vision</p>

     <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
    <Image src={assets.aboutImg} alt="" className='w-full sm:w-2/3 max-w-lg rounded-full' ></Image>

    <div className='flex flex-col items-center md:items-start text-gray-600 mt-10'>

        <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl-pr-28'>
            <div>
                <p className='text-4xl font-medium text-gray-800'>5+</p>
                <p>Years of Excellence</p>
            </div>
            <div>
                <p className='text-4xl font-medium text-gray-800'>25+</p>
                <p>Projects Completed</p>
            </div>
            <div>
                <p className='text-4xl font-medium text-gray-800'>20+</p>
                <p>Appliances Constructed & Delivered</p>
            </div>
            <div>
                <p className='text-4xl font-medium text-gray-800'>10+</p>
                <p>Ongoing Projects</p>
            </div>
        </div>

        <p className='my-10 max-w-lg'>At <small className="text-[1rem] font-bold">Sanity Prime Technologies</small>, we specialize in delivering reliable and professional kitchen engineering solutions for both commercial and residential clients. Our services cover every critical aspect of kitchen functionality, from safe gas piping and installation for commercial kitchen equipment to the repair and maintenance of essential appliances such as ovens, cookers, burners, and fryers...</p>

        <Link href={'/services'}>
        <button className='bg-blue-600 text-white px-8 py-2 cursor-pointer hover:bg-blue-500 rounded'>Read More</button>
        </Link>
        
    </div>

     </div>
    </motion.div>
  )
}

export default AboutCard;
