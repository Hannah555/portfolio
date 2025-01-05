import React, { useState } from 'react'
import { useScroll } from '../contexts/scrollcontext'
import { useRender } from '../contexts/rendercontext';

const Navbar = () => {

    const {scrollToDiv} = useScroll();
    // const [activeSection, setActiveSective] = useState('top');
    const {activeSection, setActiveSection} = useRender();

    const handleClick = (section) => {
        setActiveSection(section);
        scrollToDiv(section);
    }

  return (
    <div className='fixed left-0 top-0 h-full flex items-center justify-center uppercase fixed left-0 md:left-24'>
        <ul className='flex flex-col items-center gap-20 text-xl font-light text-green-400'>
            <li>
                <button className={`transform transition-transform duration-300 ${activeSection === 'home' ? 'scale-150 font-normal' : 'hover:scale-150'}`} onClick={() => handleClick('home')}>Home</button>
            </li>
            <li>
                <button className={`transform transition-transform duration-300 ${activeSection === 'about' ? 'scale-150 font-normal' : 'hover:scale-150'}`} onClick={() => handleClick('about')}>About</button>
            </li>
            <li>
                <button className={`transform transition-transform duration-300 ${activeSection === 'skills' ? 'scale-150 font-normal' : 'hover:scale-150'}`} onClick={() => handleClick('skills')}>Skills</button>
            </li>
            <li>
                <button className={`transform transition-transform duration-300 ${activeSection === 'contact' ? 'scale-150 font-normal' : 'hover:scale-150'}`} onClick={() => handleClick('contact')}>Contact</button>
            </li>
            <li>
                <button className={`transform transition-transform duration-300 ${activeSection === 'project' ? 'scale-150 font-normal' : 'hover:scale-150'}`} onClick={() => handleClick('project')}>Project</button>
            </li>
            {/* <li>
                <button className='text-yellow-300 hover:scale-125' onClick={() => scrollToDiv('blog')}>Blog</button>
            </li> */}
        </ul>
    </div>
  )
}

export default Navbar