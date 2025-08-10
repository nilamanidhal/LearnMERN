const mongoose=require("mongoose")
const dotenv=require('dotenv')

//load env configuration
dotenv.config();

const connectDb= async ()=>{
    try {
        const connect=mongoose.connect(process.env.MONGODB_URL);
        console.log(`DataBase connected`);
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

module.exports=connectDb