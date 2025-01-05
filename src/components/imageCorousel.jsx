import React, { useEffect, useState } from 'react'
import imagesMap from '../utils/imagesMap';

const ImageCorousel = ({images}) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, [images.length]);

    const setSlide = (index) => {
        setCurrentIndex(index);
    }

    return (
        <div>
            <div className="relative w-auto h-auto overflow-hidden">
                {/* Slide Container */}
                <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)`, }}>
                    <div className='flex w-[350px] h-[350px]'>
                       {images.map((item, index) => (
                            <img className='object-contain' key={index} src={imagesMap[item]} alt='screenshot'/>
                        ))} 
                    </div>
                    
                </div>
            </div>
            {/* Indicators */}
            <div className="flex items-center justify-center gap-2">
                {images.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setSlide(index)}
                        className={`w-1 h-1 rounded-full cursor-pointer ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
                            }`}
                    ></div>
                ))}
            </div>
        </div>
    )
}

export default ImageCorousel