import React, { useState } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const Corousel = ({ slides }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const slideToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const slideToPrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    const setSlide = (index) => {
        setCurrentIndex(index);
    }

    return (
        <div>

            {/* Indicators */}
            <div className="flex items-center gap-2">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setSlide(index)}
                        className={`w-7 h-7 flex items-center justify-center rounded-full cursor-pointer ${index === currentIndex ? 'bg-teal-800' : 'bg-teal-300'}`}
                    >{index + 1}</div>
                ))}
            </div>

            <div className="relative px-10 overflow-hidden">
                {/* Slide Container */}
                <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)`, }}>
                    {slides.map((Slide, index) => (
                        <div key={index} className="w-full h-full flex-shrink-0 flex justify-center items-center">
                            <Slide />
                        </div>
                    ))}
                </div>

                {/* Controls */}
                <button
                    className="absolute top-1/2 left-5 transform-translate-y-1/2 text-white px-2 py-2 z-10"
                    onClick={slideToPrev}
                >
                    <FaAngleLeft />
                </button>
                <button
                    className="absolute top-1/2 right-5 transform-translate-y-1/2 text-white px2 py-2 z-10"
                    onClick={slideToNext}
                >
                    <FaAngleRight />
                </button>
            </div>
            
        </div>
    )
}

export default Corousel