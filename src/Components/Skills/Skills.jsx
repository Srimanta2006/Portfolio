import React, { useRef } from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact, FaJava, FaPhp, FaGitAlt, FaGithub, } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { MdDevices } from "react-icons/md";
import {SiTailwindcss,SiMysql} from "react-icons/si";
import SkillCard from './SkillCard';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap/all';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const skills = [
    {
        name: "HTML5",
        icon: <FaHtml5 color="#E34F26" />,
    },
    {
        name: "CSS3",
        icon: <FaCss3Alt color='"#1572B6"' />,
    },
    {
        name: "JavaScript",
        icon: <FaJs color='#F7DF1E' />,
    },
    {
        name: "Bootstrap",
        icon: <FaBootstrap color='#7952B3' />,
    },
    {
        name: "Tailwind CSS",
        icon: <SiTailwindcss color='06B6D4' />,
    },
    {
        name: "React",
        icon: <FaReact color='#61DAFB' />,
    },
    {
        name: "Java",
        icon: <FaJava color='#007396' />,
    },
    {
        name: "PHP",
        icon: <FaPhp color='#777BB4' />,
    },
    {
        name: "MySQL",
        icon: <SiMysql color='#4479A1' />,
    },
    {
        name: "Git",
        icon: <FaGitAlt color='#F05032' />,
    },
    {
        name: "GitHub",
        icon: <FaGithub color='#181717' />,
    },
    {
        name: "VS Code",
        icon: <VscVscode color="#007ACC" />,
    },
    {
        name: "Responsive Design",
        icon: <MdDevices color="#00A6A6" />,
    },
];
const Skills = () => {
    const skillsSectionRef = useRef(null);

    useGSAP(() => {
        gsap.from(".skill-card", {
            y: 100,
            opacity: 0,
            scale: 0.95,
            duration: 1,
            stagger: 0.2,
            ease: "power4.out",

            scrollTrigger: {
                trigger: ".skills-section",
                start: "top 70%",
                once: true,
            }
        });
    } );

    return (
        <section ref={skillsSectionRef} className='skills-section min-h-screen bg-white px-4 py-12 sm:px-6 md:px-10 lg:px-16'>
            <div className='flex flex-col justify-center items-center text-center'>
                <div className='flex w-full flex-col justify-center items-center'>
                    <h1 className='uppercase text-2xl font-semibold text-black tracking-widest sm:text-3xl md:text-4xl'>my skills</h1>
                    <h1 className='mt-2 text-3xl tracking-tight font-semibold font-sans sm:text-4xl md:text-5xl lg:text-[4vw]'>Tools & <span className='text-black/50'>Technologies</span></h1>
                    <p className='mt-4 max-w-3xl text-base leading-relaxed text-[#7183A0] font-semibold sm:text-lg md:text-2xl lg:text-3xl font-sans'>Here are the technologies and tools I work with to build modern, responsive and user-friendly web applications.</p>
                </div>
                <div className='mt-8 flex items-center gap-2 sm:mt-10'>
                    <span className='h-1 w-12 bg-[#C9D9F2] rounded-xl sm:w-20 md:w-25'></span>
                    <div className='h-4 w-4 rounded-full bg-[#7FA4D8]'></div>
                    <span className='h-1 w-12 bg-[#C9D9F2] rounded-xl sm:w-20 md:w-25'></span>
                </div>
            </div>
            <div className='mt-8 grid grid-cols-2 gap-4 py-8 sm:mt-10 sm:gap-6 sm:py-10 md:grid-cols-3 md:gap-8 lg:grid-cols-4 xl:grid-cols-5'>
                {skills.map((p, idx) => {
                    return (
                        <SkillCard className="skill-card" key={idx} name={p.name} icon={p.icon} color={p.color} />
                    );
                })}
            </div>
        </section>
    )
}

export default Skills