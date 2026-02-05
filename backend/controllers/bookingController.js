import Booking from '../models/booking.js';
import Room from '../models/room.js';
import Hotel from '../models/hotel.js';

export const checkAvailability = async (req, res) => {
    try {
        const { room, checkInDate, checkOutDate } = req.body;
        const overlap = await Booking.find({
            room,
            checkInDate: { $lt: new Date(checkOutDate) },
            checkOutDate: { $gt: new Date(checkInDate) }
        });
        res.json({ success: true, isAvailable: overlap.length === 0 });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

export const createBooking = async (req, res) => {
    try {
        const { room, checkInDate, checkOutDate, guests } = req.body;
        const userId = req.auth.userId;

        const roomData = await Room.findById(room);
        const nights = Math.ceil((new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 60 * 60 * 24));
        const totalPrice = roomData.pricePerNight * nights;

        const booking = await Booking.create({
            user: userId, room, hotel: roomData.hotel,
            checkInDate, checkOutDate, guests, totalPrice
        });

        res.json({ success: true, message: 'Booking created successfully' });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

export const getUserBookings = async (req, res) => {
    try {
        const bookings = await Booking.find({ user: req.auth.userId })
            .populate('room hotel')
            .sort({ createdAt: -1 });
        res.json({ success: true, bookings });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

export const getHotelBookings = async (req, res) => {
    try {
        const hotel = await Hotel.findOne({ owner: req.auth.userId });
        const bookings = await Booking.find({ hotel: hotel._id }).populate('room hotel user');
        
        const totalRevenue = bookings.reduce((acc, b) => acc + b.totalPrice, 0);
        
        res.json({ 
            success: true, 
            dashboardData: { totalBookings: bookings.length, totalRevenue, bookings } 
        });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};