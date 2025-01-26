import React, { useState } from "react"
import { RegisterationData } from "./Register"
import { OnLogin } from "../api/auth"


export const Login = () => {
  const [values,setValues] = useState<RegisterationData>({
    email: "",
    password: "",
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement>){
    setValues({...values, [e.target.name]: e.target.value})
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    await OnLogin(values);
    console.log(values)
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <input type="email" placeholder="example@gmail.com" name="email" onChange={handleChange} />
        <input type="text"  name="password" onChange={handleChange} />
        <button type="submit">Login</button>
      </form>
    </div>
  )
} 