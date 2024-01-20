import React from "react";
import Tile from "./Tile";

const MeditateTile = ({ onClick }) => {
  return (
    <Tile
      title="Meditate"
      description="Commit to two minutes a day then gradualy increase.  Set a general time of day like during your first cup of coffee.  Find a comforatble seat and focus on your breath."
      imageUrl="https://images.unsplash.com/photo-1621271428478-7a4658303582?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      onClick={onClick}
    />
  );
};

export default MeditateTile;
