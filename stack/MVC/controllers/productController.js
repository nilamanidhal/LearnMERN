const Product=require('../model/productModel');


//business logic

//get product logic
const getProduct=async (req , res)=>{
    try {
        const allProduct=await Product.find();
        if(!allProduct){
         return   res.json({
                message:"there is no product"
            })
        }

        res.json({
            message:allProduct
        })


    } catch (error) {
        res.status(500).json({
            sucess:false,
            message:'internal server error',
        })
    }
}


//add product logic
const addProduct=async (req,res)=>{
    try {
        const {name,price,desc,category}=req.body;
       const newProduct=new Product({name,price,desc,category});
       console.log("BODY:", req.body);//cheak
       await newProduct.save();
       res.status(201).json({
        message:"new item added",
        product:newProduct,
       })
    } catch (error) {
        res.status(500).json({
            sucess:false,
            message:'internal server error'
        })
    }
}


//update product
const updateProduct=async (req,res)=>{
    try {
        console.log('put request')
        const {id}=req.params;
        const {name,price,desc,category}=req.body;
       const updatedProduct= await Product.findByIdAndUpdate(id,{name,price,desc,category},{new:true});
        res.json({
            message:updatedProduct,
        })


       if(!updatedProduct){
        res.status(200).json({
            message:'product not found',
        })
       }

    } catch (error) {
        res.status(500).json({
            sucess:false,
            message:'internal server error'
        })
    }
}


//delete product logic
const deleteProducts=async (req,res)=>{
    try {
        const {id}=req.params;
        const deleteProduct=await Product.findOneAndDelete({ _id: id });

            if(!deleteProduct){
            res.status(500).json({
                message:'product is not found',
            })
        }
        res.json({
            message:'product deleted',
        })

    
    } catch (error) {
        res.status(500).json({
            message:'internal server error'
        })
    }
}

module.exports={getProduct,addProduct,updateProduct,deleteProducts}