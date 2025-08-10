const mongoose=require('mongoose');
const dotenv=require('dotenv');


dotenv.config();
const connectDB=async ()=>{
    try {
        const connect=await mongoose.connect(process.env.MONGODB_URI);
        console.log(`database is connected`);
    } catch (error) {
        console.error(error.message);

    }
}

module.exports=connectDB;