import React from 'react'

const SkillCard = ({ name, icon }) => {
    return (
        <div className='
            flex items-center
            border border-transparent rounded-[5px]
            px-3 py-2.5 gap-2 sm:px-5 sm:py-3.5 sm:gap-3.5
            bg-[#F5F5F5] shadow-[0px_2px_10px_rgba(0,0,0,0.32)]
            transition-all duration-100 ease-in
            hover:-translate-y-1
            w-full sm:w-auto
            '>
            <div className='text-[clamp(1.5rem,3vw,3rem)] m-1 sm:m-2 shrink-0'>
                {icon}
            </div>

            <div className='min-w-0'>
                <h3 className='text-[clamp(1rem,1.8vw,1.5rem)] font-[font4] leading-tight'>
                    {name}
                </h3>
                <p className='text-[clamp(0.8rem,1.3vw,1.2rem)]'>Intermediate</p>
            </div>
        </div>
    )
}

export default SkillCard