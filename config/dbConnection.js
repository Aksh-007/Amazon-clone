import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();

// databse connection file 
const dbConnection = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Database connected to ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error in MongoDB ${error}`)
    }
}

export default dbConnection;