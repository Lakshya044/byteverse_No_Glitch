const appError = require("../utils/apperror");
const users = require("../model/asuser");
const warrentbypolice = require("../model/warrentbypolice");
const bailrequest=require("../model/bailrequest")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const keysecret = process.env.JWT_SECRET;
const { sendCookieuser } = require("../utils/feature");
//  const sendCookie=require("../utils/feature");
const getall = async (req, res) => {
  try {
    const showall = await users.find({ _id: req.userId });
    res.status(200).json(showall);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
};
const registeruser = async (req, res) => {
  const {
    name,
    AadharNo,
    country,
    address,
    cityname,
    pincode,
    phonenumber,
    password,
  } = req.body;

  try {
    const user = await users.findOne({ AadharNo: AadharNo });
    if (user) {
      res.status(422).json({ error: "This aadhar is Already Exist" });
    } else {
      const finaluser = await users({
        name: name,
        AadharNo: AadharNo,
        country: country,
        Address: address,
        city: cityname,
        pincode: pincode,
        phonenumber: phonenumber,
        password: password,
      });
      //here password hashed
      const storeData = await finaluser.save();
      console.log(storeData);
      res.status(201).json({ status: 201, storeData });
    }
  } catch (error) {
    res.status(422).json(error);
    console.log("catch block error");
  }
};

const login = async (req, res, next) => {
  const { AadharNo, password } = req.body;
  console.log(req.body);
  if (!AadharNo || !password) {
    res.status(422).json({ error: "fill all the details" });
  }
  try {
    const user = await users.findOne({ AadharNo: AadharNo });
    console.log(user);
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      console.log(isMatch);
      if (!isMatch) {
        res.status(422).json({ error: "invalid details" });
      } else {
        const token = sendCookieuser(user, res, "success", 201);

        console.log(token);
      }
    }
  } catch (error) {
    res.status(401).json(error);
    console.log("catch block");
  }
};

const viewwarrent= async (req, res) =>{
  const { AadharNo } = req.body;
  try {
    const user = await warrentbypolice.findOne({ AadharNo: AadharNo });
    console.log(user);
    res.status(422).json({ status: 201, user});
  } catch (error) {
    res.status(401).json(error);
    console.log("catch block");
  }
}


const unique = async (req, res) => {
  res.status(200).json({
    success: true,
    user: req.mainuser,
  });
};

const deleteid = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteuser = await users.findByIdAndDelete({ id: id });
    res.status(200).json(deletepolice);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const updateid = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    AadharNo,
    country,
    Address,
    city,
    pincode,
    phonenumber,
    password,
  } = req.body;
  try {
    const updateuser = await users.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updateuser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
const requestbail=async(req,res)=>{
  try{
const{Aadharno,status,details}=req.body;
const bailuser=await users.findOne({AadharNo:Aadharno});
console.log(bailuser)
const finalbail=await bailrequest({
  AadharNo:Aadharno,
  detail:details,
  status:status
});
const storeData=await finalbail.save()
   console.log(storeData);
res.status(201).json({ status: 201, storeData})
} catch (error) {
  console.error(error);
  res.status(500).send('Internal Server Error');
}}
// const warrentissued=async(req,res)=>{
//   try{
//   const{AadharNo}=req.body;
//   const warrentissue=await warrent.findOne({AadharNo:AadharNo});
//   console.log(warrentissue);
//   res.status(201).json({ status: 201, warrentissue})
// }catch (error) {
//   console.error(error);
//   res.status(500).send('Internal Server Error');
// }
// }

module.exports = { getall, registeruser,viewwarrent,requestbail, login, unique, deleteid, updateid };
