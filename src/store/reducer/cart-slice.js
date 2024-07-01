import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItemData: {},
    cartQuantity: {},
  },
  reducers: {
    setCartItemData(state, action) {
      const { email, cartItemData } = action.payload;
      state.cartItemData[email] = cartItemData;
    },
    setCartQuantity(state, action) {
      const { email, cartQuantity } = action.payload;
      state.cartQuantity[email] = cartQuantity;
    },
    addQuantity(state, action) {
      const { email } = action.payload;

      if (!state.cartQuantity[email]) {
        state.cartQuantity[email] = 1;
      } else {
        state.cartQuantity[email] += 1;
      }
    },
    subtractQuantity(state, action) {
      const { email } = action.payload;

      if (state.cartQuantity[email] > 1) {
        state.cartQuantity[email] -= 1;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
