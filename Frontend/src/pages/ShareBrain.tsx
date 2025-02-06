import { useEffect, useState } from "react"
import { GetSharedContent } from "../api/auth"
import { useParams } from "react-router-dom"
import { Card } from "../components/Card";

export const ShareBrain = () => {
  const shareUrl = useParams();
  const [content,setContent] = useState([])
  async function getSharedContent(){
    console.log(shareUrl.id)
    if(!shareUrl.id){
      console.error(" Share ID is missing")
      return;
    }
    const response = await GetSharedContent(shareUrl.id)
    setContent(response.data.content)
    console.log(response.data.content)
  }
  useEffect(() => {
    getSharedContent();
  },[])
  return (
    <div className="flex">
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
  )
}