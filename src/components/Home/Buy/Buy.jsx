import React from 'react'
import Background from "../../../assets/Background.jpg"

function Buy() {
    return (
        
        <div className="relative min-h-screen px-6" > <img src={Background} alt="" Background />
  <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
    <div className="p-8 rounded-lg shadow-md mb-96">
      <h1 className="text-3xl font-bold  ">
        Our Home Made Cosmetics
      </h1>
      <h2 className="text-4xl font-bold mb-4">
        Organic & Vegan Skin Care
      </h2>
      <p className="text-gray-600 mb-6">
        Get 30% off your purchase with VERA30 coupon code.
      </p>
      <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Shop now
      </button>
    </div>
  </div>
</div>

    )
}

export default Buy