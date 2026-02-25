import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => {
            console.log('Database connected successfully');
        });

        const uri = process.env.MONGODB_URI;
        if (!uri) throw new Error('MONGODB_URI not set');

        // use recommended options
        await mongoose.connect(`${uri}/hotel-booking`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    } catch (error) {
        console.error('Database connection error:', error.message);
        // Do not crash immediately in dev; rethrow so caller can decide
        throw error;
    }
};

export default connectDB;