import React, { useState } from 'react'
import { FaLocationArrow } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuMessageCircleMore } from "react-icons/lu";
import emailjs from "@emailjs/browser";




const FooterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [toast, setToast] = useState("")
  const handleSubmit = (e) =>{
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    if(name.trim() === "" || email.trim()==="" || message.trim()===""){
        setToast("Please fill all the details");
        setTimeout(()=>{
          setToast("");
        },3000);
    }
    else{
      emailjs
      .sendForm(
        "service_p8qhqga",
        "template_c2f9ogb",
        e.target,{
            publicKey: "MhLl06bmWAm7L_SLV",
        }
      )
      .then(()=>{
        setToast("Form Submitted successfully!");
        setTimeout(()=>{
          setToast("");
        },3000);
      })
      .catch((error)=>{
        setToast("Failed to sent: ",error);
        setTimeout(()=>{
          setToast("");
        },3000);
      })
    }
  }

  return (
    <div className='w-full max-w-3xl text-white flex flex-col gap-8 sm:gap-10 lg:gap-15'>
      <div className='flex gap-4 sm:gap-6 lg:gap-8 items-center'>
        <FaLocationArrow className='w-6 h-6 sm:w-8 sm:h-8 shrink-0' color='#CBFE01' />
        <h1 className='uppercase text-white text-3xl sm:text-4xl lg:text-[2.6vw] lg:leading-[2.5vw] font-semibold'>Let's talk</h1>
      </div>
      <form onSubmit={handleSubmit}>
        {toast && (
          <div role='status' aria-live='polite' className='fixed top-4 left-4 right-4 sm:left-auto sm:right-5 z-9999 rounded-lg bg-[#222] text-white px-4 sm:px-5 py-3 sm:py-4 text-base sm:text-xl shadow-lg'>
            {toast}
          </div>
        )}
        <div className='flex flex-col gap-3'>
          <div className='flex flex-col gap-2'>
            <label htmlFor="name" className='text-lg sm:text-2xl'>Your Name</label>
            <div className='relative w-full flex items-center '>
              <FaRegUser size={18} className='text-white/80 absolute  left-4' />
              <input
              value={name}
              onChange={(e)=> setName(e.target.value)}
              type="text" id='name' name='name' placeholder='Enter your name'
                className='w-full outline rounded-lg outline-white/70 text-base sm:text-lg pl-12 sm:pl-15 py-3 mt-1
              placeholder:text-base sm:placeholder:text-xl transition-all duration-500 focus:placeholder-transparent focus:outline-[#CBFE01]' />
            </div>
          </div>


          <div className='flex flex-col gap-2'>
            <label htmlFor="email" className='text-lg sm:text-2xl'>Email Address</label>
            <div className='relative w-full flex items-center'>
              <MdOutlineMailOutline size={18} className='text-white/80 absolute  left-4'  />
              <input
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
              type="email" id='email' name='email' placeholder='Enter your email'
                className='outline rounded-lg outline-white/70 text-base sm:text-lg w-full pl-12 sm:pl-15 py-3 mt-1
              placeholder:text-base sm:placeholder:text-xl transition-all duration-500 focus:placeholder-transparent focus:outline-[#CBFE01]' />
            </div>
          </div>


          <div className='flex flex-col gap-2'>
            <label htmlFor="message" className='text-lg sm:text-2xl'>Message</label>
            <div className='relative w-full flex items-start'>
              <LuMessageCircleMore size={20} className='text-white/80 absolute top-5 left-4'   />
              <textarea
              value={message}
              onChange={(e)=> setMessage(e.target.value)}
              id="message" name='message' cols="30" rows="10" placeholder='Write your message...'
              className='outline rounded-lg outline-white/70 text-base sm:text-lg w-full pl-12 sm:pl-15 py-4 mt-1
              placeholder:text-base sm:placeholder:text-xl transition-all duration-500 focus:placeholder-transparent focus:outline-[#CBFE01]'  ></textarea>
            </div>
          </div>
        </div>
        <button id='submit'
          type='submit'
        className='flex items-center justify-center gap-3 sm:gap-4 border border-transparent rounded-2xl text-base sm:text-xl font-semibold
        cursor-pointer w-full mt-6 sm:mt-10 p-3 sm:p-4 bg-[#CBFE01] text-black '>
          <FaLocationArrow className='w-4 h-4 sm:w-5 sm:h-5' />
          SEND MESSAGE
        </button>
      </form>
    </div>
  )
}

export default FooterForm