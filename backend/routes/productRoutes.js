import express from "express";
const router = express.Router();
import cors from "cors";
import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";
import products from '../data/products.js'

// router.get('/api/products', asyncHandler(async (req, res) => {
//     const products = await Product.find({});
//     res.json(products);
// }));

// router.get('/api/products/:id', asyncHandler(async (req, res) => {
//     const product = await Product.findById(req.params.id);

//     if(product){
//         return res.json(product)
//     }
//     res.status(404).jason( {message: 'Product not found'});
// }));

router.get('/', (req, res) => {
    res.json(products);
})

router.get('/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
})
export default router;