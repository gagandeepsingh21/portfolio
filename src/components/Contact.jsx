import React from 'react'

const Contact = () => {
  return (
    <div name='Contact' className='w-full h-Screen bg-gradient-to-b from-black to-gray-800 text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'> 
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                <p className='py-6'>Submit the form below to get in touch with me</p>
            </div>
            <div className='flex justify-center items-center'>
                <form name="contact" method="POST" className='flex flex-col w-full md:w-1/2' netlify>
                    <input type="text" name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <input type="email" name='email' placeholder='Enter your email' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <textarea name='message' rows={5} placeholder='Enter your message here...' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <button type="submit" className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex-items-center rounded-md hover:scale-110 duration-300'>Let's chat</button>
                </form>
            </div>
        </div>
    </div>  
    )
}

export default Contact