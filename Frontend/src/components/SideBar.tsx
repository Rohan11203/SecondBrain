import { Brain, DockIcon, FolderIcon } from "lucide-react"
import { SideBarItem } from "./SideBarItem"
import { useNavigate } from "react-router-dom"

export const SideBar = () => {
  const navigate = useNavigate();
  function handleClick (){
    navigate("/")
  }
  return (
   <div>
     {
      (
        <div className="w-72  p-4 h-screen border-r-1 border-gray-300 rounded-md ">
      <div className="flex gap-2 items-center p-2 border border-gray-300 rounded-md ">
        <Brain height={25} width={25}/>
      <h1 onClick={handleClick} className="cursor-pointer text-2xl font-semibold">BrainBox  </h1>
      
      </div>
      <SideBarItem  startIcon={<FolderIcon />} title="YouTube"/>
      <SideBarItem startIcon={<DockIcon />} title="Twitter"/>
    </div>
      )
     }
   </div>
  )
}