import React from 'react'
import { useScroll } from '../contexts/scrollcontext'
import ProjectSlide from '../components/projectSlide';
import { projects } from '../data/projectData';
import Corousel from '../components/corousel';

const Project = () => {

  return (
    <div className="flex items-center justify-center min-h-screen overflow-hidden lg:ml-[245px] p-5 pt-10">
      <div className="flex flex-col gap-8 max-w-[1250px] w-full overflow-hidden">
        <p className="animate-slide-down font-josefin text-7xl px-10 lg:px-0">Projects</p>
        <p className='px-10 lg:px-0'>A curated selection of my recent web development work.</p>
        <Corousel slides={projects.map((project) => () => 
                <ProjectSlide data={project}/>
            )}/>
      </div>
    </div>
  )
}

export default Project