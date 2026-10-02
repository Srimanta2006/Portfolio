import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import SplitText from 'gsap/src/SplitText.js'
import { ChessKing, WindArrowDown } from 'lucide-react'
gsap.registerPlugin(SplitText);


const Hero = () => {
    let splitText = new SplitText(".split",{type: "chars"});
    let chars = splitText.chars;
    useGSAP(()=>{
        gsap.from(chars,{
            yPercent: 100,
            stagger: 0.1,
            duration: 0.4,
        })
    },[])
    return (
        <section className='relative mt-20 md:mt-30 h-[110svh] md:h-[150vh] w-full overflow-hidden scroll-smooth'>
            <div className=' h-fit'>
                <div className='overflow-hidden absolute w-full z-0 top-[8%] md:top-[10%] left-0 right-0 pt-5'>
                    <h1 className='split text-center uppercase text-[19vw] md:text-[22vw] font-[font1] font-semibold leading-[17vw] md:leading-[18vw]'>Developer</h1>
                </div>
                <div className='absolute right-[2vw] md:right-[8vw] top-[18%] md:top-0 w-[88vw] md:w-[75vw] h-[48vh] md:h-[95vh] flex items-end justify-center'>
                    <img
                        className='h-full max-w-full w-auto object-contain object-bottom'
                        src={`${import.meta.env.BASE_URL}images/myImg.png`} alt="hero_image" />
                </div>
            </div>

            <div className='absolute left-[4%] md:left-[1%] bottom-[23%] md:bottom-[18%] border-2 w-[92%] md:w-[29vw] h-auto min-h-[23vh] md:h-[40vh] p-3 md:p-5 bg-white border-black/10 rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.08)]'>

                <div className="timeLine hidden md:flex absolute z-30 left-[1.5vw] flex-col h-full items-center cursor-pointer select-none ">
                    <div className='w-2 h-2 bg-black rounded-full '></div>
                    <div className='w-px h-48 bg-black/30'></div>
                    <span className='uppercase [writing-mode:vertical-rl] font-[font1] rotate-180 text-[11px] tracking-[0.15em] text-black/60 mb-2 mt-4'>scroll down</span>
                    <i class="ri-arrow-down-long-fill"></i>
                </div>

                <div className='relative md:absolute left-0 md:left-[15%] pl-3 md:pl-0'>
                    <div className='mb-3 md:mb-6 flex items-center justify-center gap-3 md:gap-4 bg-black/10 w-fit pl-3 md:pl-4 pr-5 md:pr-16 py-2.5 rounded-3xl'>
                        <span className='h-4 w-4 rounded-full bg-[#FF5101]'></span>
                        <p className='text-xs md:text-[1vw] leading-tight'>Avaliable for opportunities</p>
                    </div>
                    <p className='text-sm md:text-[1.2vw] font-bold uppercase font-[font1]'>Hello! I'm</p>
                    <p className='text-xl md:text-[1.7vw] uppercase font-semibold font-[font1]'>srimanta Nayak</p>
                    <p className='text-xs md:text-[1vw] uppercase font-[font1] text-black/65'>Frontend Developer</p>
                    <div className='h-0.5 bg-black/70 w-12 md:w-[5vw] rounded-full mt-3'></div>
                    <p className='mt-4 md:mt-10 text-base md:text-xl font-[font4]'>
                        I build responsive, high-performance websites and exceptional digital experiences
                    </p>
                </div>
            </div>

            <div className="absolute bottom-[2%] md:bottom-[4.8%] w-full left-0 bg-center bg-contain right-0 bg-no-repeat bg-[url('/public/images/banner-three-shape.png')] h-[28vh] md:h-[45vh] flex items-center justify-center">
                <div className='absolute top-8 md:top-25 bg-white/90 h-12 w-12 md:h-15 md:w-15 flex items-center justify-center rounded-full'>
                    <div className='h-4 w-4 bg-[#FF5101] rounded-full'></div>
                </div>
            </div>
            <div className='absolute bottom-5 md:bottom-30 left-0 right-0 px-3 flex flex-col gap-4 md:gap-6 items-center justify-center z-999'>
                <div
                    className='flex flex-col items-center justify-center leading-[1.15] font-bold font-[font1] tracking-[0.09em]
                uppercase text-center text-[4vw] md:text-[2.5vw] text-transparent [-webkit-text-stroke:1px_#1e293b] md:[-webkit-text-stroke:1.5px_#1e293b]'>
                    <h2 className='flex gap-2 md:gap-3 items-center'>
                        Design
                        <span className='w-2 h-2 bg-black rounded-full '></span>
                        Code
                        <span className='w-2 h-2 bg-black rounded-full '></span>
                        Create
                    </h2>
                    <h2>Digital Experience Make Better</h2>
                </div>
                <a
                    href='#projects'
                    onClick={(event) => {
                        event.preventDefault()
                        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className='bg-black text-white font-[font1] text-sm md:text-[1vw] px-6 md:px-8 py-3 md:py-4 cursor-pointer rounded-sm leading-tight active:scale-95'
                >
                    view projects
                </a>
            </div>

        </section>
    )
}

export default Hero