import { combineReducers } from "@reduxjs/toolkit";

import cartSlice from "./cart-slice";
import productDetailSlice from "./productDetail-slice";

const rootReducer = combineReducers({
  cart: cartSlice.reducer,
  productDetail: productDetailSlice.reducer,
});

export default rootReducer;
