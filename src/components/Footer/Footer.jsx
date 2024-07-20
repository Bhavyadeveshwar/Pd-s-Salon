import React from 'react'
import Location from "../../assets/Location.png"
import Phone from "../../assets/Phone.png"
import Message from "../../assets/message.png"


function Footer() {
  return (
    <div className=''> 
        <div className='flex justify-center items-center bg-gray-950 text-white'>
            <div className=''>
                <h2 className='text-xl px-6 py-40 '>The #1 selling WordPress travel & booking theme on the market - BookYourTravel</h2>

            </div>
            <div>
                <button className="bg-white shadow-lg rounded-md text-black py-6 px-12">Buy Now</button>

            </div>

        </div>
       

    <div className='bg-black text-white'>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-4">
        <div>
          <h3 className="font-bold text-xl mb-4 ">Book Your Travel</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <img src={Location} alt="Location" className="w-4 h-4 mr-2" />
              <span>1400 Pennsylvania Ave, DC</span>
            </li>
            <li className="flex items-center">
              <img src={Phone} alt="Phone" className="w-4 h-4 mr-2" />
              <span>1-111-344-678</span>
            </li>
            <li className="flex items-center">
              <img src={Message} alt="Email" className="w-4 h-4 mr-2" />
              <span>info@bookyourtravel.com</span>
            </li>
          </ul>
        </div>
        <div className="mt-6 md:mt-0 md:ml-10">
          <h3 className="font-bold text-xl mb-4">Eco Lodge</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">Location</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Accommodation</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Activities</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
        <div className="mt-6 md:mt-0 md:ml-10">
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">Book now</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Offers</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Dining</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Our products</a>
            </li>
          </ul>
        </div>
      </div>
  
      </div>
    </div>
  )
}

export default Footer