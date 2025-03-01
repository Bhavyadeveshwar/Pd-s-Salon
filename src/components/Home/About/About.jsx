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
        Your Beauty, Our Passion
        </h2>
        <p className='text-center md:text-left text-base md:text-lg text-gray-900'>
        At PD Salon, we believe beauty is more than just a style—it's an experience. Our expert stylists and skincare professionals bring artistry and precision to every service, ensuring you leave feeling refreshed, confident, and radiant. From trendsetting haircuts to rejuvenating facials, we offer a luxurious escape tailored just for you. <br /> <br /> Step into a world where self-care meets perfection. At PD Salon, we use premium products and the latest techniques to create looks that enhance your natural beauty.
        </p>
      </div>
    </div>
  );
}

export default About;
