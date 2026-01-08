import React from 'react';
import { rooms_dummy_data } from '../assets/assets';
import HotelCard from './HotelCard';

const FeaturedDestination = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-8 font-playfair">Featured Destination</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {rooms_dummy_data.slice(0, 4).map((room, index) => (
          <HotelCard key={room.id} room={room} index={index} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedDestination;