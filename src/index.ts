import { Request, Response } from "express";

const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("mongodb db connected")
})
.catch(()=>{
    console.log("db connection failed");
    process.exit(1);
})



app.get("/",(req:Request,res:Response)=>{
  res.send("hello there!!");
});



app.listen(3000,()=>{
    console.log("server is listening on port 3000")
})



