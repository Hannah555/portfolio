
import React from 'react'
import ImageCorousel from './imageCorousel'
import CategorySplit from './categorySplit';
import { usePopup } from '../contexts/popupcontext';

const ProjectSlide = ({ data }) => {

    const {project, setProject} = usePopup();

    const handleProjectView = () => {
        window.open(data.projectLink, '_blank', 'noopener,noreferrer');
    }

    const handleProjectDetailPopup = (page) => {
        setProject(page);
    }

    return (
        <div className='flex flex-col lg:flex-row gap-10 py-10'>
            <div>
                <ImageCorousel images={data.screenshots} />
            </div>
            <div className='flex flex-col gap-5 w-full'>
                <h2>{data.name}</h2>
                <p className='italic'>{data.tagline}</p>
                {/* <ul className='list-disc pl-5 text-lg'>
                    {
                        data.features.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))
                    }
                </ul> */}
                <CategorySplit data={data.techStack}/>

                <div className='flex gap-3'>
                    <button onClick={handleProjectView} className='bg-teal-600 rounded px-3 py-2 hover:bg-teal-400'>Live Demo</button>
                    <button onClick={() => handleProjectDetailPopup(data.projectRef)} className='bg-teal-600 rounded px-3 py-2 hover:bg-teal-400'>Detail</button>
                </div>
            </div>
        </div>
    )
}

export default ProjectSlide
