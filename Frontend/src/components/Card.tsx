import { Share2Icon, Star } from "lucide-react";
import { DeleteContent } from "../api/auth";
import { DeleteIcon } from "./ui/DeleteIcon";

interface CardProps {
  type: "youtube" | "twitter";
  title: string;
  link: string;
  contentId?: string;
}

export const Card = ({ type, title, link, contentId }: CardProps) => {
  const deleteContent = async () => {
    console.log(contentId);
    if (!contentId) {
      console.error("Content Id is missing");
      return;
    }
    await DeleteContent(contentId);
  };

  return (
    <div>
      <div className="p-4 bg-white rounded-md border-gray-300 max-w-72 border min-h-48 min-w-72">
        <div className="flex justify-between">
          <div className="flex items-center">
            <div className="pr-2 text-green-400">
              <Star fill="#b9fd34" />
            </div>
            <div className="font-medium">{title}</div>
          </div>
          <div className="flex items-center">
            <div className="pr-4 text-gray-500">
              <Share2Icon height={20} />
            </div>
            <div className="text-gray-500">
              <DeleteIcon onClick={deleteContent} className="cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="pt-4">
          {type === "youtube" && (
            <iframe
              className="w-full aspect-video"
              src={
                link.includes("youtu.be")
                  ? link
                      .replace("youtu.be/", "www.youtube.com/embed/")
                      .split("?")[0]
                  : link.replace("watch?v=", "embed/").split("&")[0]
              }
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}

          {type === "twitter" && (
            <blockquote className="twitter-tweet">
              <a href={link.replace("x.com", "twitter.com")}></a>
            </blockquote>
          )}
        </div>
      </div>
    </div>
  );
};
