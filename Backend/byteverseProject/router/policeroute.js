const express=require("express");
const policecontroller = require("../controllers/policec");
const {isAuthpolice}=require("../middlewares/auth.middleware")

const router=express.Router();




// show all data
router.get('/all',policecontroller.getall)

// add data to database
router.post("/register",policecontroller.registerpolice)
router.post("/login",policecontroller.login)
router.post("/provideWarrantByPolice",policecontroller.provideWarrantByPolice)
// get data by some unique id
router.get("/unique",isAuthpolice,policecontroller.unique)
router.post("/getwarrentinfo",policecontroller.getwarrentinfo)

// delete the data
router.get("/deleteid/:id",policecontroller.deleteid)

//update the data 
router.patch("/updateid/:id",policecontroller.updateid)

module.exports=router
