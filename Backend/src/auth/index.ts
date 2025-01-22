import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export function UserAuth(req:Request,res:Response,next:NextFunction){
  const authHeader = req.headers['authorization'];
  if(!authHeader){
    return res.status(401).json({ message: 'No token provided.' });
  }
  const token = authHeader?.split('')[1];
  if (!token) {
    return res.status(401).json({ message: 'Malformed token.' });
  }

  try{
  const jwtSecret = process.env.JWT_SECRET;
  if(!jwtSecret){
    throw new Error("JwtSecret not provided")   
  };

    const decoded = jwt.verify(token,jwtSecret);    
  }
  catch(e){
    console.log("Error" ,e)
  }
  
}