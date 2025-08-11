const env = require('dotenv');
const express=require('express');
const connectDB = require('./config/db');
const router = require('./routes/AuthRoutes');

env.config();
 port=process.env.PORT
const app=express();

app.use(express.json());
connectDB();

app.get("/",(req,res)=>{
    res.send(`server running on: ${port}`)
})

app.use("/api",router);

app.listen(port,()=>{
    console.log('app listening on port',port);
})