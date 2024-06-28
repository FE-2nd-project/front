import React, { useState } from "react";

import "./CartProduct.css";
import cap from "../../../assets/cap.png";
import CartDeleteModal from "../CartDeleteModal/CartDeleteModal";
import CartUpdateModal from "../CartUpdateModal/CartUpdateModal";

const CartProduct = () => {
  const [isUpdateClicked, setIsUpdateClicked] = useState(false);
  const [isDeleteClicked, setIsDeleteClicked] = useState(false);

  return (
    <>
      <CartUpdateModal
        isUpdateClicked={isUpdateClicked}
        setIsUpdateClicked={setIsUpdateClicked}
      />
      <CartDeleteModal
        isDeleteClicked={isDeleteClicked}
        setIsDeleteClicked={setIsDeleteClicked}
      />
      <div className="cart-product-container">
        <div className="product-left">
          <div className="product-img-container">
            <input className="product-checkbox" type="checkbox"></input>
            <img className="product-img" src={cap} />
          </div>
          <div className="product-info-container">
            <div className="product-name">
              언스트럭쳐 볼캡 뉴욕양키스 - BLACK
            </div>
            <div className="product-details-container">
              <div className="details-size">F</div>
              <div className="details-line"></div>
              <div className="details-quantity">1개</div>
            </div>
            <div className="product-price">30,000원</div>
          </div>
        </div>
        <div className="product-right">
          <button
            className="product-update"
            onClick={() => setIsUpdateClicked((prev) => !prev)}
          >
            옵션 변경
          </button>
          <button
            className="product-delete"
            onClick={() => setIsDeleteClicked((prev) => !prev)}
          >
            삭제
          </button>
        </div>
      </div>
    </>
  );
};

export default CartProduct;
