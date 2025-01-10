import React from 'react'
import Popup from '../../components/popup'
import imagesMap from '../../utils/imagesMap'
import CardCorousel from '../../components/cardCorousel'

const Project3 = ({ data }) => {
    return (
        <div className='text-slate-600 flex flex-col justify-center gap-5 mt-16'>
            <div className='flex flex-col md:flex-row gap-20 justify-center items-center py-10'>
                <div className='flex flex-col gap-3'>
                    <h2>{data.name}</h2>
                    <p>{data.tagline}</p>
                </div>

                <img src={imagesMap['cms_home']} alt='screenshot' className='h-[300px] w-fit rounded shadow-lg' />
            </div>
            <div className='bg-orange-100 py-20 px-10 flex flex-col justify-center items-center gap-10'>
                <h2>Features</h2>
                <div className='grid grid-cols-3 gap-4 w-[1200px]'>
                    <div className='flex flex-col-reverse col-span-3 gap-10 bg-slate-50 rounded p-8'>
                        <div className='flex flex-col gap-3'>
                            <h3>Table Implementation From Scratch</h3>
                            <div className='grid grid-cols-4 gap-5'>
                                <div className='flex flex-col shadow-xl p-5'><ul className=''><li className='font-bold'>Data Display</li> </ul><span>Display structured data in rows and columns.</span></div>
                                <div className='flex flex-col shadow-xl p-5'><ul className=''><li className='font-bold'>Sorting</li> </ul><span>Sort data by column (ascending & descending order).</span></div>
                                <div className='flex flex-col shadow-xl p-5'><ul className=''><li className='font-bold'>Column Resizing</li> </ul><span>Adjust column widths for better readability.</span></div>
                                <div className='flex flex-col shadow-xl p-5'><ul className=''><li className='font-bold'>Row Selection</li> </ul><span>Select single or multiple rows for batch actions.</span></div>
                                <div className='flex flex-col shadow-xl p-5'><ul className=''><li className='font-bold'>Filters</li> </ul><span>Apply filters on columns to narrow down data.</span></div>
                                <div className='flex flex-col shadow-xl p-5'><ul className=''><li className='font-bold'>Action Buttons</li> </ul><span>Delete, edit, view details.</span></div>
                                <div className='flex flex-col shadow-xl p-5'><ul className=''><li className='font-bold'>Pagination</li> </ul><span>Splits large data into pages with controls to navigate between them.</span></div>
                            </div>
                        </div>
                        <div className='flex-1 shadow-xl'>
                            <img src={imagesMap['cms_table']} alt='screenshot' />
                        </div>

                    </div>

                    <div className='flex flex-col col-span-2 bg-slate-50 rounded p-8'>
                        <div>
                            <h3>WYSIWYG Editor Implementation from scratch</h3>
                            <div>Include element such as ...</div>
                        </div>
                        <div className='flex-1 shadow-xl'>
                            <img src={imagesMap['cms_wysiwyg']} alt="screenshot" />
                        </div>
                    </div>

                    <div className='flex flex-col gap-5 bg-slate-50 rounded p-8'>
                        <div className='flex-1 shadow-xl'>
                            <img src={imagesMap['cms_crud']} alt="screenshot" />
                        </div>
                        <div>
                            <h3>Full CRUD Operations</h3>
                            <div>ADD, EDIT, DELETE blog content.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project3