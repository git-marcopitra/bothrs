import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URL || '';

mongoose.connect(MONGODB_URI);

export default mongoose.connection;
