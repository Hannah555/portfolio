import React from 'react'
import chevronIcon from '../images/chevron-down.svg'
import { useScroll } from '../contexts/scrollcontext'

const FloatButton = () => {

    const {scrollToDiv} = useScroll()

  return (
    <button className='flex justify-center items-center rounded-full h-10 w-10 fixed bottom-4 right-4 bg-teal-500 rotate-180' onClick={() => scrollToDiv('top')}>
        <img src={chevronIcon} alt='go to top' className='h-5 w-5'/>
    </button>
  )
}

export default FloatButton