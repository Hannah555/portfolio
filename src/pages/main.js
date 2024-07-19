import React from 'react'
import Navbar from '../components/navbar'
import Chatbot from '../components/chatbot'

const Main = () => {
  return (
    <div className="text-normal">
      <div className="flex flex-col justify-center items-center container min-h-screen">
        <div className="p-10 text-7xl uppercase">Lee Bee Yan</div>
        <Navbar/>
        <div className='m-10'>
            Hi, I'm a web developer who specializes in creating dynamic, user-friendly web applications and sharing my knowledge through blog posts.
        </div>
        <Chatbot/>
      </div>
      
    </div>
  )
}

export default Main