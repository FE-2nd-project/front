import React, { useState } from "react";

import "./CartProduct.css";
import cap from "../../../assets/cap.png";
import CartDeleteModal from "../CartDeleteModal/CartDeleteModal";

const CartProduct = () => {
  const [isDeleteClicked, setIsDeleteClicked] = useState(false);

  return (
    <>
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
            <div className="product-name">언스트럭쳐 볼캡 뉴욕양키스</div>
            <div className="product-details-container">
              <div className="details-color">BLACK</div>
              <div className="details-line"></div>
              <div className="details-size">F</div>
              <div className="details-line"></div>
              <div className="details-quantity">1개</div>
            </div>
            <div className="product-price">30,000원</div>
          </div>
        </div>
        <div className="product-right">
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
