import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-Screen bg-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'> 
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    About
                </p>
            </div>
            <p className='text-xl mt-15'>
                Hello, I'm Gagandeep, a dedicated and passionate Full Stack Developer with a relentless drive to embark on exciting new projects. With a background in software development and a deep enthusiasm for problem-solving, I thrive on the challenges and creative opportunities that each new project brings.
            </p><br />    
            <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                My Journey
            </p>
            </div>
            <p className='text-xl mt-15'>
                My journey as a Full-Stack Developer has been an exhilarating one. Over the years, I've had the privilege to work on a diverse range of projects, each presenting unique challenges and opportunities for growth. Whether it's building web applications, or architecting complex systems, I've always been drawn to the thrill of creating innovative solutions that make a real impact.
            </p><br />
            <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                What Drives Me
            </p>
            </div>
            <p className='text-xl mt-15'>
                What sets me apart is not just my technical prowess but also my unwavering passion for my craft. I find immense joy in the process of transforming ideas into functional, user-centric applications. The ability to blend creativity and precision in code, making technology accessible and beneficial to people, is what keeps me motivated every day
            </p> <br />
            <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                Let's Collaborate
            </p>
            </div>
            <p className='text-xl mt-15'>
            If you share my passion for innovation and are looking for a dedicated Full-Stack Developer to bring your project to life, I'd love to hear from you. Together, we can turn your ideas into reality and create impactful solutions that make a difference.

            Thank you for visiting my portfolio. I look forward to the opportunity to work together and make great things happen.            </p>       
        </div>
    </div>
  )
}

export default About