import React from "react";
import { createPortal } from "react-dom";

import "./CartDeleteModal.css";
import exit from "../../../assets/exit.png";
import axios from "axios";
import { useDispatch } from "react-redux";
import { cartActions, getCartData } from "../../../store/reducer/cart-slice";

const CartDeleteModal = ({ isDeleteClicked, setIsDeleteClicked, itemId }) => {
  const dispatch = useDispatch();

  const deleteConfirmHandler = () => {
    const accessToken = localStorage.getItem("accessToken");
    const currentEmail = localStorage.getItem("email");

    // 임시 장바구니 삭제 요청 로직
    dispatch(cartActions.subtractQuantity({ email: currentEmail }));
    setIsDeleteClicked(false);
    dispatch(getCartData(currentEmail));

    // 실제 장바구니 아이템 axios delete 요청 로직
    // axios
    //   .delete(
    // `${process.env.REACT_APP_SERVER_URL}/api/cart/${itemId}`,
    //     {},
    //     {
    //       headers: {
    //         Authorization: `Bearer ${accessToken}`,
    //       },
    //     }
    //   )
    //   .then((response) => {
    //     if (response.status === 200) {
    //       dispatch(cartActions.subtractQuantity({ email: currentEmail }));
    //       setIsDeleteClicked(false);
    //       dispatch(getCartData(currentEmail));
    //     }
    //   })
    //   .catch((error) => {
    //     console.error(error, "장바구니 아이템 삭제 요청 실패");
    //   });
  };

  if (!isDeleteClicked) return null;

  return createPortal(
    <div className="cart-delete-overlays">
      <div className="cart-delete-modal-container">
        <div className="delete-top-exit">
          <img
            src={exit}
            alt="exit-icon"
            className="exit-icon"
            onClick={() => setIsDeleteClicked((prev) => !prev)}
          />
        </div>
        <div className="delete-middle-check">
          선택한 상품을 삭제하시겠습니까?
        </div>
        <div className="delete-bottom-buttons">
          <button
            className="delete-cancel"
            onClick={() => setIsDeleteClicked((prev) => !prev)}
          >
            취소
          </button>
          <button className="delete-confirm" onClick={deleteConfirmHandler}>
            확인
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("overlays-modal")
  );
};

export default CartDeleteModal;
