import React from "react";
import { createPortal } from "react-dom";

import "./CartUpdateModal.css";
import cap from "../../../assets/cap.png";
import exit from "../../../assets/exit.png";
import restockIcon from "../../../assets/explanation-mark.png";
import minus from "../../../assets/minus.svg";
import plus from "../../../assets/plus.svg";

const CartUpdateModal = ({ isUpdateClicked, setIsUpdateClicked }) => {
  if (!isUpdateClicked) return null;

  return createPortal(
    <div className="cart-update-overlays">
      <div className="cart-update-container">
        <div className="update-left-container">
          <img className="update-product-image" src={cap} alt="product-image" />
        </div>
        <div className="update-right-container">
          <div className="update-exit-icon-container">
            <img
              className="update-exit-icon"
              src={exit}
              alt="exit"
              onClick={() => setIsUpdateClicked(false)}
            />
          </div>
          <div className="update-product-name">
            언스트럭쳐 볼캡 뉴욕양키스 - BLACK
          </div>
          <div className="update-product-details">
            <div className="update-details-size">Size: M</div>
          </div>
          <div className="update-color-container"></div>
          <div className="update-size-container"></div>
          <div className="update-newDetails-count">
            <div className="update-newDetails-container">
              <select className="newDetails-select">
                <option value="none" className="placeholder-option">
                  사이즈 옵션을 선택해주세요
                </option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
              </select>
            </div>
            <div className="update-restock-container">
              <img
                className="update-restock-icon"
                src={restockIcon}
                alt="restock-icon"
              />
              <div className="update-restock-statement">
                상품 재입고 알람신청
              </div>
            </div>
            <div className="update-count-container">
              <div className="update-selected-size">M</div>
              <div className="update-number-container">
                <div className="decrement-icon-container">
                  <img className="decrement-icon" src={minus} />
                </div>
                <div className="update-count">3</div>
                <div className="increment-icon-container">
                  <img className="increment-icon" src={plus} />
                </div>
              </div>
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
