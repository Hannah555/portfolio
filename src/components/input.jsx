import React from 'react'
import emojiIcon from '../images/emoji.svg'

const InputBox = () => {
  return (
    <div className='w-full flex rounded-full p-3 bg-slate-500 justify-center items-center gap-4'>
        <img src={emojiIcon} className='h-6 w-6' alt='icon'/>
        <input 
        placeholder='Message'
        className='w-full bg-slate-500 outline-none'/>
    </div>   
  )
}

export default InputBox