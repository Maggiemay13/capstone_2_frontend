import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Calendar onChange={handleDateChange} value={date} />
      <Button variant="primary" onClick={handleShowModal}>
        Schedule Event
      </Button>

      {/* Modal for Event Details */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Event Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Add event details, edit options, delete options*/}
          {/* Include a form for adding/editing event detailse */}
          <p>Date: {date.toDateString()}</p>
          <p>Activity: Walking</p>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary">Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MyCalendar;
