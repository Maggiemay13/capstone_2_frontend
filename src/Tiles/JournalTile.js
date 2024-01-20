import React from "react";
import Tile from "./Tile";

const JournalTile = ({ onClick }) => {
  return (
    <Tile
      title="Journal"
      description="Journal about your experience and track your progress. "
      imageUrl="https://images.unsplash.com/photo-1466781783364-36c955e42a7f?q=80&w=3871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      onClick={onClick}
    />
  );
};

export default JournalTile;
