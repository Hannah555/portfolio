import React from 'react'
import phoneIcon from '../images/phone.svg'
import mailIcon from '../images/mail.svg'
import whatsappIcon from '../images/whatsapp.svg'
import { useScroll } from '../contexts/scrollcontext'

const Contact = () => {

    const {targetRefs} = useScroll();

  return (
    <div ref={targetRefs.contact}  className='flex justify-center container gap-24 p-10 border-y-2 border-y-gray-500'>
        <div className='flex gap-4 justify-center items-end'>
            <div className='flex gap-2'>
                <img src={whatsappIcon} className='h-6 w-6' alt='whatsapp icon'/>
                
                <img src={phoneIcon} alt='phone icon' className='h-6 w-6'/>
            </div>
            
            <a href='https://wa.me/qr/HCJXP6QQHRIGK1' className='hover:underline hover:text-teal-600 hover:cursor-pointer'>(+06) 0199740620 </a>
        </div>
        <div className='flex gap-4'>
            <img src={mailIcon} alt='mail icon' className='h-6 w-6'/>
            <a href='mailto:genezelee.beeyan@gmail.com' className='hover:underline hover:text-teal-600 hover:cursor-pointer'>genezelee.beeyan@gmail.com</a>
        </div>
    </div>
  )
}

export default Contact