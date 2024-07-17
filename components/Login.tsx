"use client"

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; 

function Login() {
  const router = useRouter();

  const handleLogin = () => {
    router.push('./homepage');
  };

  return (
    <div className='container flex flex-col h-screen md:flex-row'>
      <div className='hidden md:flex md:flex-col md:w-1/2'>
        <div className='bg-login flex-grow bg-cover bg-center'>
        </div>
        <div className='flex justify-center p-4'>
          <Link href='/register'>
            <div className='text-bold underline hover:text-blue-700'>Create an account</div>
          </Link>
        </div>
      </div>

      <div className='flex flex-col w-full md:w-1/2 justify-center p-10'>
        <div className='text-3xl mb-5 font-serif'>Login</div>
        <div className='mb-5 relative'>
          <i className="fa fa-user fa-lg absolute top-5  text-gray-400"></i>
          <input type='text' placeholder='Your Name' className='w-full p-2 pl-10 border-b border-gray-300 focus:outline-none' />
        </div>
        <div className='mb-5 relative'>
          <i className="fa fa-lock fa-lg absolute top-5 text-gray-400"></i>
          <input type='password' placeholder='Password' className='w-full p-2 pl-10 border-b border-gray-300 focus:outline-none' />
        </div>
        <div className='flex items-center mb-5'>
          <input type='checkbox' className='mr-2' />
          <div>Remember me</div>
        </div>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-5 w-40' onClick={handleLogin}>Log in</button>
        <div className='flex flex-row items-center'>
          <div className='mr-2'>Or login with</div>
          <div className='mx-2'>
            <i className="fa-brands fa-square-facebook fa-2x text-blue-400 cursor-pointer"></i>
          </div>
          <div className='mx-2'>
            <i className="fa-brands fa-square-twitter fa-2x text-blue-600 cursor-pointer"></i>
          </div>
          <div className='mx-2'>
            <i className="fa-brands fa-google fa-2x text-white bg-red-600 rounded-md cursor-pointer"></i>
          </div>
        </div>
    
    
    
        <div className='flex justify-center p-4 md:hidden'>
          <Link href='/register'>
            <div className='text-bold underline hover:text-blue-700'>Create an account</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
