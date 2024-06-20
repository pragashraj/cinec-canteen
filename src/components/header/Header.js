import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
      <img src='cineclogo.svg' alt="CINEC Logo" className="logo" />
        <nav className="nav-menu">
          <a href="/" className="nav-item">Home</a>
          <a href="/menu" className="nav-item">Menu</a>
          <a href="/about-us" className="nav-item">About Us</a>
        </nav>
        <div className="header-buttons">
        <button className="nav-item nav-button">
            <img src='User.svg' alt="User" className="icon"/>
          </button>
          <button className="nav-item nav-button">
            <img src='Like.svg' alt="Wishlist" className="icon"/>
          </button>
          <button className="nav-item nav-button">
            <img src='cart.svg' alt="Cart" className="icon"/>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;