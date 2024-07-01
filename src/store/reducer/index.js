import { combineReducers } from "@reduxjs/toolkit";

import cartSlice from "./cart-slice";

const rootReducer = combineReducers({
  cart: cartSlice.reducer,
});

export default rootReducer;
