import React, { useState } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const Corousel = ({slides}) => {

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
            <div className="relative min-w-[1020px] min-h-[200px] w-auto h-auto">
                {/* Slide Container */}
                <div className="flex transition-transform duration-500" style={{transform: `translateX(-${currentIndex * 100}%)`,}}>
                    {slides.map((Slide, index) => (
                    <div key={index} className="w-full h-full flex-shrink-0">
                        <Slide />
                    </div>
                    ))}
                </div>

                {/* Controls */}
                <button
                    className="absolute top-1/2 left-5 transform-translate-y-1/2 text-white px-4 py-2 z-10"
                    onClick={slideToPrev}
                >
                    <FaAngleLeft/>
                </button>
                <button
                    className="absolute top-1/2 right-5 transform-translate-y-1/2 text-white px-4 py-2 z-10"
                    onClick={slideToNext}
                >
                    <FaAngleRight/>
                </button>
        </div>
        {/* Indicators */}
        <div className="flex items-center justify-center gap-2">
                {slides.map((_, index) => (
                <div
                    key={index}
                    onClick={() => setSlide(index)}
                    className={`w-3 h-3 rounded-full cursor-pointer ${
                    index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
                    }`}
                ></div>
                ))}
            </div>
        </div>
    )
}

export default Corousel