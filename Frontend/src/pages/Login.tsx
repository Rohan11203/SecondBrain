import { RegisterationData } from "./Register";
import { OnLogin } from "../api/auth";
import SideImage from "../assets/wallpaper.jpg";
import { useRef } from "react";
import { EmailIcon } from "../icons/EmailIcon";
import { PasswordIcon } from "../icons/PasswordIcon";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  
  const email = useRef<any>();
  const password = useRef<any>();
  const navigate = useNavigate();
 

  async function onSubmit(e: any) {
    e.preventDefault();
    const values: RegisterationData = {
      email: email.current?.value,
      password: password.current.value,
    };
    const response = await OnLogin(values);
    const jwt = response.data.token;
    localStorage.setItem("token", jwt);
    navigate("/dashboard");
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
      <div className="w-1/3 flex flex-col justify-center items-center m-28 shadow-md">
        <h1 className="text-[#1F41BB] text-2xl font-bold">Login Into Your Account</h1>
        <div className="w-3/4 mt-6 flex flex-col gap-4">
          <div className="relative w-full">
            <EmailIcon />
          <input
            className="border-2 border-[#1F41BB] rounded-md w-full p-3 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F41BB]"
            type="email"
            name="email"
            placeholder="Email"
            ref={email}
          />
          </div>
         <div className="relative w-full">
          <PasswordIcon />
         <input
            className="border border-gray-300 rounded-md w-full p-3 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F41BB]"
            type="password"
            name="password"
            placeholder="Password"
            ref={password}
          />
         </div>
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
