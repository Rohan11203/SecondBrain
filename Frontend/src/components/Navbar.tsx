import { Brain } from "lucide-react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 20 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="flex  rounded-xl p-2 mx-4 mb-4 justify-between bg-[#5e5e5e] bg-gradient-to-t from-[#2d2d2d] to-[#3c3c3c]"
      >
        <div className="flex gap-4">
          <NavLink to={"/"} className="p-2 text-white cursor-pointer hover:text-black hover:bg-white  hover:rounded-2xl transition-all duration-300">Home</NavLink>
          <div className="p-2 text-white cursor-pointer hover:text-black hover:bg-white  hover:rounded-2xl transition-all duration-300">About</div>
          <div className="p-2 text-white cursor-pointer hover:text-black hover:bg-white  hover:rounded-2xl transition-all duration-300">Blogs</div>
        </div>
        <div className="flex gap-2 font-bold text-white p-2 pr-24">
          <Brain /> BrainBox
        </div>
        <NavLink to={"/dashboard"} className=" bg-green-400 p-2 rounded-xl font-semibold cursor-pointer">
          Join now
        </NavLink>
      </motion.div>
    </div>
  );
};
