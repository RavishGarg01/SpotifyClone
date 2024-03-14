import React from 'react'
import SongsList from "../services/SongsList"
import SingleSongCard from './SingleSongCard'
import "../styles/ViewSecContent.css"
import { Link } from 'react-router-dom'

const ViewSectionContent = () => {
  return (
    <div>
    
      <div className="content">
         
        { SongsList.map((element,index) => {
         
          return(
            
            <SingleSongCard    key={index} id={index} title={element.name} imgsrc={element.image_url} desc={element.description} ele={element}/>
            
          )
          
        })
        }
      </div>
    </div>
  )
}

export default ViewSectionContent
