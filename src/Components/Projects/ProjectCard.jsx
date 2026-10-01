import gsap from 'gsap/all';
import React, { useEffect, useRef, useState } from 'react'

const ProjectCard = (props) => {
  console.log(props);

  const [currentImage, setCurrentImage] = useState(0);
  const imgRef = useRef(null);
  const nextImg = () => {
    setCurrentImage((prev) => {
      return prev === props.images.length - 1 ? 0 : prev + 1;
    })
  }
  const prevImg = () => {
    setCurrentImage((prev) => {
      return prev === 0 ? props.images.length - 1 : prev - 1
    })
  }
  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      {
        opacity: 0,
        scale: 1.05,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "power2.out",
      }
    );
  }, [currentImage]);

  return (
    <>
      {/* CARD */}
      <article className="flex h-[65vh] w-full flex-col gap-3 rounded-xl bg-[#F5F5F5] p-3 sm:gap-4 sm:p-4 md:w-[50vw]">

        {/* CARD HEADER */}
        <div className="flex items-start justify-between p-2">
          <div className="flex min-w-0 flex-col gap-4 sm:gap-6">
            <h1 className="font-[font1] text-lg font-semibold leading-tight text-black/80 sm:text-xl md:text-[1.5vw] md:leading-[1.5vw]">
              {props.name}
            </h1>
            {/* TECH STACK */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {props.tech.map((tech, index) => (
                <div key={index} className="flex items-center justify-center gap-2 rounded-full border border-gray-300 px-3 py-1.5 sm:px-4 sm:py-2">
                  <div className=" h-3 w-3 rounded-full bg-black" />
                  <h2 className="text-md font-semibold">{tech}</h2>
                </div>
              ))}
            </div>
          </div>
          {/* ARROW */}
          <a href={props.repo} target='_blank' rel='noopener noreferer' >
            <button className=" flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 bg-white cursor-pointer transition-all hover:bg-[#ff5100]">
              <i className=" ri-arrow-right-up-line text-2xl hover:text-white" />
            </button>
          </a>
        </div>
        {/* IMAGE */}
        <div className="relative min-h-0 flex-1 overflow-hidden rounded-lg bg-white">
          <div className="absolute right-3 left-3 top-1/2 z-10 flex -translate-y-1/2 items-center justify-between sm:right-6 sm:left-6">
            <div
              onClick={prevImg}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-white/60 hover:border-[#CBFE01] sm:h-14 sm:w-14">
              <i className="ri-arrow-left-line text-xl text-white/60 hover:text-[#CBFE01]"></i>
            </div>
            <div
              onClick={nextImg}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-white/60 hover:border-[#CBFE01] sm:h-14 sm:w-14">
              <i className="ri-arrow-right-line text-xl text-white/60 hover:text-[#CBFE01]"></i>
            </div>
          </div>
          <img ref={imgRef} src={props.images[currentImage]} alt={props.name} className=" h-full w-full rounded-lg object-cover" />
        </div>
      </article>
    </>
  )
}

export default ProjectCard