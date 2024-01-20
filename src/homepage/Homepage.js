import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import UserContext from "../auth/UserContext";
import JournalTile from "../Tiles/JournalTile";
import ResourcesTile from "../Tiles/ResourcesTile";
import ChooseTile from "../Tiles/ChooseTile";
import ZenQuote from "../zen-quote/ZenQuote";
import "./Homepage.css";

function Homepage() {
  const history = useHistory();
  const { currentUser } = useContext(UserContext);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!currentUser) {
      setShow(true);
    }
  }, [currentUser]);

  const handleClose = () => setShow(false);

  const handleJournalClick = () => {
    history.push(`/journal`);
  };

  const handleResourcesClick = () => {
    history.push("/resources");
  };

  const handleChooseClick = () => {
    history.push(`/activities`);
  };

  return (
    <div className="Homepage">
      {currentUser ? (
        // Show this content when the user is logged in
        <div className="user-logged-in-content">
          <div className="heading">
            <h1 className="mb-4 font-weight-bold">MindfulMoment</h1>
            <p className="lead">
              Welcome to MindfulMoment. Choose your moment for today and journal
              about your experience. Click Resources to find meditation playlist
              and guided meditations.
            </p>
          </div>
          <div className="tiles-container">
            <ChooseTile onClick={handleChooseClick} />
            <JournalTile onClick={handleJournalClick} />
            <ResourcesTile onClick={handleResourcesClick} />
          </div>
          <div>
            <ZenQuote />
          </div>
        </div>
      ) : (
        // Show this content when the user is logged out
        <div className="user-logged-out-content">
          <div className="heading">
            <h1 className="mb-4 font-weight-bold">MindfulMoment</h1>
            <p className="lead">
              Welcome to MindfulMoment, where every moment is an opportunity for
              mindful rejuvenation.
            </p>
          </div>
          <div className="tiles-container">
            <ChooseTile />
            <JournalTile />
            <ResourcesTile />
          </div>
          <div>
            <ZenQuote />
          </div>
        </div>
      )}
    </div>
  );
}

export default Homepage;
