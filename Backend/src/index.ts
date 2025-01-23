import express from 'express';
import { ContentModel, UserModel } from './db';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { UserAuth } from './auth/auth';
import bcrypt from 'bcrypt'
import { validateUserData } from './validators/validate';
import { any } from 'zod';

dotenv.config();
const app = express();
app.use(express.json())


app.post("/api/v1/signin", async (req:any,res:any) => {
  const { username,email,password } = req.body;
  const parsedData = validateUserData.safeParse(req.body)

  if(!parsedData.success){
    console.log("Validation Failed", parsedData)
    return res.status(400).json({
      message: "Validation Failed",
    })
  }
  
  const hashedPassword = await bcrypt.hash(password,5)
  try {
    await UserModel.create({
      username,
      email,
      password : hashedPassword,
    })
    res.status(201).json({
      success: true,
      message: "Signin Succesfull",
    })
  } catch (error) {
    console.log("Error" ,error);
    res.status(500).json({
      message: "Email Already exists",
    })
  }
});

app.post("/api/v1/signup", async (req:any,res:any) =>{
  const { email, password } = req.body;
  
  try {
    const jwtSecret = process.env.JWT_SECRET
  if(!jwtSecret) {
    throw new Error("JWT secret is not defined in environment variables")
  }    
  const response = await UserModel.findOne({email})

  if(!response){
    return res.status(403).json({
      message: "Email does not exists"
    })
  }

  const passwordMatch  = bcrypt.compareSync(password,response.password) 
    
    if(!passwordMatch){
      return res.status(403).json({
        message: "Incorrect Password"
      })
    }

    const token = jwt.sign({
      userId: response?._id
    }, jwtSecret);

    // Store it in cookie

    // return res.status(200).cookie("token", token, { httpOnly: true }).json({
    //   success: true,
    //   token:token,
    //   message: "Signup succesfull"
    // })

    return res.status(200).json({
      success: true,
      token:token,
      message: "Signup succesfull"
    })
    
  } catch (error) {
    console.log("Error" ,error);
    return res.status(401).json({
      message: "Invalid email or password",
    })
  }
  
})

app.post("/api/v1/content" , UserAuth, async (req:any,res:any) => {
  const { title, type, link,tags } = req.body;

  try {
    const response = await ContentModel.create({
      title,
      type,
      link,
      tags,
      userId: req.userId,
    })
    if(!response){
      return res.status(401).json({
        message: "Failed to add content"
      })
    } 
    res.json({
      message: "Content added Succesfully"
    })
  } catch (error) {
    return res.status(403).json({
      Error: "Error While adding content", error
    })
  }
})

app.get("/api/v1/content", UserAuth, async (req:any,res:any) => {

  try {
    const contentData = await ContentModel.find({userId: req.userId})

    res.status(201).json({
    message: "All content",
    contentData,
  })
  } catch (error) {
    return res.status(401).json({
      Error: "Error while getting content" ,error
    })
  }
})

app.delete("/api/v1/content" , UserAuth, async (req:any,res:any) => {
  const { contentId } = req.body;
  try {
    const response = await ContentModel.findByIdAndDelete(contentId);

    if(!response){
      return res.status(401).json({
        message: "Invalid content Id"
      })
    }
    res.json({
      message: "Content deleted succesfully"
    })
  } catch (error) {
    return res.status(401).json({
      Error: "Error while Deleting" , error
    })
  }
})

app.post("/api/v1/brain/share" , (req,res) => {
  res.json({
    message: "sharable Link"
  })
})

app.get("/api/v1//brain/:shareLink" , (req,res) => {
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