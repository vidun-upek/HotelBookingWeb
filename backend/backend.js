import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import connectDB from './config/db.js';

const app = express();
const PORT = process.env.PORT || 4000;

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// API Endpoints
app.get('/', (req, res) => {
    res.send('API is working');
});

app.listen(PORT, () => {
    console.log(`Backend server running on port ${PORT}`);
});