import React from 'react'
import { IoIosArrowUp } from "react-icons/io";


const BottomArrow = () => {
  return (
    <a href="#home"
      onClick={(event)=>{
        event.preventDefault(); 
        document.getElementById("home")?.scrollIntoView({behavior: "smooth"});
      }}
    >
      <div className='fixed bottom-10 right-10 z-99 bg-[#CBFE01] rounded-full flex items-center justify-center p-3 border border-transparent cursor-pointer '>
        <IoIosArrowUp size={28} color='black' />
      </div>
    </a>
  )
}

export default BottomArrow