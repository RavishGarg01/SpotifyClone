import React from 'react'
import "../styles/SideNavUp.css"
import { Link } from "react-router-dom"

const SideNavUp = () => {
  return (
    <div className='sideup'>
      <ul>
        <li><Link  to="/home" style={{color:"white",textDecoration:"none", cursor:"pointer"}}><i className="fa-solid fa-house"></i>  Home</Link></li>
        <li><Link  to="search" style={{color:"white", cursor:"pointer"}}><i className="fa-solid fa-magnifying-glass"></i> Search</Link></li>
      </ul>
    </div>
  )
}

export default SideNavUp
