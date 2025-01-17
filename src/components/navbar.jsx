import React, { useState } from 'react'
import { useScroll } from '../contexts/scrollcontext'
import { useRender } from '../contexts/rendercontext';
import { FaEquals, FaX } from 'react-icons/fa6';

const Navbar = () => {

    const menu = ['home', 'about', 'skills', 'contact', 'project'];
    const { scrollToDiv } = useScroll();
    // const [activeSection, setActiveSective] = useState('top');
    const { activeSection, setActiveSection } = useRender();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleClick = (section) => {
        setActiveSection(section);
        scrollToDiv(section);
        setMenuOpen(false);
    }

    return (
        <div>
            {/* Hamburger Button */}
            <div className='fixed right-2 top-2 visible lg:invisible z-50'>
                <button
                    className='text-white flex justify-center items-center p-2 bg-green-400 rounded focus:outline-none'
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FaX /> : <FaEquals />}
                </button>
            </div>

            {/* Desktop Menu */}
            <div className='invisible lg:visible fixed left-0 top-0 h-full flex items-center justify-center uppercase md:left-24'>
                <ul className='flex flex-col items-center gap-20 text-xl font-light text-green-400'>
                    {
                        menu.map((section) => (
                            <li key={section}>
                                <button className={`transform transition-transform duration-300 ${activeSection === section ? 'scale-150 font-normal' : 'hover:scale-150'}`} onClick={() => handleClick(section)}>
                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                </button>
                            </li>
                        ))
                    }
                    {/* <li>
                <button className='text-yellow-300 hover:scale-125' onClick={() => scrollToDiv('blog')}>Blog</button>
            </li> */}
                </ul>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed top-0 left-0 w-full h-full bg-gray-800 text-white transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 z-40 lg:hidden`}>
                <ul className='flex flex-col mt-20 items-center gap-10 text-lg font-light uppercase'>
                    {
                        menu.map((section) => (
                            <li key={section}>
                                <button
                                    className={`transform transition-transform duration-300 ${activeSection === section
                                            ? 'scale-125 font-normal text-green-400'
                                            : 'hover:scale-125'
                                        }`}
                                    onClick={() => handleClick(section)}
                                >{section.charAt(0).toUpperCase() + section.slice(1)}</button>
                            </li>
                        ))

                    }
                </ul>
            </div>
        </div>

    )
}

export default Navbar