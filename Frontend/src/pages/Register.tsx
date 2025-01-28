import React, { useState } from "react";
import { OnRegister } from "../api/auth";
import SideImage from "../assets/wallpaper.jpg"

export interface RegisterationData {
  username?: string;
  email: string;
  password: string;
}
export const Register = () => {
  const [values, setValues] = useState<RegisterationData>({
    username: "",
    email: "",
    password: "",
  });
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }
  async function onSubmit(e: any) {
    e.preventDefault();
    console.log(values);
    await OnRegister(values);
  }
  return (
<div className="flex h-screen">
  {/* Image Section */}
  <div className="w-1/2 h-full">
    <img className="h-full w-full object-cover" src={SideImage} alt="Side" />
  </div>

  {/* Form Section */}
  <div className="w-1/2 flex flex-col justify-center items-center p-6 shadow-md">
    <h1 className="text-[#1F41BB] text-2xl font-bold">Create Account</h1>
    <p className="pt-2 text-center font-semibold">
      Create an account to explore all the existing jobs
    </p>
    <div className="w-3/4 mt-6 flex flex-col gap-4">
      <input
        className="border-2 border-[#1F41BB] rounded-md w-full p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F41BB]"
        type="email"
        name="email"
        placeholder="Email"
        value={values.email}
        onChange={handleChange}
      />
      <input
        className="border border-gray-300 rounded-md w-full p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F41BB]"
        type="text"
        name="username"
        placeholder="Username"
        value={values.username}
        onChange={handleChange}
      />
      <input
        className="border border-gray-300 rounded-md w-full p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F41BB]"
        type="password"
        name="password"
        placeholder="Password"
        value={values.password}
        onChange={handleChange}
      />
      <button
        className="mt-4 w-full bg-[#1F41BB] text-white py-3 rounded-md font-semibold hover:bg-[#163594] transition"
        onClick={onSubmit}
      >
        Register
      </button>
    </div>
  </div>
</div>

  );
};
