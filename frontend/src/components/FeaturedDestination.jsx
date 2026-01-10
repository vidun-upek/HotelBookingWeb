import React from 'react'
import { rooms_dummy_data } from '../assets/assets'
import HotelCard from './HotelCard'
import Title from './Title'
import { useNavigate } from 'react-router-dom'

const FeaturedDestination = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-16">
      <Title 
        title="Featured Destination" 
        subtitle="Explore our top-rated hotels and destinations around the world for your next stay."
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {rooms_dummy_data.slice(0, 4).map((room, index) => (
          <HotelCard key={room.id} room={room} index={index} />
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button 
          onClick={() => { navigate('/rooms'); window.scrollTo(0, 0); }}
          className="bg-primary text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all"
        >
          View all destinations
        </button>
      </div>
    </div>
  )
}

export default FeaturedDestination