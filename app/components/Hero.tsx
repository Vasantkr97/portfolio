import { Spotlight } from './ui/Spotlight';
import { TypewriterEffectSmoothDemo } from './magicui/TypeWriter';
import { MeteorDemo } from './magicui/MyName';
import Button from './ui/Button';


const Hero = () => {
  return (
    <div id='hero' className="relative min-h-screen w-full px-4 md:px-16 lg:px-72 py-10 md:py-32 ">
      
      <div className='relative'>
      <Spotlight className='absolute top-16 left-10 h-screen opacity-100 z-[50]' fill="white"/>
      </div>

      <div className="flex flex-col items-center justify-start">
          <div className='-pt-10 md:-pt-32 md:pb-10  flex items-center text-center'><Button/></div>
            <MeteorDemo />
          </div>

          <div className="flex flex-col-reverse md:flex-row justify-center md:gap-10 sm:py-4 items-center mt-8 md:mt-0">
            <div className="text-center md:text-left md:px-4 md:w-1/2">
              <div className="text-sm px-2 sm:px-0 font-normal text-white dark:text-white"
              >I&apos;m a 22-year-old recently Graduated student and aspiring full-stack developer. I&apos;m skilled in React,NextJs,Node.js,Python,JavaScript,TypeScript, Prisma ORM,  with a passion for building creative and efficient applications. Currently, I&apos;m focused on honing my development skills and exploring new skills.
              </div>
            </div>
            <div className="mb-6 md:mb-0">
              <img
                className="rounded-full h-32 w-32 md:h-40 md:w-40 lg:h-44 lg:w-44 object-cover"
                src="https://i.pinimg.com/736x/d2/f2/08/d2f2086efdf6950a384bbf40c152992f.jpg"
                alt="profile_pic"
              />
            </div>
          </div>

          <div>
              <TypewriterEffectSmoothDemo/>
          </div>
     
      {/* <div className='py-32 flex items-center justify-center'>
        <Link href="https://bento.me/karan-dev"><SafariDemo/></Link>
      </div> */}
      
    </div>

  )
}

export default Hero