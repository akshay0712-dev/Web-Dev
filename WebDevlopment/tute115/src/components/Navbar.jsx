import React from 'react'
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className='pb-4'>
        <nav className='bg-slate-800 text-white list-none flex gap-5  font-semibold'>
            <NavLink className={({ isActive }) => ` py-3 px-9 hover:text-[hsl(0,38%,88%)] hover:font-bold ${isActive ? "bg-red-700" : "" }`} to="/"><li>Home</li></NavLink>
            <NavLink className={({ isActive }) => ` py-3 px-9 hover:text-[hsl(0,38%,88%)] hover:font-bold ${isActive ? "bg-red-700" : "" }`} to="/about"><li>About</li></NavLink>
            <NavLink className={({ isActive }) => ` py-3 px-9 hover:text-[hsl(0,38%,88%)] hover:font-bold ${isActive ? "bg-red-700" : "" }`} to="/login"><li>Login</li></NavLink>
          </nav>
    </div>
  )
}

export default Navbar