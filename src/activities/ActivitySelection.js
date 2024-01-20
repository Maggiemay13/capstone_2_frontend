import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import UserContext from "../auth/UserContext";
import MeditateTile from "../Tiles/MeditateTile";
import StretchingTile from "../Tiles/StretchingTile";
import WalkingTile from "../Tiles/WalkingTile";

function ActivitiesSelection() {
  const history = useHistory();
  const { currentUser } = useContext(UserContext);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!currentUser) {
      setShow(true);
    }
  }, [currentUser]);

  const handleClose = () => setShow(false);

  const handleMeditateClick = () => {
    history.push(`/activities/add`);
  };

  const handleStretchingClick = () => {
    history.push(`/activities/add`);
  };

  const handleWalkingClick = () => {
    history.push(`/activities/add`);
  };

  return (
    <div className="Homepage">
      <div className="user-logged-in-content">
        <div className="heading">
          <h1 className="mb-4 font-weight-bold">Select your MindfulMoment</h1>
          <p className="lead">
            Select your MindfulMoment and create a new daily habit to improve
            your daily life.
          </p>
        </div>
        <div className="tiles-container">
          <MeditateTile onClick={handleMeditateClick} />
          <StretchingTile onClick={handleStretchingClick} />
          <WalkingTile onClick={handleWalkingClick} />
        </div>
      </div>
    </div>
  );
}

export default ActivitiesSelection;
