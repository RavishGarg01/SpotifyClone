import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../styles/SingleCard.css"



const SingleSongCard = (props) => {
  const navigate=useNavigate();
  const play=()=>{
     navigate("singer/album",{state:{...props.ele}})
  }
  
  return (
    <div>
      <div className="cards" onClick={play} >
  <img src={props.imgsrc} alt="Avatar"  style={{height:"50%",width:"100%",borderRadius:"10px"}} />
  <div class="container">
    <h6 style={{color:"white", marginTop:"5px"}}><b>{props.title}</b></h6>
    <p style={{color:"white"}}>{props.desc}</p>
    
  </div>
</div>
    </div>
  )
}

export default SingleSongCard
