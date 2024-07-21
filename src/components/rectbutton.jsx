import React from 'react'

const RectButtonFill = ({label, onClick}) => {
  return (
    <div onClick={onClick} className='rounded outline outline-teal-500 bg-teal-500 px-4 py-3 hover:cursor-pointer hover:bg-teal-600'>
        {label}
    </div>
  )
}

const RectButtonOutline = ({label, onClick}) => {
  return (
    <div onClick={onClick} className='rounded outline outline-teal-500 text-teal-500 px-4 py-3 hover:cursor-pointer hover:outline-teal-600 hover:text-teal-600'>
        {label}
    </div>
  )
}

const RectButtonOutlinePink = ({label, onClick}) => {
  return (
    <div onClick={onClick} className='rounded outline outline-slate-200 text-slate-200 px-4 py-3 hover:cursor-pointer hover:outline-slate-400 hover:text-slate-400'>
        {label}
    </div>
  )
}

export {RectButtonFill, RectButtonOutline, RectButtonOutlinePink}