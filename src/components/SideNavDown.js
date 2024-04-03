import React, { useEffect, useState } from "react";
import CreatePlaylist from "./CreatePlaylist";
import "../styles/SideNavDown.css";
import NameListModal from "./NameListModal";
import { useNavigate } from "react-router-dom";

const SideNavDown = () => {
  const [modalShow, setModalShow] = useState(false);

  const loadItems = () => {
    let playList = localStorage.getItem("playlist");
    let logged = localStorage.getItem("loggedUser");
    logged = JSON.parse(logged);
    playList = JSON.parse(playList);
    let storedArray = playList.filter((e) => e.userId === logged.id);
    return storedArray;
  };

  const navigate = useNavigate();

  const [songList, setSongList] = useState(loadItems);

  const openPlay = (e) => {
    navigate("playlist", { state: { id: e.id, name: e.name } });
  };
  //    let logged=JSON.stringify(localStorage.getItem("loggedUser"));

  //  let filteredSongList=songList.filter(e=>e.userId===logged.id);

  const DeleteOnClick = (e) => {
    console.log(e);

    let storedArray = JSON.parse(localStorage.getItem("playlist"));

    let index = storedArray.findIndex((i) => i.id === e.id);
    storedArray.splice(index, 1);

    localStorage.setItem("playlist", JSON.stringify(storedArray));
    let logged = localStorage.getItem("loggedUser");
    logged = JSON.parse(logged);
    storedArray = storedArray.filter((e) => e.userId === logged.id);

    setSongList(storedArray);

    // navigate("playlist",{state:{id:e.id,name:e.name}})
  };

  // useEffect(()=>{
  //   setSongList(loadItems);
  // },[songList])

  console.log(songList, "songList")

  let loggedUser = localStorage.getItem("loggedUser");
  loggedUser = JSON.parse(loggedUser);

  return (
    <div className="down">
      <h3 style={{ color: "white" }}>
        Your Library
        <span>
          <i
            style={{ marginLeft: "45%" }}
            onClick={() => setModalShow(true)}
            className="fa-solid fa-plus"
          >
            {" "}
          </i>
        </span>
        {/* <span style={{ marginLeft: "20px" }}>
          <i className="fa-solid fa-arrow-right"></i>
        </span> */}
      </h3>

      <NameListModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        setList={() => loadItems()}
        Songset={(playList) => setSongList(playList)}
      />

      <div className="sidecols">
        <h4 style={{ textAlign: "center" }}> Saved Playlists</h4>
        <ul>
          {songList?.map((e, index) => {
            return (
              <li
                key={index}
                style={{
                  fontSize: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span onClick={() => openPlay(e)}>{e.name}</span>
                <span onClick={() => DeleteOnClick(e)}>
                  <i class="fa-solid fa-trash"></i>
                </span>
              </li>
            );
          })}
        </ul>

        {/* <CreatePlaylist heading={"Create Your Playlist"} para={"It's easy,we'll help you"} btntxt={"Create PlayList"}/>
      <CreatePlaylist heading={"Lets find some prodcast to follow"}  para={"We will Keep you update on new episodes"} btntxt={"Browse Podcasts"}/> */}
      </div>
    </div>
  );
};

export default SideNavDown;
