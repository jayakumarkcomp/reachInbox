import { useState } from "react";
import { RiHome5Fill, RiMailFill, RiUserSearchLine } from "react-icons/ri";
import { IoIosSend } from "react-icons/io";
import { SiElasticstack } from "react-icons/si";
import { FaInbox } from "react-icons/fa";
import { IoStatsChartSharp } from "react-icons/io5";
import logo from "../../assets/logo.svg";
import './index.css'

function SideBar({ onMenuItemClick }) {
  const [selectedItem, setSelectedItem] = useState("/");

  const handleMenuItemClick = (path) => {
    setSelectedItem(path);
    onMenuItemClick(path);
  };

  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src={logo} alt="Logo" />
      </div>
      <div className="menu-items">
        <div
          className={`menu-item ${selectedItem === "/" ? "active" : ""}`}
          onClick={() => handleMenuItemClick("/")}
        >
          <RiHome5Fill />
        </div>
        <div
          className={`menu-item ${selectedItem === "/search" ? "active" : ""}`}
          onClick={() => handleMenuItemClick("/search")}
        >
          <RiUserSearchLine />
        </div>
        <div
          className={`menu-item ${selectedItem === "/mail" ? "active" : ""}`}
          onClick={() => handleMenuItemClick("/mail")}
        >
          <RiMailFill />
        </div>
        <div
          className={`menu-item ${selectedItem === "/send" ? "active" : ""}`}
          onClick={() => handleMenuItemClick("/send")}
        >
          <IoIosSend />
        </div>
        <div
          className={`menu-item ${selectedItem === "/stack" ? "active" : ""}`}
          onClick={() => handleMenuItemClick("/stack")}
        >
          <SiElasticstack />
        </div>
        <div
          className={`menu-item ${selectedItem === "/inbox" ? "active" : ""}`}
          onClick={() => handleMenuItemClick("/inbox")}
        >
          <FaInbox />
        </div>
        <div
          className={`menu-item ${selectedItem === "/stacks" ? "active" : ""}`}
          onClick={() => handleMenuItemClick("/stacks")}
        >
          <IoStatsChartSharp />
        </div>
      </div>
      <div className="footer">MK</div>
    </div>
  );
}

export default SideBar;