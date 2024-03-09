import React from 'react'
import "../styles/createPlay.css"
import {Link} from 'react-router-dom'

const CreatePlaylist = (props) => {
  return (
    <div className='createlist'>
        <h4>{props.heading}</h4>
        <h6>{props.para}</h6>
        <Link to="create/playlist"><button>{props.btntxt}</button></Link>
      
    </div>
  )
}

export default CreatePlaylist
