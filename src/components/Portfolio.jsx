import React from 'react'
import fooddonation from '../assets/portfolio/fooddonation.png'
import netflixclone from '../assets/portfolio/netflixclone.png'
import qrcodegenerator from '../assets/portfolio/qrcodegenerator.png'
import hostelmanagement from '../assets/portfolio/hostelmanagement.png'
const Portfolio = () => {
    const portfolios = [
        {
          id: 1,
          src: hostelmanagement,
          href:'https://github.com/gagandeepsingh21/ISP1'
        },
        {
          id: 2,
          src: fooddonation,
          href:'https://github.com/gagandeepsingh21/food_donation_is'
        },
        {
          id: 3,
          src: netflixclone,
          href:'https://netflix-clone-1099.netlify.app/'

        },
        {
          id: 4,
          src: qrcodegenerator,
          href:'https://qr-code-generator-21.netlify.app/'

        },
      ];
  return (
    <div name='projects' className='w-full h-Screen bg-black text-white'>
    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'> 
      
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                Projects
            </p>
            <p className='py-6'>Check out some of my work right here.</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
        {portfolios.map(({ id, src, href }) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
                <div className='flex flex-center justify-center'>
                    <a href={href} target='_blank' className='text-center px-6 py-3 m-4 duration-200 hover:scale-105' rel="noreferrer">View</a>
                </div>
            </div>
         ))}
        </div>

    </div>
</div>  
)
}

export default Portfolio
