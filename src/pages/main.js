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
import Home from "./home";
import { useRender } from "../contexts/rendercontext";
import Skills from "./skills";

const Main = () => {
  const [isBotVisible, setBotVisible] = useState(false);
  const [isBtnVisible, setBtnVisible] = useState(false);
  const {activeSection} = useRender();

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
      <Navbar/>
      <div
        className={`min-h-screen`}
      >
        {activeSection === 'home' && (
          <Home/>
        )}
        {activeSection === 'about' && (
          <About/>
        )}
        {activeSection === 'skills' && (
          <Skills/>
        )}
        {activeSection === 'contact' && (
          <Contact/>
        )}
        {activeSection === 'project' && (
          <Project/>
        )}
      </div>
      {/* <Contact/>
      <About/>
      <Project/> */}
      {/* <Blog/> */}
      
    </div>
  );
};

export default Main;
