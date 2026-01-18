import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { rooms_dummy_data, assets, facility_icons } from '../assets/assets';
import StarRating from '../components/StarRating';

// Reusable Sub-components
const Checkbox = ({ label, selected = false, onChange }) => (
  <label className="flex items-center gap-3 cursor-pointer py-1">
    <input 
      type="checkbox" 
      checked={selected} 
      onChange={(e) => onChange(e.target.checked)} 
      className="w-4 h-4 accent-primary"
    />
    <span className="text-sm text-gray-600">{label}</span>
  </label>
);

const RadioButton = ({ label, selected = false, onChange }) => (
  <label className="flex items-center gap-3 cursor-pointer py-1">
    <input 
      type="radio" 
      name="sortOption"
      checked={selected} 
      onChange={() => onChange(label)} 
      className="w-4 h-4 accent-primary"
    />
    <span className="text-sm text-gray-600">{label}</span>
  </label>
);

const AllRooms = () => {
  const navigate = useNavigate();
  const [openFilters, setOpenFilters] = useState(false);

  // Data for filters
  const roomTypes = ["Single Bed", "Double Bed", "Luxury Room", "Family Suite"];
  const priceRanges = ["0 - 500", "500 - 1000", "1000 - 2000", "2000+"];
  const sortOptions = ["Price: Low to High", "Price: High to Low", "Newest First"];

  return (
    <div className="container mx-auto px-4 py-10 flex flex-col lg:flex-row gap-10">
      
      {/* LEFT SIDE: Room Listings */}
      <div className="flex-1 order-2 lg:order-1">
        <div className="mb-8">
          <h1 className="text-3xl font-bold font-playfair mb-2">Hotel Rooms</h1>
          <p className="text-gray-500">Find the perfect room for your stay.</p>
        </div>

        <div className="flex flex-col gap-8">
          {rooms_dummy_data.map((room) => (
            <div key={room.id} className="flex flex-col md:flex-row gap-6 p-4 border border-gray-100 rounded-2xl bg-white shadow-sm">
              <img 
                src={room.images[0]} 
                alt="hotel" 
                className="w-full md:w-72 h-48 object-cover rounded-xl cursor-pointer"
                onClick={() => { navigate(`/rooms/${room.id}`); window.scrollTo(0, 0); }}
              />
              <div className="flex-1">
                <p className="text-primary text-xs font-bold uppercase">{room.hotel.city}</p>
                <h3 className="text-xl font-bold mb-2 cursor-pointer" onClick={() => navigate(`/rooms/${room.id}`)}>
                  {room.hotel.name}
                </h3>
                <StarRating rating={4} />
                <div className="flex items-center gap-2 mt-4 text-gray-500 text-sm">
                  <img src={assets.location_icon} className="h-4" alt="" />
                  <span>{room.hotel.address}</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                    {room.amenities.map((item, index) => (
                      <div key={index} className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded border">
                        <img src={facility_icons[item]} className="h-3 w-3" alt="" />
                        <span className="text-[10px]">{item}</span>
                      </div>
                    ))}
                </div>
                <p className="mt-4 font-bold text-lg">${room.pricePerNight} <span className="font-normal text-sm text-gray-400">/ night</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE: Filters Container */}
      <div className="w-full lg:w-80 p-6 border border-gray-200 rounded-2xl h-fit bg-white sticky top-24 order-1 lg:order-2">
        <div className={`flex items-center justify-between pb-4 ${openFilters ? 'border-b' : ''} lg:border-none`}>
          <h3 className="text-xl font-bold">Filters</h3>
          <span 
            className="text-primary text-sm cursor-pointer lg:block hidden"
            onClick={() => window.location.reload()}
          >
            Clear
          </span>
          <span 
            className="text-primary text-sm cursor-pointer lg:hidden block font-bold"
            onClick={() => setOpenFilters(!openFilters)}
          >
            {openFilters ? "Hide" : "Show"}
          </span>
        </div>
        
        <div className={`${openFilters ? 'h-auto mt-4' : 'h-0 overflow-hidden'} lg:h-auto lg:mt-6 transition-all duration-500`}>
          <div className="mb-6">
            <p className="font-bold text-sm mb-3 text-gray-800">Popular Filters</p>
            {roomTypes.map((type, index) => <Checkbox key={index} label={type} onChange={() => {}} />)}
          </div>
          <div className="mb-6">
            <p className="font-bold text-sm mb-3 text-gray-800">Price Range</p>
            {priceRanges.map((range, index) => <Checkbox key={index} label={`$${range}`} onChange={() => {}} />)}
          </div>
          <div className="mb-2">
            <p className="font-bold text-sm mb-3 text-gray-800">Sort By</p>
            {sortOptions.map((opt, index) => <RadioButton key={index} label={opt} onChange={() => {}} />)}
          </div>
        </div>
      </div>

    </div>
  );
};

export default AllRooms;