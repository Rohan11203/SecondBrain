import axios, { AxiosHeaders } from "axios";
import { RegisterationData } from "../pages/Register";
import { data } from "react-router-dom";

export async function OnRegister(data: RegisterationData) {
  return await axios.post("http://localhost:3000/api/v1/signin", data);
}

export async function OnLogin(data: RegisterationData) {
  return await axios.post("http://localhost:3000/api/v1/signup", data);
}

export async function OnLogout() {
  const headers = {
    Authorization: localStorage.getItem("token"),
  };
  const response = await axios.delete("http://localhost:3000/api/v1/logout", {
    headers,
  });
  if (response.status === 200) {
    console.log("Logout successful:", response.data.message);

    localStorage.removeItem("token");

   
    window.location.href = "/login";
  }
}

export async function AddContent(data: any) {
  const headers = {
    Authorization: localStorage.getItem("token"),
  };
  return await axios.post("http://localhost:3000/api/v1/content", data, {
    headers,
  });
}

export async function GetContent() {
  const headers = {
    Authorization: localStorage.getItem("token"),
  };
  return await axios.get("http://localhost:3000/api/v1/content", { headers });
}

export async function DeleteContent(contentId: string) {
  const headers = {
    Authorization: localStorage.getItem("token"),
  };
  return await axios.delete("http://localhost:3000/api/v1/content", {
    headers,
    data: { contentId },
  });
}

export async function ShareContent(share: boolean) {
  const headers = {
    Authorization: localStorage.getItem("token"),
  };
  return await axios.post(
    "http://localhost:3000/api/v1/brain/share",
    { share },
    { headers }
  );
}

export async function GetSharedContent(shreUrl: string) {
  const headers = {
    Authorization: localStorage.getItem("token"),
  };
  return await axios.get(`http://localhost:3000/api/v1/brain/${shreUrl}`, {
    headers,
  });
}
