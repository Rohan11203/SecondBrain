import axios, { AxiosHeaders } from 'axios';
import { RegisterationData } from '../pages/Register';
import { data } from 'react-router-dom';

export async function OnRegister(data: RegisterationData){
  return await axios.post('http://localhost:3000/api/v1/signin',data)
}

export async function OnLogin(data: RegisterationData){
  return await axios.post('http://localhost:3000/api/v1/signup',data)
}


export async function AddContent(data:any){
  const headers = {
    "Authorization": localStorage.getItem("token")
  };
  return await axios.post('http://localhost:3000/api/v1/content',data,{headers})
}


export async function GetContent(){
  const headers = {
    "Authorization": localStorage.getItem("token")
  };
  return await axios.get('http://localhost:3000/api/v1/content',{headers})
}


export async function DeleteContent(contentId:string){
  const headers = {
    "Authorization": localStorage.getItem("token")
  };
  return await axios.delete('http://localhost:3000/api/v1/content',{
    headers,
    data : {contentId},
  })
}

