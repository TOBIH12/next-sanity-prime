"use client"

import { FaArrowUp } from "react-icons/fa";
const HoverNav = () => {
  return (
    <div className="fixed bg-[rgba(0,0,0,0.5)] backdrop-blur-md w-[2.5rem] bottom-[1rem] left-[90%] flex text-center rounded-full cursor-pointer hover:bg-[rgba(54,51,51,0.5)] z-10">
        <a href="#Header" title="Go up" className="w-full p-3 flex justify-center text-center">
      <FaArrowUp className="w-full text-[rgba(0,0,0,1)]"/>
        </a>
    </div>
  )
}

export default HoverNav;
