"use client"
import Meteors from "../ui/meteors";

export function MeteorDemo() {
  return (
    <div className="relative flex h-[100px] w-full flex-col items-center justify-center overflow-hidden ">
      <Meteors number={30} />
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-gray-400 to-gray-300/80 bg-clip-text text-center text-3xl md:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Hi I&apos;m <span className="text-green-500">Vasanth.</span> 
      </span>
    </div>
  );
}