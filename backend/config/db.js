import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => {
            console.log('Database connected successfully');
        });

        // The process.env.MONGODB_URI is pulled from the .env inside /backend
        await mongoose.connect(`${process.env.MONGODB_URI}/hotel-booking`);
    } catch (error) {
        console.log('Database connection error:', error.message);
        process.exit(1);
    }
};

export default connectDB;