import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../auth/UserContext";
import MindfulMomentApi from "../api/api";
import Alert from "../common/Alert";

function AddJournal() {
  const history = useHistory();
  const { currentUser } = useContext(UserContext);
  const [setError] = useState(null);
  const [saveConfirmed, setSaveConfirmed] = useState(false);
  const [formData, setFormData] = useState({
    username: currentUser.username,
    activity_name: "",
    journal_entry: "",
    journal_date: "",
  });

  const [formErrors, setFormErrors] = useState([]);

  async function handleSubmit(evt) {
    evt.preventDefault();

    try {
      const response = await MindfulMomentApi.addJournal(
        currentUser.username,
        formData
      );
      console.log("Journal added successfully:", response);
      setFormData({
        username: currentUser.username,
        activity_name: "",
        journal_entry: "",
        journal_date: "",
      });
      setSaveConfirmed(true);
      setError(null);
      history.push("/journal");
    } catch (error) {
      console.error("Error adding journal:", error);
      setError([error.message]);
    }
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((data) => ({ ...data, [name]: value }));
  }

  return (
    <div className="SignupForm">
      <div className="container ">
        <h2 className="display-4 mb-3">Add Journal</h2>
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label className="form-label">Activity Name:</label>
                <select
                  className="form-select"
                  name="activity_name"
                  value={formData.activity_name}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Activity</option>
                  <option value="walk">Walk</option>
                  <option value="stretch">Stretch</option>
                  <option value="meditate">Meditate</option>
                </select>
              </div>

              <div className="form-group mb-3">
                <label className="mb-3 text-primary">Journal Date:</label>
                <input
                  type="date"
                  name="journal_date"
                  className="form-control"
                  value={formData.journal_date}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group mb-3">
                <label className="mb-3 text-primary">Journal Entry:</label>
                <textarea
                  rows="10"
                  cols="50"
                  name="journal_entry"
                  className="form-control"
                  value={formData.journal_entry}
                  onChange={handleChange}
                />
              </div>

              {formErrors.length ? (
                <Alert type="danger" messages={formErrors} />
              ) : null}
              {saveConfirmed ? (
                <Alert
                  type="success"
                  messages={["Journal added successfully."]}
                />
              ) : null}
              <button type="submit" className="btn btn-primary float-right">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddJournal;
