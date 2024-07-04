import React from "react";

import "./EmptyCart.css";
import empty from "../../../assets/empty-balloon.png";
import { useNavigate } from "react-router-dom";

const EmptyCart = () => {
  const navigate = useNavigate();
  return (
    <div className="empty-cart-container">
      <div className="empty-icon-container">
        <img src={empty} className="empty-icon" />
      </div>
      <div className="empty-statement">장바구니에 담긴 상품이 없습니다</div>
      <button
        className="empty-continue-button"
        onClick={() => {
          navigate("/");
          window.scrollTo({ top: 0 });
        }}
      >
        쇼핑 계속하기
      </button>
    </div>
  );
};

export default EmptyCart;
