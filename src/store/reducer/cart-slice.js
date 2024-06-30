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
    addQuantity(state, action) {
      state.cartQuantity += 1;
    },
    subtractQuantity(state, action) {
      state.cartQuantity -= 1;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
