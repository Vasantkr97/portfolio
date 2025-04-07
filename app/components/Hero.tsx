import { Spotlight } from './ui/Spotlight';
import { TypewriterEffectSmoothDemo } from './magicui/TypeWriter';
import { MeteorDemo } from './magicui/MyName';


const Hero = () => {
  return (
    <div id='hero' className="relative min-h-screen w-full px-4 md:px-16 lg:px-72 py-10 md:py-32">
      
      <div className='relative'>
      <Spotlight className='absolute  -top-4 -left-4 h-screen opacity-100 z-[50]' fill="white"/>
      </div>

        <div className="flex flex-col-reverse md:flex-row justify-center md:gap-10 sm:py-4 items-center mt-8 md:mt-0">
          <div className="mb-6 md:mb-0">
            <img
              className="rounded-full h-32 w-32 md:h-40 md:w-40 lg:h-44 lg:w-44 object-cover"
              src="pic12.png"
              alt="profile_pic"
            />
          </div>
        </div>


          <div className="mt-10 flex flex-col items-center justify-start">
              <MeteorDemo />
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