const express=require("express");
const admincontroller =require("../controllers/adminc");
const {isAuthadmin}=require("../middlewares/auth.middleware")

const router=express.Router();






// show all data
router.get('/all',admincontroller.getall)

// add data to database
router.post("/register",admincontroller.registeradmin)
router.post("/login",admincontroller.login)
router.post("/issuewarrent",admincontroller.issuewarrent)
// router.post("/issuebail",admincontroller.issuebail)
router.get("/getpendingbailinfo",admincontroller.getpendingbailinfo)
router.post("/pendingbailinfo",isAuthadmin,admincontroller.pendingbailinfo)

// get data by some unique id
router.get("/unique",isAuthadmin,admincontroller.unique)

// delete the data
router.delete("/delete/:id",admincontroller.deleteid)

//update the data 
router.patch("/update/:id",admincontroller.updateid)
module.exports=router
