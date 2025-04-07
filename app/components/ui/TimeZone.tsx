"use client"
import React, { useState } from 'react';
import { motion } from "motion/react";

const TimeZone = () => {

  const [mousePosition, setMousePosition] = useState({ x:0, y:0})
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const {clientX, clientY } = event;
    const target = event.currentTarget.getBoundingClientRect();
    const x = (clientX - (target.left + target.width / 2)) / 15;
    const y = (clientY - (target.top + target.height / 2)) / 15;
    setMousePosition({ x, y})
  }

  return (
    <motion.section 
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePosition({x:0, y:0});
      }}
      style={{
        transform: isHovering 
          ? `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) scale3d(1, 1, 1)`
          : "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)",
          transition: "transform 0.1s ease-out"
          
      }}
      className="relative min-h-[400px] mx-auto w-full col-span-1 rounded-2xl bg-black overflow-hidden  bg-gradient-to-br from-green-900 via-black to-green-900">
      <motion.div 
        style={{
          transform: isHovering 
            ? `translate3d(${-mousePosition.x}px, ${-mousePosition.y}px, 0) scale3d(1.03, 1.03, 1)` 
            : 'translate3d(0px, 0px, 0px) scale3d(1,1,1)',
            transition: "transform 0.1s ease-out",
        }}
        className="relative h-full overflow-hidden bg-custom-radial shadow-custom-shadow rounded-2xl">
        <div className="w-full h-full absolute inset-0 bg-[url('https://www.creem.io/noise.webp')] [background-size:30%] [mask-image:radial-gradient(#fff,_transparent,_75%)] opacity-10 transform scale-[1.2]"></div>
          <div className="h-full px-4 py-20 sm:px-10">
              <h2 className="max-w-80 font-semibold text-base md:text-xl lg:text-3xl text-balance text-left text-primary tracking-[-0.015rem]">
                I'm very flexible with time zone communications
              </h2>
              <div className="h-full  flex flex-col items-center relative bg-transparent mt-10">
                  <img src='globe.png' alt="globe"  className='absolute md:-bottom-80 md:-right-80 sm:-bottom-60 sm:-right-60 lg:-bottom-0 lg:-right-60'/>
              </div>
          </div>
      </motion.div>
    </motion.section>
  )
}

export default TimeZone