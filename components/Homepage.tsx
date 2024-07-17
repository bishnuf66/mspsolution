import React from 'react';
import Divs from './Divs';

function Homepage() {
  return (
    <div>
      <Divs />

      <div className='flex flex-col md:flex-row items-center justify-center text-2xl m-4'>
        Welcome to <div className='text-orange-500 px-2'>Urbanic Design</div>
      </div>

      <div className='text-center py-2'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolore voluptates laborum. Distinctio 
      </div>

      <div className='flex flex-col md:flex-row m-4'>
        <div className='w-full md:w-1/3 mb-4 md:mb-0'>
          <div className='flex flex-row'>
            <i className="fa-solid fa-leaf fa-2x text-white bg-black p-3"></i>
            <div className='p-3'>AWESOME ICONS</div>
          </div>
          <div className='flex justify-center items-center flex-col'>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aspernatur hic praesentium dolorum fugiat eius, amet sunt tempore ad tenetur reiciendis nam inventore! Soluta, inventore omnis facere dolorum tempora alias.
            </div>
            <div className='flex justify-center items-center bg-orange-500 text-white p-2 m-2 rounded-md w-40'>
              <div className='text-sm'>READ MORE</div>
            </div>
          </div>
        </div>

        <div className='w-full md:w-1/3 mb-4 md:mb-0'>
          <div className='flex flex-row'>
            <i className="fa-solid fa-mobile-screen-button fa-2x text-white bg-black p-3"></i>
            <div className='p-3'>FULLY RESPONSIVE</div>
          </div>
          <div className='flex justify-center items-center flex-col'>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aspernatur hic praesentium dolorum fugiat eius, amet sunt tempore ad tenetur reiciendis nam inventore! Soluta, inventore omnis facere dolorum tempora alias.
            </div>
            <div className='flex justify-center items-center bg-orange-500 text-white p-2 m-2 rounded-md w-40'>
              <div className='text-sm'>READ MORE</div>
            </div>
          </div>
        </div>

        <div className='w-full md:w-1/3'>
          <div className='flex flex-row'>
            <i className="fa-solid fa-charging-station fa-2x text-white bg-black p-3"></i>
            <div className='p-3'>HIGH EFFICIENCY</div>
          </div>
          <div className='flex justify-center items-center flex-col'>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aspernatur hic praesentium dolorum fugiat eius, amet sunt tempore ad tenetur reiciendis nam inventore! Soluta, inventore omnis facere dolorum tempora alias.
            </div>
            <div className='flex justify-center items-center bg-orange-500 text-white p-2 rounded-md w-40 m-2'>
              <div className='text-sm'>READ MORE</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
