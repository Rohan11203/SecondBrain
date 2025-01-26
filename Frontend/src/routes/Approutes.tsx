import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Register } from "../pages/Register"
import { Login } from "../pages/Login"

export const AppRoutes =  () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}