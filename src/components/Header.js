import React, { useState } from 'react'
import "../styles/Header.css"
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


const Header = ({isSongPlay}) => {
  // const[playing,setPlaying]=useState(false)
  // const[play,setPlay]=useState("fa-solid fa-circle-play")
 
  let current=localStorage.getItem("currentSong");
  current=JSON.parse(current);

  
  

  
  // const playMusic=()=>{
  //   if(playing){
  //     // console.log(document.getElementById("audio"))
  //     document.getElementById("audio").pause();
  //     setPlay("fa-solid fa-circle-play")
  //     setPlaying(false);
  //   }else{
  //      document.getElementById("audio").play();
  //      setPlaying(true);
  //      setPlay("fa-solid fa-circle-pause")
       
  //   }
  // }
  return (
    <>
     <div className="header">
      {/* <div  className="left-area">
        <h3>abcdef</h3>
        <h6>ravishgarg</h6>
      </div>
        <div className="controls">
          <ul>
          <li><a><span style={{fontSize:"20px"}}><i className="fa-solid fa-shuffle"></i></span></a></li>
            <li><a><i className="fa-solid fa-backward-step"></i></a></li>
            <li><a onClick={playMusic}><i className={play}></i></a></li>
            <li><a><i className="fa-solid fa-forward-step"></i></a></li>
            <li><a><span style={{fontSize:"20px"}}><i className="fa-solid fa-repeat"></i></span></a></li>
            
           
          </ul>
          <div className="line" style={{height:"3px",width:"150%",backgroundColor:"gray",textAlign:"center",borderRadius:"5px"}}></div>
          {<audio  id='audio'>
           <source id="source" src={BornToShine} type="audio/mp3"/>
           Your browser does not support the audio element.
           </audio>}


        </div>
        <div className='right-area' >
          <ul>
            <li><a><PlaySquareOutlined /></a></li>
            <li><a><i className="fa-solid fa-list"></i></a></li>
            <li><a><i className="fa-solid fa-computer"></i></a></li>
            <li><a><i className="fa-solid fa-volume-high"></i></a></li>
            <div className="line" style={{height:"3px",width:"100%",backgroundColor:"gray",textAlign:"center",borderRadius:"5px"}}></div>
            
          </ul>
        </div> */}
     
      <AudioPlayer className='bg-dark' 
    autoPlay
    src={current}
    onPlay={e => console.log("onPlay")}
    // other props here
    
  />
   </div> 
    </>
  )
}

export default Header
