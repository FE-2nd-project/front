import React from "react";
import "./PaymentInformation.css";

const PaymentInformation = ({ topText, total, cartItemData }) => {
  let totalPrice = cartItemData.reduce((accumulator, cartItem) => {
    return accumulator + cartItem.productTotalPrice;
  }, 0);

  return (
    <div className="payment-section-container">
      <h2 className="section-title">{topText}</h2>
      <div className="order-summary-container">
        <div className="order-summary">
          <div className="order-summary-price">
            <p>상품 금액</p>
            <p>{totalPrice.toLocaleString()}원</p>
          </div>

          <div className="order-summary-delivery">
            <p>배송비</p>
            <p>무료배송</p>
          </div>

          <div className="order-summary-discount">
            <p>총 할인금액</p>
            <p>-0원</p>
          </div>
        </div>
        <div className="order-summary-total">
          <p>{total}</p>
          <p>{totalPrice.toLocaleString()}원</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentInformation;
