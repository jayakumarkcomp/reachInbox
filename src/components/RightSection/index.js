import React from 'react';
import { IoIosSend } from "react-icons/io";
import { IoMailOpen } from "react-icons/io5";
import mail from "../../assets/mail.svg";
import './index.css'

function RightSection() {
  return (
    <div className="right-section">
      <div className="lead-details">
        <div className="header">Lead Details</div>
        <div className="details">
          <div className="flex justify-between">
            <div>Name</div>
            <div>Orlando</div>
          </div>
          <div className="flex justify-between">
            <div>Contact No</div>
            <div>+54-9062827869</div>
          </div>
          <div className="flex justify-between">
            <div>Email ID</div>
            <div>orlando@gmail.com</div>
          </div>
          <div className="flex justify-between">
            <div>Linkedin</div>
            <div>linkedin.com/in/timvadde/</div>
          </div>
          <div className="flex justify-between">
            <div>Company Name</div>
            <div>Reachinbox</div>
          </div>
        </div>
      </div>

      <div className="activities">
        <div className="header">Activities</div>
        <div className="campaign">
          <div>Campaign Name</div>
          <div>3 Steps | 5 Days in Sequence</div>
          <div className="steps">
            <div className="flex items-center">
              <img src={mail} alt="mail" />
              <div>
                <div>Step 1: Email</div>
                <div>
                  <IoIosSend className="mr-2" /> Sent 3rd, Feb
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <img src={mail} alt="mail" />
              <div>
                <div>Step 2: Email</div>
                <div>
                  <IoMailOpen className="mr-2 text-yellow-500" /> Open 5th, Feb
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <img src={mail} alt="mail" />
              <div>
                <div>Step 3: Email</div>
                <div>
                  <IoMailOpen className="mr-2 text-yellow-500" /> Open 5th, Feb
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSection;