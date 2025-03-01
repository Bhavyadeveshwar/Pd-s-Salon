import React from "react";
import Navbar from "../Navbar/Navbar";
import a1 from "../../assets/Bridal.jpg";
import a2 from "../../assets/haircut.jpg"
import a3 from "../../assets/a3.jpg"
import a4 from "../../assets/Mehendi.jpg"
import a5 from "../../assets/Party.jpg"
import a6 from "../../assets/Package.jpg"
import a7 from "../../assets/Tatoo.jpg"
import a8 from "../../assets/nail.jpg"
import a9 from "../../assets/hair.jpg"
import a10 from "../../assets/smoothness.jpg"


const products = [
  {
    id: 1,
    name: "Bridal Services",
    prices: ["₹11,000", "₹15,000"],
    image: a1,
    description: "Get the perfect bridal look with expert makeup artists.",
  },
  {
    id: 2,
    name: "Haircut Services",
    prices: ["₹250", "₹350", "₹450"],
    image: a2,
    description: "Trendy haircuts and professional styling for all occasions.",
  },
  {
    id: 3,
    name: "Hairstyle Services",
    prices: ["₹499"],
    image: a3,
    description: "Trendy haircuts and professional styling for all occasions.",
  },
  {
    id: 4,
    name: "Mehandi Services",
    prices: ["₹499"],
    image: a4,
    description: "Trendy haircuts and professional styling for all occasions.",
  },
  {
    id: 5,
    name: "Party Makeup",
    prices: ["₹1500"],
    image: a5,
    description: "Trendy haircuts and professional styling for all occasions.",
  },
  {
    id: 6,
    name: "Nail Services",
    prices: ["₹499"],
    image: a8,
    description: "Trendy haircuts and professional styling for all occasions.",
  },
  {
    id: 7,
    name: "Regular Packages",
    prices: ["₹499"],
    image: a6,
    description: "Trendy haircuts and professional styling for all occasions.",
  },
  {
    id: 8,
    name: "Tatoo Work",
    prices: ["₹999"],
    image: a7,
    description: "Trendy haircuts and professional styling for all occasions.",
  },
  {
    id: 9,
    name: "Global Colour",
    prices: ["₹1999"],
    image: a9,
    description: "Trendy haircuts and professional styling for all occasions.",
  },
  {
    id: 10,
    name: "Rebonding/smoothening",
    prices: ["₹1999"],
    image: a10,
    description: "Trendy haircuts and professional styling for all occasions.",
  },
];

const Catalogue = () => {
  return (
    <div className="container mx-auto px-4 mt-5 mb-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 duration-300">
            <img src={product.image} alt={product.name} className="h-48 w-full object-cover" />
            <div className="p-4 bg-green-50">
              <h3 className="text-lg font-semibold text-green-700">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.description}</p>

              {/* Starting Price */}
              <p className="text-base text-black font-semibold mt-2">
                Starting at @{product.prices[0]}/-
              </p>

              <button
                className="mt-4 w-full py-2 px-4 bg-green-700 text-white rounded"
                onClick={() => {
                  // const phoneNumber = "918587871230"; // Replace with your business number
                  const message = `Hello, I am interested in your ${product.name} service. Can you provide more details?`;
                  const whatsappLink = `https://wa.me/918587871230?text=${encodeURIComponent(message)}`;
                  window.open(whatsappLink, "_blank");
                }}
              >
                Inquire Now!
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Catalogue;
