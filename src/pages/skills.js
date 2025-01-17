import React, { useState } from 'react';
import { skillSlides } from '../components/skillSlide';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import Corousel from '../components/corousel';

const Skills = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % skillSlides.length);
  };

  const slideToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? skillSlides.length - 1 : prevIndex - 1
    );
  };

  const setSlide = (index) => {
    setCurrentIndex(index);
  }

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
