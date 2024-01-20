// DeleteJournal.js

import React, { useState, useContext, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import UserContext from "../auth/UserContext";
import MindfulMomentApi from "../api/api";
import Alert from "../common/Alert";

function DeleteJournal() {
  const { currentUser } = useContext(UserContext);
  const { id } = useParams();
  const [error, setError] = useState(null);

  const history = useHistory();

  const handleDelete = async () => {
    try {
      await MindfulMomentApi.deleteJournal(currentUser.username, id);

      history.push("/journal");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center ">
      <div className="card text-center">
        <div className="card-body ">
          <h3>Delete Journal</h3>
          {error && <Alert type="danger" messages={[error]} />}
          <p>Are you sure you want to delete this journal?</p>
        </div>
        <div>
          <button className="btn btn-danger" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteJournal;
