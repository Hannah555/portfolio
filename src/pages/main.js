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
import Popup from "../components/popup";
import Project1 from "./projectDetail/project1";
import { usePopup } from "../contexts/popupcontext";
import { projects } from "../data/projectData";
import Project2 from "./projectDetail/project2";
import Project3 from "./projectDetail/project3";

const Main = () => {
  const [isBotVisible, setBotVisible] = useState(false);
  const [isBtnVisible, setBtnVisible] = useState(false);
  const {activeSection} = useRender();
  const {project} = usePopup();

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
    <div className="relative font-josefin font-normal static">
      <div className="">
        <Navbar/>
      </div>
      
      <div className={`min-h-screen`} >
        {activeSection === 'home' && (<Home/>)}
        {activeSection === 'about' && (<About/>)}
        {activeSection === 'skills' && (<Skills/>)}
        {activeSection === 'contact' && (<Contact/>)}
        {activeSection === 'project' && (<Project/>)}
      </div>
      {
        project !== '' &&
        <Popup>
            {project === 'project1' && <Project1 data={projects[0]}/>}
            {project === 'project2' && <Project2 data={projects[1]}/>}
            {project === 'project3' && <Project3 data={projects[2]}/>}
        </Popup>
      }
      
    </div>
  );
};

export default Main;
