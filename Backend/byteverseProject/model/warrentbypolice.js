
const mongoose=require("mongoose");
const policewarrent =new mongoose.Schema({
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
       
    })
    const warrentbypolice =mongoose.model("warrentbypolice",policewarrent)
    module.exports=warrentbypolice;