import React from "react";
import { useScroll } from "../contexts/scrollcontext";
import quoteImage from "../images/quotes.png";

const About = () => {

    const {targetRefs} = useScroll();

  return (
    <div ref={targetRefs.about} className="flex p-10 items-center justify-center min-h-screen">
      <div className="flex flex-col gap-10 lg:gap-16 max-w-[1020px]">
        <p className=' animate-slide-down font-josefin text-7xl'>About Me</p>
        <div className="flex flex-col gap-5 relative p-5 lg:p-10">
          <div className="absolute top-0 left-0 h-10 w-10 border-t-4 border-l-4 border-teal-500"></div>
          <img src={quoteImage} alt='code' className='w-10'/>
          <div className="tracking-wider lg:leading-loose text-xl">
            I'm a web developer passionate about turning ideas into interactive
            digital experiences. I've built several project using React library
            and frameworks (Gatsby, Payload CMS) which reflects my knowledge in
            front-end and full-stack development. I love to bring my skills to
            new and exciting challenges.
          </div>
          <div className="absolute bottom-0 right-0 h-10 w-10 border-b-4 border-r-4 border-teal-500"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
