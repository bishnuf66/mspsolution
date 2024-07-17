import React from 'react';

function Header() {
  return (
    <div>
      {/* Top Bar */}
      <div className='flex flex-col md:flex-row justify-between bg-gray-100 text-center md:text-left'>
        <div className='text-orange-500 px-4 md:px-10 py-2 md:py-0'>
          <i className="fa-solid fa-phone"></i> 24234234
        </div>
        <div className='text-orange-500 px-4 md:px-10 py-2 md:py-0'>
          test123@gmai.com
        </div>
      </div>

      {/* Main Header */}
      <div className='flex flex-col md:flex-row items-center md:items-end justify-between text-gray-600 bg-white py-4 md:py-0'>
        <div className='text-4xl px-4'>
          <i className="fa-solid fa-tree fa-2x text-orange-500"></i> Urbanic
        </div>
        <div className='flex flex-col md:flex-row justify-evenly w-full md:w-1/2 mt-4 md:mt-0'>
          <div className='hover:bg-orange-500 p-2 text-center'>HOME</div>
          <div className='hover:bg-orange-500 p-2 text-center'>ABOUT</div>
          <div className='hover:bg-orange-500 p-2 text-center'>PORTFOLIO</div>
          <div className='hover:bg-orange-500 p-2 text-center'>BLOG</div>
          <div className='hover:bg-orange-500 p-2 text-center'>CONTACT</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
