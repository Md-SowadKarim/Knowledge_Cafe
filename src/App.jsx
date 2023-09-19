import { useState } from 'react'
import './App.css'
import Blog from './components/blog/blog'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/bookmarks'
import Header from './components/header/Header'
//import Blogs from './components/blogs/Blogs';

function App() {
const [bookmarks,setBookmarks]=useState([])
const [markRead,setMarkRead]=useState(0)
//const [name,setName]=useState("")
  const handleBookMarkClick=(nam)=>{
    const newBookmarks=[...bookmarks,nam]
    setBookmarks(newBookmarks)
    // setName(nam.author)
    // console.log(nam)
    // console.log(name)
    console.log(bookmarks)
}

const handleMarkReadClick=(time,id)=>{
  setMarkRead(markRead+time)
console.log("this is id ",markRead)
const remainBookMark=bookmarks.filter(bookmark=>bookmark.id !== id)
console.log(remainBookMark)
setBookmarks(remainBookMark)
}

const newBookMarks=bookmarks.filter((bookmark)=> bookmark.id !== markRead)
  console.log("the new array", newBookMarks)
  return (
    <>
    
    
  <Header/>
  <div className='container mx-auto justify-between flex'>
    <div className='w-[65%]'>
    <Blogs handleMarkReadClick={handleMarkReadClick} handleBookMarkClick={handleBookMarkClick} />
    </div>
    <div className='w-[33%] text-center' >
    <Bookmarks markRead={markRead}  bookmarks={newBookMarks} />
    </div>
  
  

  </div>
    
    
     
    </>
  )
}

export default App
