import React, { useState } from 'react'

import { useEffect } from 'react'
import Blog from '../blog/blog'

const Blogs = ({handleBookMarkClick,handleMarkReadClick}) => {
    const [blogs,setBlogs]=useState([])
    // const handleBookMarkClick=()=>{
    //   console.log("clicked")
    // }
    useEffect(()=>{

        fetch("blogs.json")
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    const name="sowad"
  return (
    <div>
        {
            blogs.map((blog,index)=>
            <Blog handleMarkReadClick={handleMarkReadClick} handleBookMarkClick={handleBookMarkClick} key={index} nam={blog}/>
          )
        }
      
    </div>
   
  )
}



export default Blogs
