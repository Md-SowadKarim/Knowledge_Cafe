import React from 'react'
import Bookmark from './Bookmark'

const Bookmarks = ({bookmarks,markRead}) => {
  console.log("this is bookmarks")
  console.log(bookmarks)
  const getStoredCart=()=>{
    let cart={}
    const storedCart=localStorage.getItem('cart')
    if(storedCart){
        cart=JSON.parse(storedCart)
    }
    return cart
} 
 
  
  return (
    
    <div>
      <div className='p-3 border-2 shadow-md my-1'>
      <h1> Total Reading Time : {markRead}</h1>
      </div>
      
       <h1>Bookmarded Blogs : {bookmarks.length}</h1>
       {bookmarks.map((bookmark, index)=><Bookmark  key={index} bookmark={bookmark}/>)}
    </div>
  )
}

export default Bookmarks
