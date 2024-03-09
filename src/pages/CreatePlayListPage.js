import React from 'react'
import "../styles/ListCreate.css"

const CreatePlayListPage = () => {
  return (
    <div className='listCreate'>
        <h1 style={{color:"white",margin:"10px", fontSize:"5rem"}}><i class="fa-solid fa-headphones"></i></h1>
        <h1 style={{color:"white",margin:"40px"}}>Create Your Favourite Playlist</h1>
        
      <input type="text" placeholder='Give a Name to your playlist '/>
      <button>Create</button>
    </div>
  )
}

export default CreatePlayListPage
