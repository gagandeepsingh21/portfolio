import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-Screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'> 
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    About
                </p>
            </div>
            <p className='text-xl mt-15'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Doloremque magni quis minima nostrum, unde et illum veniam iure 
                atque tenetur eos vitae perferendis ab, quos, possimus culpa consequuntur! 
                Exercitationem tenetur quis repellat, qui, nihil dicta quos quaerat voluptatibus 
                doloremque unde sit odit incidunt alias molestiae sint tempore dignissimos sequi necessitatibus?
            </p>
            <br />
            <p className='text-xl'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Doloremque magni quis minima nostrum, unde et illum veniam iure 
                atque tenetur eos vitae perferendis ab, quos, possimus culpa consequuntur! 
                Exercitationem tenetur quis repellat, qui, nihil dicta quos quaerat voluptatibus 
                doloremque unde sit odit incidunt alias molestiae sint tempore dignissimos sequi necessitatibus?
            </p>
        </div>
    </div>
  )
}

export default About