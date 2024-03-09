import React from 'react'

const play=(id)=>{
  console.log(id)
}
  


const SingleSongCard = (props) => {
  
  return (
    <div>
      <div class="card " onClick={play} style={{height:"55vh",width:"95%",padding:"10px", backgroundColor:" rgba(41, 39, 39, 0.735)", borderRadius:"10px"}}>
  <img src={props.imgsrc} alt="Avatar"  style={{height:"50%",width:"100%",borderRadius:"10px"}} />
  <div class="container">
    <h4 style={{color:"white"}}><b>{props.title}</b></h4>
    <p style={{color:"white"}}>{props.desc}</p>
    
  </div>
</div>
    </div>
  )
}

export default SingleSongCard
