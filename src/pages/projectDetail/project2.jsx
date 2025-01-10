import React from 'react'
import Popup from '../../components/popup'
import imagesMap from '../../utils/imagesMap'
import CardCorousel from '../../components/cardCorousel'

const Project2 = ({ data }) => {
  return (
    <div className='text-slate-600 flex flex-col justify-center gap-5'>
      <div className='flex flex-col md:flex-row gap-20 justify-center items-center py-10'>
        <div className='flex flex-col gap-3'>
          <h2>{data.name}</h2>
          <p>{data.tagline}</p>
        </div>

        <img src={imagesMap['blog_home']} alt='screenshot' className='h-[300px] w-fit rounded shadow-lg' />
      </div>
      <div className='bg-orange-100 py-20 px-10 flex flex-col justify-center items-center gap-10'>
        <h2>Features</h2>
        <CardCorousel data={data.features}/>
      </div>
    </div>
  )
}

export default Project2