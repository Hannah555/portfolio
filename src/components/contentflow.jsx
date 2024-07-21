import React from 'react'
import { ContentBoxBot} from './contentbox'

const ContentFlow = () => {

  

  return (
    <div className='w-full flex flex-col h-96 overflow-y-auto'>
        <ContentBoxBot message={<div>
          Hi there! 👋 I'm Lee's bot assistant. <br /><br />
          I can help you with questions about Lee's job applications, skills, and experience. How can I assist you today?
  </div>}/>
    </div>
  )
}

export default ContentFlow