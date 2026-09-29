import { useContext, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { navBarContext } from '../Context/NavContext';

const FullNav = () => {
    const leftNavRef = useRef(null)
    const rightNavRef = useRef(null)
    const fullNavRef = useRef(null)
    const tlRef = useRef(null);
    const [navBarOpen, setNavBarOpen] = useContext(navBarContext);

    function navOpen() {
        if (tlRef.current) tlRef.current.kill()
        const tl = gsap.timeline()
        tlRef.current = tl;

        gsap.set(fullNavRef.current, { display: 'flex', opacity: 1 })
        gsap.set(leftNavRef.current, { y: '-100%' })
        gsap.set(rightNavRef.current, { y: '100%' })
        gsap.set('.navItem', { opacity: 0, x: -30 })

        tl.to(leftNavRef.current, {
            y: 0,
            duration: 1.3,
            ease: 'power2.inOut'
        }, 0)
        tl.to(rightNavRef.current, {
            y: 0,
            duration: 1.3,
            ease: 'power2.inOut'
        }, 0)
        tl.to('.navItem', {
            opacity: 1,
            x: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power2.out'
        }, 0)
    }

    function navClose() {
        if (tlRef.current) tlRef.current.kill()
        const tl = gsap.timeline({
            onComplete: () => {
                gsap.set(fullNavRef.current, { display: 'none', opacity: 0 })
                gsap.set(leftNavRef.current, { y: '-100%' })
                gsap.set(rightNavRef.current, { y: '100%' })
            }
        });
        tlRef.current = tl;
        tl.to('.navItem', {
            opacity: 0,
            x: -30,
            duration: 0.5,
            stagger: -0.1,
            ease: 'power2.out'
        }, 0)
        tl.to(leftNavRef.current, {
            y: '-100%',
            duration: 1.3,
            ease: 'power2.inOut'
        }, 0)
        tl.to(rightNavRef.current, {
            y: '100%',
            duration: 1.3,
            ease: "power2.inOut"
        }, 0)
    }

    useGSAP(
        function () {
            if (navBarOpen) {
                // Use the element directly so the Tailwind `hidden` class does
                // not prevent the navigation from being shown.
                gsap.set(fullNavRef.current, {
                    display: 'flex',
                    opacity: 1
                })
                navOpen();
            }
            else {
                navClose();
            }
        }, [navBarOpen]
    )
    return (
        <div ref={fullNavRef} className="fullScreenNav fixed inset-0 z-[9999] hidden overflow-hidden flex-col md:flex-row" style={{ display: 'none', opacity: 0 }}>
            <div className="absolute top-5 right-5 md:top-8 md:right-8 sm:top-8 sm:right-2 z-10">
                <button
                    type="button"
                    aria-label="Close navigation"
                    onClick={() => {
                        setNavBarOpen(false);
                    }}
                    className="text-white text-3xl md:text-4xl cursor-pointer leading-none transition-opacity duration-200 hover:opacity-80"
                >
                    <span aria-hidden="true" className="block text-3xl md:text-4xl leading-none">✕</span>
                    {/* Fallback icon if the icon pack is loaded: */}
                    <i className="ri-close-large-line hidden"></i>
                </button>
            </div>
            {/* ================= LEFT NAV ================= */}
            <div ref={leftNavRef} className="bg-[#02080D] w-full h-[60vh] py-6 px-5 sm:px-8 md:h-full md:w-[60vw] md:py-12 md:px-20 relative">
                {/* Logo */}
                <div className="bg-transparent text-white shadow-[0_8px_12px_rgba(0,0,0,0.2)] w-fit rounded-md leading-[2vw] py-2 px-3 md:py-3 md:px-4">
                    <h1 className="uppercase text-[1.3rem] sm:text-[2vw] font-[font1] font-semibold">Srimanta</h1>
                </div>
                {/* Navigation Items */}
                <div className="mt-8 md:m-10">
                    {[
                        'Home',
                        'About Me',
                        'Projects',
                        'Skills',
                        'Contact'
                    ].map((item, index) => (
                        <div key={index} className='navItem opacity-0 flex items-center justify-between border-b-2 pr-3 pb-3 pl-4 md:pr-5 md:pb-5 md:pl-10 border-b-[#171717] text-white cursor-pointer transition-colors duration-200 hover:text-[#FF5100]'>
                            <a
                                className="flex items-center justify-between w-full text-[1.7rem] sm:text-[3vw] md:text-[4vw] uppercase font-[font1] font-semibold"
                                href={`#${{
                                    'Home': 'home',
                                    'About Me': 'about',
                                    'Projects': 'projects',
                                    'Skills': 'skills',
                                    'Contact': 'contact'
                                }[item]}`}
                                onClick={() => setNavBarOpen(false)}
                            >
                                <div className="">
                                    {item}
                                </div>
                                <i className="ri-arrow-right-s-line text-[1.3rem] sm:text-[2vw] md:text-[2vw]"></i>
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {/* ================= RIGHT NAV ================= */}

            <div ref={rightNavRef} className="bg-[#171717] w-full h-[40vh] p-5 sm:p-8 md:h-full md:w-[40vw] md:p-10 relative">

                {/* Close Button */}
                {/* Contact Information */}
                <div className="flex flex-col gap-6 md:gap-12 items-end justify-end mt-6 md:mt-25 text-white">
                    <h1 className="uppercase text-2xl sm:text-3xl md:text-4xl font-semibold">Contact us</h1>
                    <div className="flex flex-col gap-2 text-right">
                        <h2 className="text-base sm:text-xl md:text-2xl">
                            Narashinghpur, Cuttack
                        </h2>

                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ssrimanta2006@gmail.com&su=Contact%20from%20Portfolio&body=Hello%20Srimanta,%0A%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20contact%20you. " target='_blank' rel='noopener noreferrer'>
                            <h3 className="text-base sm:text-xl md:text-2xl break-all">
                                ssrimanta2006@gmail.com
                            </h3>
                        </a>
                        <a href="tel: +917735981301">
                            <h4 className="text-base sm:text-xl md:text-2xl">
                                (+91) 7735981301
                            </h4>
                        </a>
                    </div>
                </div>
                {/* Social Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 md:gap-12 absolute bottom-5 right-5 left-5 md:bottom-10 md:right-10 md:left-auto">
                    <a href="https://github.com/Srimanta2006/" target='_blank' rel='noopener noreferrer'>
                        <button className="border rounded-full cursor-pointer border-white/20 text-white font-[font1] text-lg sm:text-2xl md:text-3xl px-4 py-2 md:px-8 md:py-4 leading-[1vw] font-semibold tracking-wider hover:bg-white hover:text-black transition-all duration-300">
                            Github
                        </button>
                    </a>

                    <a href="https://www.linkedin.com/in/srimanta-nayak06/" target='_blank' rel='noopener noreferrer'>
                        <button className="border rounded-full cursor-pointer border-white/20 text-white font-[font1] text-lg sm:text-2xl md:text-3xl px-4 py-2 md:px-8 md:py-4 leading-[1vw] font-semibold tracking-wider hover:bg-white hover:text-black transition-all duration-300">
                            Linkedin
                        </button>
                    </a>

                    <a href="https://leetcode.com/u/srimantanayak/" target='_blank' rel='noopener noreferrer'>
                        <button className="border rounded-full cursor-pointer border-white/20 text-white font-[font1] text-lg sm:text-2xl md:text-3xl px-4 py-2 md:px-8 md:py-4 leading-[1vw] font-semibold tracking-wider hover:bg-white hover:text-black transition-all duration-300">
                            Leetcode
                        </button>
                    </a>
                </div>
            </div>
        </div >
    )
}

export default FullNav