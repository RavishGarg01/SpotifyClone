import React, { useState } from "react";
import SongsList from "../services/SongsList";
import "../styles/SingerAlbum.css";
import { useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
// import selectSongsModal from "../components/selectSongsModal";
import Modal from "react-bootstrap/Modal";

const PlayListPage = ({setIsSongPlay}) => {
  let location = useLocation();
  let listId = location.state.id;
  let listName = location.state.name;

  //fetching playlist from local storage ===========

  let sList = localStorage.getItem("playlist");
  sList = JSON.parse(sList);
  let obj = sList.find((e) => e.id === listId);

  
//loading the songs from the current playlist==========

  
    let selectedSongs = obj.songs;
    console.log(selectedSongs.length)
  

  //setting current song in the local storage ===========

  const currentSong=(e)=>{
    console.log(e.song)
    localStorage.setItem("currentSong",JSON.stringify(e.song))
     setIsSongPlay(e.song)


    


  }

  const [smShow, setSmShow] = useState(false);

  // Adding the songs to playlist ===================

  const addSongs = (id) => {
    console.log("clicked");
    let songToAdd = SongsList.find((e) => e.id === id);
   const newData=sList.map((item)=>{
    if(item.id===listId){
      item.songs=[...item.songs,songToAdd]
    }
    return item;
   })

   localStorage.setItem("playlist",JSON.stringify(newData));

 

    setSmShow(false);
  };
  // console.log(selectedSongs)

  // console.log(objarr);

  return (
    <>
      <div
        className="desc"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 40px",
          height: "8rem",
        }}
      >
        {/* <img
          style={{ height: "13rem", width: "12rem", borderRadius: "20px" }}
          src="PA"
          alt=""
        /> */}
        <div style={{ display: "flex", gap: "20px" }}>
          <div
            className="circle"
            style={{
              height: "5rem",
              width: "5rem",
              borderRadius: "50%",
              backgroundColor: "#526D82",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
            }}
          >
            <h1 className="fw-bold">{listName.slice(0, 2)}</h1>
          </div>

          <div
            className="white"
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <h2>{listName}</h2>
          </div>
        </div>

        <Button variant="primary" onClick={() => setSmShow(true)}>
          Add Songs
        </Button>

        {/* code for the modal to add songs   ===== */}
        <Modal
          size="sm"
          show={smShow}
          onHide={() => setSmShow(false)}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header className="bg-dark text-white" closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              Select Songs
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ul>
              {SongsList.map((e) => {
                return (
                  <li
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    {e.title}{" "}
                    <i
                      onClick={() => addSongs(e.id)}
                      className="fa-regular fa-square-check"
                    ></i>
                  </li>
                );
              })}
            </ul>
          </Modal.Body>
        </Modal>
      </div>

      {/* code for the table of selected songs ======= */}
      <h2 className="white text-center mb-3 ">Your Favourite Tracks</h2>

      <div className="white" style={{ height: "13rem", overflowY: "scroll" }}>
        <table striped bordered hover className="white">
          <thead>
            <th></th>
          </thead>
          <tbody>
            
            {selectedSongs && selectedSongs.length>0?(
              selectedSongs.map((e) => {
                // console.log(e.title);
                return (
                  <tr>
                    <td><img style={{height:"30px",width:"30px"}}src={e.img_url}/></td>
                    <td>{e.title}</td>
                    <td>
                      <i onClick={()=>currentSong(e)} class="fa-solid fa-play"></i>
                    </td>
                  </tr>
                );
              })
            ) : (
              <h1 className="text">No Data</h1>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PlayListPage;
