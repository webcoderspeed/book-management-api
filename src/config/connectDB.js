import mongoose from 'mongoose'
import { MONGO_URL } from '../constants/index.js';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URL, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
			maxPoolSize: 10,
		});

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold)
    process.exit(1)
  }
}

export default connectDB