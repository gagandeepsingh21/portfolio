import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Contact = () => {
  return (
    <div name='contact' className='w-full h-Screen bg-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'> 
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                <p className='py-6'>Submit the form below to get in touch with me</p>
            </div>
            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/13746b9f-1241-4f4d-9778-09b913be86a7" method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input type="text" name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <input type="email" name='email' placeholder='Enter your email' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <textarea name='message' rows={5} placeholder='Enter your message here...' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex-items-center rounded-md hover:scale-110 duration-300'>Let's chat</button>
                </form>
            </div>
            
        </div>
        <div className='flex justify-center items-center'>
            <p>© 2024 Gagan. All rights reserved.</p>
        </div>
        <div className='flex justify-center space-x-4 mt-4'>
          <a
            href='https://www.linkedin.com/in/gagandeep-singh-gahir-5a3123179/'
            className='p-3 duration-300 rounded-full'
            target='_blank'
            rel='noreferrer'
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href='https://github.com/gagandeepsingh21'
            className='p-3 duration-300 rounded-full'
            target='_blank'
            rel='noreferrer'
          >
            <FaGithub size={30} />
          </a>
          <a
            href='mailto:gagandeepgahir@gmail.com'
            className='p-3 duration-300 rounded-full'
            target='_blank'
            rel='noreferrer'
          >
            <HiOutlineMail size={30} />
          </a>

        </div>
    </div> 
     
    )
}

export default Contact