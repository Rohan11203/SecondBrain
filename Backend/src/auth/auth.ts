import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

interface JwtPayloadWithUserId extends JwtPayload {
  userId : string;
}

export function UserAuth(req:Request & { userId?: string },res:any,next:NextFunction){
  const authHeader = req.headers['authorization'];
  if(!authHeader){
    return res.status(401).json({ message: 'No token provided.' });
  }
  const token = authHeader;
  if (!token) {
    return res.status(401).json({ message: 'Malformed token.' });
  }

  try{
  const jwtSecret = process.env.JWT_SECRET;
  if(!jwtSecret){
    throw new Error("JwtSecret not provided")   
  };

    const decoded = jwt.verify(token,jwtSecret) as JwtPayloadWithUserId;    
    if(decoded){
      req.userId = decoded.userId;
      next();
    }
  }
  catch(error){
    console.error('JWT Verification Error:', error);
    res.status(401).json({ message: 'Unauthorized access.' });
  }
  
}