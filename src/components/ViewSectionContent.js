import React from "react";
import SingerList from "../services/SingerList";
import SingleSongCard from "./SingleSongCard";
import "../styles/ViewSecContent.css";
import { Link } from "react-router-dom";

const ViewSectionContent = () => {
  return (
    <div>
      <div className="content">
        {SingerList.map((element) => {
          return (
            <SingleSongCard
              key={element.id}
              id={element.id}
              title={element.name}
              imgsrc={element.image_url}
              desc={element.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ViewSectionContent;
