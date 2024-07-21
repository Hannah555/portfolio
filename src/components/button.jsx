import React from 'react'

const Button = ({label, onClick}) => {
  return (
    <div onClick={onClick} className='rounded-full bg-teal-500 hover:cursor-pointer hover:bg-teal-600 relative h-12 w-14 flex justify-center items-center'>

      <span className='absolute'>{label}</span>  
    </div>
  )
}

export default Button