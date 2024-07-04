import React from "react";

import empty from "../../../assets/empty-balloon.png";
import { useNavigate } from "react-router-dom";
import "./EmptyRegistered.css";

const EmptyRegistered = () => {
  const navigate = useNavigate();
  return (
    <div className="empty-registered-container">
      <div className="empty-icon-container">
        <img src={empty} className="empty-icon" />
      </div>
      <div className="empty-statement">등록한 판매 상품이 없습니다.</div>
      <button
        className="empty-continue-button"
        onClick={() => {
          navigate("/mypage/register");
          window.scrollTo({ top: 0 });
        }}
      >
        상품 판매 등록
      </button>
    </div>
  );
};

export default EmptyRegistered;
