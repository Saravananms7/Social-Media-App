import React from 'react';
import logo from '../src/Images/logo.png'; 
import './App.css'; // Import your logo image

function Header() {
  return (
    <div className="header_logo">
      <img src={logo} alt="Logo" className="logo" />
    </div>
  );
}

export default Header;