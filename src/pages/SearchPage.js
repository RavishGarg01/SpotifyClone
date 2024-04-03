import React, { useState } from 'react'
import SongsList from '../services/SongsList';
import "../styles/Search.css"

const SearchPage = ({setIsSongPlay}) => {

  const[search,setSearch]=useState();
  const[searchedSongs,setSearchedSongs]=useState([]);
  const ChangeHandler=(e)=>{
      setSearch(e.target.value);
  }
  
  const ClickHandler=()=>{
      setSearchedSongs(SongsList.filter(i=>i.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())));
      
  }

  const playSong=(song)=>{
       localStorage.setItem("currentSong",JSON.stringify(song));
       setIsSongPlay(song)
  }

  console.log(searchedSongs);

  
  return (
    <div className='listCreate'>
    <h2 style={{color:"white",margin:"10px", fontSize:"5rem"}} className="searchMirror"><i class="fa-solid fa-magnifying-glass"></i></h2>
    <h2 style={{color:"white",margin:"40px"}}>Search Songs You Want to Play</h2>
    
  <input type="text" onChange={ChangeHandler} value={search} placeholder='Search songs....'/>
  <button  onClick={ClickHandler}>Search</button>
  <div class="result">
   <ul>
     {searchedSongs?.map(element=>{
      return <li onClick={()=>playSong(element.song)} style={{color:"white"}}>{element.title}</li>  
     })}
   </ul>
  </div>
</div>
  )
}

export default SearchPage
