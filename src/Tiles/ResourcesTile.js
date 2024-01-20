
import React from "react";
import Tile from "./Tile";

const ResourcesTile = ({ onClick }) => {
  return (
    <Tile
      title="Resources"
      description="Find guided meditations and playlists to use during your MindfulMoment"
      imageUrl="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=3773&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      onClick={onClick}
    />
  );
};

export default ResourcesTile;
