import { ReactElement } from "react";

export const SideBarItem = ({ title, startIcon }: {
  title: string;
  startIcon: ReactElement;
}) => {
  return (
    <div className={` flex items-center px-4 m-2 py-2 bg-gray-100 rounded-md hover:bg-gray-200 text-gray-500`}>
        {startIcon}
        <span className="ml-2 text-md font-medium text-gray-600">{title}</span>
      </div>
  )
}
 {/* <FolderIcon className="h-6 w-6 text-gray-400" /> */}