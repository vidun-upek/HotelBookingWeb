import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import connectDB from './config/db.js';
import connectCloudinary from './config/cloudinary.js';
import { clerkMiddleware } from '@clerk/express';
import clerkWebhooks from './controllers/clerkWebhooks.js';
import userRouter from './routes/userRoutes.js';
import hotelRouter from './routes/hotelRoutes.js';
import roomRouter from './routes/roomRoutes.js';
import bookingRouter from './routes/bookingRoutes.js';

const app = express();
const PORT = process.env.PORT || 4000;

connectDB();
connectCloudinary();

app.use(cors());
app.use(clerkMiddleware());

// Webhook Route
app.post('/api/clerk', express.json(), clerkWebhooks);

app.use(express.json());

// API Endpoints
app.get('/', (req, res) => res.send('API is working'));
app.use('/api/user', userRouter);
app.use('/api/hotels', hotelRouter);
app.use('/api/rooms', roomRouter);
app.use('/api/bookings', bookingRouter);

app.listen(PORT, () => {
    console.log(`🚀 Backend running on port ${PORT}`);
});