import React from 'react'
import phoneIcon from '../images/phone.svg'
import mailIcon from '../images/mail.svg'
import whatsappIcon from '../images/whatsapp.svg'
import { useScroll } from '../contexts/scrollcontext'

const Contact = () => {

    const {targetRefs} = useScroll();

  return (
    <div className='flex p-10 items-center justify-center min-h-screen'>
       <div className='flex flex-col gap-10 p-10 '>
            <div className='flex flex-col gap-5'>
                <p className=' animate-slide-down font-josefin text-7xl'>Let's Connect</p>
                <p className=''>If you have any questions, want to collaborate, or just want to say hi, feel free to reach out!</p>
            </div>
            <div ref={targetRefs.contact}  className='flex flex-col justify-start items-start gap-10 border border-2 border-teal-600 rounded p-10'>
                <div className='flex gap-8 justify-center items-center'>
                    <div className='flex gap-10'>
                        <img src={whatsappIcon} className='h-6 w-6' alt='whatsapp icon'/>
                    </div>
                    
                    <a href='https://wa.me/qr/HCJXP6QQHRIGK1' className='hover:underline hover:text-teal-600 hover:cursor-pointer'>(+06) 0199740620 </a>
                </div>
                <div className='flex gap-8'>
                    <img src={mailIcon} alt='mail icon' className='h-6 w-6'/>
                    <a href='mailto:beeyanlee55@gmail.com' className='hover:underline hover:text-teal-600 hover:cursor-pointer'>beeyanlee55@gmail.com</a>
                </div>
            </div>
        </div> 
    </div>
    
    
  )
}

export default Contact