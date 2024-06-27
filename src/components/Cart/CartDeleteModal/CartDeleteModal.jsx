import React from "react";
import { createPortal } from "react-dom";

import "./CartDeleteModal.css";
import exit from "../../../assets/exit.png";

const CartDeleteModal = ({ isDeleteClicked, setIsDeleteClicked }) => {
  if (!isDeleteClicked) return null;

  return createPortal(
    <div className="cart-delete-overlays">
      <div className="cart-delete-modal-container">
        <div className="delete-top-exit">
          <img
            src={exit}
            alt="exit-icon"
            className="exit-icon"
            onClick={() => setIsDeleteClicked((prev) => !prev)}
          />
        </div>
        <div className="delete-middle-check">
          선택한 상품을 삭제하시겠습니까?
        </div>
        <div className="delete-bottom-buttons">
          <button
            className="delete-cancel"
            onClick={() => setIsDeleteClicked((prev) => !prev)}
          >
            취소
          </button>
          <button className="delete-confirm">확인</button>
        </div>
      </div>
    </div>,
    document.getElementById("overlays-modal")
  );
};

export default CartDeleteModal;
