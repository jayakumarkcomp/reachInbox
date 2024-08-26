import React, { useState, useEffect } from 'react';
import './index.css'
function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      className="theme-toggle"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? <i className="fas fa-sun" /> : <i className="fas fa-moon" />}
      <span>Toggle Theme</span>
    </button>
  );
}

export default ThemeToggle;