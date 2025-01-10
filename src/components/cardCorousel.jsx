import React, { useState } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const CardCorousel = ({ data }) => {

    const [startIndex, setStartIndex] = useState(0);
    const visibleCards = 3;

    // Handle right navigation
    const handleNext = () => {
        if (startIndex + visibleCards < data.length) {
            setStartIndex(startIndex + 1);
        }
    };

    // Handle left navigation
    const handlePrev = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    return (
        <div className="relative mx-auto max-w-[1200px] p-5">
            {/* Cards Container */}
            <div className="flex items-center justify-center overflow-hidden ml-10 mr-5">
                <div className="flex gap-5 transition-transform duration-300"
                    style={{ transform: `translateX(-${startIndex * 100 / visibleCards}%)` }}
                >
                    {data.map((feature, index) => {
                        const [title, description] = Object.entries(feature)[0];
                        return (
                            <div key={index} className="min-w-[calc(33.333%-1.25rem)] bg-slate-800 text-white p-8 rounded-lg shadow flex flex-col justify-center">
                                <h3 className="text-xl font-semibold">{title}</h3>
                                <p className="text-gray-400 mt-2">{description}</p>
                            </div>
                        )

                    })}
                </div>
            </div>

            {/* Navigation Buttons */}
            {/* <div className="flex absolute justify-between">
                <button
                    onClick={handlePrev}
                    disabled={startIndex === 0}
                    className={`px-4 py-2 rounded bg-blue-500 text-white disabled:bg-gray-300`}
                >
                    Left
                </button>
                <button
                    onClick={handleNext}
                    disabled={startIndex + visibleCards >= data.length}
                    className={`px-4 py-2 rounded bg-blue-500 text-white disabled:bg-gray-300`}
                >
                    Right
                </button>
            </div> */}

            <button
                className="absolute top-1/2 left-5 transform-translate-y-1/2 px-2 py-2 z-10"
                onClick={handlePrev}
            >
                <FaAngleLeft />
            </button>
            <button
                className="absolute top-1/2 right-5 transform-translate-y-1/2 px2 py-2 z-10"
                onClick={handleNext}
            >
                <FaAngleRight />
            </button>
        </div>
    )
}

export default CardCorousel