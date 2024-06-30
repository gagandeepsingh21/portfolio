import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about' },
    { id: 3, link: 'projects' },
    { id: 4, link: 'experience' },
    { id: 5, link: 'contact' }
  ];

  return (
    <div className='flex justify-between items-center w-full h-20 text-white bg-black px-4 fixed'>
      <div>
        <h1 className='text-5xl font-bold ml-2'>Gagan</h1>
      </div>
      <ul className='hidden md:flex'>
        {links.map(({ id, link }) => (
          <li
            key={id}
            className='px-4 cursor-pointer capitalize font-medium text-white relative'
          >
            <Link
              to={link}
              smooth
              duration={500}
              className='relative text-lg font-display font-bold leading-tight group'
            >
              <span className='link link-underline link-underline-black text-white'>
                {link}
                <span className='absolute left-0 right-0 bottom-0 w-full h-0.5 bg-gray-300 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100'></span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
          {links.map(({ id, link }) => (
            <li
              key={id}
              className='px-4 cursor-pointer capitalize py-6 text-4xl'
            >
              <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
