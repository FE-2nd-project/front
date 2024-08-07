import React from "react";
import { createPortal } from "react-dom";

import Cookies from "js-cookie";

import "./LogoutModal.css";
import exit from "../../assets/exit.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LogoutModal = ({ isLogoutClicked, setIsLogoutClicked }) => {
  const navigate = useNavigate();

  // 로그아웃 핸들 함수
  const logoutConfirmHandler = (e) => {
    e.preventDefault();

    localStorage.removeItem("accessToken");
    navigate("/");
    setIsLogoutClicked(false);

    // const accessToken = localStorage.getItem("accessToken");

    // 실제 로그아웃 axios 로직
    // axios.defaults.withCredentials = true;

    // axios
    //   .post(
    //     `${process.env.REACT_APP_SERVER_URL}/api/auth/logout`,
    //     {},
    //     {
    //       headers: {
    //         Authorization: `Bearer ${accessToken}`,
    //       },
    //     }
    //   )
    //   .then((response) => {
    //     if (response.status === 200) {
    //       localStorage.removeItem("accessToken");
    //       Cookies.remove("refreshToken");

    //       setIsLogoutClicked(false);
    //       navigate("/");
    //     }
    //   })
    //   .catch((error) => {
    //     console.error(error, "로그아웃 요청 실패");
    //   });
  };

  if (!isLogoutClicked) return null;

  return createPortal(
    <div className="logout-overlays">
      <div className="logout-modal-container">
        <div className="logout-top-exit">
          <img
            src={exit}
            alt="exit-icon"
            className="exit-icon"
            onClick={() => setIsLogoutClicked(false)}
          />
        </div>
        <div className="logout-check">로그아웃 하시겠습니까?</div>
        <div className="logout-bottom-buttons">
          <button
            className="logout-cancel"
            onClick={() => setIsLogoutClicked(false)}
          >
            취소
          </button>
          <button className="logout-confirm" onClick={logoutConfirmHandler}>
            확인
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("overlays-modal")
  );
};

export default LogoutModal;
