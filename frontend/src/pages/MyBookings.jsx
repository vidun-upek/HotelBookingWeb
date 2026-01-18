import React, { useState } from 'react';
import Title from '../components/Title';
import { user_bookings_dummy_data, assets } from '../assets/assets';

const MyBookings = () => {
  const [bookings, setBookings] = useState(user_bookings_dummy_data);

  return (
    <div className="container mx-auto px-4 py-10 pt-24">
      <Title 
        align="left"
        title="My Bookings" 
        subtitle="Manage your upcoming trips and review your past hotel reservations."
      />

      {/* Table Headers */}
      <div className="hidden md:grid grid-cols-3 bg-gray-50 p-4 rounded-xl font-bold text-gray-600 mb-6">
        <div>Hotels</div>
        <div className="text-center">Dates & Timings</div>
        <div className="text-right">Payment Status</div>
      </div>

      <div className="flex flex-col gap-6">
        {bookings.map((booking) => (
          <div key={booking.id} className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 border rounded-2xl items-center bg-white hover:shadow-md transition-shadow">
            
            {/* Column 1: Hotel Info */}
            <div className="flex gap-4">
              <img src={booking.room.images[0]} className="h-24 w-32 object-cover rounded-xl" alt="hotel" />
              <div>
                <h4 className="font-bold text-lg">{booking.hotel.name}</h4>
                <p className="text-sm text-gray-500 italic">{booking.room.roomType}</p>
                <div className="flex items-center gap-2 mt-2 text-xs text-gray-400">
                    <img src={assets.location_icon} className="h-3" alt="" />
                    <span>{booking.hotel.city}</span>
                </div>
                <p className="mt-2 font-bold text-primary">Total: ${booking.totalPrice}</p>
              </div>
            </div>

            {/* Column 2: Dates */}
            <div className="text-center flex flex-col gap-1">
              <p className="text-sm font-medium">Check-in: <span className="text-gray-500">{booking.checkInDate}</span></p>
              <p className="text-sm font-medium">Check-out: <span className="text-gray-500">{booking.checkOutDate}</span></p>
              <p className="text-xs text-primary mt-2">{booking.guests} Guest(s)</p>
            </div>

            {/* Column 3: Payment */}
            <div className="text-right flex flex-col items-end gap-3">
              <span className={`px-4 py-1 rounded-full text-xs font-bold ${booking.paymentStatus === 'Paid' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'}`}>
                {booking.paymentStatus}
              </span>
              {booking.paymentStatus !== 'Paid' && (
                <button className="bg-primary text-white text-xs px-6 py-2 rounded-lg">Pay Now</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;