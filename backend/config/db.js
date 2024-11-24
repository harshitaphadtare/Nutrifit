import mongoose from "mongoose";

export const connectDB = async() =>{
    await mongoose.connect("mongodb+srv://harshita:hphadtare2024@cluster0.hiszs.mongodb.net/food-del").then(()=>console.log("DB connected"));
}

