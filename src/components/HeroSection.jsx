import React from 'react';
import heroImage from '../assets/2 (4).jpeg';
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div className="relative w-full h-64 md:h-80 lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
  <img
    src={heroImage}
    alt="Paradise Beach Cottage"
    className="w-full h-full object-cover"
  />
</div>


          {/* Text Section */}
          <div className="text-center md:text-left">
  <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
    Welcome to Paradise Beach Cottage
  </h1>
  <p className="text-lg text-gray-600 mb-8">
    Experience the perfect blend of comfort and luxury in our stunning beachfront cottage. 
    Wake up to breathtaking ocean views and create unforgettable memories by the sea.
  </p>
  <div className="flex justify-center md:justify-start">
    <Link
      to="/booking"
      className="w-52 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-300 block text-center"
    >
      Book Now
    </Link>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection; 