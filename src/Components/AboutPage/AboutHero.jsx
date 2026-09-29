import React from 'react'

const AboutHero = () => {
  return (
    <div className='mt-12 flex min-h-screen w-full flex-col items-center justify-center gap-8 px-4 py-8 sm:px-6 md:gap-10 md:px-10 lg:flex-row lg:items-center lg:gap-16 lg:py-10 xl:gap-28'>
      <div className='h-[45vh] min-h-[280px] w-full max-w-md overflow-hidden rounded-lg border-2 border-white/70 sm:h-[55vh] md:h-[60vh] lg:h-[75vh] lg:w-[45vw] lg:max-w-none'>
        <img
          className='h-full w-full object-cover'
          src="/images/a1.png"
          alt="Portrait"
        />
      </div>
      <div className='flex h-auto w-full max-w-2xl flex-col items-start gap-4 p-0 sm:gap-5 md:p-2 lg:h-full lg:w-[55vw] lg:max-w-none'>
        <p
          className='text-[16px] font-sans text-black/80'
        >I’m a front-end developer focused on building modern, interactive, and user-centered web experiences.</p>
        <p
          className='text-[16px] font-sans text-black/80'
        >I work primarily with HTML, CSS, JavaScript, and React, combining clean development with a strong interest in visual design, animation, and interaction. I enjoy taking an idea or design and turning it into a responsive interface that feels smooth, intuitive, and purposeful across every screen.</p>
        <p
          className='text-[16px] font-sans text-black/80'
        >I’m particularly interested in creating websites where design and technology work together—from thoughtful layouts and typography to subtle interactions, scroll-based animations, and polished micro-details. I use tools like GSAP to bring interfaces to life while keeping the underlying code structured, maintainable, and performance-focused.</p>
        <p
          className='text-[16px] font-sans text-black/80'
        >Through my academic projects, internship experience, and personal work, I’ve worked on real-world interfaces, user and admin experiences, responsive layouts, and complete web application flows. These experiences have taught me to look beyond just writing code—to understand how a product works, how users interact with it, and how every detail contributes to the overall experience.</p>
        <p
          className='text-[16px] font-sans text-black/80'
        >I’m constantly learning, experimenting, and pushing my understanding of modern web development. For me, every project is an opportunity to build something better than the last.</p>
        <p
          className='text-[16px] font-sans text-black/80'
        >I don’t just build websites. I build experiences through code.</p>
      </div>
    </div>
  )
}

export default AboutHero