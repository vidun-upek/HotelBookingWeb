import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const HotelCard = ({ room, index }) => {
  return (
    <Link
      to={`/rooms/${room.id}`}
      onClick={() => window.scrollTo(0, 0)}
      className="bg-white rounded-xl shadow-lg overflow-hidden block transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-blue-300"
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
          <p className="absolute top-2 left-2 text-white text-xs px-2 py-1 rounded" style={{backgroundColor: 'var(--color-primary)'}}>
            Best Seller
          </p>
        )}
      </div>

      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-bold text-lg">{room.hotel.name}</h3>
          <div className="flex items-center gap-1 bg-yellow-100 px-2 py-1 rounded text-sm">
            <img src={assets.star_icon_filled} className="h-3" alt="rating" />
            <span>4.5</span>
          </div>
        </div>

        <div className="flex items-center gap-1 text-gray-500 text-sm mb-4">
          <img src={assets.location_icon} className="h-3" alt="location" />
          <span>{room.hotel.address}</span>
        </div>

        <div className="flex justify-between items-center">
          <p className="font-bold" style={{color: 'var(--color-primary)'}}>
            ${room.pricePerNight} <span className="text-gray-400 font-normal text-sm">/ night</span>
          </p>
          <Link to={`/rooms/${room.id}`} onClick={(e) => { e.stopPropagation(); window.scrollTo(0,0); }} className="text-white px-4 py-1 rounded text-sm focus-visible:ring-2 focus-visible:ring-blue-300" style={{backgroundColor: 'var(--color-secondary)'}} aria-label={`Book ${room.hotel.name}`}>
            Book Now
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default HotelCard;