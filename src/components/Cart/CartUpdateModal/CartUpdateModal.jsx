import React, { useState } from "react";
import { createPortal } from "react-dom";

import "./CartUpdateModal.css";
import cap from "../../../assets/cap.png";
import exit from "../../../assets/exit.png";
import restockIcon from "../../../assets/explanation-mark.png";
import minus from "../../../assets/minus.svg";
import plus from "../../../assets/plus.svg";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getCartData } from "../../../store/reducer/cart-slice";

const CartUpdateModal = ({
  isUpdateClicked,
  setIsUpdateClicked,
  itemId,
  productPicture,
  name,
  optionSize,
  size,
  quantity,
  totalPrice,
  price,
}) => {
  const [itemSize, setItemSize] = useState(size);
  const [itemQuantity, setItemQuantity] = useState(quantity);
  const [itemTotalPrice, setItemTotalPrice] = useState(totalPrice);

  const dispatch = useDispatch();

  const changeSizeHandler = (e) => {
    const changedSize = e.target.value;
    setItemSize(changedSize);
  };

  const minusClickHandler = () => {
    if (itemQuantity > 1) {
      setItemQuantity(itemQuantity - 1);
      setItemTotalPrice(itemTotalPrice - price);
    }
  };

  const plusClickHandler = () => {
    setItemQuantity(itemQuantity + 1);
    setItemTotalPrice(itemTotalPrice + price);
  };

  const updateButtonHandler = (e) => {
    e.preventDefault();

    //임시 장바구니 업데이트 확인 로직
    setIsUpdateClicked(false);

    // 실제 장바구니 axois update 요청 로직
    // const accessToken = localStorage.getItem("accessToken");
    // const currentEmail = localStorage.getItem("email");

    // axios
    //   .put(
    //     "/api/cart/update",
    //     {
    //       cartItemId: itemId,
    //       cartItemSize: itemSize,
    //       cartItemQuantity: itemQuantity,
    //     },
    //     {
    //       headers: {
    //         Authorization: `Bearer ${accessToken}`,
    //         "Content-type": "application/json",
    //       },
    //     }
    //   )
    //   .then((response) => {
    //     if (response.status === 200) {
    //       setIsUpdateClicked(false);
    //       dispatch(getCartData(currentEmail));
    //     }
    //   })
    //   .catch((error) => {
    //     console.error(error, "장바구니 아이템 수정 요청 실패");
    //   });
  };

  if (!isUpdateClicked) return null;

  return createPortal(
    <div className="cart-update-overlays">
      <div className="cart-update-container">
        <div className="update-left-container">
          <img
            className="update-product-image"
            src={cap}
            alt="productPicture"
          />
        </div>
        <div className="update-right-container">
          <div className="update-exit-icon-container">
            <img
              className="update-exit-icon"
              src={exit}
              alt="exit"
              onClick={() => setIsUpdateClicked(false)}
            />
          </div>
          <div className="update-product-name">{name}</div>
          <div className="update-product-details">
            <div className="update-details-size">Size: {itemSize}</div>
          </div>
          <div className="update-color-container"></div>
          <div className="update-size-container"></div>
          <div className="update-newDetails-count">
            <div className="update-newDetails-container">
              <select
                className="newDetails-select"
                value={itemSize}
                onChange={changeSizeHandler}
              >
                <option value="none" className="placeholder-option">
                  사이즈 옵션을 선택해주세요
                </option>
                {optionSize.map((size) => {
                  return <option value={size}>{size}</option>;
                })}
              </select>
            </div>
            <div className="update-restock-container">
              <img
                className="update-restock-icon"
                src={restockIcon}
                alt="restock-icon"
              />
              <div className="update-restock-statement">
                상품 재입고 알람신청
              </div>
            </div>
            <div className="update-count-container">
              <div className="update-selected-size">{itemSize}</div>
              <div className="update-number-container">
                <div className="decrement-icon-container">
                  <img
                    className="decrement-icon"
                    src={minus}
                    onClick={minusClickHandler}
                  />
                </div>
                <div className="update-count">{itemQuantity}</div>
                <div className="increment-icon-container">
                  <img
                    className="increment-icon"
                    src={plus}
                    onClick={plusClickHandler}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="update-total-price-container">
            <div className="update-total-price">총 결제 금액</div>
            <div className="update-total-pricenum">
              {itemTotalPrice.toLocaleString()}원
            </div>
          </div>
          <button className="update-button" onClick={updateButtonHandler}>
            변경하기
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("overlays-modal")
  );
};

export default CartUpdateModal;
