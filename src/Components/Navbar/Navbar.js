import React, { useState } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa'; // For burger icons
import logo from '../../Images/logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Website Logo" />
        </div>

        <div className={`menu-links ${isOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="/" onClick={toggleMenu}>Home</a></li>
            <li><a href="/about" onClick={toggleMenu}>About</a></li>
            <li><a href="/services" onClick={toggleMenu}>Services</a></li>
            <li><a href="/contact" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </div>

        <div className="burger" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
