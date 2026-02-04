import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/login'
import {ToastContainer}  from 'react-toastify'
import DashboardLayout from './pages/dashboardLayout'

function App() {

  return (
  <>
    <ToastContainer position="bottom-right" autoClose={2000} />
    <Routes>
    <Route path="/" element={<Login />} />
     <Route path="/dashboard" element={<DashboardLayout />} />
    {/* <Route path="/users" element={<Users />} />
    <Route path="/users/:id" element={<UserDetails />} /> */}
  </Routes>
  </>
  

  )
}

export default App
