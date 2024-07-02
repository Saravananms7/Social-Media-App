import React from 'react';
import logo from '../src/Images/logo.png'; // Import your logo image

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Logo" className="logo" />
    </div>
  );
}

export default Header;