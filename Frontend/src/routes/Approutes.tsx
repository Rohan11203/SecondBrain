import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Register } from "../pages/Register"
import { Login } from "../pages/Login"
import { Dashboard } from "../pages/Dashboard"
import {LandingPage} from "../pages/LandingPage"
import { ShareBrain} from '../pages/ShareBrain'

export const AppRoutes =  () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/brain/:id" element={<ShareBrain />} />
      </Routes>
    </BrowserRouter>
  )
}