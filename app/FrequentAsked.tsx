"use client"

import { useState } from "react";
import { frequentlyAskedQuestions } from "./assests";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { motion } from "framer-motion";

const FrequentAsked = () => {
    const [openCard, setOpenCard] = useState(null);

    const handleCardClick = (index: any) => {
        setOpenCard(openCard === index ? null : index)
    }
  return (
    <motion.div
    initial={{opacity: 0, x: 100}}
    transition={{duration: 1.5}}
    whileInView={{opacity: 1, x: 0}}
    viewport={{ once: true }}   className="container mx-auto mb-4 py-10 lg:px-32 w-full overflow-hidden" id="FAQs">
        <h1 className='text-2xl sm:text-4xl mb-2 font-bold text-center'>Frequent <span className='underline underline-offset-4 under decoration-1 font-light'>Questions</span></h1>

         <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Got some questions? Here are some good ones and their answers</p>

    <div className="flex flex-wrap justify-center gap-8 p-2">
      {
        frequentlyAskedQuestions.map((field, index) => (
            <div key={index} className="md:w-1/3 rounded-lg shadow-sm cursor-pointer">
                <div className="w-full p-2 flex justify-between mb-2" onClick={() => handleCardClick(index)}>
                  <h1 className="font-bold">{field.question}</h1>  
                   {openCard === index ? <FaAngleUp className="text-2xl"/> : <FaAngleDown className="text-2xl"/>}
                </div>
               {
               openCard === index &&
               (<div className="w-full p-4 text-gray-600 bg-blue-50 border-t">
                   {field.answer}
                </div>)
}
            </div>
        ))
      }
    </div>
    </motion.div>
  )
}

export default FrequentAsked;
