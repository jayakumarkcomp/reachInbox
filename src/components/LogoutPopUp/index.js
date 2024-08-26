import React from 'react';

function LogoutPopUp({ onCancel, onLogout }) {
  return (
    <div className="logout-popup">
      <div className="popup-content">
        <h2>Are you sure?</h2>
        <p>Are you sure you want to log out?</p>
        <div className="button-container">
          <button onClick={onCancel} className="cancel-button">
            Cancel
          </button>
          <button onClick={onLogout} className="logout-button">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogoutPopUp;