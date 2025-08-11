const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config();

const connectDB= async ()=>{
    try {
        const connect= await mongoose.connect(process.env.MONGODB_URI)
        console.log(`Database is connected ${connect.connection.host}`);

    } catch (error) {
       console.log( error.message);
    }
}

module.exports=connectDB