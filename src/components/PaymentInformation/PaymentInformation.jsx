import React from "react";
import "./PaymentInformation.css";

const PaymentInformation = ({ topText, total }) => {
  return (
    <div className="payment-section-container">
      <h2 className="section-title">{topText}</h2>
      <div className="order-summary-container">
        <div className="order-summary">
          <div className="order-summary-price">
            <p>상품 금액 </p>
            <p>price</p>
          </div>

          <div className="order-summary-delivery">
            <p>배송비</p>
            <p>무료배송</p>
          </div>
        </div>
        <div className="order-summary-total">
          <p>{total}</p>
          <p>totalPrice</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentInformation;
