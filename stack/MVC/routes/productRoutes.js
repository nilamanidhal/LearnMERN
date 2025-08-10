const express=require('express')
const {getProduct,addProduct,updateProduct, deleteProducts} = require('../controllers/productController')
const router=express.Router()



router.get("/product",getProduct);
router.post("/product/add",addProduct);
router.put("/product/:id",updateProduct);
router.delete("/product/:id",deleteProducts);

module.exports=router