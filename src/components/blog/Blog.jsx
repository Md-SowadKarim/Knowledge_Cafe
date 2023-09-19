import React from 'react'
import { FaBookmark } from "react-icons/fa";



const Blog = ({nam,handleBookMarkClick,handleMarkReadClick}) => {
 
  return (
    <div className='my-3'>
      <img src={nam.cover} alt="" />
      <div className='flex justify-between'>
        <div className='flex items-center'>
            <div className='p-3'>
                <img className='w-12' src={nam.author_image} alt="" />
            </div>
            <div>
                <h1>{nam.author}</h1>
                <p>{nam.posted_date}</p>
            </div>

        </div>
        <div className='flex items-center'>
            <p className='pr-2'>{nam.reading_time} min </p>
               <button onClick={()=>handleBookMarkClick(nam)} ><FaBookmark/></button>
        </div>
      </div>
      <h1 className='font-extrabold text-2xl' >{nam.title}</h1>
      <p onClick={()=>handleMarkReadClick(nam.reading_time,nam.id)} className='text-purple-600 underline'>Mark As Read</p>
    </div>
  )
}

export default Blog
