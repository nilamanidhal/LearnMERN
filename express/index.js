//including express module
const express=require('express');

//initializing an appusing express method
const app=express();

//variable that store the port number
const port=8000;
app.use(express.json()); //this a middeleware use to convert json to javascript object

// app.get("/",(req,res)=>{
//     res.send("get method called");
// })
// app.post("/",(req,res)=>{
//     res.send("post method called");
// })

// app.put("/user",(req,res)=>{
//     res.send("put method called");
// })
const item=require('./routes/item');
app.use('/api', item);

//start your app
app.listen(port,()=>{
    console.log("app listening");
})
