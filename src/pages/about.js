import React from "react";
import Card from "../components/card";
import chevronDown from "../images/chevron-down.svg";
import codeImage1 from "../images/code1.png";
import codeImage2 from "../images/code2.png";
import devopsImage from "../images/devops.png";
import { useScroll } from "../contexts/scrollcontext";

const About = () => {

    const {targetRefs} = useScroll()

  const skills = [
    {
      image: codeImage1,
      title: "Front-End Development",
      description:
        "Creating responsive and dynamic user interfaces using React, JavaScript, HTML, and CSS (TailwindCSS).",
    },
    {
      image: codeImage2,
      title: "Back-End Development",
      description:
        "Building and maintaining server-side applications with Node.js, Express, database management (MongoDB).",
    },
    {
        image: devopsImage,
        title: "DevOps",
        description:
          "Ensuring smooth deployment and development workflows with tools like Docker and Jenkins.",
      },
  ];

  return (
    <div ref={targetRefs.about} className="container p-10 pt-20 flex flex-col gap-5">
      <div className="flex flex-col gap-5">
        <h1>About</h1>
        <div className="flex flex-col gap-5">
          <p>
            I'm a web developer passionate about turning ideas into interactive
            digital experiences. I’ve built several project using React library
            and frameworks (Gatsby, Payload CMS) which reflects my knowledge in
            front-end and full-stack development. I love to bring my skills to
            new and exciting challenges.
          </p>
          <p className="italic text-xl bg-pink-500 w-fit px-3">
            I’m looking for new opportunities as a web developer.
          </p>
        </div>
      </div>

      <div className="mt-10 flex items-center gap-3">
        <p className="text-2xl text-slate-400">skills</p>
        <img src={chevronDown} alt="icon" className="h-5 w-5 -rotate-90" />
      </div>

      <div>
        {skills.map((skill, index) => (
          <Card
            key={index}
            imgsrc={skill.image}
            title={skill.title}
            desp={skill.description}
            className={index % 2 === 0 ? "flex-row-reverse" : ""}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
