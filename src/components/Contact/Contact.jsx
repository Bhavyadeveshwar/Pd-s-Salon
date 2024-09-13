import React, { useState } from "react";
import Navbar from "../Navbar/Navbar"; // Import the Navbar

// Sample photo data
const photos = [
  { id: 1, src: "link-to-photo1", alt: "Salon Interior 1" },
  { id: 2, src: "link-to-photo2", alt: "Salon Interior 2" },
  { id: 3, src: "link-to-photo3", alt: "Salon Interior 3" },
  { id: 4, src: "link-to-photo4", alt: "Salon Interior 4" },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">
      {/* Navbar Component */}
      

      {/* Header Section */}
      <div className="text-center mb-10 pt-10"> {/* Added padding for space between Navbar and content */}
        <h1 className="text-4xl font-bold text-green-800">Contact PD's Salon</h1>
        <p className="text-lg text-green-600">We'd love to hear from you!</p>
      </div>

      {/* Contact Details Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-xl rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Our Location</h2>
          <p className="text-gray-700 mb-2">
            <strong>Address:</strong> 123, PD's Salon Street, Green Valley, Delhi, India
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Phone:</strong> +91 9876543210
          </p>
          <p className="text-gray-700">
            <strong>Email:</strong> contact@pdssalon.com
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
