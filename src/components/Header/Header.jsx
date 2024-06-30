import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import "./Header.css";
import mlb_logo from "../../assets/MLB-logo.png";
import search from "../../assets/search-icon.png";
import bag from "../../assets/bag-icon.png";
import loggedout from "../../assets/loggedout-icon.png";
import loggedin from "../../assets/loggedin-icon.png";
import LogoutModal from "../LogoutModal/LogoutModal";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();

  const [isLoggedOutPopupOpen, setIsLoggedOutPopupOpen] = useState(false);
  const [isLoggedInPopupOpen, setIsLoggedInPopupOpen] = useState(false);

  const [isLogoutClicked, setIsLogoutClicked] = useState(false);

  // 카트 수량과 현재 accessToken
  const cartQuantity = useSelector((state) => state.cart.cartQuantity);
  const accessToken = localStorage.getItem("accessToken");

  // 로그아웃 상태의 팝업 메뉴
  const toggleLoggedOutPopup = () => {
    setIsLoggedOutPopupOpen(!isLoggedOutPopupOpen);
  };

  // 로그인 상태의 팝업 메뉴
  const toggleLoggedInPopup = () => {
    setIsLoggedInPopupOpen(!isLoggedInPopupOpen);
  };

  const loggedOutPopupRef = useRef(null);
  const loggedInPopupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // loggedout icon 외 다른 곳 눌렀을 때 팝업 닫기
      if (
        isLoggedOutPopupOpen &&
        loggedOutPopupRef.current &&
        !loggedOutPopupRef.current.contains(event.target) &&
        !event.target.closest(".right-loggedout-icon")
      ) {
        setIsLoggedOutPopupOpen(false);
      }

      // loggedin icon 외 다른 곳 눌렀을 때 팝업 닫기
      if (
        isLoggedInPopupOpen &&
        loggedInPopupRef.current &&
        !loggedInPopupRef.current.contains(event.target) &&
        !event.target.closest(".right-loggedin-icon")
      ) {
        setIsLoggedInPopupOpen(false);
      }
    };

    // loggedout이나 loggedin의 팝업이 열였을 때 handleClickOutside 실행
    if (isLoggedOutPopupOpen || isLoggedInPopupOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // clean up
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isLoggedOutPopupOpen, isLoggedInPopupOpen]);

  return (
    <>
      <LogoutModal
        isLogoutClicked={isLogoutClicked}
        setIsLogoutClicked={setIsLogoutClicked}
      />
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
            <div
              className="right-bag-icon-container"
              onClick={() => navigate("/cart")}
            >
              <img className="right-bag-icon" src={bag} alt="bag" />
              {accessToken && cartQuantity >= 1 && (
                <div className="cart-quantity-container">
                  <div className="cart-quantity-number">{cartQuantity}</div>
                </div>
              )}
            </div>
            {!accessToken && (
              <img
                className="right-loggedout-icon"
                src={loggedout}
                alt="loggedout"
                onClick={toggleLoggedOutPopup}
              />
            )}

            {isLoggedOutPopupOpen && (
              <div className="loggedout-popup" ref={loggedOutPopupRef}>
                <div
                  className="signup"
                  onClick={() => {
                    navigate("/signup");
                    setIsLoggedOutPopupOpen(false);
                  }}
                >
                  회원가입
                </div>
                <div
                  className="login"
                  onClick={() => {
                    navigate("/login");
                    setIsLoggedOutPopupOpen(false);
                  }}
                >
                  LOG IN
                </div>
              </div>
            )}
            {accessToken && (
              <img
                className="right-loggedin-icon"
                src={loggedin}
                alt="loggedin"
                onClick={toggleLoggedInPopup}
              />
            )}

            {isLoggedInPopupOpen && (
              <div className="loggedin-popup" ref={loggedInPopupRef}>
                <div
                  className="my-page"
                  onClick={() => {
                    navigate("/mypage");
                    setIsLoggedInPopupOpen(false);
                  }}
                >
                  마이페이지
                </div>
                <div
                  className="logout"
                  onClick={() => setIsLogoutClicked(true)}
                >
                  LOG OUT
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="nav-bottom">
          <NavLink to="/women" className="nav-women" activeClassName="active">
            WOMEN
          </NavLink>
          <NavLink to="/men" className="nav-men" activeClassName="active">
            MEN
          </NavLink>
          <NavLink to="/cap" className="nav-cap" activeClassName="active">
            CAP
          </NavLink>
          <NavLink to="/shoes" className="nav-shoes" activeClassName="active">
            SHOES
          </NavLink>
          <NavLink to="/bag" className="nav-bag" activeClassName="active">
            BAG
          </NavLink>
          <div className="bottom-barrier"></div>
          <div className="bottom-promotion">PROMOTION</div>
          <div className="bottom-trend">TREND</div>
        </div>
      </div>
    </>
  );
};

export default Header;
