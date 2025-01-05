import React from "react";
import Card from "../components/card";
import chevronDown from "../images/chevron-down.svg";
import codeImage1 from "../images/code1.png";
import codeImage2 from "../images/code2.png";
import devopsImage from "../images/devops.png";
import { useScroll } from "../contexts/scrollcontext";
import quoteImage from "../images/quotes.png";

const About = () => {

    const {targetRefs} = useScroll();

  const skills = [
    {
      image: codeImage1,
      title: "Front-End Development",
      description:
        "<p>Creating responsive and dynamic user interfaces using React, JavaScript, HTML, and CSS (TailwindCSS).</p>",
    },
    {
      image: codeImage2,
      title: "Back-End Development",
      description:
        "<p>Building and maintaining server-side applications with Node.js, Express, database management (MongoDB).</p>",
    },
    {
        image: devopsImage,
        title: "DevOps",
        description:
          "<p>Ensuring smooth deployment and development workflows with tools like Docker and Jenkins.</p>",
      },
  ];

  return (
    <div ref={targetRefs.about} className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col gap-16 max-w-[1020px]">
        <p className=' animate-slide-down font-josefin text-7xl'>About Me</p>
        <div className="flex flex-col gap-5 relative p-10">
          <div className="absolute top-0 left-0 h-10 w-10 border-t-4 border-l-4 border-teal-500"></div>
          {/* <div className="text-7xl font-bold text-gray-500 text-center">
            “
          </div> */}
          <img src={quoteImage} alt='code' className='w-10'/>
          <p className="tracking-wider leading-loose text-xl">
            I'm a web developer passionate about turning ideas into interactive
            digital experiences. I've built several project using React library
            and frameworks (Gatsby, Payload CMS) which reflects my knowledge in
            front-end and full-stack development. I love to bring my skills to
            new and exciting challenges.
          </p>
          <div className="absolute bottom-0 right-0 h-10 w-10 border-b-4 border-r-4 border-teal-500"></div>
        </div>
      </div>

      {/* <div className="mt-10 flex items-center gap-3">
        <p className="text-2xl text-slate-400">skills</p>
        <img src={chevronDown} alt="icon" className="h-5 w-5 -rotate-90" />
      </div> */}

      {/* <div>
        {skills.map((skill, index) => (
          <Card
            key={index}
            imgsrc={skill.image}
            title={skill.title}
            desp={skill.description}
            className={index % 2 === 0 ? "flex-row-reverse" : ""}
          />
        ))}
      </div> */}
    </div>
  );
};

export default About;
