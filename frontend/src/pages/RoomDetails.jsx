import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { rooms_dummy_data, assets, facility_icons, room_common_data } from '../assets/assets';
import StarRating from '../components/StarRating';

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [mainImage, setMainImage] = useState('');

  useEffect(() => {
    const foundRoom = rooms_dummy_data.find(r => r.id === id);
    if (foundRoom) {
      setRoom(foundRoom);
      setMainImage(foundRoom.images[0]);
    }
  }, [id]);

  if (!room) return <div className="p-20 text-center">Loading room details...</div>;

  return (
    <div className="container mx-auto px-4 py-10 pt-24">
      {/* Header Info */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold font-playfair">{room.hotel.name} <span className="text-sm font-normal text-gray-500 italic">({room.roomType})</span></h1>
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-2">
                <StarRating rating={4} />
                <span className="text-sm text-gray-400">200+ reviews</span>
            </div>
            <div className="flex items-center gap-1 text-gray-500 text-sm">
                <img src={assets.location_icon} className="h-4" alt="" />
                <span>{room.hotel.address}</span>
            </div>
          </div>
        </div>
        <div className="bg-red-50 text-primary px-4 py-2 rounded-lg font-bold border border-red-100">
          20% OFF
        </div>
      </div>

      {/* Image Gallery */}
      <div className="flex flex-col lg:flex-row gap-4 mb-10">
        <div className="flex-1">
          <img src={mainImage} className="w-full h-[500px] object-cover rounded-3xl shadow-lg" alt="main" />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 lg:w-48">
          {room.images.map((img, index) => (
            <img 
              key={index}
              src={img} 
              onClick={() => setMainImage(img)}
              className={`h-24 w-full object-cover rounded-2xl cursor-pointer transition-all ${mainImage === img ? 'outline outline-4 outline-primary' : 'opacity-70 hover:opacity-100'}`}
              alt="thumb" 
            />
          ))}
        </div>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4 font-playfair">Experience Luxury Like Never Before</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {room.amenities.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl border border-gray-100">
                        <img src={facility_icons[item]} className="h-5 w-5" alt="" />
                        <span className="text-xs font-medium">{item}</span>
                    </div>
                ))}
            </div>

            <div className="border-y py-8 flex flex-col gap-6">
                {room_common_data.map((spec, index) => (
                    <div key={index} className="flex gap-4">
                        <img src={spec.icon} className="h-8 w-8" alt="" />
                        <div>
                            <p className="font-bold text-gray-800">{spec.title}</p>
                            <p className="text-sm text-gray-500">{spec.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="py-8">
                <p className="text-gray-600 leading-relaxed">This luxury stay offers a perfect blend of modern architecture and classic comfort. Located in the heart of the city, you are never far from the action while enjoying the serenity of our soundproof rooms.</p>
                <div className="mt-8 flex items-center gap-4 bg-gray-50 p-6 rounded-3xl w-fit">
                    <img src={room.hotel.owner.image} className="h-16 w-16 rounded-full object-cover" alt="host" />
                    <div>
                        <p className="text-sm text-gray-400 italic">Hosted by</p>
                        <p className="font-bold text-xl">{room.hotel.owner.name}</p>
                        <div className="flex items-center gap-2 mt-1">
                            <StarRating rating={5} />
                            <span className="text-xs text-gray-400">Trusted Host</span>
                        </div>
                    </div>
                    <button className="ml-8 bg-secondary text-white px-6 py-2 rounded-full">Contact Now</button>
                </div>
            </div>
        </div>

        {/* Booking Sidebar */}
        <div className="bg-white border rounded-3xl p-8 shadow-sm h-fit sticky top-24">
            <p className="text-2xl font-bold mb-6">${room.pricePerNight} <span className="text-sm font-normal text-gray-400">/ night</span></p>
            <form className="flex flex-col gap-4">
                <div className="border rounded-xl p-3">
                    <label className="text-xs font-bold text-gray-400 block uppercase">Check-In</label>
                    <input type="date" className="w-full outline-none text-sm mt-1" required />
                </div>
                <div className="border rounded-xl p-3">
                    <label className="text-xs font-bold text-gray-400 block uppercase">Check-Out</label>
                    <input type="date" className="w-full outline-none text-sm mt-1" required />
                </div>
                <div className="border rounded-xl p-3">
                    <label className="text-xs font-bold text-gray-400 block uppercase">Guests</label>
                    <input type="number" placeholder="1" min="1" className="w-full outline-none text-sm mt-1" required />
                </div>
                <button type="submit" className="bg-primary text-white w-full py-4 rounded-xl font-bold mt-2 hover:bg-opacity-90 transition-all">
                    Check Availability
                </button>
            </form>
            <p className="text-center text-xs text-gray-400 mt-4 italic">You won't be charged yet</p>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;