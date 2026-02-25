import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { registerHotel } from '../controllers/hotelController.js';
import asyncHandler from '../middleware/asyncHandler.js';

const hotelRouter = express.Router();

hotelRouter.post('/register', protect, asyncHandler(registerHotel));

export default hotelRouter;