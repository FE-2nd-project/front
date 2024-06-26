import React from "react";

import "./Cart.css";
import { useNavigate } from "react-router-dom";
import CartProduct from "../../components/Cart/CartProduct/CartProduct";
import CartNavLink from "../../components/Cart/CartNavLink/CartNavLink";
import PaymentInformation from "../../components/PaymentInformation/PaymentInformation";

const Cart = () => {
  const navigate = useNavigate();
  return (
    <>
      <CartNavLink />
      <main className="cart-main-container">
        <div className="cart-list-container">
          <div className="list-top">
            <div className="top-normal-order">일반주문</div>
            <div className="top-line"></div>
            <div className="top-entire-check">
              <input type="checkbox" className="checkbox-input" />
              <label>전체선택</label>
            </div>
          </div>
          <div className="list-bottom">
            <CartProduct />
          </div>
        </div>
        <div className="cart-payment-container">
          <PaymentInformation topText="결제정보" />
          <button
            className="order-button"
            onClick={() => navigate("/Order-payment")}
          >
            주문하기
          </button>
        </div>
      </main>
    </>
  );
};

export default Cart;
