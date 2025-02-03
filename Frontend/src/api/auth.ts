import axios from 'axios';
import { RegisterationData } from '../pages/Register';

export async function OnRegister(data: RegisterationData){
  return await axios.post('http://localhost:3000/api/v1/signin',data)
}

export async function OnLogin(data: RegisterationData){
  return await axios.post('http://localhost:3000/api/v1/signup',data)
}

export async function AddContent(data:any){
  return await axios.post('http://localhost:3000/api/v1/content',data)
}