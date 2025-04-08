"use client";
import React from "react";
import Link from "next/link";

import {
  IconBrandCodecov,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconMail
} from "@tabler/icons-react";

export default function Contact() {
  
  return (
    <div
      id="contacts"
      className="w-full mx-auto h-full min-h-screen flex flex-col md:flex-row items-center justify-center p-6 md:p-8 bg-black rounded-none md:rounded-2xl shadow-lg"
    >
      {/* Contact Info Section */}
      <section className="flex flex-col items-center md:w-1/2 text-center space-y-6 md:space-y-8">
        <h2
          className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-[#f1f5f966] via-[#f1f5f9] to-[#f1f5f966] text-transparent bg-clip-text" >
          Contact <span className="text-green-500">Me</span>
        </h2>
        <p className="text-sm md:text-base max-w-md text-neutral-300 px-8">
          Have a project in mind? I&apos;d love to hear from you! Reach out to me, and let&apos;s turn your ideas into reality.
        </p>

        <div className="flex flex-col space-y-4 w-full max-w-xs">
        {/* Twitter Button */}
        <button
          className="relative group/btn flex space-x-2 items-center justify-start px-4 py-2 rounded-md font-medium bg-zinc-900 text-neutral-300 shadow-lg hover:shadow-xl transition-all"
          type="button"
        >
          <Link href="https://x.com/vasantkr97" target="_blank" rel="noopener noreferrer" className="flex space-x-2">
            <IconBrandTwitter className="h-5 w-5" />
          <span>Twitter</span>
          </Link>
          <BottomGradient />
        </button>

        <button
          className="relative group/btn flex space-x-2 items-center justify-start px-4 py-2 rounded-md font-medium bg-zinc-900 text-neutral-300 shadow-lg hover:shadow-xl transition-all"
          type="button"
        >
          <Link
            href="mailto:vasantkr97@gmail.com" // Replace with your actual email
            className="flex space-x-2"
          >
            {/* You can replace the icon below with any email icon you want */}
            <IconMail className="h-5 w-5" /> 
            <span>Email Me</span>
          </Link>
          <BottomGradient />
        </button>


        {/* GitHub Button */}
        <button
          className="relative group/btn flex space-x-2 items-center justify-start px-4 py-2 rounded-md font-medium bg-zinc-900 text-neutral-300 shadow-lg hover:shadow-xl transition-all"
          type="button"
        >
          <Link href="https://github.com/Vasantkr97" target="_blank" rel="noopener noreferrer" className="flex space-x-2">
            <IconBrandGithub className="h-5 w-5" />
          <span>GitHub</span>
          </Link>
          <BottomGradient />
        </button>

        {/* LinkedIn Button */}
        <button
          className="relative group/btn flex space-x-2 items-center justify-start px-4 py-2 rounded-md font-medium bg-zinc-900 text-neutral-300 shadow-lg hover:shadow-xl transition-all"
          type="button"
        >
          <Link href="https://www.linkedin.com/in/vasanth-maneri-651074355/" target="_blank" rel="noopener noreferrer" className="flex space-x-2">
            <IconBrandLinkedin className="h-5 w-5" />
          <span>LinkedIn</span>
          </Link>
          <BottomGradient />
        </button>

        
        <button
          className="relative group/btn flex flex-row space-x-2 items-center justify-start px-4 py-2 rounded-md font-medium bg-zinc-900 text-neutral-300 shadow-lg hover:shadow-xl transition-all"
          type="button"
        >
          <Link href="" target="_blank" rel="noopener noreferrer" className="flex space-x-2">
            <IconBrandCodecov className="h-5 w-5" />
            <span>Porfolio</span>
          </Link>
          <BottomGradient />
        </button>
      </div>

      </section>

     
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-green-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-rose-500 to-transparent" />
    </>
  );
};
