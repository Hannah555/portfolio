import React from 'react'
import { useScroll } from '../contexts/scrollcontext'
import Card from '../components/card';
import sampleImage from '../images/code1.png'
import arrowIcon from '../images/arrow.svg'

const Blog = () => {

    const {targetRefs} = useScroll();

    const blogList = [
      {
        image: sampleImage,
        title: 'Article 1',
        description: 'Description 1'
      },
      {
        image: sampleImage,
        title: 'Article 2',
        description: 'Description 2'
      },
      {
        image: sampleImage,
        title: 'Article 3',
        description: 'Description 3'
      },
    ];

    const filterItems = blogList.slice(0, 2);

  return (
    <div ref={targetRefs.blog} className='container p-10 flex justify-between items-center'>
        <h1 className='my-10'>Blog</h1>
        <div className='flex items-center'>
          {
            filterItems.map((article, index) => (
              <Card
                key={index}
                imgsrc={article.image}
                title={article.title}
                desp={article.description}
                className={`flex-col`}
              />
            ))}
            <div className='bg-slate-500 h-full py-3 px-8 rounded-full flex justify-center items-center gap-5 hover:cursor-pointer group'>
              <img src={arrowIcon} alt='arrow' className='h-6 w-6 group-hover:translate-x-2 transition-transform duration-300'/>
              <p>More</p>
            </div>
        </div>
    </div>
  )
}

export default Blog