import React from 'react';
import { useNavigate } from 'react-router-dom';
import { rooms_dummy_data, assets, facility_icons } from '../assets/assets';
import StarRating from '../components/StarRating';

const AllRooms = () => {
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/rooms/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="container mx-auto px-4 py-10 flex flex-col lg:flex-row gap-10">
      
      {/* LEFT SIDE: Room Listings */}
      <div className="flex-1">
        <div className="mb-8">
          <h1 className="text-3xl font-bold font-playfair mb-2">Hotel Rooms</h1>
          <p className="text-gray-500">Explore our wide range of rooms and suites designed for your comfort.</p>
        </div>

        <div className="flex flex-col gap-8">
          {rooms_dummy_data.map((room) => (
            <div key={room.id} className="flex flex-col md:flex-row gap-6 p-4 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow bg-white">
              {/* Thumbnail */}
              <img 
                src={room.images[0]} 
                alt="hotel" 
                title="View room details"
                className="w-full md:w-72 h-48 object-cover rounded-xl cursor-pointer"
                onClick={() => handleNavigate(room.id)}
              />

              {/* Details */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-primary text-sm font-semibold uppercase">{room.hotel.city}</p>
                  <h3 
                    className="text-xl font-bold hover:text-primary cursor-pointer transition-colors"
                    onClick={() => handleNavigate(room.id)}
                  >
                    {room.hotel.name}
                  </h3>
                  
                  <div className="flex items-center gap-2 mt-2">
                    <StarRating rating={4} />
                    <span className="text-gray-400 text-sm">(200+ Reviews)</span>
                  </div>

                  <div className="flex items-center gap-2 mt-3 text-gray-500 text-sm">
                    <img src={assets.location_icon} className="h-4" alt="loc" />
                    <span>{room.hotel.address}</span>
                  </div>

                  {/* Amenities */}
                  <div className="flex flex-wrap gap-4 mt-4">
                    {room.amenities.map((item, index) => (
                      <div key={index} className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
                        <img src={facility_icons[item]} className="h-4 w-4" alt={item} />
                        <span className="text-xs text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div className="mt-4 md:mt-0 flex items-center justify-between border-t md:border-none pt-4 md:pt-0">
                  <p className="text-xl font-bold text-gray-800">
                    ${room.pricePerNight} <span className="text-sm text-gray-400 font-normal">/ night</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE: Filters Container */}
      <div className="w-full lg:w-80 p-6 border border-gray-200 rounded-2xl h-fit bg-white sticky top-24">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold">Filters</h3>
          <span className="text-primary text-sm cursor-pointer hover:underline font-medium">Clear</span>
        </div>
        
        {/* Filter categories will go here in the next step */}
        <div className="text-gray-400 italic text-sm">
          More filters coming soon...
        </div>
      </div>

    </div>
  );
};

export default AllRooms;