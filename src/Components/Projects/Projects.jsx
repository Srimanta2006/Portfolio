import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ProjectCard from './ProjectCard'

gsap.registerPlugin(ScrollTrigger);

const projectArray = [
  {
    id: 1,
    name: "K72 Clone",
    images: [
      "/images/K72/k-home.png",
    ],
    tech: ["React", "GSAP", "Tailwind"],
    repo: "https://github.com/Srimanta2006/K72-Clone-",
  },

  {
    id: 2,
    name: "E-commerce Project",
    images: [
      "/images/VastraLoom/1.png",
      "/images/VastraLoom/2.png",
      "/images/VastraLoom/3.png",
      "/images/VastraLoom/4.png",
      "/images/VastraLoom/5.png",
      "/images/VastraLoom/6.png",
    ],
    tech: ["HTML5", "CSS3", "JavaScript(ES6+)", "GSAP"],
    repo: "https://github.com/Srimanta2006/VastraLoom-E-Commerce",
  },

  {
    id: 3,
    name: "Calculator",
    images: [
      "/images/Calculator/1.png",
      "/images/Calculator/2.png",
    ],
    tech: ["HTML5", "CSS3", "JavaScript"],
    repo: "https://github.com/Srimanta2006/Calculator"
  },

  {
    id: 4,
    name: "Weather Application",
    images: [
      "/images/WeatherApp/1.png",
      "/images/WeatherApp/2.png",
      "/images/WeatherApp/3.png",
    ],
    tech: ["HTML5", "CSS3", "JavaScript(ES6+)", "API"],
    repo: "https://github.com/Srimanta2006/weatherly",
  },
];

const Projects = () => {

  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(
    () => {

      gsap.to(textRef.current, {

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 1%",
          end: "bottom bottom",
          pin: ".text-wrapper",
          scrub: 1,
          // markers: true,
        },

      });

    },
    {
      scope: sectionRef,
    }
  );


  return (

    <section className="mt-204 overflow-hidden bg-white text-black sm:mt-32 lg:mt-50">

      <section
        ref={sectionRef}
        className="relative min-h-[300vh] overflow-hidden sm:min-h-[320vh] lg:min-h-[340vh]"
      >
        <div
          className="
            text-wrapper
            absolute
            top-0
            left-0
            z-10
            flex
            h-[70vh]
            w-full
            items-center
            justify-center
            pointer-events-none
          "
        >

          <h1 ref={textRef} className="whitespace-nowrap font-[font1] text-[20vw] font-semibold tracking-wide text-[#02080D] sm:text-[21vw] lg:text-[23vw]">
            PROJECTS
          </h1>

        </div>


        {/* PROJECT CARDS */}
        <div className="relative z-99 flex flex-col gap-16 px-4 py-24 sm:gap-24 sm:px-8 sm:py-28 md:px-12 lg:gap-32 lg:px-20 lg:py-30">
          {projectArray.map((p, idx) => {
            return (
              <div
                key={p.id}
                className={`
                flex
                w-full
                justify-start
                ${idx % 2 === 0 ? "sm:justify-start" : "sm:justify-end"}
              `}
              >
                <ProjectCard id={p.id} name={p.name} tech={p.tech} images={p.images} repo={p.repo} />
              </div>
            )
          })}
        </div>
      </section>
    </section>
  );
};

export default Projects;