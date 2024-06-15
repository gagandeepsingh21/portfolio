import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import MyPic from '../assets/myPic.jpg';

const Home = () => {
  return (
    <div name="home" className="flex h-screen w-full bg-black">
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full md:flex-row text-white'>
            <div className='flex flex-col justify-center h-full px-6 md:px-12 lg:px-16'>
                {/* Your text content */}
                <h2 className='text-3xl sm:text-5xl font-bold text-white'>
                    Hi There!<br /> I'm Gagandeep Singh Gahir.
                </h2>
                <p className='text-gray-500 py-6 max-w-md'>
                    I am a Full Stack Developer with over 3 years of experience in development. I have a passion for creating innovative solutions and continually advancing my development skills.
                </p>
                <div className='mt-8 md:mt-0'>
                    <a
                        href='/resume.pdf'
                        className='group text-white w-fit py-3 px-6 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'
                        download>
                        Download Resume
                        <span className='group-hover:rotate-90 duration-500'>
                            <MdKeyboardArrowRight size={25} className='ml-1' />
                        </span>
                    </a>            
                </div>
            </div>
            {/* Image section */}
            <div className="overflow-hidden rounded-full w-2/3 lg:w-1/2 lg:mt-11">
                <img src={MyPic} alt="my profile" className="object-fit-contain object-center w-full h-full rounded-full" />
            </div>
        </div>
    </div>
  );
};

export default Home;
