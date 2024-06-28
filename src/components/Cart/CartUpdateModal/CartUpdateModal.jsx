import React from "react";
import { createPortal } from "react-dom";

import "./CartUpdateModal.css";

const CartUpdateModal = ({ isUpdateClicked, setIsUpdateClicked }) => {
  if (!isUpdateClicked) return null;

  return createPortal(
    <div className="cart-update-overlays">
      <div className="cart-update-container">
        <div className="update-left-container">
          <img className="product-image" src="hat.jpg" alt="product-image" />
        </div>
        <div className="update-right-container">
          <img className="update-exit-icon" />
          <div className="update-product-name">언스트럭쳐 볼캡 뉴욕양키스</div>
          <div className="update-product-details">
            <div className="details-color">BLACK</div>
            <div className="details-line"></div>
            <div className="details-size">F</div>
          </div>
          <div className="update-color-container"></div>
          <div className="update-size-container"></div>
          <div className="update-totalDetails-count">
            <div className="update-totalDetails-container">
              <div>색상옵션</div>
              <div>사이즈옵션</div>
            </div>
            <div className="update-count-container">
              <img className="decrement-icon" />
              <div className="update-count">3</div>
              <img className="increment-icon" />
            </div>
          </div>
          <div className="update-total-price-container">
            <div className="update-total-price">총 결제 금액</div>
            <div className="update-total-pricenum">30000원</div>
          </div>
          <button className="update-button">변경하기</button>
        </div>
      </div>
    </div>,
    document.getElementById("overlays-modal")
  );
};

export default CartUpdateModal;
