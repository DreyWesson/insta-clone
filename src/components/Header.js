import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <img
          className="header__logo"
          src="https://www.vectorlogo.zone/logos/instagram/instagram-wordmark.svg"
          alt="insta logo"
        />
      </div>
    </div>
  );
};

export default Header;
