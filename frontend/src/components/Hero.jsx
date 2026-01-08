import React from 'react';
import { assets, cities } from '../assets/assets';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white min-h-screen bg-no-repeat bg-cover bg-center" 
         style={{ backgroundImage: `url('/src/assets/hero_image.png')` }}>
      
      <p className="uppercase tracking-widest mb-2">The Ultimate Hotel Experience</p>
      <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center font-playfair">
        Discover Your Perfect Gateway Destination
      </h1>
      <p className="max-w-md text-center mb-8">
        Book hotels, flights and car rentals with our all-in-one platform.
      </p>

      {/* Booking Form */}
      <form className="bg-white text-gray-800 p-6 rounded-lg shadow-lg flex flex-wrap gap-4 mt-8">
        <div className="flex items-center border-r pr-4">
          <img src={assets.calendar_icon} className="h-4 mr-2" alt="" />
          <input 
            list="destinations" 
            placeholder="Where are you going?" 
            className="outline-none"
          />
          <datalist id="destinations">
            {cities.map((city, index) => (
              <option key={index} value={city} />
            ))}
          </datalist>
        </div>
        
        {/* Check-in / Check-out inputs follow the same pattern... */}
        
        <button className="bg-primary p-3 rounded-md">
          <img src={assets.search_icon} className="h-7 invert" alt="search" />
        </button>
      </form>
    </div>
  );
};

export default Hero;