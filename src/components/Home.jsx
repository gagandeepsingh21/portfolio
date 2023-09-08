import React from 'react'
import Portfolio from '../assets/portfolio.jpg'; 
import {MdKeyboardArrowRight} from "react-icons/md";
import {Link} from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className="flex h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
        {/* <img src={Portfolio} alt="" /> */}
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full md:flex-row text-white'>
            <div className='flex flex-col justify-center h-full mx-4'>
                <h2 className='text-2xl sm:text-3xl font-bold text-white pl-10'>Hi There!<br /> I'm Gagandeep Singh Gahir.</h2>
                <p className='text-gray-500 py-4 max-w-md pl-10'>
                    I am a Full Stack Developer 
                </p>
                <div>
                    <Link to="Portfolio" smooth duration={500} className='group text-white w-fit py-3 px-4 my-2 ml-10 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        Portfolio  
                        <span className='group-hover:rotate-90 duration-500'>
                            <MdKeyboardArrowRight size={25} className='ml-1'/>
                        </span>
                    </Link>
                </div>
            </div>
            
            <div>
                <img src={Portfolio} alt="my profile" className="rounded-full mx-auto w-2/3 lg:w-full lg:mt-11" />

            </div>
        </div>

    </div>
  )
}

export default Home