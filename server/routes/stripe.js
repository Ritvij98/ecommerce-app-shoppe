const router = require('express').Router()
const KEY = process.env.STRIPE_KEY
const stripe = require("stripe")(KEY);

router.post("/payment", (req,res)=>{
    stripe.charges.create({
        source:req.body.tokenId,
        amount:req.body.amount,
        currency:"usd"
    },(stripeErr,stripeRes)=>{
        if(stripeErr){
            console.log("se",stripeErr)
            res.status(500).json(stripeErr)
        }else{
            console.log("res",stripeRes)
            res.status(200).json(stripeRes)
        }
    })
})


module.exports = router;