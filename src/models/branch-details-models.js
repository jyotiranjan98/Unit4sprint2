const mongoose=require("mongoose")

const branchDetailsSchema=new mongoose.Schema({
    name:{type:String,required:true},
    address:{type:String,required:true},
    IFSC:{type:String,required:true},
    MICR:{type:Number,required:true},
    userID:{
        type:mongoose.Schema.Types.ObjectId,
        reff:"user"
    }
},{
    versionkey:false,
    timestamps:true
})

const Branchdetails =mongoose.model("branchdetails",branchDetailsSchema)

module.exports =Branchdetails;