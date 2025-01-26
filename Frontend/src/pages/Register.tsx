import React, { useState } from "react"
import { OnRegister } from "../api/auth";

export interface RegisterationData {
  username?: string;
  email: string;
  password: string;
}
export const Register = () => {
  const [values,setValues] = useState<RegisterationData>({
    username: "",
    email: "",
    password: "",
  })
  function handleChange(e:React.ChangeEvent<HTMLInputElement>){
    setValues({...values, [e.target.name]: e.target.value})
  }
  async function onSubmit(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    console.log(values)
    await OnRegister(values)
  }
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={onSubmit}>
        <input type="username" name="username" placeholder="Username"  value={values.username} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={values.email} onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" value={values.password} onChange={handleChange}/>
        <button type="submit">Register</button>
      </form>      
    </div>
  )
} 