import React, { useState } from 'react';
import { assets, cities } from '../assets/assets';
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';

const HotelRegistration = () => {
  const { setShowHotelRegistration, axios, getToken, setIsOwner } = useAppContext();
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');

  const onsubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const token = await getToken();
      const { data } = await axios.post('/api/hotels/register', 
        { name, contact, address, city },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (data.success) {
        toast.success(data.message);
        setIsOwner(true);
        setShowHotelRegistration(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={() => setShowHotelRegistration(false)}>
      <form 
        onClick={(e) => e.stopPropagation()} 
        onSubmit={onsubmitHandler}
        className="bg-white p-8 rounded-3xl shadow-2xl relative w-full max-w-lg mx-4 flex flex-col md:flex-row gap-6"
      >
        <img src={assets.registration_image} className="hidden md:block w-48 rounded-2xl object-cover" alt="" />
        
        <div className="flex-1">
          <img 
            src={assets.close_icon} 
            className="absolute top-4 right-4 w-4 cursor-pointer" 
            onClick={() => setShowHotelRegistration(false)} 
            alt="close" 
          />
          <h2 className="text-2xl font-bold mb-6 font-playfair">Register Your Hotel</h2>
          
          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold text-gray-400 uppercase">Hotel Name</label>
              <input required value={name} onChange={(e) => setName(e.target.value)} type="text" className="w-full border-b py-2 outline-none focus:border-primary transition-all" placeholder="Grand Royal" />
            </div>
            <div>
              <label className="text-xs font-bold text-gray-400 uppercase">Phone</label>
              <input required value={contact} onChange={(e) => setContact(e.target.value)} type="text" className="w-full border-b py-2 outline-none focus:border-primary transition-all" placeholder="+94 ..." />
            </div>
            <div>
              <label className="text-xs font-bold text-gray-400 uppercase">Address</label>
              <input required value={address} onChange={(e) => setAddress(e.target.value)} type="text" className="w-full border-b py-2 outline-none focus:border-primary transition-all" placeholder="123 Street, City" />
            </div>
            <div>
              <label className="text-xs font-bold text-gray-400 uppercase">City</label>
              <select required value={city} onChange={(e) => setCity(e.target.value)} className="w-full border-b py-2 outline-none focus:border-primary transition-all bg-transparent">
                <option value="">Select City</option>
                {cities.map((c, i) => <option key={i} value={c}>{c}</option>)}
              </select>
            </div>
            <button className="w-full bg-primary text-white py-3 rounded-xl font-bold mt-4 hover:bg-opacity-90 transition-all">Register Hotel</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default HotelRegistration;