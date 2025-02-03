import axios, { AxiosHeaders } from 'axios';
import { RegisterationData } from '../pages/Register';

export async function OnRegister(data: RegisterationData){
  return await axios.post('http://localhost:3000/api/v1/signin',data)
}

export async function OnLogin(data: RegisterationData){
  return await axios.post('http://localhost:3000/api/v1/signup',data)
}

export async function AddContent(data:any){
  const headers = {
    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzkyMjFiNzc4M2NkOTEzOGI2ZGQ0NWEiLCJpYXQiOjE3Mzg1OTgxMDd9.LHpDrfjfBE4v1FM6Azw3nVeRg3ilyb4OFHhVnL1TEcc'
  };
  return await axios.post('http://localhost:3000/api/v1/content',data,{headers})
}

export async function GetContent(){
  const headers = {
    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzkyMjFiNzc4M2NkOTEzOGI2ZGQ0NWEiLCJpYXQiOjE3Mzg1OTgxMDd9.LHpDrfjfBE4v1FM6Azw3nVeRg3ilyb4OFHhVnL1TEcc'
  };
  return await axios.get('http://localhost:3000/api/v1/content',{headers})
}
