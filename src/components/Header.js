import React from 'react'
import "../styles/Header.css"
import { StepForwardFilled } from '@ant-design/icons'
import { StepBackwardFilled } from '@ant-design/icons'
import { PlayCircleFilled } from '@ant-design/icons'
import { PlaySquareOutlined } from '@ant-design/icons'

const Header = () => {
  return (
    <>
     <div className="header">
      <div style={{color:"white", marginLeft:"50px", width:"25%"}}>
        <h3>abcdef</h3>
        <h6>ravishgarg</h6>
      </div>
        <div className="controls">
          <ul>
          <li><a><span style={{fontSize:"20px"}}><i class="fa-solid fa-shuffle"></i></span></a></li>
            <li><a><StepBackwardFilled /></a></li>
            <li><a><PlayCircleFilled /></a></li>
            <li><a><StepForwardFilled /></a></li>
            <li><a><span style={{fontSize:"20px"}}><i class="fa-solid fa-repeat"></i></span></a></li>
            
           
          </ul>
          <div className="line" style={{height:"3px",width:"150%",backgroundColor:"gray",textAlign:"center",borderRadius:"5px"}}></div>
        </div>
        <div className='controls' >
          <ul>
            <li><a><PlaySquareOutlined /></a></li>
            <li><a><i class="fa-solid fa-list"></i></a></li>
            <li><a><i class="fa-solid fa-computer"></i></a></li>
            <li><a><i class="fa-solid fa-volume-high"></i></a></li>
            <div className="line" style={{height:"3px",width:"100%",backgroundColor:"gray",textAlign:"center",borderRadius:"5px"}}></div>
            
          </ul>
        </div>
      </div> 
    </>
  )
}

export default Header
