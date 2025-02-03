import { useState } from "react"
import { AddContent } from "../api/auth"

export const Dashboard = () => {
  const [data, setData] = useState({
    title: "",
    type: "",
    link: "",
  })
  async function handleSubmit(){
    await AddContent(data)
    console.log(data)
  }
  const handleOnChange =(e:any) => {
    setData({...data, [e.target.name]: e.target.value});
  }
  return ( 
    <div className="">
     <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={data.title} name="title" onChange={handleOnChange} />
        <input type="text" placeholder="Type" value={data.type} name="type" onChange={handleOnChange}/>
        <input type="text" placeholder="Link" value={data.link} name="link" onChange={handleOnChange}/>
        <input type="submit" placeholder="Submit"/>
      </form>
     </div>
    </div>
  )
}