import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartQuantity: 0,
  },
  reducers: {
    setCartQuantity(state, action) {
      state.cartQuantity = action.payload;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
