"use client"

import { useState } from "react"

import { motion } from 'motion/react'
import TimeZone from "./ui/TimeZone"

const AboutMe= () => {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0})
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const {clientX, clientY} = event;
    const target = event.currentTarget.getBoundingClientRect();
    const x = (clientX - (target.left + target.width / 2)) / 15;
    const y = (clientY - (target.top + target.height / 2)) / 15;
    setMousePosition({ x, y })
  }


  return (
    <div id="about" className="grid max-w-8xl mx-auto space-x-1  grid-cols-3 px-16">
        <motion.section 
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => {
                setIsHovering(false);
                setMousePosition({ x:0, y:0 });
            }}
            style={{
                transform: isHovering 
                ? `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) scale3d(1, 1, 1)` 
                : 'translate3d(0px, 0px, 0px) scale3d(1,1,1)',
                transition: "transform 0.1s ease-out",
            }}
            className="relative h-full min-h-[450px] mx-auto w-full max-w-3xl  bg-black  rounded-2xl overflow-hidden bg-gradient-to-br from-green-900 via-black to-green-900 col-span-2">
                <div className="h-full min-h-[450px] relative overflow-hidden rounded-2xl bg-custom-radial shadow-custom-shadow">
                    
                    <motion.div 
                        style={{
                        transform: isHovering
                        ? `translate3d(${-mousePosition.x}px, ${-mousePosition.y}px, 0) scale3d(1.03, 1.03, 1)`
                        : "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)",
                        transition: "transform 0.1s ease-out"
                        }}
                        className="relative h-full min-h-[450px] sm:mx-0 bg-custom-radial shadow-custom-shadow overflow-hidden sm:rounded-2xl">
                        <div className="w-full h-full absolute inset-0 bg-[url('https://www.creem.io/noise.webp')] [background-size:30%] [mask-image:radial-gradient(#ffe,_transparent,_75%)] opacity-10 transform scale-[1.2]"></div>
                        
                        <div className="h-full p-20 flex items-center justify-center">
                            <div className="flex flex-col items-center justify-center text-left space-y-10">
                                <div className="text-left text-4xl text-slate-100 font-bold">
                                    About Me
                                </div>
                                <div className="text-lg">
                                I'm a 22-year-old recently graduated student and an aspiring full-stack developer. I'm skilled in technologies like React, Next.js, Node.js, Python, JavaScript, TypeScript, and Prisma ORM. I have a strong passion for building creative and efficient web applications. Right now, I'm focused on sharpening my development skills by working on real-world projects, and I'm actively looking for exciting opportunities where I can contribute, learn, and grow as a developer.
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
                
            </motion.section>

            <TimeZone />
    </div>
    
  )
}

export default AboutMe