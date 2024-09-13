import React from "react";
import Navbar from "../Navbar/Navbar";

// Sample product data
const products = [
  { id: 1, name: "Shampoo", description: "Nourishing shampoo", price: "$15", image: "link-to-image" },
  { id: 2, name: "Conditioner", description: "Smooth finish conditioner", price: "$12", image: "link-to-image" },
  { id: 2, name: "Conditioner", description: "Smooth finish conditioner", price: "$12", image: "link-to-image" },
  { id: 2, name: "Conditioner", description: "Smooth finish conditioner", price: "$12", image: "link-to-image" },
  { id: 2, name: "Conditioner", description: "Smooth finish conditioner", price: "$12", image: "link-to-image" },
  { id: 2, name: "Conditioner", description: "Smooth finish conditioner", price: "$12", image: "link-to-image" },
  { id: 2, name: "Conditioner", description: "Smooth finish conditioner", price: "$12", image: "link-to-image" },
  { id: 2, name: "Conditioner", description: "Smooth finish conditioner", price: "$12", image: "link-to-image" },
  { id: 2, name: "Conditioner", description: "Smooth finish conditioner", price: "$12", image: "link-to-image" },
  { id: 2, name: "Conditioner", description: "Smooth finish conditioner", price: "$12", image: "link-to-image" },
  { id: 2, name: "Conditioner", description: "Smooth finish conditioner", price: "$12", image: "link-to-image" },
  { id: 2, name: "Conditioner", description: "Smooth finish conditioner", price: "$12", image: "link-to-image" },
  { id: 2, name: "Conditioner", description: "Smooth finish conditioner", price: "$12", image: "link-to-image" },
  { id: 2, name: "Conditioner", description: "Smooth finish conditioner", price: "$12", image: "link-to-image" },
  { id: 2, name: "Conditioner", description: "Smooth finish conditioner", price: "$12", image: "link-to-image" },
  { id: 2, name: "Conditioner", description: "Smooth finish conditioner", price: "$12", image: "link-to-image" },
  { id: 2, name: "Conditioner", description: "Smooth finish conditioner", price: "$12", image: "link-to-image" },
  { id: 2, name: "Conditioner", description: "Smooth finish conditioner", price: "$12", image: "link-to-image" },
  { id: 2, name: "Conditioner", description: "Smooth finish conditioner", price: "$12", image: "link-to-image" },
  { id: 2, name: "Conditioner", description: "Smooth finish conditioner", price: "$12", image: "link-to-image" },
  { id: 2, name: "Conditioner", description: "Smooth finish conditioner", price: "$12", image: "link-to-image" },
  { id: 2, name: "Conditioner", description: "Smooth finish conditioner", price: "$12", image: "link-to-image" },
  { id: 2, name: "Conditioner", description: "Smooth finish conditioner", price: "$12", image: "link-to-image" },
  { id: 2, name: "Conditioner", description: "Smooth finish conditioner", price: "$12", image: "link-to-image" },
  { id: 2, name: "Conditioner", description: "Smooth finish conditioner", price: "$12", image: "link-to-image" },
  { id: 2, name: "Conditioner", description: "Smooth finish conditioner", price: "$12", image: "link-to-image" },
  { id: 2, name: "Conditioner", description: "Smooth finish conditioner", price: "$12", image: "link-to-image" },
  { id: 2, name: "Conditioner", description: "Smooth finish conditioner", price: "$12", image: "link-to-image" },
  { id: 2, name: "Conditioner", description: "Smooth finish conditioner", price: "$12", image: "link-to-image" },
  { id: 2, name: "Conditioner", description: "Smooth finish conditioner", price: "$12", image: "link-to-image" },
  { id: 2, name: "Conditioner", description: "Smooth finish conditioner", price: "$12", image: "link-to-image" },
  { id: 2, name: "Conditioner", description: "Smooth finish conditioner", price: "$12", image: "link-to-image" },
  { id: 2, name: "Conditioner", description: "Smooth finish conditioner", price: "$12", image: "link-to-image" },
  { id: 2, name: "Conditioner", description: "Smooth finish conditioner", price: "$12", image: "link-to-image" },
  { id: 2, name: "Conditioner", description: "Smooth finish conditioner", price: "$12", image: "link-to-image" },
  { id: 2, name: "Conditioner", description: "Smooth finish conditioner", price: "$12", image: "link-to-image" },
  { id: 2, name: "Conditioner", description: "Smooth finish conditioner", price: "$12", image: "link-to-image" },
  { id: 2, name: "Conditioner", description: "Smooth finish conditioner", price: "$12", image: "link-to-image" },
  { id: 2, name: "Conditioner", description: "Smooth finish conditioner", price: "$12", image: "link-to-image" },
  { id: 2, name: "Conditioner", description: "Smooth finish conditioner", price: "$12", image: "link-to-image" },
  { id: 2, name: "Conditioner", description: "Smooth finish conditioner", price: "$12", image: "link-to-image" },
  { id: 2, name: "Conditioner", description: "Smooth finish conditioner", price: "$12", image: "link-to-image" },
  { id: 2, name: "Conditioner", description: "Smooth finish conditioner", price: "$12", image: "link-to-image" },
  { id: 2, name: "Conditioner", description: "Smooth finish conditioner", price: "$12", image: "link-to-image" },
  { id: 2, name: "Conditioner", description: "Smooth finish conditioner", price: "$12", image: "link-to-image" },
  { id: 2, name: "Conditioner", description: "Smooth finish conditioner", price: "$12", image: "link-to-image" },
  // ... Add the remaining 50 items here
];

const Catalogue = () => {
  return (
    <div className="bg-white min-h-screen py-10">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-green-700">PD's Salon Catalogue</h1>
        <p className="text-lg text-gray-500">Explore our exclusive products for your salon needs</p>
      </div>

      {/* Catalogue Section */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105 duration-300">
              <img src={product.image} alt={product.name} className="h-48 w-full object-cover" />
              <div className="p-4 bg-green-50">
                <h3 className="text-xl font-semibold text-green-700">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
                <div className="mt-4 text-green-600 font-bold">{product.price}</div>
                <button className="mt-4 w-full py-2 px-4 bg-green-700 text-white rounded hover:bg-green-600">
                  Add to Cart
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
