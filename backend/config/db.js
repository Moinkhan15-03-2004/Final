import mongoose from "mongoose";
export const connectDB = async()=>{
     await mongoose.connect('mongodb+srv://moin46761:12345678987654321@cluster0.y3ci1.mongodb.net/food-del').then(()=>console.log("DB connected"))
}