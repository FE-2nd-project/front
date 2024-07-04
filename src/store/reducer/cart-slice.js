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
          console.log("데이터", response.data);
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
    cartTotalPrice: 0,
  },
  reducers: {
    setCartItemData(state, action) {
      state.cartItemData = action.payload;
    },
    setCartQuantity(state, action) {
      state.cartQuantity = action.payload;
    },
    addQuantity(state, action) {
      state.cartQuantity += action.payload;
    },
    subtractQuantity(state, action) {
      if (state.cartQuantity >= 1) {
        state.cartQuantity -= action.payload;
      }
    },
    setCartTotalPrice(state, action) {
      state.cartTotalPrice = action.payload;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
