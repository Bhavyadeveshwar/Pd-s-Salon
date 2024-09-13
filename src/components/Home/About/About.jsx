import React from 'react';
import About1 from "../../../assets/About12.jpg";

function About() {
  return (
    <div className='bg-gray-100 flex flex-col md:flex-row justify-center items-center p-5 md:p-16'>
      {/* Image Section */}
      <div className='w-full md:w-1/2 flex justify-center mb-6 md:mb-0'>
        <img src={About1} alt="About" className='w-full md:w-4/5 h-auto object-cover' />
      </div>

      {/* Text Section */}
      <div className='w-full md:w-1/2 md:px-10 flex flex-col items-center md:items-start'>
        <p className='text-center md:text-left text-green-900 font-semibold text-lg md:text-xl'>
          Your Makeover Studio
        </p>
        <h2 className='text-center md:text-left text-3xl md:text-4xl font-bold mb-6 md:mb-10'>
          Welcome to PD's Salon
        </h2>
        <p className='text-center md:text-left text-base md:text-lg'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. In cupiditate deserunt esse tempore praesentium dolores reiciendis. Delectus nobis alias ea adipisci sunt fuga et tenetur voluptatem repellendus velit! Eaque, <br /> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni non asperiores, odio vero alias rem in perferendis iure dicta veritatis eos provident ipsa aliquid corporis atque libero, incidunt obcaecati at?
        </p>
      </div>
    </div>
  );
}

export default About;
