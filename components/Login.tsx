import React from 'react'
import Link from 'next/link'

function Login() {
  return (
    <div className='container flex flex-row bc-color-white'>

      <div className='flex flex-col w-1/2 h-full'>
        this is image

<Link href={'./register'}>create an account</Link>

      </div>
      <div className='flex flex-col w-1/2 h-full'>
        <div>login</div>

        <div className='mt-5'><input type='text' placeholder='Your Name'></input></div>
        <div className='mt-5'> <input type='password' placeholder='Password'></input></div>
        <div > <input type='checkbox'/><div>Remember me</div></div>
        

        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounde'>Log in</button>
<div> Or logon with</div>
       
      </div>
    </div>
  )
}

export default Login
