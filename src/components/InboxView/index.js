import axios from "axios";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { IoIosSend } from "react-icons/io";
import { TbReload } from "react-icons/tb";
import './index.css'

function InboxView({ data, loadMail }) {
  async function reloadHandler() {
    const token = localStorage.getItem("token");
    await axios.get("https://hiring.reachinbox.xyz/api/v1/onebox/reset", {
      headers: {
        Authorization: token,
      },
    });

    console.log("clicked");
  }

  if (!Array.isArray(data)) {
    console.error("Data is not an array:", data);
    return null;
  }

  return (
    <div>
      <div className="inbox-header">
        <div className="inbox-title">
          All Inbox(s)
          <FaAngleDown />
        </div>
        <div className="inbox-count">
          {data.length}/25{" "}
          <span>Inboxes selected</span>
        </div>
      </div>
      <div className="inbox-actions">
        <div className="inbox-search">
          <input placeholder=" Search" />
          <CiSearch />
        </div>
        <div className="inbox-reload" onClick={reloadHandler}>
          <TbReload />
        </div>
      </div>
      <div className="inbox-list">
        {data.map((email) => (
          <Mail
            key={email.id}
            fromEmail={email.fromEmail}
            subject={email.subject}
            threadId={email.threadId}
            loadMail={loadMail}
          />
        ))}
      </div>
    </div>
  );
}

function Mail({ fromEmail, subject, threadId, loadMail }) {
  const trimSubject = (subject, wordCount) => {
    const words = subject.split(" ");
    if (words.length > wordCount) {
      return words.slice(0, wordCount).join(" ") + " ...";
    }
    return subject;
  };

  const handleMailClick = () => {
    loadMail(threadId);
  };

  return (
    <div className="mail-item" onClick={handleMailClick}>
      <div className="mail-header">
        <div className="mail-from">{fromEmail}</div>
        <div className="mail-date">Mar 7</div>
      </div>
      <div className="mail-subject">{trimSubject(subject, 7)}</div>
      <div className="mail-actions">
        <div className="mail-interest">
          <GoDotFill />
          Interested
        </div>
        <div className="mail-campaign">
          <IoIosSend />
          Campaign Name
        </div>
      </div>
    </div>
  );
}

export default InboxView;