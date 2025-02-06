import { useEffect, useState } from "react"
import { GetContent } from "../api/auth";

export const useContent = () => {
  const [content, setContent] = useState([])

   const fetchContent = async() => {
      const res = await GetContent();
      console.log(res.data.contentData); 
      setContent(res.data.contentData);
    }
    useEffect(() => {
      fetchContent();
      let interval = setInterval(() => {
        fetchContent();
      },10 * 1000);
      return () => clearInterval(interval);     
    },[]);
    
    return {content, fetchContent};
  
}