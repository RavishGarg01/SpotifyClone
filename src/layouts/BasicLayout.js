import React from 'react'
import Header from "../components/Header";
import SideNav from "../components/SideNav"
// import ViewSection from './pages/ViewSection';
import { Outlet } from 'react-router-dom';
import '../App.css';
import ViewSectionNav from '../components/ViewSectionNav';
import "../styles/Layout.css"

const BasicLayout = () => {
  return (
    <>
    <div className="sections">

    <SideNav />
    
    <div className='main' >
    <ViewSectionNav />
     <Outlet />
     </div>
    </div>
    <Header />
    </>
  )
}

export default BasicLayout
