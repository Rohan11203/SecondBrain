import { useEffect, useRef, useState } from "react";
import { AddContent, ShareContent } from "../api/auth";
import { Card } from "../components/Card";
import { Button } from "../components/ui/Button";
import { PlusIcon, ShareIcon, X } from "lucide-react";
import { SideBar } from "../components/SideBar";
import { useContent } from "../hooks/useContent";

enum ContentType {
  YOUTUBE = "youtube",
  TWITTER = "twitter",
}
export const Dashboard = () => {
  const title = useRef<any>();
  const link = useRef<any>();
  const [type , setType] = useState<ContentType>(ContentType.YOUTUBE);
  const [isFormVisible, setIsFormVisible] = useState(false);

  function openForm() {
    setIsFormVisible((isFormVisible) => !isFormVisible);
  }
  async function handleClick() {
    const data = {
      title: title.current?.value,
      type: type,
      link: link.current?.value,
    };
    await AddContent(data);
    setIsFormVisible(false);
     title.current.value = "";
    link.current.value = "";
  }
  const {content, fetchContent} = useContent();

  useEffect(() => {
    fetchContent();    
  },[isFormVisible]);
  

  return (
    <div className="flex ">
      <div className="fixed">
      <SideBar />
    </div>
      <div className="ml-72  w-screen p-6 relative bg-gray-100 ">
      <div className="flex gap-2 p-2">
      <Button
        variant="secondary"
        text="ShareBrain"
        size="md"
        startIcon={<ShareIcon height={16} />}
        onClick={async () => {
          const response = await ShareContent(true);
          const shareUrl = `http://localhost:5173/brain/${response.data.hash}`;
          window.open(shareUrl, "_blank");

        }}
      ></Button>

      <Button
        variant="primary"
        size="md"
        text="Add content"
        startIcon={<PlusIcon height={16} />}
        onClick={openForm}
      />
      </div>
      {isFormVisible && (
        <div className="fixed inset-0  bg-black/50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8 relative">
            <button
              className="absolute top-0 right-0 p-2 text-gray-500 hover:text-red-500 transition-colors"
              onClick={openForm}
            >
              <X size={22} />
            </button>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Title"
                ref={title}                
                name="title"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />

              <div className="flex gap-2 py-2">
                <Button className="py-2" size="sm" text="Youtube" variant={type === ContentType.YOUTUBE ? "primary" : "secondary"} onClick={() => setType(ContentType.YOUTUBE)} />
                <Button size="sm" text="Twitter" variant={type === ContentType.TWITTER? "primary" : "secondary"} onClick={() => {
                  setType(ContentType.TWITTER);
                }} />
              </div>

              <input
                type="text"
                placeholder="Link"
                name="link"
                ref={link}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />

              <button
                onClick={handleClick}
                className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer"
              >
                Add Content
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex gap-10 flex-wrap">
        
          {
              content.map((item:any, index) => (
                <Card
                  key={index}
                  contentId={item._id}
                  type={item.type}
                  title={item.title}
                  link={item.link}
                />
              ))
          }
      </div>
      </div>
    </div>
  );
};
