import React from "react";
import Navbar from "../Navbar/Navbar";
import a1 from "../../assets/Bridal.jpg"; // Importing the image directly

// Sample product data
const products = Array.from({ length: 15 }, (_, index) => ({
  id: index + 1,
  name: "Bridal Services",
  price: "starting @11,000/-",
  image: a1, // Use a1 directly as the image source
}));

const Catalogue = () => {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="text-center mb-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#000000] mt-16">
          PD's Salon Catalogue
        </h1>
        <p className="text-base sm:text-lg text-gray-500 mt-2">
          Explore our exclusive services from our salon for your needs
        </p>
      </div>

      {/* Catalogue Section */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300"
            >
              <img
                src={product.image} // Now the image is correctly referenced
                alt={product.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-4 bg-green-50">
                <h3 className="text-lg sm:text-xl font-semibold text-green-700">
                  {product.name}
                </h3>
                <div className="mt-2 text-black text-base sm:text-lg">
                  {product.price}
                </div>
                <button className="mt-4 w-full py-2 px-4 bg-green-700 text-white rounded hover:bg-green-600">
                  Inquire Now!
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
