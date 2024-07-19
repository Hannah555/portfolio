import React from 'react'
import emojiIcon from '../images/emoji.svg'

const InputBox = () => {
  return (
    <div className='w-full flex rounded-full p-4 bg-slate-700 justify-center items-center gap-5'>
        <img src={emojiIcon} className='h-6 w-6'/>
        <input 
        placeholder='Message'
        className='w-full bg-slate-700 outline-none '/>
    </div>
        
    
  )
}

export default InputBox