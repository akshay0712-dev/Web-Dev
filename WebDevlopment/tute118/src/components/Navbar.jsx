import React, { memo } from 'react'


const Navbar = ({adjective}) => {
    console.log("NavBar is Rerendered");
    
  return (
    <div>
      I ama  {adjective } Navbar
    </div>
  )
}

export default memo(Navbar)
