import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Header.css";
import mlb_logo from "../../assets/MLB-logo.png";
import search from "../../assets/search-icon.png";
import bag from "../../assets/bag-icon.png";
import loggedout from "../../assets/loggedout-icon.png";
import loggedin from "../../assets/loggedin-icon.png";

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedOutPopupOpen, setIsLoggedOutPopupOpen] = useState(false);
  const [isLoggedInPopupOpen, setIsLoggedInPopupOpen] = useState(false);

  const toggleLoggedOutPopup = () => {
    setIsLoggedOutPopupOpen(!isLoggedOutPopupOpen);
  };

  const toggleLoggedInPopup = () => {
    setIsLoggedInPopupOpen(!isLoggedInPopupOpen);
  };

  return (
    <div className="navbar-container">
      <div className="nav-top">
        <img
          className="mlb-icon"
          src={mlb_logo}
          alt="MLB-logo"
          onClick={() => navigate("/")}
        />
        <div className="top-right-icons">
          <img className="right-search-icon" src={search} alt="search" />
          <img
            className="right-bag-icon"
            src={bag}
            alt="bag"
            onClick={() => navigate("/cart")}
          />
          <img
            className="right-loggedout-icon"
            src={loggedout}
            alt="loggedout"
            onClick={toggleLoggedOutPopup}
          />
          {isLoggedOutPopupOpen && (
            <div className="loggedout-popup">
              <div className="signup" onClick={() => navigate("/signup")}>
                회원가입
              </div>
              <div className="login" onClick={() => navigate("/login")}>
                LOG IN
              </div>
            </div>
          )}
          <img
            className="right-loggedin-icon"
            src={loggedin}
            alt="loggedin"
            onClick={toggleLoggedInPopup}
          />
          {isLoggedInPopupOpen && (
            <div className="loggedin-popup">
              <div className="my-page" onClick={() => navigate("/mypage")}>
                마이페이지
              </div>
              <div className="logout">LOG OUT</div>
            </div>
          )}
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

export default Header;
