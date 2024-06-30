import { createSlice } from "@reduxjs/toolkit";

const productDetailSlice = createSlice({
  name: "productDetail",
  initialState: {
    items: [], // 장바구니에 담긴 아이템들
    totalQuantity: 0, // 장바구니에 담긴 총 아이템 수
    totalAmount: 0, // 총 결제 금액
  },
});
