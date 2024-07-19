import React from 'react'
import Button from './button'
import InputBox from './input'
import ContentBox from './contentbox'
import sendIcon from '../images/send.svg'

const Chatbot = () => {
  return (
    <div className='outline outline-1 outline-slate-200 rounded w-1/2 min-h-7 p-2'>
        <div>
            <ContentBox/>
        </div>
        <div className='flex gap-2'>
            <InputBox className="flex-1"/>
            <Button label={<img src={sendIcon} className='w-6 h-6 overflow-hidden'/>} onClick={()=>{}} className="flex-none"/>
        </div>
    </div>
  )
}

export default Chatbot