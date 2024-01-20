// src/components/MeditationTile.js
import React from "react";
import Tile from "./Tile";

const ChooseTile = ({ onClick }) => {
  return (
    <Tile
      title="Choose Your Moment"
      description="Choose your MindfulMoment. Start a meditation, short walk, or morning stretch routine "
      imageUrl="https://images.unsplash.com/photo-1506543730435-e2c1d4553a84?q=80&w=2362&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      onClick={onClick}
    />
  );
};

export default ChooseTile;

// https://images.unsplash.com/photo-1506543730435-e2c1d4553a84?q=80&w=2362&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
