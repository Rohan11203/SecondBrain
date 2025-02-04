import { BrainCircuitIcon, DockIcon, FolderIcon } from "lucide-react"
import { SideBarItem } from "./SideBarItem"

export const SideBar = () => {
  return (
    <div className=" h-screen w-72 p-4 border border-gray-300 rounded-md ">
      <div className="flex gap-2 items-center p-2 border border-gray-300 rounded-md ">
        <BrainCircuitIcon />
      <h1 className="text-2xl font-semibold">BrainlY</h1>
      </div>
      <SideBarItem  startIcon={<FolderIcon />} title="YouTube"/>
      <SideBarItem startIcon={<DockIcon />} title="Twitter"/>
    </div>
  )
}