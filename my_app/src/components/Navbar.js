import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">🌤️ WeatherTrip</h2>
      <div className="auth-buttons">
        <button className="nav-btn">Sign In</button>
        <button className="nav-btn">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
