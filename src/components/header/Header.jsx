import React from 'react'
import profile from "../../assets/images/profile.png"

const Header = () => {
  return (
    <div className='flex justify-between p-5 border-b-2 border-green-500 items-center'>
      <h1 className='font-semibold'>Knowledge Cafe</h1>
      <img  src={profile} alt="" />
    </div>
  )
}

export default Header
