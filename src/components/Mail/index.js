import React from 'react';
import './index.css'

const Mail = ({ fromEmail, toEmail, subject, body }) => {
  return (
    <div className="mail">
      <div className="header">
        <div className="subject">{subject}</div>
        <div className="from">from: {fromEmail}</div>
        <div className="to">to: {toEmail}</div>
      </div>
      <div className="body" dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  );
};

export default Mail;