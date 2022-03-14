const express=require("express")
const app =express()

const User=require("../models/user-model")

app.get("",async(req, res)=>{
    try{
        const users =await User.find().learn().exec()
        return res.status(200).send({users:users})
    }
    catch(err){
        return res.status(500).send({message:"Something went Wrong..."})
    }
})

module.exports=app;