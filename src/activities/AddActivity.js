import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import MindfulMomentApi from "../api/api";
import UserContext from "../auth/UserContext";

function AddActivity() {
  const history = useHistory();
  const { currentUser } = useContext(UserContext);
  const [error, setError] = useState(null);

  const [saveConfirmed, setSaveConfirmed] = useState(false);
  const [formData, setFormData] = useState({
    activity_name: "",
    activity_description: "",
    repeat_frequency: "daily",
    start_time: "",
    start_date: "",
  });

  // Format the current date
  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split("T")[0]; // Format as "yyyy-MM-dd"
    setFormData((prevData) => ({
      ...prevData,
      start_date: formattedDate,
    }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await MindfulMomentApi.addActivity(
        currentUser.username,
        formData
      );
      setSaveConfirmed(true);
      setError(null);
      history.push("/calendar");
    } catch (error) {
      console.error("Error adding activity:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Add New Activity</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
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

        <div className="mb-3">
          <label className="form-label">Description:</label>
          <select
            type="text"
            className="form-control"
            name="activity_description"
            value={formData.activity_description}
            onChange={handleChange}
            placeholder="Enter activity description"
            required
          >
            <option value="">Select Description</option>
            <option value="Walk 10 mins">Walk 10 mins </option>
            <option value="Stretch for 5 mins">Stretch for 5 mins </option>
            <option value="Meditate for 2 mins">Meditate for 2 mins</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Repeat Frequency:</label>
          <select
            className="form-select"
            name="repeat_frequency"
            value={formData.repeat_frequency}
            onChange={handleChange}
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Start Time:</label>
          <input
            type="time"
            className="form-control"
            name="start_time"
            value={formData.start_time}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Start Date:</label>
          <input
            type="date"
            className="form-control"
            name="start_date"
            value={formData.start_date}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Activity
        </button>
      </form>
    </div>
  );
}

export default AddActivity;
