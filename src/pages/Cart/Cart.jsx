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
  const currentEmail = localStorage.getItem("email");
  const cartItemData = useSelector(
    (state) => state.cart.cartItemData[currentEmail]
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 장바구니 get 요청
  useEffect(() => {
    dispatch(getCartData(currentEmail));
  }, [dispatch, currentEmail]);

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
              cartItemData.map((cartItem) => {
                return (
                  <CartProduct
                    key={cartItem.id}
                    itemId={cartItem.cartItemId}
                    productPicture={cartItem.productPicture}
                    name={cartItem.productName}
                    size={cartItem.productSize}
                    quantity={cartItem.productQuantity}
                    totalPrice={cartItem.productTotalPrice}
                    price={cartItem.productPrice}
                    optionSize={cartItem.optionSize}
                  />
                );
              })}
          </div>
          {cartItemData.length === 0 && <EmptyCart />}
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
