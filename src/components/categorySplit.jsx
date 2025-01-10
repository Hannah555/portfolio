import React from 'react'

const CategorySplit = ({ data }) => {

    const bgColors = [
        'bg-teal-300',
        'bg-orange-300',
        'bg-green-300',
        'bg-blue-300',
        'bg-yellow-300',
        'bg-purple-300',
        'bg-pink-300',
    ];

    const getRandomColor = () => bgColors[Math.floor(Math.random() * bgColors.length)];

    return (
        <div className="flex flex-col">
            {data.map((stack, index) => {
                // Get categories as an array of entries
                const categories = Object.entries(stack);

                if (categories.length < 3) {
                    // Single column for fewer than 4 categories
                    return (
                        <div key={index} className="flex flex-col gap-4">
                            {categories.map(([category, tools]) => (
                                <div key={category} className="mb-4">
                                    <h3 className="text-xl font-semibold">{category}</h3>
                                    <div className="flex gap-3">
                                        {tools.map((tool, idx) => (
                                            <div
                                                key={idx}
                                                className={`${getRandomColor()} text-black text-sm rounded-full px-2 py-1`}
                                            >
                                                {tool}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    );
                } else {
                    // Split into two columns if 4 or more categories
                    const half = Math.ceil(categories.length / 2);
                    const leftColumn = categories.slice(0, half);
                    const rightColumn = categories.slice(half);

                    return (
                        <div key={index} className="grid grid-cols-2 gap-4">
                            {/* Left Column */}
                            <div className="flex flex-col gap-4">
                                {leftColumn.map(([category, tools]) => (
                                    <div key={category} className="mb-4">
                                        <h3 className="text-xl font-semibold">{category}</h3>
                                        <div className="flex gap-3">
                                            {tools.map((tool, idx) => (
                                                <div
                                                    key={idx}
                                                    className={`${getRandomColor()} text-black text-sm rounded-full px-2 py-1`}
                                                >
                                                    {tool}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Right Column */}
                            <div className="flex flex-col gap-4">
                                {rightColumn.map(([category, tools]) => (
                                    <div key={category} className="mb-4">
                                        <h3 className="text-xl font-semibold">{category}</h3>
                                        <div className="flex gap-3">
                                            {tools.map((tool, idx) => (
                                                <div
                                                    key={idx}
                                                    className={`${getRandomColor()} text-black text-sm rounded-full px-2 py-1`}
                                                >
                                                    {tool}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                }
            })}
        </div>

    )
}

export default CategorySplit