"use client"

import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8ad197df-5687-4938-b280-d6c2cba6e198");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Message sent successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult('');
    }
  };


  return (
    <motion.div
    initial={{opacity: 0, x: -100}}
    transition={{duration: 1.5}}
    whileInView={{opacity: 1, x: 0}}
    viewport={{ once: true }}
    className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
        <h1 className='text-2xl sm:text-4xl mb-2 font-bold text-center'>Contact <span className='underline underline-offset-4 under decoration-1 font-light'>With US</span></h1>
        <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Ready to Make it Work? Let's Cook.</p>

        <form className='max-w-2xl mx-auto text-gray-800 pt-8' onSubmit={onSubmit}>
          <div className='flex flex-wrap'>
            <div className='w-full md:w-1/2 text-left'>
              Your Name
            <input type="text" className='w-full border border-gray-300 rounded py-3 px-4 mt-2' placeholder='Your Name' name='Name' required/>
            </div>
            <div className='w-full md:w-1/2 text-left md:pl-4'>
              Your Email
            <input type="email" className='w-full border border-gray-300 rounded py-3 px-4 mt-2' placeholder='Your Email' name='Email' required/>
            </div>
          </div>

          <div className='text-left my-6'>
            Message
            <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 resize-none' rows={7} placeholder='Message' name='Message' required></textarea>
          </div>
          <button className='bg-blue-600 hover:bg-blue-500 cursor-pointer py-2 px-12 mb-10 text-white rounded'>{result ? result : 'Send Message'}</button>

        </form>
      
    </motion.div>
  )
}

export default Contact;
