import { useEffect, useState } from "react";
import { AddContent, GetContent } from "../api/auth";
import { Card } from "../components/Card";
import { Button } from "../components/ui/Button";
import { PlusIcon, ShareIcon, X } from "lucide-react";

export const Dashboard = () => {
  const [data, setData] = useState({
    title: "",
    type: "",
    link: "",
  });
  const [isFormVisible, setIsFormVisible] = useState(false);

  function openForm() {
    setIsFormVisible((isFormVisible) => !isFormVisible);
  }
  async function handleClick() {
    await AddContent(data);
    setIsFormVisible(false);
    setData({ title: "", type: "", link: "" });
  }
  const handleOnChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const [content, setContent] = useState([]);

  useEffect(() => {
    fetchContent()
  },[content]);

  const fetchContent = async() => {
    const res = await GetContent();
    console.log(res.data.contentData); 
    setContent(res.data.contentData);
  }

  

  return (
    <div className="p-4 relative">
      <Button
        variant="secondary"
        text="ShareBrain"
        size="md"
        className="m-2"
        startIcon={<ShareIcon height={16} />}
      ></Button>

      <Button
        variant="primary"
        size="md"
        text="Add content"
        startIcon={<PlusIcon height={16} />}
        onClick={openForm}
      />
      {isFormVisible && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition-colors"
              onClick={openForm}
            >
              <X size={20} />
            </button>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Title"
                value={data.title}
                name="title"
                onChange={handleOnChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />

              <input
                type="text"
                placeholder="Type"
                value={data.type}
                name="type"
                onChange={handleOnChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />

              <input
                type="text"
                placeholder="Link"
                value={data.link}
                name="link"
                onChange={handleOnChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />

              <button
                onClick={handleClick}
                className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Add Content
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex gap-10">
        
          {
              content.map((item:any, index) => (
                <Card
                  key={index}
                  type={item.type}
                  title={item.title}
                  link={item.link}
                />
              ))
          }
        
        {/* <Card
          type="twitter"
          title="ndnj"
          link="https://x.com/mannupaaji/status/1886656846825447776"
        />
        <Card
          type="youtube"
          title="ndnj"
          link="https://www.youtube.com/watch?v=_zYqdyX1ZTo"
        /> */}
      </div>
    </div>
  );
};
