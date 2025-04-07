"use client";
import Link from 'next/link';
import { TypewriterEffectSmooth } from '../ui/typewriter-effect';
export function TypewriterEffectSmoothDemo() {
  const words = [
    
    {
      text: "Full-Stack",
      className: "text-white"
    },
    {
      text: "Web Developer",
      className: "text-green-500 dark:text-green-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[10rem]  ">
      <TypewriterEffectSmooth words={words} className="text-white" />

    </div>
  );
}