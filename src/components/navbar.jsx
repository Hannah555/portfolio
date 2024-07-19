import React from 'react'

const Navbar = () => {
  return (
    <div className='text-white m-10'>
        <ul className='flex gap-10'>
            <li>
                <a>About</a>
            </li>
            <li>
                <a>Contact</a>
            </li>
            <li>
                <a>Project</a>
            </li>
            <li>
                <a>Blog</a>
            </li>
        </ul>
    </div>
  )
}

export default Navbar