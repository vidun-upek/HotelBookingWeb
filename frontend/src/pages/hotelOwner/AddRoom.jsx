import React, { useState } from 'react';
import Title from '../../components/Title';
import { assets } from '../../assets/assets';

const AddRoom = () => {
  const [images, setImages] = useState({ 1: null, 2: null, 3: null, 4: null });
  const [inputs, setInputs] = useState({
    roomType: '',
    pricePerNight: 0,
    amenities: {
      'Free WiFi': false,
      'Free Breakfast': false,
      'Room Service': false,
      'Mountain View': false,
      'Pool Access': false
    }
  });

  const handleImageChange = (key, file) => {
    setImages(prev => ({ ...prev, [key]: file }));
  };

  return (
    <form className="bg-white p-8 rounded-3xl shadow-sm border max-w-4xl">
      <Title align="left" font="outfit" title="Add New Room" subtitle="Upload images and provide details for the new hotel room listing." />

      {/* Image Upload Grid */}
      <div className="mb-8">
        <p className="text-gray-500 font-bold mb-4">Room Images</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((key) => (
            <label key={key} htmlFor={`room-img-${key}`} className="cursor-pointer">
              <img 
                src={images[key] ? URL.createObjectURL(images[key]) : assets.upload_area} 
                className="h-32 w-full object-cover rounded-xl border-2 border-dashed border-gray-200" 
                alt="upload" 
              />
              <input 
                type="file" 
                id={`room-img-${key}`} 
                hidden 
                accept="image/*" 
                onChange={(e) => handleImageChange(key, e.target.files[0])} 
              />
            </label>
          ))}
        </div>
      </div>

      {/* Details Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="flex flex-col gap-2">
          <label className="font-bold text-gray-700">Room Type</label>
          <select 
            className="border p-3 rounded-xl outline-none"
            value={inputs.roomType}
            onChange={(e) => setInputs({...inputs, roomType: e.target.value})}
          >
            <option value="">Select Type</option>
            <option value="Single Bed">Single Bed</option>
            <option value="Double Bed">Double Bed</option>
            <option value="Luxury Room">Luxury Room</option>
            <option value="Family Suite">Family Suite</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-bold text-gray-700">Price Per Night ($)</label>
          <input 
            type="number" 
            className="border p-3 rounded-xl outline-none" 
            placeholder="0"
            onChange={(e) => setInputs({...inputs, pricePerNight: e.target.value})}
          />
        </div>
      </div>

      <button type="submit" className="bg-primary text-white px-10 py-4 rounded-xl font-bold hover:bg-opacity-90 transition-all">
        Add Room
      </button>
    </form>
  );
};

export default AddRoom;