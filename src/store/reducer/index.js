import { combineReducers } from "@reduxjs/toolkit";

import cartSlice from "./cart-slice";
import productDetailSlice from "./productDetail-slice";
import productRegisteredSlice from "./productRegistered-slice";

const rootReducer = combineReducers({
  cart: cartSlice.reducer,
  productDetail: productDetailSlice.reducer,
  productRegistered: productRegisteredSlice.reducer,
});

export default rootReducer;
