import React, { useState } from 'react';
import Title from '../components/Title';
import { user_bookings_dummy_data } from '../assets/assets';

const MyBookings = () => {
  const [bookings] = useState(user_bookings_dummy_data);

  return (
    <div className="container mx-auto px-4 py-10 pt-24">
      <Title align="left" title="My Bookings" subtitle="Manage your upcoming trips and review past reservations." />

      <div className="hidden md:grid grid-cols-3 bg-gray-50 p-4 rounded-xl font-bold text-gray-600 mb-6 border">
        <div>Hotels</div>
        <div className="text-center">Dates & Timings</div>
        <div className="text-right pr-4">Payment Status</div>
      </div>

      <div className="flex flex-col gap-6">
        {bookings.map((booking) => (
          <div key={booking.id} className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 border rounded-2xl items-center bg-white shadow-sm">
            
            {/* Column 1: Hotel Info */}
            <div className="flex flex-col md:flex-row gap-4">
              <img src={booking.room.images[0]} className="h-24 w-full md:w-32 object-cover rounded-xl" alt="" />
              <div>
                <h4 className="font-bold text-lg">{booking.hotel.name} <span className="text-sm font-normal text-gray-400 italic">({booking.room.roomType})</span></h4>
                <p className="text-sm text-gray-500">{booking.hotel.address}</p>
                <p className="text-xs text-primary mt-2">Guests: {booking.guests} | Total: ${booking.totalPrice}</p>
              </div>
            </div>

            {/* Column 2: Dates */}
            <div className="text-center">
              <div className="mb-2">
                <p className="text-xs text-gray-400 uppercase font-bold">Check-in</p>
                <p className="text-sm">{new Date(booking.checkInDate).toDateString()}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase font-bold">Check-out</p>
                <p className="text-sm">{new Date(booking.checkOutDate).toDateString()}</p>
              </div>
            </div>

            {/* Column 3: Payment */}
            <div className="flex flex-col items-end gap-3">
              <div className="flex items-center gap-2">
                <div className={`h-2 w-2 rounded-full ${booking.isPaid ? 'bg-green-500' : 'bg-red-500'}`}></div>
                <p className={`text-sm font-bold ${booking.isPaid ? 'text-green-500' : 'text-red-500'}`}>
                  {booking.isPaid ? 'Paid' : 'Unpaid'}
                </p>
              </div>
              {!booking.isPaid && (
                <button className="bg-primary text-white px-6 py-2 rounded-lg text-sm font-bold hover:bg-opacity-90">
                  Pay Now
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;