import React from 'react'
import { useScroll } from '../contexts/scrollcontext'

const Blog = () => {

    const {targetRefs} = useScroll();

  return (
    <div ref={targetRefs.blog} className='container p-10'>
        <h1>Blog</h1>
    </div>
  )
}

export default Blog