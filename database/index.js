const express=require("express")
const port=8000
const mongoose=require("mongoose")

const app=express();
const connectDb=require('./db')

app.use(express.json());
connectDb(); //connect to database

app.get("/",(req,res)=>{
    res.send("get method called");
})

app.listen(port,()=>{
    console.log("server running");
})