import React from 'react'
import imagesMap from '../../utils/imagesMap'
import CardCorousel from '../../components/cardCorousel'
import { chunkArrayWithPattern } from '../../utils/chunkArray'

const Project1 = ({ data }) => {
  return (
    <div className='text-slate-600 flex flex-col justify-center gap-5 pt-20'>
      <div className='flex flex-col lg:flex-row gap-20 justify-center items-center py-10'>
        <div className='flex flex-col gap-3 px-5'>
          <h2>{data.name}</h2>
          <p>{data.tagline}</p>
        </div>

        <img src={imagesMap['gatsby_home']} alt='screenshot' className='md:max-w-[500px] w-fit rounded shadow-lg' />
      </div>
      <div className='bg-orange-100 py-20 px-10 flex flex-col justify-center items-center gap-10'>
        <h2>Features</h2>
        <CardCorousel data={data.features}/>
      </div>
      <div className='flex flex-col gap-16 justify-center items-center py-20 px-10'>
        <h2>Tools</h2>
        <div className='flex flex-col gap-10'>
          {
            chunkArrayWithPattern(data.icons, [4, 5, 3, 4]).map((row, rowIndex) => (
              <div key={rowIndex} className="flex flex-col md:flex-row gap-10 md:gap-32 justify-center items-center">
                {row.map((icon, index) => (
                  <img src={imagesMap[icon]} key={index} className="h-10" alt='screenshot'/>
                ))}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Project1