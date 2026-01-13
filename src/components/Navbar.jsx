import React from "react";
import { FiSearch, FiMenu, FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";
import './Navbar.css'; // Import the CSS file

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Left side */}
      <div className="navbar-left">
        <span className="logo">Fashion Store</span>
        <ul className="nav-links">
          <li>Home</li>
          <li>Categories</li>
          <li>Services</li>
          <li>More</li>
        </ul>
      </div>

      {/* Search bar */}
      <div className="search-bar">
        <FiMenu className="menu-icon" />
        <input type="text" placeholder="Hinted search text" />
        <FiSearch className="search-icon" />
      </div>

      {/* Right icons */}
      <div className="navbar-right">
        <FiHeart className="icon" />
        <FiShoppingCart className="icon" />
        <FiUser className="icon" />
      </div>
    </nav>
  );
}
