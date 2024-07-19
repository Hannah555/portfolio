import React from 'react'

const Button = ({label, onClick}) => {
  return (
    <div onClick={onClick} className='rounded-full bg-teal-500 p-4'>
        {label}
    </div>
  )
}

export default Button