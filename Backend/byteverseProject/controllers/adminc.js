const admins =require('../model/asAdmin');
const warrent =require('../model/warrentbyadmin');
const users=require("../model/asuser")
const bailrequest=require("../model/bailrequest")
const bail=require("../model/bailresponse")
const appError=require("../utils/apperror")
const bcrypt =require('bcrypt')
const jwt =require("jsonwebtoken");
const keysecret=process.env.JWT_SECRET;
const {sendCookieadmin} = require("../utils/feature");
const { registeruser } = require('./userc');

 const getall=async(req,res)=>{
    try {
        const showall=await admins.find();
        res.status(200).json(showall);
    } catch (error) {
       console.log(error);
       res.status(400).json({error:error.message}); 
    }
};
 const registeradmin=async(req,res)=>{
    const{name,AadharNo,country,address,cityname,pincode,phonenumber,password,judgeid}=req.body;
    // const admin=require("./model/asAdmin");
    try {
        const admin=await admins.findOne({AadharNo:AadharNo});
        if(admin){
            res.status(422).json({ error: "This aadhar is Already,judgeid Exist" })
        }else{
      const finaladmin=await admins({
            name:name,
            AadharNo:AadharNo,
            country:country,
            Address:address,
            city:cityname,
            pincode:pincode,
            phonenumber:phonenumber,
            password:password,
            judgeid:judgeid,
        });
        // here password hashed
        const storeData=await finaladmin.save()
        console.log(storeData);
        res.status(201).json({ status: 201, storeData })
    }
    } catch (error) {
        res.status(400).json({error:error.message})
    }
};

const login=async (req,res,next)=>{
    const {AadharNo,password}=req.body;
    console.log(req.body);
    if (!AadharNo || !password) {
        res.status(422).json({ error: "fill all the details" })
    }
    try{
        const admin=await admins.findOne({AadharNo:AadharNo})
        console.log(admin);
        // const police2=await polices.findOne({policeid:policeid})
        // console.log(police2);
if(admin){
    const isMatch = await bcrypt.compare(password,admin.password);
    console.log(isMatch);
    if(!isMatch){
        res.status(422).json({ error: "invalid details"}) 
    }else{

        const tokena=sendCookieadmin(admin,res,"success",201);
       
        console.log(tokena);
    }
}


     }
catch (error) {
    res.status(401).json(error);
    console.log("catch block");
}
};
const issuewarrent=async(req,res)=>{
    try{
const{warrantNo, warranttype,Accusedname,AadharNo,details,pincode,policestationid,status,address}=req.body;
const adminwarrent=await users.findOne({AadharNo:AadharNo});
console.log(adminwarrent)
const finalwarrent=await warrent({
    warrantNo:warrantNo,
    warranttype:warranttype,
    AadharNo:AadharNo,
    details:details,
    Accusedname:Accusedname,
    pincode:pincode,
    policestationid:policestationid,
    status:status,
    address:address,
});console.log(finalwarrent)
const storeData=await finalwarrent.save()
     console.log(storeData);
res.status(201).json({ status: 201, storeData})


  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }

}
let data=5;
const getpendingbailinfo=async(req,res)=>{
    try{
const pendingbail=await bailrequest.findOne({status:'pending'});
data=pendingbail.AadharNo;
console.log(data);
res.status(201).json({ status: 201, data})
} catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
}
// let useses=data;
// console.log(useses)
const pendingbailinfo=async(req,res)=>{
    try{
const{AadharNo,status}=req.body;


// console.log(AadharNo);
const userinfo=await bailrequest.findOne({AadharNo:AadharNo});
// if(userinfo.status=="pending"){

//     userinfo.status="approved";
// }
console.log(userinfo)
const adminrespond=await bail({
    AadharNo:AadharNo,
    status: status,
});console.log(adminrespond)
const bailData=await adminrespond.save()
     console.log( bailData);
res.status(201).json({ status: 201,  bailData})


  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }

}


// const issuebail=async(req,res)=>{
//     try{
// const{AadharNo,status}=req.body;
// const userinfo=await users.findOne({AadharNo:AadharNo});
// console.log(userinfo)
// const adminrespond=await bail({
//     AadharNo:AadharNo,
//     status: status,
// });console.log(adminrespond)
// const bailData=await adminrespond.save()
//      console.log( bailData);
// res.status(201).json({ status: 201,  bailData})


//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Internal Server Error');
//   }

// } ,issuebail






const unique=async(req,res)=>{
    res.status(200).json({
        success: true,
        user:req.mainadmin,
      });
    };
 const deleteid=async(req,res)=>{
    const {id}=req.params;
    try {
        const deleteadmin=await admins.findByIdAndDelete({id:id});
        res.status(200).json(deleteadmin);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:error.message});
    }
};
 const updateid=async(req,res)=>{
    const{id}=req.params;
    const{name,AadharNo,country,Address,city,pincode,phonenumber,password,judgeid}=req.body;
    try {
        const updateadmin=await admins.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json(updateadmin);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:error.message});
    }
};
module.exports={getall,login,registeradmin,issuewarrent,getpendingbailinfo,pendingbailinfo,unique,deleteid,updateid}