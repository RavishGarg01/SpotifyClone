import React from 'react'
import Header from "../components/Header";
import SideNav from "../components/SideNav"
// import ViewSection from './pages/ViewSection';
import { Outlet } from 'react-router-dom';
import '../App.css';
import ViewSectionNav from '../components/ViewSectionNav';

const BasicLayout = () => {
  return (
    <>
    <div className="sections">

    <SideNav />
    
    <div style={{backgroundColor:" rgba(25, 24, 24, 0.735)",height:"86vh",width:"68%",margin:"10px 10px 0 0", borderRadius:"10px"}}>
    <ViewSectionNav />
     <Outlet />
     </div>
    </div>
    <Header />
      
    </>
  )
}

export default BasicLayout
