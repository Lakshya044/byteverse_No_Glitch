
const  jwt =require("jsonwebtoken");
const appError=require("../utils/apperror")
const  users=require("../model/asuser");
const  polices=require("../model/aspolice");
const  admins=require("../model/asAdmin");
const keysecret = process.env.JWT_SECRET

const isAuthuser = async (req, res, next) => {
  try{
  const token = req.cookies.token;
  console.log(token);
  if(!token)return next(new appError(401,"unauthorized please login to continue"));
 const verifytoken = jwt.verify(token, process.env.JWT_SECRET);
  console.log(verifytoken);
  if(!verifytoken ){
    return next(new appError(401,"unauthorized please login to continue"))
  }
  const mainuser=await users.findOne({_id:verifytoken._id});
  
  if(!mainuser){
    return next(new appError(401,"no user found"))
  }
  req.token=token
  req.mainuser=mainuser
  req.aadhar=mainuser.AadharNo
  req.UserId=mainuser._id
  
  next();
}catch (error) {
  res.status(401).json({status:401,message:"Unauthorized no token provide"})
}
}


const isAuthpolice = async (req, res, next) => {
  try{
  const tokenp = req.cookies.tokenpolice;
  console.log(tokenp);
  if(!tokenp)return next(new appError(401,"unauthorized please login to continue"));
 const verifytoken = jwt.verify(tokenp, process.env.JWT_SECRET);
  console.log(verifytoken);
  if(!verifytoken ){
    return next(new appError(401,"unauthorized please login to continue"))
  }
  const mainpolice= await polices.findOne({_id:verifytoken._id});
  console.log(mainpolice);
  if(!mainpolice){
    return next(new appError(401,"no user found"))
  }
  req.token=tokenp
  req.mainpolice=mainpolice
  req.UserId=mainpolice._id
  
  next();
}catch (error) {
  res.status(401).json({status:401,message:"Unauthorized no token provide"})
}
}

const isAuthadmin = async (req, res, next) => {
  try{
  const tokena = req.cookies.tokenadmin;
  console.log(tokena);
  if(!tokena)return next(new appError(401,"unauthorized please login to continue"));
 const verifytoken = jwt.verify(tokena, process.env.JWT_SECRET);
  console.log(verifytoken);
  if(!verifytoken ){
    return next(new appError(401,"unauthorized please login to continue"))
  }
  const mainadmin= await admins.findOne({_id:verifytoken._id});
  console.log(mainadmin);
  if(!mainadmin){
    return next(new appError(401,"no user found"))
  }
  req.token=tokena
  req.mainadmin=mainadmin
  req.UserId=mainadmin._id
  
  next();
}catch (error) {
  res.status(401).json({status:401,message:"Unauthorized no token provide"})
}
}

  
 module.exports={isAuthuser,isAuthpolice,isAuthadmin};