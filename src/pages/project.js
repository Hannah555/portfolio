import React from 'react'
import { useScroll } from '../contexts/scrollcontext'
import image1 from '../images/code1.png'
import Hero from '../components/hero';

const Project = () => {

    const {targetRefs} = useScroll();

    const sections = [
        {
            image: image1,
            title: 'Web Blog with Shopping Cart',
            description: '<div><p>A comprehensive blog platform with e-commerce capabilities.</p></div>'
        },
        {
            image: image1,
            title: 'Web Portfolio (Opusmonkey)',
            description: '<p>This is a portfolio website for a HR freelancer.</p>'
        },
        {
            image: image1,
            title: 'Syncplay',
            description: '<p>A website that allow users to watch movie together.</p>'
        },
    ]

  return (
    <div ref={targetRefs.project} className='container flex flex-col justify-center container gap-24 p-10 border-y-2 border-y-gray-500'>
        <h1 className='text-center mt-10'>Project</h1>
        <div>
            <Hero sections={sections}/>
        </div>
    </div>
  )
}

export default Project