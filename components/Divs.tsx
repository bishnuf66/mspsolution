
"use client"
import React, { useState } from 'react';

const Divs = () => {
  const [currentDiv, setCurrentDiv] = useState(0);

  const divs = [
    {
      id: 1,
      bgClass: 'bg-div1',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam excepturi fuga nostrum eaque architecto, iste voluptas quae cumque, possimus nulla dolorem. Animi exercitationem quae et quos deserunt facere quia iure?'
    },
    {
      id: 2,
      bgClass: 'bg-div2',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam excepturi fuga nostrum eaque architecto, iste voluptas quae cumque, possimus nulla dolorem. Animi exercitationem quae et quos deserunt facere quia iure?'
    },
    {
      id: 3,
      bgClass: 'bg-div3',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam excepturi fuga nostrum eaque architecto, iste voluptas quae cumque, possimus nulla dolorem. Animi exercitationem quae et quos deserunt facere quia iure?'
    }
  ];

  const handleNext = () => {
    setCurrentDiv((prevDiv) => (prevDiv + 1) % divs.length);
  };

  const handlePrevious = () => {
    setCurrentDiv((prevDiv) => (prevDiv - 1 + divs.length) % divs.length);
  };

  const { bgClass, text } = divs[currentDiv];

  return (
    <div className="relative h-1/2">
      <div className={`absolute inset-y-0 left-0 w-full ${bgClass} h-1/2 flex flex-col justify-center items-center relative`}>
        <div className='flex text-white text-center flex-col items-center justify-center '>
          <div className='text-lg'>RESPONSIVE LAYOUT</div>
          <div className='text-lg m-1'>{text}</div>
          <div className='bg-orange-500 text-white cursor-pointer m-4 w-40' onClick={handleNext}>READ MORE</div>

        </div>

        <div className="flex justify-center absolute bottom-0 left-0 w-full mb-2">
          {divs.map((div, index) => (
            <label key={div.id} className="flex items-center mx-2">
              <input
                type="checkbox"
                className={`form-checkbox text-orange-500 custom-checkbox ${currentDiv === index ? 'filled' : ''}`}
                readOnly
              />
            </label>
          ))}
        </div>
      </div>
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={handlePrevious}>
        <i className="fas fa-arrow-left text-4xl text-white"></i>
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={handleNext}>
        <i className="fas fa-arrow-right text-4xl text-white"></i>
      </div>
    </div>
  );
};

export default Divs;
