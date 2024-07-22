import React, { useState } from "react";
import Card from "./card";

const Hero = ({ sections }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSection = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      {sections.map((section, index) => (
        
        <Card
          key={index}
          imgsrc={section.image}
          title={section.title}
          desp={section.description}
          className={`${index === currentIndex ? "block" : "hidden"}`}
        />
      ))}

      <div className="flex gap-3 p-10">
        {sections.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-teal-500" : "bg-slate-600"
            }`}
            onClick={() => goToSection(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
