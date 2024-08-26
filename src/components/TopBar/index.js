import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import ThemeToggle from "../ThemeToggle/index";
import LogoutPopUp from "../LogoutPopUp/index";
import './index.css'

function TopBar() {
  const [showLogoutPopUp, setShowLogoutPopUp] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setShowLogoutPopUp(false);
    window.location.href = "/";
  };

  const handleLogoutClick = () => {
    setShowLogoutPopUp(true);
  };

  const handleCancelLogout = () => {
    setShowLogoutPopUp(false);
  };

  return (
    <div className="top-bar">
      <b>Onebox</b>

      <div className="flex items-center">
        <ThemeToggle /> &nbsp;
        <span className="cursor-pointer flex items-center" onClick={handleLogoutClick}>
          Tim's Workspace
          <MdOutlineKeyboardArrowDown className="arrow-down" />
        </span>
      </div>

      {showLogoutPopUp && (
        <LogoutPopUp onCancel={handleCancelLogout} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default TopBar;