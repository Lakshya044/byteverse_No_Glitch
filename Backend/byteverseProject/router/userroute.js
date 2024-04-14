const express=require("express");
const {isAuthuser}=require("../middlewares/auth.middleware")
const usercontroller =require("../controllers/userc");
// const signup =require("../controllers/userc");

 
const router=express.Router();
// const port=process.env.URIu



// show all data
router.get('/all',usercontroller.getall)
router.post('/viewwarrent',usercontroller.viewwarrent)
// add data to database
router.post('/register',usercontroller.registeruser)
router.post('/login',usercontroller.login)
router.post('/requestbail',usercontroller.requestbail)

// get data by some unique id
router.get("/unique",isAuthuser,usercontroller.unique)

// delete the data
router.get("/deleteid/:id",usercontroller.deleteid)

//update the data 
router.patch("/updateid/:id",usercontroller.updateid)

module.exports=router
