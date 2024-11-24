import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async() =>{
    await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`).then(()=>console.log("DB connected"));
}

