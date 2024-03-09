import React from 'react'

const SearchPage = () => {
  return (
    <div className='listCreate'>
    <h1 style={{color:"white",margin:"10px", fontSize:"5rem"}} className="searchMirror"><i class="fa-solid fa-magnifying-glass"></i></h1>
    <h1 style={{color:"white",margin:"40px"}}>Search Songs You Want to Play</h1>
    
  <input type="text" placeholder='Search songs....'/>
  <button>Search</button>
</div>
  )
}

export default SearchPage
