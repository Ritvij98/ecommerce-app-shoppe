const router = require('express').Router();
const {verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorisation} = require('./verifyToken')
const Cart = require("../models/cart");

//CREATE CART
router.post("/",verifyTokenAndAuthorisation, async (req,res)=>{
    const newCart = new Cart(req.body)
    try{
        const savedCart = await newCart.save()
        res.status(200).json(savedCart)
    }catch(err){
        res.status(500).json(err)
    }
})

//GET CART
router.get("/find/:id",verifyTokenAndAuthorisation,async (req,res)=>{
    try{
        const cart = await Cart.findOne({userId: req.params.id})
        res.status(200).json(cart)
    }catch(err){
        res.status(500).json(err)
    }
})

//GET ALL CARTS
router.get("/",verifyTokenAndAdmin,async (req,res)=>{
     try{
        const carts = await Cart.find()
        res.status(201).json(carts)
    }catch(err){
        res.status(500).json(err)
    }
})

//UPDATE CART
router.put("/:id",verifyTokenAndAuthorisation,async (req,res)=>{
   
    try{
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id,{
            $set: req.body
        },{new:true})
        res.status(201).json(updatedCart)
    }catch(err){
        res.status(500).json(err)
    }
})

//DELETE CART
router.delete("/:id",verifyTokenAndAuthorisation,async (req,res)=>{
    try{
        await Cart.findByIdAndDelete(req.params.id)
        res.status(201).json("Cart has been deleted.")
    }catch(err){
        res.status(500).json(err)
    }
})


module.exports = router; 