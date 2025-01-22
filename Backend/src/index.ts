import express from 'express';
import { UserModel } from './db';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { UserAuth } from './auth';


dotenv.config();




const app = express();
app.use(express.json())

app.post("/api/v1/signin", async (req,res) => {
  console.log(req.body)
  const { username,email,password } = req.body;
  
  try {
    await UserModel.create({
      username,
      email,
      password,
    })
    res.json({
      message: "Signin Succesfull",
    })
  } catch (error) {
    console.log("Error" ,error);
    
  res.json({
    message:error
  })
  }
 
})

app.post("/api/v1/signup", async (req:any,res:any) =>{
  const { email, password } = req.body;
  
  try {
    const jwtSecret = process.env.JWT_SECRET
  if(!jwtSecret) {
    throw new Error("JWT secret is not defined in environment variables")
  }
    const response = await UserModel.findOne({email})
    const token = jwt.sign({
      userId: response?._id
    }, jwtSecret);
    res.json({
      success: true,
      token:token,
      message: "Signup succesfull"
    })
  } catch (error) {
    console.log("Error" ,error);
    return res.json({
      message: "Invalid email or password",
    })
  }
  
})

app.get("/api/v1/content",UserAuth, (req,res) => {
  res.json({
    message: "All content"
  })
})

app.post("/api/v1/add-content" , (req,res) => {
  res.json({
    message: "Content added"
  })
})

app.delete("/api/v1/delete" , (req,res) => {
  res.json({
    message : "Content deleted succesfully"
  })
})

app.post("/api/v1/share" , (req,res) => {
  res.json({
    message: "sharable Link"
  })
})

app.get("/api/v1/:id" , (req,res) => {
  res.json({
    message: "Content of another user"
  })
})

async function main() {
  try{
    const MONGO_URL = process.env.MONGO_URL;
    if(!MONGO_URL) {
      throw new Error("MONGO_URL is not defined in environment variables")
    }
    await mongoose.connect(MONGO_URL)
    console.log("Database Connected");

    const PORT = 3000
    app.listen(PORT, () => {
      console.log(`Server is Listining on Port ${PORT}`)
    });
  }
  catch(e){
    console.log("Error WHile running Server",e)
  }
}
main();