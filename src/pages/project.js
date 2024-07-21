import React from 'react'
import { useScroll } from '../contexts/scrollcontext'

const Project = () => {

    const {targetRefs} = useScroll();

  return (
    <div ref={targetRefs.project} className='container flex justify-center container gap-24 p-10 border-y-2 border-y-gray-500'>
        <h1>Project</h1>
        <div>
            
        </div>
    </div>
  )
}

export default Project