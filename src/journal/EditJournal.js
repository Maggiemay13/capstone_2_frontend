import React, { useState, useEffect, useContext } from "react";
import MindfulMomentApi from "../api/api";
import { useHistory, useParams } from "react-router-dom";
import UserContext from "../auth/UserContext";

function EditJournal() {
  // Extract username and id from the URL parameters
  const { id } = useParams();
  const { currentUser } = useContext(UserContext);
  const username = currentUser.username;
  // Initialize useHistory hook to handle navigation
  const history = useHistory();

  // State to manage form data and errors
  const [formData, setFormData] = useState({
    activity_name: "",
    journal_entry: "",
    journal_date: "",
  });
  const [error, setError] = useState(null);

  // useEffect hook to fetch journal details when the component mounts
  useEffect(() => {
    async function getJournalDetails() {
      try {
        // Fetch journal details using the given username and id
        const journalDetails = await MindfulMomentApi.getJournalDetails(
          username,
          id
        );
        const formattedDate = new Date(journalDetails.journal_date)
          .toISOString()
          .split("T")[0];
        // Set the form data based on the fetched journal details
        setFormData({
          activity_name: journalDetails.activity_name,
          journal_entry: journalDetails.journal_entry,
          journal_date: formattedDate,
        });

        setError(null);
      } catch (error) {
        console.error("Error fetching journal details:", error);
        setError("Error fetching journal details");
      }
    }

    // Call the function to fetch journal details when the component mounts
    getJournalDetails();
  }, [username, id]);

  // Event handler for form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Event handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make an API call to update the journal entry with the new data
      await MindfulMomentApi.editJournal(username, id, formData);

      // Redirect to the journal list page after successful update
      history.push("/journal");
    } catch (error) {
      console.error("Error updating journal entry:", error);
      setError("Error updating journal entry");
    }
  };

  return (
    <div>
      <h2 className="display-4 mb-3">Edit Journal Entry</h2>
      <div className="card">
        <div className="card-body">
          {error && <p className="text-danger">Error: {error}</p>}
          <form onSubmit={handleSubmit}>
            {/* Form fields */}
            <div className="form-group mb-3">
              <label className="mb-3">Activity Name:</label>
              <input
                type="text"
                name="activity_name"
                className="form-control"
                value={formData.activity_name}
                onChange={handleChange}
              />
            </div>
            <br />
            <div className="form-group mb-3">
              <label>Journal Entry:</label>
              <textarea
                className="form-control"
                name="journal_entry"
                value={formData.journal_entry}
                onChange={handleChange}
              />
            </div>
            <br />
            <div className="form-group mb-3">
              <label>Journal Date:</label>
              <input
                type="date"
                className="form-control"
                name="journal_date"
                value={formData.journal_date}
                onChange={handleChange}
              />
            </div>
            <br />
            <button type="submit" className="btn btn-secondary">
              Update Journal Entry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditJournal;
