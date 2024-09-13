import React from 'react';
import Location from "../../assets/Location.png";
import Phone from "../../assets/Phone.png";
import Message from "../../assets/message.png";

function Footer() {
  return (
    <>
      {/* Top Section */}
      <div className='flex flex-col md:flex-row justify-between items-center bg-gray-950 text-white px-4 py-6 md:py-10'>
        <div className='text-center md:text-left'>
          <h2 className='text-xl md:text-2xl px-4 md:px-6 py-6'>The #1 selling WordPress travel & booking theme on the market - BookYourTravel</h2>
        </div>
        <div className='mt-4 md:mt-0'>
          <button className="bg-white shadow-lg rounded-md text-black py-2 px-4 md:py-4 md:px-8">Buy Now</button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className='bg-black text-white'>
        <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center justify-between px-4 py-6 md:py-10 space-y-6 md:space-y-0">
          <div className="md:w-1/3">
            <h3 className="font-bold text-xl mb-4">Book Your Travel</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <img src={Location} alt="Location" className="w-5 h-5 mr-2" />
                <span>1400 Pennsylvania Ave, DC</span>
              </li>
              <li className="flex items-center">
                <img src={Phone} alt="Phone" className="w-5 h-5 mr-2" />
                <span>1-111-344-678</span>
              </li>
              <li className="flex items-center">
                <img src={Message} alt="Email" className="w-5 h-5 mr-2" />
                <span>info@bookyourtravel.com</span>
              </li>
            </ul>
          </div>
          <div className="md:w-1/3 space-y-4">
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
          <div className="md:w-1/3 space-y-4">
            <h3 className="font-bold text-xl mb-4">Explore</h3>
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
    </>
  );
}

export default Footer;
