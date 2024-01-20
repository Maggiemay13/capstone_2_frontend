// JournalList.js
import React, { useState, useEffect, useContext } from "react";
import MindfulMomentApi from "../api/api";
import JournalCardList from "./JournalCardList";
import LoadingSpinner from "../common/LoadingSpinner";
import UserContext from "../auth/UserContext";
import { Link } from "react-router-dom";
import "./JournalList.css";
function JournalList() {
  const [journals, setJournals] = useState(null);
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    // console.debug("JournalList useEffect getAllJournalsOnMount");
    getAllJournals();
  }, [currentUser]);

  async function getAllJournals() {
    try {
      let userJournals = await MindfulMomentApi.getJournal(
        currentUser.username
      );

      // Log the received data for debugging
      // console.log("Received Journals:", userJournals);

      // Ensure userJournals is an array
      const journalsArray = Array.isArray(userJournals)
        ? userJournals
        : [userJournals];

      setJournals(journalsArray);
    } catch (error) {
      console.error("Error fetching journals:", error);
      // Handle the error appropriately, e.g., set an error state
    }
  }

  if (journals === null) {
    return <LoadingSpinner />; // Return a loading spinner while waiting for data
  }

  return (
    <div className="JournalList col-md-8 offset-md-2">
      <Link to={`/journal/add`} className="btn btn-secondary mb-3">
        Add Journal
      </Link>
      <div className="JournalListContainer">
        {journals && journals.length ? (
          <JournalCardList journals={journals} />
        ) : (
          <p className="lead">Sorry, no results were found!</p>
        )}
      </div>
    </div>
  );
}

export default JournalList;
