import React from 'react'

const CardCorousel = ({ data }) => {

    const visibleCards = 3;


    return (
        <div className="relative max-w-[800px]">
            {/* Cards Container */}
            <div className="flex items-center justify-center overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 "
                >
                    {data.map((feature, index) => {
                        const [title, description] = Object.entries(feature)[0];
                        return (
                            <div key={index} className="bg-slate-800 text-white p-8 rounded-lg shadow flex flex-col justify-center">
                                <h3 className="text-xl font-semibold">{title}</h3>
                                <p className="text-gray-400 mt-2">{description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default CardCorousel