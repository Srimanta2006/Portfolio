import React from 'react'
import { SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";



const FooterTopLeft = () => {
    return (
        <div className='flex w-full min-w-0 flex-col gap-8 overflow-hidden sm:gap-12'>
            <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-3 sm:gap-5'>
                    <span className='inline-block h-0.5 w-8 shrink-0 bg-[#CBFE01] sm:w-15'></span>
                    <h3 className='text-sm text-white/80 sm:text-base'>GET IN TOUCH</h3>
                </div>
                <div className='flex min-w-0 flex-col gap-3 text-white'>
                    <h1 className='flex flex-col break-words text-3xl font-semibold leading-tight tracking-wide font-[font1] sm:text-4xl md:text-[4vw] md:leading-[4vw]'>HAVE AN IDEA? <span className='text-[#CBFE01]'>LET&apos;S TURN IT INTO CODE.</span></h1>
                    <p className='max-w-3xl text-base leading-relaxed text-white/70 sm:text-xl md:text-2xl'>I design and develop modern, responsive websites <br className='hidden sm:block' /> that turn your ideas into real digital experiences.</p>
                </div>
                <div className='mt-5 flex flex-col gap-2 break-words text-base text-[#CBFE01] sm:flex-row sm:items-center sm:gap-6 sm:text-xl md:gap-12 md:text-2xl'>
                    <a className='break-all' href="https://mail.google.com/mail/?view=cm&fs=1&to=ssrimanta2006@gmail.com&su=Contact%20from%20Portfolio&body=Hello%20Srimanta,%0A%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20contact%20you. " target='_blank' rel='noopener noreferrer'>ssrimanta2006@gmail.com</a>
                    <span className='hidden sm:inline'>//</span>
                    <a className='whitespace-nowrap' href="tel:+917735981301">+91 77359 81301</a>
                </div>
            </div>

            <div className='mt-4 flex h-fit w-full min-w-0 flex-col items-start gap-5 rounded-xl border border-white/10 bg-slate-900/5 p-4 text-white backdrop-blur-3xl sm:mt-10 sm:flex-row sm:gap-4 sm:p-4 md:gap-6 md:p-5 lg:w-[70%] lg:gap-10'>
                <div className='h-28 w-28 shrink-0 rounded-xl bg-[url("./images/a1.png")] bg-cover bg-center sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-42 lg:w-42'>

                </div>
                <div className='flex w-full min-w-0 flex-col gap-4 sm:gap-4 md:gap-5'>
                    <div>
                        <h1 className='flex flex-wrap gap-x-2 text-2xl sm:text-2xl md:text-3xl lg:text-4xl'>
                            <span>SN</span>
                            <span>Srimanta</span>
                        </h1>
                        <p className='mt-1 break-words text-xs font-semibold leading-relaxed sm:text-sm md:text-base lg:text-xl'>DEVELOPER &amp; CREATIVE TECHNOLOGIST</p>
                    </div>
                    <div className="mt-2 flex flex-wrap items-center gap-2">
                        <a href="https://github.com/Srimanta2006/" rel='noopener noreferrer'>
                            <div className="bg-white/10 p-3 rounded-full
                            transition-all duration-75 hover:bg-[#CBFE01] scale-95 hover:text-black
                            shadow-[0_8px_0_rgba(0,0,0,0.12)] h-15 w-15 cursor-pointer active:scale-95 flex items-center justify-center">
                                <FaGithub size={23} />
                            </div>
                        </a>

                        <a href="https://www.linkedin.com/in/srimanta-nayak06/" rel='noopener noreferrer'>
                            <div className="bg-white/10 p-3 rounded-full
                            transition-all duration-75 hover:bg-[#CBFE01] scale-95 hover:text-black
                            shadow-[0_8px_0_rgba(0,0,0,0.12)] h-15 w-15 cursor-pointer active:scale-95 flex items-center justify-center">
                                <FaLinkedin size={23} />
                            </div>
                        </a>
                        <a href="https://leetcode.com/u/srimantanayak/" target='_blank' rel='noopener noreferrer'>
                            <div className="bg-white/10 p-3 rounded-full
                            transition-all duration-75 hover:bg-[#CBFE01] scale-95 hover:text-black
                            shadow-[0_8px_0_rgba(0,0,0,0.12)] h-15 w-15 cursor-pointer active:scale-95 flex items-center justify-center">
                                <SiLeetcode size={23} />
                            </div>
                        </a>


                        {/* <div className="bg-white/10 p-3 rounded-full
                            transition-all duration-75 hover:bg-[#CBFE01] scale-95 hover:text-black
                            shadow-[0_8px_0_rgba(0,0,0,0.12)] h-15 w-15 cursor-pointer active:scale-95 flex items-center justify-center">
                            <i className="text-3xl ri-twitter-x-line"></i>
                        </div> */}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FooterTopLeft