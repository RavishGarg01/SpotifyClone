import React from 'react'
import "../styles/SingerAlbum.css"
import { useLocation } from 'react-router-dom'

const SingersAlbum = () => {

    const location=useLocation();
    
   

  return (
    <div>
      <div className="desc">
        <img style={{height:"13rem",width:"12rem",borderRadius:"20px"}} src={location.state.image_url} alt="" />
        <div className='white' style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
        <h2 >{location.state.name}</h2>
        <h4 >{location.state.description}</h4>
        </div>
      </div>
      <h2 className='white text-center '>Top Tracks</h2>
      <div  className="white" style={{height:"9.5rem",overflowY:"scroll"}}>
       
        <table striped bordered hover className='white'>
            <thead>
                <th>
               
                </th>
            </thead>
            <tbody>
                <tr>
                    <td>Track</td>
                    <td>Album</td>
                    </tr>
                    {location.state.top_tracks.map((track, index) => {
                      return(
                        <>
                          <tr>
                          <td key={index}>{track.title}</td>
                          <td key={index}>{track.album}</td>
                          </tr>
                        </>
                        )
                    })}
                   
                    
               
                
               
            </tbody>
        </table>
      </div>
      
    </div>
    
  )
}

export default SingersAlbum
