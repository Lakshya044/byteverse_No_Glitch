const polices =require('../model/aspolice');
const appError=require("../utils/apperror")
const bcrypt =require('bcrypt')
const jwt =require("jsonwebtoken");
const keysecret=process.env.JWT_SECRET;
const {sendCookiepolice} = require("../utils/feature");

 const getall=async(req,res)=>{
    try {
        const showall=await polices.find();
        res.status(200).json(showall);
    } catch (error) {
       console.log(error);
       res.status(400).json({error:error.message}); 
    }
};
 const registerpolice=async(req,res)=>{
    const{name,AadharNo,country,address,cityname,pincode,phonenumber,password,policeid}=req.body;
    // console.log(req.body);
    // const admin=require("./model/asAdmin");
    try {
        const police=await polices.findOne({AadharNo:AadharNo},{policeid:policeid});
if(police){
    res.status(422).json({ error: "This aadhar is Already,policeid Exist" })
}else{
const finalpolice=await polices({
            name:name,
            AadharNo:AadharNo,
            country:country,
            Address:address,
            city:cityname,
            pincode:pincode,
            phonenumber:phonenumber,
            password:password,
            policeid:policeid,
        });
        // here password hashed
        const storeData=await finalpolice.save()
        console.log(storeData);
        res.status(201).json({ status: 201, storeData })
    }
    } catch (error) {
        res.status(422).json(error);
        console.log("catch block error");
    }
};
const login=async (req,res,next)=>{
    const {AadharNo,password}=req.body;
    console.log(req.body);
    if (!AadharNo || !password) {
        res.status(422).json({ error: "fill all the details" })
    }
    try{
        const police=await polices.findOne({AadharNo:AadharNo})
        console.log(police);
        // const police2=await polices.findOne({policeid:policeid})
        // console.log(police2);
if(police){
    const isMatch = await bcrypt.compare(password,police.password);
    console.log(isMatch);
    if(!isMatch){
        res.status(422).json({ error: "invalid details"}) 
    }else{

        const tokenp=sendCookiepolice(police,res,"success",201);
       
        console.log(tokenp);
    }
}


     }
catch (error) {
    res.status(401).json(error);
    console.log("catch block");
}
};









 const unique=async(req,res)=>{
    res.status(200).json({
        success: true,
        user:req.mainpolice,
      });
    };
 const deleteid =async(req,res)=>{
    const {id}=req.params;
    try {
        const deletepolice=await polices.findByIdAndDelete({id:id});
        res.status(200).json(deletepolice);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:error.message});
    }
};
 const updateid=async(req,res)=>{
    const{id}=req.params;
    const{name,AadharNo,country,Address,city,pincode,phonenumber,password,policeid}=req.body;
    try {
        const updatepolice=await polices.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json(updatepolice);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:error.message});
    }
};
module.exports={getall,registerpolice,login,unique,deleteid,updateid}