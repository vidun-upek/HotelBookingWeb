import { v2 as cloudinary } from 'cloudinary';
import Room from '../models/room.js';
import Hotel from '../models/hotel.js';

export const createRoom = async (req, res) => {
    try {
        const { roomType, pricePerNight, amenities } = req.body;
        const hotel = await Hotel.findOne({ owner: req.auth.userId });

        if (!hotel) return res.json({ success: false, message: 'No hotel found' });

        // Upload images to Cloudinary
        const files = req.files;
        const uploadPromises = files.map(file => cloudinary.uploader.upload(file.path));
        const uploadResponses = await Promise.all(uploadPromises);
        const images = uploadResponses.map(res => res.secure_url);

        const roomData = {
            hotel: hotel._id,
            roomType,
            pricePerNight: Number(pricePerNight),
            amenities: JSON.parse(amenities),
            images
        };

        await Room.create(roomData);
        res.json({ success: true, message: 'Room created successfully' });

    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

export const getRooms = async (req, res) => {
    try {
        const rooms = await Room.find({ isAvailable: true })
            .populate({
                path: 'hotel',
                populate: { path: 'owner', select: 'image' }
            })
            .sort({ createdAt: -1 });
        res.json({ success: true, rooms });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

export const getOwnerRooms = async (req, res) => {
    try {
        const hotel = await Hotel.findOne({ owner: req.auth.userId });
        const rooms = await Room.find({ hotel: hotel._id }).populate('hotel');
        res.json({ success: true, rooms });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

export const toggleRoomAvailability = async (req, res) => {
    try {
        const { roomId } = req.body;
        const room = await Room.findById(roomId);
        room.isAvailable = !room.isAvailable;
        await room.save();
        res.json({ success: true, message: 'Availability updated' });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};