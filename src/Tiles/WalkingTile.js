import React from "react";
import Tile from "./Tile";

const WalkingTile = ({ onClick }) => {
  return (
    <Tile
      title="Start Walking"
      description="Even a few minutes of walking can improve your day.  Walk at least five minutes a day and gradually increase it when your ready."
      imageUrl="https://images.unsplash.com/photo-1534970028765-38ce47ef7d8d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      onClick={onClick}
    />
  );
};

export default WalkingTile;
