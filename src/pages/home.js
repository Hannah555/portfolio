import React from 'react'
import { RectButtonFill, RectButtonOutline } from '../components/rectbutton'
import { useScroll } from '../contexts/scrollcontext'
import { useRender } from '../contexts/rendercontext';

const Home = () => {

    const {targetRefs} = useScroll();

    const {activeSection, setActiveSection} = useRender();

    const handleClick = () => {
      setActiveSection('contact');
    }

  return (
    <div ref={targetRefs.top} className="min-h-screen flex justify-center items-center">
        <div className="flex flex-col p-10 max-w-[1020px]">
          <div className="flex flex-col gap-5">
            <div className='flex flex-col gap-5'>
                <div className=" animate-slide-down font-josefin text-5xl lg:text-7xl lg:leading-normal">Hi, I'm Lee Bee Yan - React Web Developer</div>
                <p className="text-md lg:text-lg lg:leading-loose tracking-wider text-xl">
                I specialize in building performant, user-friendly web applications using React, TypeScript, and Gatsby. My goal is to create modern, scalable solutions that make a positive impact for clients and end users alike.
                </p>
            </div>
            
            <div className="flex gap-10">
              <RectButtonFill label={"Contact Me"} onClick={handleClick}/>
              {/* <RectButtonOutline label={"Download CV"} /> */}
            </div>
          </div>
        </div>
      </div>
  )
}

export default Home