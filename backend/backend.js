import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import connectDB from './config/db.js';
import { clerkMiddleware } from '@clerk/express';
import clerkWebhooks from './controllers/clerkWebhooks.js';
import userRouter from './routes/userRoutes.js';
import hotelRouter from './routes/hotelRoutes.js';

const app = express();
const PORT = process.env.PORT || 4000;

connectDB();

// Middlewares
app.use(cors());
app.use(clerkMiddleware());

// Webhook Route (Needs to be before express.json for Svix verification)
app.post('/api/clerk', express.json(), clerkWebhooks);

// Regular Body Parser
app.use(express.json());

// API Endpoints
app.get('/', (req, res) => res.send('API is working'));
app.use('/api/user', userRouter);
app.use('/api/hotels', hotelRouter);

app.listen(PORT, () => {
    console.log(`🚀 Backend running on port ${PORT}`);
});