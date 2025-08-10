const express=require('express');
const route=express.Router();


//creating middleware
const loggingMiddelware=(req,res,next)=>{
    // res.send("logging");
  console.log("logging complete")
    next();
}

const authMiddleware=(req,res,next)=>{
  console.log("authtication complete");
    next();
}

const validationMiddelware=(req,res,next)=>{
   console.log("validation complete");
    next();
}


//loading middelware into application
route.use (loggingMiddelware); 
route.use(authMiddleware);
route.use (validationMiddelware);



//define the home page route
route.get("/",(req,res)=>{
    console.log("after all middleware this route handler is running")
    console.log(req.body);
    res.send("get request");
});

route.delete("/user",(req,res)=>{
    res.send("delete request")
})

module.exports=route