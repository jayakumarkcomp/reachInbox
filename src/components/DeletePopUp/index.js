import React from 'react';
import './index.css'

const DeletePopUp = ({ onCancel, onDelete }) => {
  return (
    <div className="delete-popup">
      <div className="popup-content">
        <h2>Are you sure?</h2>
        <p>Are you sure you want to delete this mail?</p>
        <div className="button-container">
          <button onClick={onCancel} className="cancel-button">
            Cancel
          </button>
          <button onClick={onDelete} className="delete-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeletePopUp;