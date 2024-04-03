import React from "react";
import "../styles/SingerAlbum.css";
import { useLocation } from "react-router-dom";
import SongsList from "../services/SongsList";
import SingerList from "../services/SingerList";

const SingersAlbum = ({setIsSongPlay}) => {
  const location = useLocation();

  let objarr = SongsList.filter((i) => i.singerId === location.state);

  let Singer = SingerList.find((i) => i.id === location.state);

  const clickHandle = async(song) => {
    console.log(song)
    localStorage.setItem("currentSong",JSON.stringify(song));
    setIsSongPlay(song);
  };

  return (
    <>
      <div className="desc">
        <img
          style={{ height: "12rem", width: "11rem", borderRadius: "20px" }}
          src={Singer.image_url}
          alt=""
        />
        <div
          className="white"
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h2>{Singer.name}</h2>
          <h4>{Singer.description}</h4>
        </div>
      </div>
      <h2 className="white text-center ">Top Tracks</h2>

      <div className="white" style={{ height: "9.5rem", overflowY: "scroll" }}>
        <table striped bordered hover className="white">
          <thead>
            <th></th>
          </thead>
          <tbody>
            <tr>
              <td>Image</td>
              <td>Track</td>
              <td>Album</td>
            </tr>
            {objarr.map((track, index) => {
              return (
                <>
                  <tr onClick={() => clickHandle(track.song)}>
                    <td>
                      <img
                        style={{ width: "30px", height: "30px" }}
                        src={track.img_url}
                        alt="🎵"
                      />
                    </td>
                    <td key={index}>{track.title}</td>
                    <td key={index}>{track.album}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SingersAlbum;
