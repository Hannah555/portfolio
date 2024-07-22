import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Chatbot from "../components/chatbot";
import {
  RectButtonFill,
  RectButtonOutline,
  RectButtonOutlinePink,
} from "../components/rectbutton";
import Contact from "./contact";
import About from "./about";
import Project from "./project";
import Blog from "./blog";
import FloatButton from "../components/floatbutton";
import { useScroll } from "../contexts/scrollcontext";

const Main = () => {
  const [isBotVisible, setBotVisible] = useState(false);
  const [isBtnVisible, setBtnVisible] = useState(false);

  const {targetRefs} = useScroll();

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if(scrollPosition > 300) {
      setBtnVisible(true);
    } else {
      setBtnVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll)
    };
  }, []);

  return (
    <div className="font-josefin font-normal static">
      <div ref={targetRefs.top} className="min-h-screen flex flex-col justify-center items-center">
        <div className="p-10 flex flex-col justify-center items-center container">
          <div className="animate-slide-down font-josefin text-7xl uppercase">
            Lee Bee Yan
          </div>
          <Navbar />
          <p className="text-lg pb-5 text-center">
            Hi, I'm a web developer who specializes in creating dynamic,
            user-friendly web applications and sharing my knowledge through blog
            posts.
          </p>
          <div className="flex gap-10 mt-4">
            <RectButtonFill label={"Hire Me"} />
            <RectButtonOutline label={"Download CV"} />
            {!isBotVisible && (
              <RectButtonOutlinePink
                label={
                  <div className="flex justify-center items-center gap-2">
                    {/* <img src={chatIcon} className="h-6 w-6" alt="icon" /> */}
                    <span>Talk with Chatbot</span>
                  </div>
                }
                onClick={() => {
                  setBotVisible(true);
                }}
              />
            )}
          </div>
          {isBotVisible && (
            <div className="m-10 w-1/2">
              <Chatbot />
            </div>
          )}
        </div>
      </div>
      <Contact/>
      <About/>
      <Project/>
      <Blog/>
      {
        isBtnVisible && (<FloatButton/>)
      }
      
    </div>
  );
};

export default Main;
