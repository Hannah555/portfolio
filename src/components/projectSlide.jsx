
import React from 'react'
import imagesMap from '../utils/imagesMap'
import ImageCorousel from './imageCorousel'

const ProjectSlide = ({data}) => {
    return (
        <div className='flex gap-5 px-10 py-5'>
            {/* <div className='w-[350px] h-[350px] bg-green-teal'>
                {
                    <img className='object-contain' src={imagesMap[data.screenshots]} alt='screenshot'/>
                }
                    
            </div> */}
            <div>
                <ImageCorousel images={data.screenshots} />
            </div>

            

            <div className='flex flex-col gap-5 w-full'>

                <h2>{data.name}</h2>
                <p className='italic'>{data.tagline}</p>
                <ul className='list-disc pl-5'>
                    {
                        data.features.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))
                    }
                </ul>
                <div>
                    <a href={data.projectLinks}>Live Demo</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectSlide
