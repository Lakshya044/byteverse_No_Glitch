const mongoose=require("mongoose");
const userbail =new mongoose.Schema({
    
        AadharNo:{
            type:Number,
            // unique:true,
            // required:true
        },
        detail:{
            type:String,
            // required:true
        },
        address:{
            type:String,
            // required:true
        },
        status:{
            type: String,
            enum: ['pending', 'approved', 'rejected'],
            default: 'pending'
        }
    })
    const bailrequest =mongoose.model("bailrequest",userbail)
    module.exports=bailrequest;