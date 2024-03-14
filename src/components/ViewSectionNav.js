import React, { useEffect, useState } from 'react'
import "../styles/ViewSecNav.css"
import {Link,useNavigate} from "react-router-dom"


  

const ViewSectionNav = () => {


  const[display,setDisplay]=useState(false);


  const logout=()=>{
      localStorage.removeItem("token");

      setTimeout(()=>{
        window.location.reload();
      },500)
  }
  
  const navigate=useNavigate()

  const ClickHandler=()=>{
    setDisplay(!display);
  }


  const back=()=>{
    navigate(-1);
  }

  const forward=()=>{
    navigate(1);
  }
  return (
    <>
    <div className="nav">
      <div className="navigations">
      <button onClick={back}><i class="fa-solid fa-chevron-left"></i></button>
         <button onClick={forward}><i class="fa-solid fa-chevron-right"></i></button>
        
      </div>
 
      <div className="buttons">
        {/* <button>Explore premium</button> */}
        <Link to="https://play.google.com/store/search?q=spotify&c=apps&hl=en_IN&gl=US"><button  style={{backgroundColor:'black',color:"white"}}><i class="fa-regular fa-circle-down"></i> InstallApp</button></Link>
        {/* <button style={{backgroundColor:'black',color:"white",borderRadius:"50%"}}><i class="fa-solid fa-bell"></i></button> */}
        <button on onClick={ClickHandler} style={{backgroundColor:'black',color:"white",borderRadius:"50%"}}>G</button>
      </div>
      </div>
     { display && <div className="box" style={{margin:"10vh 0", zIndex:"99" }}>
        <ul>
          <li><Link to="user">Profile</Link></li>
          <li><Link to="" onClick={logout}>Logout</Link></li>
        </ul>
       </div>}
     
    </>
  )
}

export default ViewSectionNav
