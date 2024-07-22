import React from 'react'
import codeImage1 from '../images/code1.png'
import codeImage2 from '../images/code2.png'

const Card = ({imgsrc, title, desp, className}) => {
  return (
    <div className={`flex gap-10 items-center ${className}`}>
        <img src={imgsrc} alt='code' className='h-96'/>
        <div className='flex flex-col gap-8'>
            <h2 className=''>{title}</h2>
            <div dangerouslySetInnerHTML={{__html: desp}}></div>
        </div>
    </div>
  )
}

// const YCard = ({imgsrc, title, desp}) => {
//   return (
//     <div className='flex flex-col'>
//       <img src={imgsrc} alt='code' className='h=32 w-32'/>
//       <div>
//         <h2>{title}</h2>
        
//       </div>
//     </div>
//   )
// }

Card.defaultProps = {
    image: codeImage2,
    title: 'Default Title',
    desp: 'Default description',
    className: ''
}

export default Card