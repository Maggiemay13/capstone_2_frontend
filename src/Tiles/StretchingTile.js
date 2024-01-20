import React from "react";
import Tile from "./Tile";

const StretchingTile = ({ onClick }) => {
  return (
    <Tile
      title="Stretch"
      description="Sart out small even just 30 seconds a day.  Schedule a specific time and make it a non - negotiable part of your day.  It can be first thing in the morning, during your lunch break, or at night before bed."
      imageUrl="https://images.unsplash.com/photo-1608404862898-ca7de5c2eb4a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      onClick={onClick}
    />
  );
};

export default StretchingTile;
