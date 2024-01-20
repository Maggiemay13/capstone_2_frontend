import React from "react";
import "./Tile.css";

const Tile = ({ title, description, imageUrl, onClick }) => {
  return (
    <div className="tile" onClick={onClick}>
      <img className="tile-image" src={imageUrl} alt={title} />
      <div className="tile-content">
        <h3 className="tile-title">{title}</h3>
        <p className="tile-description">{description}</p>
      </div>
    </div>
  );
};

export default Tile;
