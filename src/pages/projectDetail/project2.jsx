import React from 'react'
import Popup from '../../components/popup'
import imagesMap from '../../utils/imagesMap'
import CardCorousel from '../../components/cardCorousel'
import { chunkArrayWithPattern } from '../../utils/chunkArray'

const Project2 = ({ data }) => {
  return (
    <div className='text-slate-600 flex flex-col justify-center gap-5 pt-20'>
      <div className='flex flex-col lg:flex-row gap-20 justify-center items-center py-10'>
        <div className='flex flex-col gap-3'>
          <h2>{data.name}</h2>
          <p>{data.tagline}</p>
        </div>

        <img src={imagesMap['blog_home']} alt='screenshot' className='h-[300px] max-w-[500px] w-fit rounded shadow-lg' />
      </div>
      <div className='bg-gray-700 py-20 px-10 flex flex-col justify-center items-center gap-10'>
        <h2 className='text-white text-2xl font-bold'>Features</h2>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-[1200px] auto-rows-auto'>
          {/* Grid Item 1 */}
          <div className='flex flex-col-reverse gap-6 bg-slate-50 rounded p-6'>
            <div className='flex flex-col gap-1'>
              <h3 className='text-lg font-semibold'>Responsive Design</h3>
              <div>Cover user experience across devices of all sizes (Desktop - Mobile).</div>
            </div>
            <div className='px-10'>
              <img
                src={imagesMap['blog_responsive']}
                alt='Responsive Design screenshot'
                className='w-full object-cover rounded'
              />
            </div>
          </div>

          {/* Grid Item 2 */}
          <div className='flex flex-col gap-6 bg-slate-50 rounded p-6'>
            <div className=''>
              <img
                src={imagesMap['blog_form']}
                alt='Form screenshot'
                className='w-full h-auto object-cover rounded'
              />
            </div>
            <div className='flex flex-col gap-1'>
              <h3 className='text-lg font-semibold'>Email & Form Integration</h3>
              <div>Front-end Form, Express.js Endpoint, Zoho Mail API/SMTP.</div>
            </div>
          </div>

          {/* Grid Item 3 */}
          <div className='flex flex-col gap-6 bg-slate-50 rounded p-6'>
            <div className='px-2'>
              <img
                src={imagesMap['cms_jenkins']}
                alt='jenkins screenshot'
                className='w-full h-auto object-cover rounded'
              />
            </div>
            <div className='flex flex-col gap-1'>
              <h3 className='text-lg font-semibold'>CI/CD Pipeline</h3>
              <div>Deployed via Jenkins, automating builds and deployments on Git pushes.</div>
            </div>
          </div>

          {/* Grid Item 4 */}
          <div className='flex flex-col gap-6 bg-slate-50 rounded p-6'>
            <div className=''>
              <img
                src={imagesMap['blog_vps']}
                alt='vps graphic'
                className='w-full h-auto object-cover rounded'
              />
            </div>
            <div className='flex flex-col gap-1'>
              <h3 className='text-lg font-semibold'>VPS & NGINX</h3>
              <div>Configured a self-managed VPS with Nginx as a reverse proxy for reliability and performance.</div>
            </div>
          </div>

          {/* Grid Item 5 */}
          <div className='flex flex-col gap-6 bg-slate-50 rounded p-6'>
            <div className=''>
              <img
                src={imagesMap['blog_secure']}
                alt='vps graphic'
                className='w-full h-auto object-cover rounded'
              />
            </div>
            <div className='flex flex-col gap-1'>
              <h3 className='text-lg font-semibold'>SSL Security</h3>
              <div> Implemented SSL certificates (e.g., Let's Encrypt) for secure HTTPS connections.</div>
            </div>
          </div>

          {/* Grid Item 6 */}
          <div className='flex flex-col gap-6 bg-slate-50 rounded p-6'>
            <div className=''>
              <img
                src={imagesMap['blog_maintainability']}
                alt='vps graphic'
                className='w-full h-auto object-cover rounded'
              />
            </div>
            <div className='flex flex-col gap-1'>
              <h3 className='text-lg font-semibold'>Maintainability</h3>
              <div>Utilized Nx Workspace for organized, scalable code.</div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-28 justify-center items-center py-20 px-10'>
        <h2>Tools</h2>
        <div className='flex flex-col gap-10'>
          {
            chunkArrayWithPattern(data.icons, [4, 5, 3, 4]).map((row, rowIndex) => (
              <div key={rowIndex} className="flex gap-32 justify-center">
                {row.map((icon, index) => (
                  <img src={imagesMap[icon]} key={index} className="h-10" />
                ))}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Project2