import React from 'react'

function Header() {
  return (
    <div>
    <div className='flex flex-row justify-between bg-gray-100 '>
      <div className='text-orange-600 px-4'> <i className="fa-solid fa-phone"></i>24234234</div>

      <div className='text-orange-600'>test123@gmai.com</div>
    </div>

    <div className='flex flex-row items-end justify-end text-gray-600 '>
        <div className='w-1/2 text-4xl px-4'> <i className="fa-solid fa-tree fa-2x"></i>Urbanic</div> 
        <div className='w-1/2 flex flex-row'>
        <div>HOME</div>
        <div>ABOUT</div>
        <div>PPRTFOLIO</div>
        <div>BLOG</div>
        <div>CONTACT</div>
        </div> 
        
        
    </div>

    </div>
  )
}

export default Header
