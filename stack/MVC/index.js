const express=require('express');
const connectDB=require('./config/db');
const productRoutes = require('./routes/productRoutes');
const app=express();
port=8000;

app.get("/",(req,res)=>{
    res.send(`server running on: ${port}`)
})


const cors = require("cors");
app.use(cors()); //access froented request


app.use(express.json())
connectDB();

app.use('/api',productRoutes);  //  "/api/product"

app.listen(port,()=>{
    console.log(`app listening on port: ${port}`)
})