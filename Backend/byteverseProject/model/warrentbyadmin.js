
const mongoose=require("mongoose");
const adminwarrent =new mongoose.Schema({
    warrantNo:{
        type:Number,
        // unique:true,
        // required:true
    },
    warranttype:{
        type:String,
        // unique:true,
        // required:true
    },
    Accusedname:{
        type:String,
        // unique:true,
        // required:true
    },
        AadharNo:{
            type:Number,
            // unique:true,
            // required:true
        },
        details:{
            type:String,
            // required:true
        },
        pincode:{
            type:Number,
            // unique:true,
            // required:true
        },
        policestationid:{
            type:Number
        },
        status:{
            type:String
        },
        address:{
            type:String
        }
    })
    const warrent =mongoose.model("warrent",adminwarrent)
    module.exports=warrent;