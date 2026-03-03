import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const HotelCard = ({ room, index }) => {
  return (
    <Link
      to={`/rooms/${room.id}`}
      onClick={() => window.scrollTo(0, 0)}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden block transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-blue-300 dark:shadow-gray-900"
      aria-label={`View details for ${room.hotel.name}`}
    >
      <div className="relative">
        <img
          src={room.images && room.images[0] ? room.images[0] : assets.placeholder}
          alt={room.hotel?.name ? `${room.hotel.name} photo` : 'Hotel image'}
          className="w-full h-48 object-cover img-plain"
          loading="lazy"
          width="800"
          height="320"
        />
        {index % 4 === 0 && (
          <p className="absolute top-2 left-2 text-white text-xs px-2 py-1 rounded badge-primary">
            Best Seller
          </p>
        )}
      </div>

      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-bold text-lg dark:text-white">{room.hotel.name}</h3>
          <div className="flex items-center gap-1 bg-yellow-100 dark:bg-yellow-900 px-2 py-1 rounded text-sm dark:text-yellow-200">
            <img src={assets.star_icon_filled} className="h-3" alt="rating" />
            <span>4.5</span>
          </div>
        </div>

        <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-sm mb-4">
          <img src={assets.location_icon} className="h-3" alt="location" />
          <span>{room.hotel.address}</span>
        </div>

        <div className="flex justify-between items-center">
          <p className="font-bold text-primary">
            ${room.pricePerNight} <span className="text-gray-400 font-normal text-sm">/ night</span>
          </p>
          <button onClick={(e) => { e.preventDefault(); window.scrollTo(0,0); }} className="text-white px-4 py-1 rounded text-sm focus-visible:ring-2 focus-visible:ring-blue-300 btn-secondary" aria-label={`Book ${room.hotel.name}`}>
            Book Now
          </button>
        </div>
      </div>
    </Link>
  );
};

export default HotelCard;