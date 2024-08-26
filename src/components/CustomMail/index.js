import React, { useState } from 'react';
import axios from 'axios';
import { RxCross2 } from 'react-icons/rx';
import { FaImage } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaRegSmile } from "react-icons/fa";
import { FaUserMinus } from "react-icons/fa";

import { BsLightningChargeFill } from 'react-icons/bs';
import { TbSquareLetterA } from 'react-icons/tb';
import { IoMdCode } from 'react-icons/io';
import { IoLinkSharp } from "react-icons/io5";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css';

function CustomMail({ threadId, onClose }) {
  const [replyData, setReplyData] = useState({
    to: '',
    from: '',
    subject: '',
    body: '',
  });

  const handleSendReply = async () => {
    const token = localStorage.getItem('token');
    try {
      await axios.post(`https://hiring.reachinbox.xyz/api/v1/onebox/reply/${threadId}`, {
        to: replyData.to,
        from: replyData.from,
        subject: replyData.subject,
        body: replyData.body,
      }, {
        headers: {
          Authorization: token,
        },
      });
      console.log('Reply sent successfully');
      onClose();
    } catch (error) {
      console.error('Error sending reply:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReplyData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleTextAreaChange = (e) => {
    const { name, value } = e.target;
    setReplyData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="custom-mail-container">
      <div className="custom-mail-header">
        <div className="custom-mail-title">Reply</div>
        <div className="custom-mail-close" onClick={onClose}>
          <RxCross2 className="custom-mail-close-icon" />
        </div>
      </div>
      <div className="custom-mail-body">
        <div className="custom-mail-to">
          <div className="custom-mail-label">To :</div>
          <input
            className="custom-mail-input"
            placeholder="Recipient's Email"
            name="to"
            value={replyData.to}
            onChange={handleInputChange}
          />
        </div>
        <div className="custom-mail-from">
          <div className="custom-mail-label">From :</div>
          <input
            className="custom-mail-input"
            placeholder="Your Email"
            name="from"
            value={replyData.from}
            onChange={handleInputChange}
          />
        </div>
        <div className="custom-mail-subject">
          <div className="custom-mail-label">Subject :</div>
          <input
            className="custom-mail-input"
            placeholder="Subject"
            name="subject"
            value={replyData.subject}
            onChange={handleInputChange}
          />
        </div>
        <div className="custom-mail-body-textarea">
          <textarea
            className="custom-mail-textarea"
            placeholder="Message Body"
            name="body"
            value={replyData.body}
            onChange={handleTextAreaChange}
          />
        </div>
        <div className="custom-mail-footer">
          <div className="custom-mail-send" onClick={handleSendReply}>
            Send <FontAwesomeIcon icon={FaCaretDown} className="custom-mail-send-icon" />
          </div>
          <div className="custom-mail-variables">
            <BsLightningChargeFill className="custom-mail-variables-icon" />
            Variables
          </div>
          <div className="custom-mail-preview">
            <FontAwesomeIcon icon={FaEye} className="custom-mail-preview-icon" />
            Preview Email
          </div>
          <div className="custom-mail-icons">
            <TbSquareLetterA className="custom-mail-icon" />
            <IoLinkSharp className="custom-mail-icon" />
            <FontAwesomeIcon icon={FaImage} className="custom-mail-icon" />
            <FontAwesomeIcon icon={FaRegSmile} className="custom-mail-icon" />
            <FontAwesomeIcon icon={FaUserMinus} className="custom-mail-icon" />
            <IoMdCode className="custom-mail-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomMail;