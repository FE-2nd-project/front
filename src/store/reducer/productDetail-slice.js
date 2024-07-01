import { createSlice } from "@reduxjs/toolkit";

const productDetailSlice = createSlice({
  name: "productDetail",
  initialState: {
    items: [], // 장바구니에 담긴 아이템들
    totalQuantity: 0, // 장바구니에 담긴 총 아이템 수
    totalAmount: 0, // 총 결제 금액
    isProductAdded: {}, // 상품이 장바구니에 추가되었는지 true, false
  },

  reducers: {
    addCartItem(state, action) {
      const { itemId, size, quantity } = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.itemId === itemId && item.size === size
      );

      if (existingItem) {
        existingItem.quantity += quantity; // 이미 장바구니에 있는 경우 수량 추가
      } else {
        state.cartItems.push({ itemId, size, quantity }); // 새로운 상품 추가
      }
    },
  },
});

export const { addCartItem } = productDetailSlice.actions;

export default cartSlice;
