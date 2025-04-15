import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Register } from "../pages/Register"
import { Login } from "../pages/Login"
import { Dashboard } from "../pages/Dashboard"
import {LandingPage} from "../pages/LandingPage"
import { ShareBrain} from '../pages/ShareBrain'

const ProtectedRoute = ({ children }:any) => {
  const isAuthenticated = localStorage.getItem('token') ? true : false;

  if(!isAuthenticated) {
    return <Navigate to={"/login"} />
  }

  return children;
};

export const AppRoutes =  () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/brain/:id" element={<ShareBrain />} />
      </Routes>
    </BrowserRouter>
  )
}