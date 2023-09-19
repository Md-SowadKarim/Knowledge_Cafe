import React, { useState } from 'react'

const Bookmark = ({bookmark}) => {
    console.log(bookmark)
   
   
  return (
    <div className='p-3 border-2 shadow-md my-1'>
      <h1 className='font-semibold text-md'> {bookmark.title}</h1>
    </div>
  )
}

export default Bookmark
