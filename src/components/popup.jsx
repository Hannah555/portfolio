import React from 'react'
import { usePopup } from '../contexts/popupcontext'

const Popup = ({children}) => {

    const {setProject} = usePopup();

    const handleProjectClose = () => {
        setProject('');
    }

  return (
    <div className='z-50 fixed top-0 left-0 h-screen w-screen flex flex-col justify-center items-center gap-3 p-5'>
        
        <div className='relative bg-white w-full flex-1 rounded overflow-y-auto'>
          <div className='fixed top-8 w-full flex justify-center items-center'>
            <button className='flex justify-center items-center gap-3 bg-red-400 rounded-full p-3 h-10 w-10 shadow-lg' onClick={() => handleProjectClose()}>
              <span className='text-3xl'>x</span>
            </button>
          </div>
          
          {children}  
        </div>
        
    </div>
  )
}

export default Popup