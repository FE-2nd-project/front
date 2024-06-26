import React from "react";

import "./Cart.css";
import CartNavLink from "../../components/Cart/CartNavLink/CartNavLink";
import { useNavigate } from "react-router-dom";
import CartProduct from "../../components/Cart/CartProduct/CartProduct";

const Cart = () => {
  const navigate = useNavigate();
  return (
    <>
      <CartNavLink />
      {/* <button onClick={() => navigate("/Order-payment")}>주문결제</button> */}
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
        <div className="cart-payment-container"></div>
      </main>
    </>
  );
};

export default Cart;
