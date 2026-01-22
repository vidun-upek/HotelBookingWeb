import React, { useState } from 'react';
import Title from '../../components/Title';
import { rooms_dummy_data } from '../../assets/assets';

const ListRoom = () => {
  const [rooms, setRooms] = useState(rooms_dummy_data);

  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm border">
      <Title align="left" font="outfit" title="Room Listings" subtitle="Manage and monitor all hotel rooms currently available on the platform." />
      
      <p className="text-gray-400 font-bold mt-6 mb-4">All Rooms</p>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-50 text-gray-600 text-sm">
            <tr>
              <th className="p-4 border-b">Room Name</th>
              <th className="p-4 border-b hidden sm:table-cell">Facility</th>
              <th className="p-4 border-b">Price Per Night</th>
              <th className="p-4 border-b text-center">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700">
            {rooms.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="p-4 border-b font-medium">{item.roomType}</td>
                <td className="p-4 border-b hidden sm:table-cell text-gray-500">
                  {item.amenities.join(', ')}
                </td>
                <td className="p-4 border-b font-bold">${item.pricePerNight}</td>
                <td className="p-4 border-b text-center">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer"
                      checked={item.isAvailable} 
                      onChange={() => {}} 
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListRoom;