import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const HotelCard = ({ room, index }) => {
  return (
    <Link 
      to={`/rooms/${room.id}`} 
      onClick={() => window.scrollTo(0, 0)}
      className="bg-white rounded-xl shadow-lg overflow-hidden block transition-transform hover:scale-105"
    >
      <div className="relative">
        <img src={room.images[0]} alt={room.hotel.name} className="w-full h-48 object-cover" />
        {index % 4 === 0 && (
          <p className="absolute top-2 left-2 bg-primary text-white text-xs px-2 py-1 rounded">
            Best Seller
          </p>
        )}
      </div>

      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-bold text-lg">{room.hotel.name}</h3>
          <div className="flex items-center gap-1 bg-yellow-100 px-2 py-1 rounded text-sm">
            <img src={assets.star_icon_filled} className="h-3" alt="" />
            <span>4.5</span>
          </div>
        </div>

        <div className="flex items-center gap-1 text-gray-500 text-sm mb-4">
          <img src={assets.location_icon} className="h-3" alt="" />
          <span>{room.hotel.address}</span>
        </div>

        <div className="flex justify-between items-center">
          <p className="font-bold text-primary">
            ${room.pricePerNight} <span className="text-gray-400 font-normal text-sm">/ night</span>
          </p>
          <button className="bg-secondary text-white px-4 py-1 rounded text-sm">Book Now</button>
        </div>
      </div>
    </Link>
  );
};

export default HotelCard;