const express=require("express")
// const mongoose=require("mongoose")
const app =express()

const connect =require("./configs/dbs")

const User=require("./models/user-model")

// const Branchdetails=require("./models/branch-details-models")

// const userController =require("./controllers/user-controller")

app.use(express.json());

app.use("/users",userController)

app.listen(4000,async() =>{
    try{
        await connect()
    }
    catch(err){
        console.log("err")
    }
    console.log("listen to port 4000")
})