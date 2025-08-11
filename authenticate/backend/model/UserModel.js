const express=require('express');
const mongoose=require('mongoose');

const authSchema=mongoose.Schema({
   name:{
    type:String,
    required:true
   },
   email:{
    type:String,
    required:true,
     unique: true
   },
    pass:{
    type:String,
    required:true
   },
   phn:{
    type:Number,
    required:true
   },
   gen:{
    type:String,
    required:true
   }
})


const authModel=mongoose.model('User',authSchema)
module.exports=authModel

