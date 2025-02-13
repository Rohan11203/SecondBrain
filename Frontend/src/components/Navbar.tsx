import { Brain } from "lucide-react"

export const Navbar = () => {
    return (
           <div className="flex  rounded-xl p-2 m-6 justify-between bg-[#5e5e5e] bg-gradient-to-t from-[#2d2d2d] to-[#3c3c3c]">
           <div className="flex gap-4">
                <div className="bg-white rounded-xl p-2 cursor-pointer">Home</div>
                <div className="p-2 text-white">About</div>
                <div className="p-2 text-white">Blogs</div>
            </div>
            <div className="flex gap-2 font-bold text-white p-2 pr-24">
                <Brain /> BrainBox
            </div>
            <div className="bg-green-400 p-2 rounded-xl font-semibold cursor-pointer">Join now</div>
        </div>
    )
}