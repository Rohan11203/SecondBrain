import { RegisterationData } from "./Register";
import { OnLogin } from "../api/auth";
import SideImage from "../assets/wallpaper.jpg";
import { useState } from "react";

export const Login = () => {
  const [values, setValues] = useState<RegisterationData>({
    email: "",
    password: "",
  });

  function handleChange(e: any) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  async function onSubmit(e: any) {
    e.preventDefault();
    await OnLogin(values);
    console.log(values);
  }
  return (
    <div className="flex h-screen">
      {/* Image Section */}
      <div className="w-1/2 h-full">
        <img
          className="h-full w-full object-cover"
          src={SideImage}
          alt="Side"
        />
      </div>

      {/* Form Section */}
      <div className="w-1/2 flex flex-col justify-center items-center p-6 shadow-md">
        <h1 className="text-[#1F41BB] text-2xl font-bold">Login Into Your Account</h1>
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
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
