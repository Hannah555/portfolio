import React from 'react'
import { useScroll } from '../contexts/scrollcontext'
import image1 from '../images/code1.png'
import Hero from '../components/hero';
import ProjectSlide from '../components/projectSlide';
import { projects } from '../data/projectData';
import Corousel from '../components/corousel';

const Project = () => {

    const {targetRefs} = useScroll();

  return (
    <div className="flex items-center justify-center min-h-screen overflow-hidden">
      <div className="flex flex-col gap-16 max-w-[1250px] w-full overflow-hidden">
        <p className="animate-slide-down font-josefin text-7xl">Projects</p>
        <p>A curated selection of my recent web development work.</p>
        <Corousel slides={projects.map((project) => () => 
                <ProjectSlide data={project}/>
            )}/>
        {/* {
            projects.map((project) => (
                <ProjectSlide data={project}/>
            ))
        } */}
      </div>
    </div>
  )
}

export default Project