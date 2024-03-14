import React from 'react'
import CreatePlaylist from './CreatePlaylist'
import "../styles/SideNavDown.css"
import NameListModal from './NameListModal';



const SideNavDown = () => {

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className='down'>
   
        <h3 style={{color:"white"}}>Your Library<span><i style={{marginLeft:"30%"}} onClick={() => setModalShow(true)} class="fa-solid fa-plus"> </i></span><span style={{marginLeft:"20px"}}><i class="fa-solid fa-arrow-right"></i></span></h3>

        <NameListModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        
        <div className="sidecols">
      <CreatePlaylist heading={"Create Your Playlist"} para={"It's easy,we'll help you"} btntxt={"Create PlayList"}/>
      <CreatePlaylist heading={"Lets find some prodcast to follow"}  para={"We will Keep you update on new episodes"} btntxt={"Browse Podcasts"}/>
      </div>
    </div>
  )
}

export default SideNavDown
