import React, { useEffect } from "react";

import "./Cart.css";
import { useNavigate } from "react-router-dom";
import CartProduct from "../../components/Cart/CartProduct/CartProduct";
import CartNavLink from "../../components/Cart/CartNavLink/CartNavLink";
import PaymentInformation from "../../components/PaymentInformation/PaymentInformation";
import EmptyCart from "../../components/Cart/EmptyCart/EmptyCart";
import { useDispatch, useSelector } from "react-redux";
import { getCartData } from "../../store/reducer/cart-slice";

const Cart = () => {
  const cartItemData = useSelector((state) => state.cart.cartItemData);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 장바구니 get 요청
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      dispatch(getCartData());
    } else {
      alert("로그인을 먼저 해주십시오.");
      navigate("/login");
    }
  }, [dispatch]);

  return (
    <>
      <CartNavLink />
      <main className="cart-main-container">
        <div className="cart-list-container">
          <div className="list-top">
            <div className="top-normal-order">일반주문</div>
            <div className="cart-top-line"></div>
            {/* <div className="top-entire-check">
              <input type="checkbox" className="cart-checkbox-input" />
              <label>전체선택</label>
            </div> */}
          </div>
          <div className="list-bottom">
            {cartItemData &&
              cartItemData.length > 0 &&
              cartItemData.map((cartItem) => {
                return (
                  <CartProduct
                    key={cartItem.id}
                    itemId={cartItem.cartItemId}
                    productPicture={cartItem.itemUrl}
                    name={cartItem.itemName}
                    size={cartItem.itemSize}
                    quantity={cartItem.quantity}
                    totalPrice={cartItem.totalPrice}
                    price={cartItem.itemPrice}
                    optionSize={cartItem.optionSize}
                  />
                );
              })}
          </div>
          {cartItemData && cartItemData.length === 0 && <EmptyCart />}
          <div className="cart-bottom-line"></div>
        </div>
        <div className="cart-payment-container">
          <PaymentInformation topText="결제정보" total="총 주문금액" />
          <button
            className={
              cartItemData.length > 0 ? "order-button" : "order-button-disabled"
            }
            onClick={() => {
              if (cartItemData.length > 0) {
                navigate("/Order-payment");
                window.scrollTo({ top: 0, behavior: "auto" });
              }
            }}
            disabled={cartItemData.length === 0}
          >
            주문하기
          </button>
        </div>
      </main>
    </>
  );
};

export default Cart;
