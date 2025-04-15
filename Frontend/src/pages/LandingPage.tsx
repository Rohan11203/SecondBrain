import { Button } from "../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Avatar, AvatarGroup } from "@mui/material";
import ScreenShot1 from "../assets/screenShot1.png";
import ScreenShot2 from "../assets/screenShot2.png";
import ScreenShot3 from "../assets/screenShot3.png";
import ScreenShot4 from "../assets/screenShot4.png";
import { motion } from "framer-motion";

export const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-full bg-white justify-center pr-4">
          <Navbar />
        <div className="absolute opacity-50 top-0 left-4 translate-y-2 rotate-[-8deg]  p-2">
          <div className="relative relative h-70 w-40">
            <img
              src={ScreenShot1}
              className="object-cover h-full w-full rounded-xl"
            />
          </div>
        </div>

        <div className="absolute opacity-50 top-0 right-8 translate-y-2 rotate-[14deg]">
          <div className="relative relative h-70 w-40">
            <img
              src={ScreenShot3}
              className="object-cover h-full w-full rounded-xl"
            />
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto pl-4">
          {" "}
          {/* <-- Important */}
          <div className="mt-20">
            <h1 
            className="text-5xl font-semibold">
              Your personal digital vault for all important things.
            </h1>
            <h1 className="text-5xl font-semibold">BrainBox</h1>
          </div>
          <div className="flex justify-center mt-4 bg-white">
            <div className=" w-96 bg-white border rounded-2xl p-1">
              <div className="bg-gray-100 flex  justify-between items-center rounded-xl w-full p-1">
                <AvatarGroup spacing="small">
                  <Avatar alt="Remy Sharp" src={ScreenShot3} />
                  <Avatar alt="Travis Howard" src={ScreenShot1} />
                  <Avatar alt="Cindy Baker" src={ScreenShot2} />
                </AvatarGroup>
                <div>Join 3k + Members</div>
                <div className="bg-green-400 p-2 rounded-xl font-semibold cursor-pointer">
                  Join Waitlist
                </div>
              </div>
            </div>
          </div>
          <p className="text-xl text-black mt-4 text-gray-600">
            Effortlessly store and organize your notes, videos, posts, and more
            with BrainBox – your all-in-one digital vault.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <Button
              text="Go To Dashboard"
              size="md"
              variant="primary"
              onClick={() => {
                navigate("/dashboard");
              }}
            />

            <Button size="md" text="Watch Now" variant="secondary" />
          </div>
          <div className="font-medium mt-10">Our Top Notch Fetures</div>
          <div className="border bg-gradient-to-r from-gray-100 to-gray-000 p-2  flex rounded-2xl mt-2 justify-between">
            <div className="bg-white rounded-xl px-8 py-1">Task Manager</div>
            <div className="bg-white rounded-xl px-8 py-1">Task Manager</div>
            <div className="bg-white rounded-xl px-8 py-1">Task Manager</div>
          </div>
        </div>

        <div 
        
        className="absolute opacity-50 top-[68%] left-0 translate-x-4  translate-y-2 rotate-[8deg]  p-2">
          <div className="relative  h-[160px] w-[250px]">
            <img
              src={ScreenShot4}
              className="object-cover h-full w-full rounded-xl"
            />
          </div>
        </div>
      </div>
    </>
  );
};
