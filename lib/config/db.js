import mongoose from "mongoose";

 export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://lallalamin:12Momo8z@cluster0.ih0aefm.mongodb.net/blog-app')
    console.log("DB connected")
}