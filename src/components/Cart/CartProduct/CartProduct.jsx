import React from "react";

import "./CartProduct.css";

const CartProduct = () => {
  return (
    <div className="product-container">
      <div className="product-left">
        <div className="product-img-container">
          {/* <div className="product-checkbox"></div>
          <img /> */}
        </div>
        <div className="product-info-container">
          <div className="product-name">이름</div>
          <div className="product-details">
            <div className="details-color"></div>
            <div className="details-size"></div>
            <div className="details-quantity"></div>
          </div>
          <div className="product-price"></div>
        </div>
      </div>
      <div className="product-right">
        <button className="product-delete"></button>
      </div>
    </div>
  );
};

export default CartProduct;
