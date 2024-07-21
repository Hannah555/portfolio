import React from 'react'
import Button from './button'
import InputBox from './input'
import sendIcon from '../images/send.svg'
import ContentFlow from './contentflow'

const Chatbot = () => {

  const handleSendRequest = ({message}) => {

  }

  return (
    <div className='animate-slide-up outline outline-1 outline-slate-200 rounded w-full min-h-7 p-2'>
        <div>
            <ContentFlow/>
        </div>
        <div className='flex gap-2'>
            <InputBox className="flex-1"/>
            <Button label={<img src={sendIcon} className='w-7 h-7 overflow-hidden' alt='icon'/>} onClick={()=>{}} className="flex-none"/>
        </div>
    </div>
  )
}

export default Chatbot