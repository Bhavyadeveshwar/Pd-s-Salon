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
          <h2 className='text-xl md:text-2xl px-4 md:px-6 py-6'>BEST SALON: Step in and let us craft a look that turns heads! - BookYourAppointment</h2>
        </div>
        <div className='mt-4 md:mt-0'>
          <button className="bg-white shadow-lg rounded-md text-black py-2 px-4 md:py-4 md:px-8"
          onClick={() => {
            // const phoneNumber = "918587871230"; // Replace with your business number
            const message = `Hello, I am interested in booking an appointment. Can you provide more details?`;
            const whatsappLink = `https://wa.me/918587871230?text=${encodeURIComponent(message)}`;
            window.open(whatsappLink, "_blank");
          }}>Book Now</button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className='bg-black text-white'>
        <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center justify-between px-4 py-6 md:py-10 space-y-6 md:space-y-0">
          <div className="md:w-1/3">
            <h3 className="font-bold text-xl mb-4">Book Your Appointment</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <img src={Location} alt="Location" className="w-5 h-5 mr-2" />
                <span>Sector-8 & Sector-7 Rohini</span> 
              </li>
              <li className="flex items-center">
                <img src={Phone} alt="" className="w-5 h-5 mr-2" />
                <span>98718-18002</span>
              </li>
              <li className="flex items-center">
                <img src={Message} alt="Email" className="w-5 h-5 mr-2" />
                <span>pdsalon@gmail.com</span>
              </li>
            </ul>
          </div>
          <div className="md:w-1/3 space-y-4">
            <h3 className="font-bold text-xl mb-4">Branch 1</h3>
            <ul className="space-y-2">
              <li>
                <h4>Sector-7 Rohini</h4>
              </li>
              <li>
                <h4>+91 8130616206</h4>
              </li>
              <li>
                <a href="#" className="hover:underline">Sector-8 Rohini</a>
              </li>
              <li>
                <a href="#" className="hover:underline">+91 8587871230</a>
              </li>
            </ul>
          </div>
          <div className="md:w-1/3 space-y-4">
            <h3 className="font-bold text-xl mb-4">Follow Us for more Deals</h3>
            <ul className="space-y-2">
              <li> 
                <a href="https://instagram.com/poojadeveshwar_pdsalon?igshid=ZDdkNTZiNTM=
" className="hover:underline" > Follow on Instagram</a>
              </li>
              <li>
                <a href="https://www.facebook.com/profile.php?id=100038810930708" className="hover:underline">Follow on Facebook</a>
              </li>
              <li>
                <a href="https://www.youtube.com/@hairmakeupbeautyexpertsalo2922" className="hover:underline">Follow on Youtube</a>
              </li>
              <li>
                <a href="https://g.page/r/CRPnJvJocmsaEA0/review" className="hover:underline">Visit our Google Profile</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
