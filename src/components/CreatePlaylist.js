import React from 'react'
import "../styles/createPlay.css"
import {Link} from 'react-router-dom'

const CreatePlaylist = (props) => {
  return (
    <div className='createlist'>
        <h5>{props.heading}</h5>
        <h6>{props.para}</h6>
        <Link to="create/playlist"><button>{props.btntxt}</button></Link>
      
    </div>
  )
}

export default CreatePlaylist
