import  { useRef } from "react";
import { OnRegister } from "../api/auth";
import SideImage from "../assets/wallpaper.jpg";
import { EmailIcon } from "../icons/EmailIcon";
import { PasswordIcon } from "../icons/PasswordIcon";
import { UserIcon } from "../icons/UserIcon";

export interface RegisterationData {
  username?:   string;
  email:   string; 
  password:  string;
}
export const Register = () => {
  const username = useRef<any>();
  const password = useRef<any>();
  const email = useRef<any>();

  async function onSubmit(e: any) {
    e.preventDefault();
    const values: RegisterationData = {
      email: email.current?.value,
      password: password.current?.value,
      username: username.current?.value,
    };
    console.log(values);
    await OnRegister(values);
  }
  return (
    <div className="flex h-screen w-full justify-center">
      {/* Image Section */}
     

      {/* Form Section */}
      <div className="w-1/3 m-28 flex flex-col justify-center items-center bg-gray-100  shadow-md">
        <h1 className="text-[#1F41BB] text-2xl font-bold">Create Account</h1>
        <p className="pt-2 text-center font-semibold">
          Create an account to explore all the existing jobs
        </p>
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
            <UserIcon />
          <input
            className="border border-gray-300 rounded-md w-full p-3 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F41BB]"
            type="text"
            name="username"
            placeholder="Username"
            ref={username}
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
          <div className="flex items-center justify-center">
            <a href="/login" className="underline cursor-pointer">Already have an account</a>
          </div>
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
