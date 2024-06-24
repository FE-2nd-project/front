import React from "react";

import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="nav-top">
        <img className="mlb-icon" src="MLB-logo.png" alt="MLB-logo" />
        <div className="top-right-icons">
          <img
            className="right-search-icon"
            src="search-icon.png"
            alt="search"
          />
          <img className="right-bag-icon" src="bag-icon.png" alt="bag" />
          <img className="right-my-icon" src="my-icon.png" alt="my" />
        </div>
      </div>
      <div className="nav-bottom">
        <div className="bottom-women">WOMEN</div>
        <div className="bottom-men">MEN</div>
        <div className="bottom-cap">CAP</div>
        <div className="bottom-shoes">SHOES</div>
        <div className="bottom-bag">BAG</div>
        <div className="bottom-promotion">PROMOTION</div>
        <div className="bottom-trend">TREND</div>
      </div>
    </div>
  );
};

export default NavBar;
