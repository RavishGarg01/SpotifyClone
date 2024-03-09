import React from 'react'
import '../styles/SideNav.css'
import SideNavUp from "./SideNavUp"
import SideNavDown from './SideNavDown'

const SideNav = () => {
  return (
    <>
     <div className="sidebar">
     <SideNavUp />
     <SideNavDown />
     </div> 
    </>
  )
}

export default SideNav
