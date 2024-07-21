import React from 'react'
import { useScroll } from '../contexts/scrollcontext'

const Navbar = () => {

    const {scrollToDiv} = useScroll()

  return (
    <div className='m-10 uppercase font-semibold'>
        <ul className='flex gap-10'>
            <li>
                <button className='hover:text-teal-500 uppercase font-semibold' onClick={() => scrollToDiv('about')}>About</button>
            </li>
            <li>
                <button className='hover:text-teal-500 uppercase font-semibold' onClick={() => scrollToDiv('contact')}>Contact</button>
            </li>
            <li>
                <button className='hover:text-teal-500 uppercase font-semibold' onClick={() => scrollToDiv('project')}>Project</button>
            </li>
            <li>
                <button className='hover:text-teal-500 uppercase font-semibold' onClick={() => scrollToDiv('blog')}>Blog</button>
            </li>
        </ul>
    </div>
  )
}

export default Navbar