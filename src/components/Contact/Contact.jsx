import React, { useState } from "react";
import Navbar from "../Navbar/Navbar"; // Import the Navbar


// Sample photo data
const photos = [
  { id: 1, src: "https://lh3.googleusercontent.com/p/AF1QipPX8WrLffgjc3jW1D0NcfmNrxl4pPrz84Bt9KyV=s1360-w1360-h1020" },
  { id: 2, src: "https://content3.jdmagicbox.com/v2/comp/delhi/z8/011pxx11.xx11.230925172652.d1z8/catalogue/pd-s-beauty-salon-rohini-sector-8-delhi-salons-d0tfvgp7ql.jpg", alt: "Salon Interior 2" },
  { id: 3, src: "https://lh3.googleusercontent.com/p/AF1QipPSyMwvq_4Ol0CkTSJ7FbTLrpSMDu6GPPc1BzV4=s1360-w1360-h1020", alt: "Salon Interior 3" },
  { id: 4, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwbzVV158l3eDGIzPZlztrvDYB4XxCUjZfiw&s", alt: "Salon Interior 4" },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">
      {/* Navbar Component */}
      

      {/* Header Section */}
      <div className="text-center mb-10 pt-10"> {/* Added padding for space between Navbar and content */}
        <h1 className="text-4xl font-bold text-green-900">Contact PD's Salon</h1>
        <p className="text-lg text-green-900">We'd love to hear from you!</p>
      </div>

      {/* Contact Details Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-xl rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-green-900 mb-4">Our Location</h2>
          <p className="text-gray-700 mb-2">
            <strong>Branch 1:</strong> A-1/38 Sector-7 Rohini, New Delhi 
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Phone:</strong> +91 8130616206
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Branch 2:</strong> D-14/226 Sector-8 Rohini, New Delhi 
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Phone:</strong> +91 8587871230
          </p>
          
          <p className="text-gray-700">
            <strong>Email:</strong> pdsalon@rediffmail.com
          </p>
        </div>

        {/* Photos Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {photos.map((photo) => (
            <div key={photo.id} className="rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105">
              <img src={photo.src} alt={photo.alt} className="w-full h-56 object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
