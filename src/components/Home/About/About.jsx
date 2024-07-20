import React from 'react'
import About1 from "../../../assets/About12.jpg"

function About() {
  return (
    <div className='bg-gray-100 flex justify-center items-center  '>
        <div className='w-full md:w-4/5 flex flex-col md:flex-row items-center justify-center p-5 md:p-16 md:gap-20 '>
        <div className='hidden md:block justify-center'>
        <img src={About1} alt="About" className='md:block hidden ml-14' />
        </div>

        </div>
        <div className='md:px-20 '>
            <p className='text-center md:text-left text-green-900 font-semibold '>
                Your Makeover Studio
            </p>
            <h2 className='text-center md:text-left text-4xl font-bold mb-10 '>
                Welcome to PD's Salon
            </h2>
            <p className='text-justify text-sm '>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. In cupiditate deserunt esse tempore praesentium dolores reiciendis. Delectus nobis alias ea adipisci sunt fuga et tenetur voluptatem repellendus velit! Eaque, <br /> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni non asperiores, odio vero alias rem in perferendis iure dicta veritatis eos provident ipsa aliquid corporis atque libero, incidunt obcaecati at? 
            </p>

        </div>
    </div>
  )
}

export default About