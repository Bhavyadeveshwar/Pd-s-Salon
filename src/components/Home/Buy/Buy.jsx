import React from 'react';
import Background from '../../../assets/Background.jpg';

function Buy() {
  return (
    <div className="relative min-h-screen px-4 py-8 md:px-6 md:py-12">
      {/* Background Image */}
      <img src={Background} alt="Background" className="absolute inset-0 w-full h-full object-cover z-0" />
      
      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md max-w-lg mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">
            Our Homemade Cosmetics
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Organic & Vegan Skin Care
          </h2>
          <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
            Get 30% off your purchase with the VERA30 coupon code.
          </p>
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Buy;
