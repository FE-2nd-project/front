import React, { useEffect } from "react";

import "./Cart.css";
import { useNavigate } from "react-router-dom";
import CartProduct from "../../components/Cart/CartProduct/CartProduct";
import CartNavLink from "../../components/Cart/CartNavLink/CartNavLink";
import PaymentInformation from "../../components/PaymentInformation/PaymentInformation";
import EmptyCart from "../../components/Cart/EmptyCart/EmptyCart";
import axios from "axios";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/reducer/cart-slice";

const Cart = () => {
  const accessToken = localStorage.getItem("accessToken");
  const currentEmail = localStorage.getItem("email");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(
        "/api/cart",
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          dispatch(
            cartActions.setCartItemData({
              email: currentEmail,
              cartItemData: response.data,
            })
          );
        }
      });
  }, []);

  return (
    <>
      <CartNavLink />
      <main className="cart-main-container">
        <div className="cart-list-container">
          <div className="list-top">
            <div className="top-normal-order">일반주문</div>
            <div className="cart-top-line"></div>
            <div className="top-entire-check">
              <input type="checkbox" className="cart-checkbox-input" />
              <label>전체선택</label>
            </div>
          </div>
          <div className="list-bottom">
            <CartProduct />
            <CartProduct />
          </div>
          <EmptyCart />
          <div className="cart-bottom-line"></div>
        </div>
        <div className="cart-payment-container">
          <PaymentInformation topText="결제정보" total="총 주문금액" />
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
