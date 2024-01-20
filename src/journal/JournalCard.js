import "./JournalCard.css";

import React from "react";
import { Link } from "react-router-dom";

function JournalCard({ id, activity_name, journal_entry, journal_date }) {
  // Format the date to a more user-friendly format
  const formattedDate = new Date(journal_date).toLocaleDateString();

  return (
    <div className="JournalCard card">
      <div className="card-body">
        <h5 className="card-title">Activity: {activity_name}</h5>
        <p className="card-text">Entry Date: {formattedDate}</p>
        <p className="card-text">Journal Entry: {journal_entry}</p>
      </div>
      <div className="card-footer">
        <Link to={`/journal/edit/${id}`} className="btn btn-secondary">
          <i className="fa-regular fa-pen-to-square">Edit</i>
        </Link>
        <Link to={`/journal/delete/${id}`} className="btn btn-danger">
          <i className="">Delete</i>
        </Link>
      </div>
    </div>
  );
}

export default JournalCard;
