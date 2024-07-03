import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCartData = () => {
  return async (dispatch) => {
    const accessToken = localStorage.getItem("accessToken");

    // 실제 장바구니 조회 GET axios 요청 로직
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/api/cart`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          dispatch(cartActions.setCartItemData(response.data.getCartItems));
        } else {
          console.log("장바구니 조회 서버 응답의 코드가 200이 아닙니다.");
        }
      })
      .catch((error) => {
        console.error(error, "장바구니 조회 요청 실패");
      });
  };
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItemData: [],
    cartQuantity: 0,
  },
  reducers: {
    setCartItemData(state, action) {
      state.cartItemData = action.payload;
    },
    setCartQuantity(state, action) {
      state.cartQuantity = action.payload;
    },
    addQuantity(state, action) {
      state.cartQuantity += 1;
    },
    subtractQuantity(state, action) {
      if (state.cartQuantity >= 1) {
        state.cartQuantity -= 1;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
