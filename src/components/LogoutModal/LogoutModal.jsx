import React from "react";
import { createPortal } from "react-dom";

import "./LogoutModal.css";
import exit from "../../assets/exit.png";

const LogoutModal = ({ isLogoutClicked, setIsLogoutClicked }) => {
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
          <button className="logout-confirm">확인</button>
        </div>
      </div>
    </div>,
    document.getElementById("overlays-modal")
  );
};

export default LogoutModal;
