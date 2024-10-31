// import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/home'
import About from './components/About'
import Login from './components/login'


function App() {
  const router = createBrowserRouter ([
    {
      path: "/",
      element: <><Navbar /> <Home /></>
    },
    {
      path: "/about",
      element: <><Navbar /> <About /></>
      
    },
    {
      path: "/login",
      element: <><Navbar /> <Login /></>
      
    }
  ])


  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
