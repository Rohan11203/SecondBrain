import axios from 'axios';
interface RegisterationData {
  username: string;
  email: string;
  password: string;
}
export async function OnRegister(data: RegisterationData){
  return await axios.post('http://localhost:3000/api/v1/signin',data)
}