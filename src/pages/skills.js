import React from 'react';
import { skillSlides } from '../components/skillSlide';
import Corousel from '../components/corousel';

const Skills = () => {

  return (
    <div className="flex p-10 items-center justify-center min-h-screen overflow-hidden">
      <div className="flex flex-col gap-16 max-w-[1020px] w-full overflow-hidden">
        <p className="animate-slide-down font-josefin text-7xl">Skills</p>
        <Corousel slides={skillSlides}/>
      </div>
    </div>
  );
};

export default Skills;
