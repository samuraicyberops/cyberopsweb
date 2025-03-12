import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>CyberOps</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/booking">Booking</Link>
        <Link to="/services">Services</Link>
        <Link to="/subscription">Subscription</Link>
      </div>
    </nav>
  );
}

export default Navbar;
