const express=require("express");
const cookieParser=require("cookie-parser");
const userroute=require('./router/userroute');
const adminroute=require('./router/adminroute')
const policeroute=require('./router/policeroute')
const cors=require("cors");
const bodyParser=require("body-parser")
const mongoose=require("mongoose")
const dotenv=require("dotenv")
dotenv.config();



const { GoogleGenerativeAI } = require("@google/generative-ai");
// const cors = require("cors");

// const port = 5000;
const API_KEY = "AIzaSyAblz8dbtAwu1U39bhDmaYYW8jVxwlhRvE";
const genAI = new GoogleGenerativeAI(API_KEY);

// For text-only input, use the gemini-pro model
const model = genAI.getGenerativeModel({ model: "gemini-pro" });
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.post("/generate", async (req, res) => {
  try {
    const input = req.body["message"];

    // Ensure that the input object is iterable
    const formattedInput = input; // Wrap input in an array to make it iterable
    console.log(formattedInput);
    const result = await model.generateContent(formattedInput);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    // console.log(response);
    //    res.send(text);
    res.json({ reply: text });
  } catch (error) {
    console.error("Error generating content:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});








////////////////////////////////////////////////////////////////////////
// const app=express();
app.use(express.json());
// app.use(cors());
// app.use(cookieParser());

// app.use(bodyParser.json());
app.use('/police',policeroute)
app.use('/admin',adminroute);
app.use('/user',userroute);
// 
app.get("/", (req, res) => {
    res.send("Nice working");
  });
  module.exports=app;