const express=require('express');
const mongoose=require('mongoose');
const authModel=require('../model/UserModel');


const register=async (req,res)=>{
   try {
     const {name,email,pass,phn,gen}=req.body;
    const newUser=new authModel({name,email,pass,phn,gen});
    console.log("BODY:", req.body);//cheak
    await newUser.save();
    res.status(201).json({
        message:'user registered sucessfull'
    })
   } catch (error) {
        res.status(500).json({
            message:`error ${error}`
        })
   }
}



const login=async (req,res)=>{
    try {
        const {email,pass}=req.body;
        if(!email || !pass){
          return  res.json({
                message:'all field required'
            })
        }

        const user=await authModel.findOne({email})
        if(!user){
            return res.json({
                message:'emauil is not exists'
            })
        }

        if(user.pass !== pass){
            return res.json({
                message:"invalid password"
            })
        }

        res.status(200).json({
            message:'login sucesssfull'
        })
    } catch (error) {
        res.status(500).json({
            message:error
        })
    }
}



module.exports={register,login}