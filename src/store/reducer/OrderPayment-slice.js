import { createSlice } from "@reduxjs/toolkit";

const OrderPaymentSlice = createSlice({
  name: "OrderPayment",
  initialState: {
    OrderPaymentId: null,
  },
  reducers: {
    setOrderPaymentId(state, action) {
      state.OrderPaymentId = action.payload;
    },
  },
});

export const OrderPaymentActions = OrderPaymentSlice.actions;
export default OrderPaymentSlice;
