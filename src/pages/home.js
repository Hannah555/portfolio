import React from 'react'
import { RectButtonFill, RectButtonOutline } from '../components/rectbutton'
import { useScroll } from '../contexts/scrollcontext'

const Home = () => {

    const {targetRefs} = useScroll();

  return (
    <div ref={targetRefs.top} className="min-h-screen flex justify-center items-center">
        <div className="flex flex-col max-w-[1020px]">
          <div className="flex flex-col gap-5">
            <div className='gap-10'>
                <div className=" animate-slide-down font-josefin text-7xl leading-normal">Hi, I'm Lee Bee Yan - React Web Developer</div>
                <p className="text-lg leading-loose tracking-wider text-xl">
                I specialize in building performant, user-friendly web applications using React, TypeScript, and Gatsby. My goal is to create modern, scalable solutions that make a positive impact for clients and end users alike.
                </p>
            </div>
            
            <div className="flex gap-10">
              <RectButtonFill label={"Contact Me"} />
              <RectButtonOutline label={"Download CV"} />
            </div>
          </div>
        </div>
      </div>
  )
}

export default Home