import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Cursor = () => {
    const cursorRef = useRef(null)

    useEffect(()=>{
        const moveCursor = (e) =>{
            gsap.to(cursorRef.current,{
                x: e.clientX,
                y: e.clientY,
                // duration: 1.5,
                delay: 0,
                ease: "power1.out"
            })
        }
        window.addEventListener("mousemove",moveCursor);
        return () =>{
            window.addEventListener("mousemove", moveCursor);
        }
    },[]);
  return (
    <div ref={cursorRef} className='fixed -top-3 left-0 h-2 w-2 rounded-full bg-gray-400 pointer-events-none z-9999 mix-blend-difference'>
        
    </div>
  )
}

export default Cursor