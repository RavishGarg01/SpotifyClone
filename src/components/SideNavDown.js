import React from 'react'
import CreatePlaylist from './CreatePlaylist'
import "../styles/SideNavDown.css"
import { MyLocation } from '@material-ui/icons'


const SideNavDown = () => {
  return (
    <div className='down'>
   
        <h3 style={{color:"white"}}>Your Library<span><i style={{marginLeft:"50%"}}class="fa-solid fa-plus"> </i></span><span style={{marginLeft:"20px"}}><i class="fa-solid fa-arrow-right"></i></span></h3>
        
        <div className="sidecols">
      <CreatePlaylist heading={"Create Your Playlist"} para={"It's easy,we'll help you"} btntxt={"Create PlayList"}/>
      <CreatePlaylist heading={"Lets find some prodcast to follow"}  para={"We will Keep you update on new episodes"} btntxt={"Browse Podcasts"}/>
      </div>
    </div>
  )
}

export default SideNavDown
