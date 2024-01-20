import React from "react";
import JournalCard from "./JournalCard";

function JournalCardList({ journals }) {
 

  return (
    <div className="JournalCardList">
      {journals.map((journal) => (
        <JournalCard
          key={journal.id}
          id={journal.id}
          activity_name={journal.activity_name}
          journal_entry={journal.journal_entry}
          journal_date={journal.journal_date}
        />
      ))}
    </div>
  );
}

export default JournalCardList;
