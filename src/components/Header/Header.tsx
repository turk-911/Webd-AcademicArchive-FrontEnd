import React, { useState } from "react";
import "./Header.css";
const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="top-div">
      <header className="navbar">
        <div className="navbar-logo">PrepArchives</div>
        <div className="hamburger" onClick={toggleMenu}>
          &#9776; 
        </div>
        <nav className={`nav-links ${isOpen ? "open" : ""}`}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="">Get Started</a>
        </nav>
      </header>
    </div>
  );
};

export default Header;
