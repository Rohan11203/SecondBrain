import { DeleteIcon, DotSquareIcon, Share } from "lucide-react";
import { DeleteContent } from "../api/auth";

interface CardProps {
  type: "youtube" | "twitter";
  title: string;
  link: string;
  contentId?: string;
}

export const Card = ({ type, title, link,contentId }:CardProps) => {

   const  deleteContent = async () => {
    console.log(contentId)
    if(!contentId){
      console.error(" Content Id is missing")
      return;
    }
    await DeleteContent(contentId)
  }
  
  return (
    <div>
      <div className="p-4 bg-white rounded-md border-gray-300 max-w-72 border min-h-48 min-w-72">
      <div className="flex justify-between">
        <div className="flex items-center">
          <div className="pr-2 text-gray-500">
            <DotSquareIcon />
          </div>
          {title}
        </div>
        <div className="flex items-center">
          <div className="pr-4 text-gray-500">
            <Share />
          </div>
          <div className="text-gray-500">
            <DeleteIcon onClick={deleteContent}/>
          </div>
        </div>
      </div>

      <div className="pt-4">
        { type==='youtube' && <iframe className="w-full" src={link.replace("watch", "embed").replace("?v=", "/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> }
        
        { type === 'twitter' && <blockquote className="twitter-tweet">
          <a href={link.replace("x.com","twitter.com")}></a>
        </blockquote> }
      </div>
    </div>
    </div>
  );
};
