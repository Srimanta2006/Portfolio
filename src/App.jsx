import React from 'react'
import Cursor from './Components/CustomCursor/Cursor'
import Home from './Components/Home/Home'
import About from './Components/AboutPage/About'
import FullNav from './Components/Common/FullNav'
import Projects from './Components/Projects/Projects'
import Skills from './Components/Skills/Skills'
import Footer from './Components/Footer/Footer'
import BottomArrow from './Components/CustomCursor/BottomArrow'

const App = () => {
  return (
    <div className='bg-[#F5F5F5] min-h-screen overflow-x-hidden'>
      <Cursor />
      <BottomArrow />
      <FullNav />
      <main>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
        <section id="contact"><Footer /></section>
      </main>
    </div>
  )
}

export default App