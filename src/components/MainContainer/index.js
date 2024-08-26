import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CustomMail from '../CustomMail/index';
import DeletePopUp from '../DeletePopUp/index';
import Mail from '../Mail/index'
import './index.css'

const MainContainer = ({ selectedThread }) => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [selectedMail, setSelectedMail] = useState([]);

  const togglePopUp = () => {
    setShowPopUp(!showPopUp);
  };

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`https://hiring.reachinbox.xyz/api/v1/onebox/messages/${selectedThread}`, {
        headers: {
          Authorization: token,
        },
      });
      setShowDelete(false);
    } catch (error) {
      console.error('Error deleting mail:', error);
    }
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'd' || event.key === 'D') {
        setShowDelete(!showDelete);
        console.log('Pressed D');
      }

      if (event.key === 'r' || event.key === 'R') {
        setShowPopUp(!showPopUp);
        console.log('Pressed R');
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [showDelete, showPopUp]);

  useEffect(() => {
    const fetchMail = async () => {
      if (selectedThread) {
        try {
          const token = localStorage.getItem('token');
          const res = await axios.get(`https://hiring.reachinbox.xyz/api/v1/onebox/messages/${selectedThread}`, {
            headers: {
              Authorization: token,
            },
          });
          setSelectedMail(res.data.data);
        } catch (error) {
          console.error('Error fetching mail:', error);
        }
      } else {
        setSelectedMail([
          {
            id: 0,
            fromName: '',
            fromEmail: 'jeanne@icloud.com',
            toName: '',
            toEmail: 'lennon.j@mail.com',
            subject: 'New Product Launch',
            body: 'I would like to introduce you to SaaSgrow, a productized design service specifically tailored for saas startups. Our aim is to help you enhance the user experience and boost the visual appeal of your software products.',
            sentAt: '2022-01-01T00:00:00.000Z',
          },
        ]);
      }
    };
    fetchMail();
  }, [selectedThread, showDelete]);

  return (
    <div className="main-container">
      <div className="header">
        <div className="left">
          <div className="name">Orlando</div>
          <div className="email">orladom@gmail.com</div>
        </div>
        <div className="right">
          <div className="button">Meeting Completed</div>
          <div className="button">Move</div>
          <div className="button">...</div>
        </div>
      </div>
      <div className="separator" />
      <div className="mail-list">
        {selectedMail.map((mail) => (
          <Mail key={mail.id} {...mail} />
        ))}
      </div>
      <div className="separator" />
      <div className="footer">
        <div className="button" onClick={togglePopUp}>
          Reply
        </div>
        {showPopUp && (
          <CustomMail threadId={selectedThread} onClose={() => setShowPopUp(false)} />
        )}
        {showDelete && (
          <DeletePopUp onCancel={() => setShowDelete(false)} onDelete={handleDelete} />
        )}
      </div>
    </div>
  );
};

export default MainContainer;