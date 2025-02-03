import { useState } from "react"
import { AddContent, GetContent } from "../api/auth"

export const Dashboard = () => {
  const [data, setData] = useState({
    title: "",
    type: "",
    link: "",
  })
  async function handleClick(){
    await AddContent(data)
    console.log(data)
  }
  const handleOnChange =(e:any) => {
    setData({...data, [e.target.name]: e.target.value});
  }

  async function onClick (){
    await GetContent();
  }
  return ( 
    <div className="">
     <div>
        <input type="text" placeholder="Title" value={data.title} name="title" onChange={handleOnChange} />
        <input type="text" placeholder="Type" value={data.type} name="type" onChange={handleOnChange}/>
        <input type="text" placeholder="Link" value={data.link} name="link" onChange={handleOnChange}/>
        <button onClick={handleClick} >Add content</button>
     </div>

     <button onClick={onClick}>Get</button>
    </div>
  )
}