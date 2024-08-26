import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SideBar from '../SideBar/index';
import TopBar from '../TopBar/index';
import SubView from '../SubView/index';
import MainPage from '../MainPage/index';
import './index.css'

function OneBox() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      localStorage.setItem("token", `Bearer ${token}`);
    }
  }, [token, navigate]);

  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleMenuItemClick = (path) => {
    setSelectedComponent(path);
  };

  if (selectedComponent === null) {
    return (
      <div className="h-screen w-screen dark:bg-black bg-white pl-14">
        <SideBar onMenuItemClick={handleMenuItemClick} />
        <TopBar />
        <SubView />
      </div>
    );
  }

  return (
    <div className="h-screen w-screen dark:bg-black bg-white pl-14">
      <SideBar onMenuItemClick={handleMenuItemClick} />
      <TopBar />
      <div>
        {selectedComponent === "/" && <SubView />}
        {selectedComponent === "/search" && <SubView />}
        {selectedComponent === "/mail" && <SubView />}
        {selectedComponent === "/send" && <SubView />}
        {selectedComponent === "/stack" && <SubView />}
        {selectedComponent === "/inbox" && <MainPage />}
        {selectedComponent === "/stacks" && <SubView />}
      </div>
    </div>
  );
}

export default OneBox;