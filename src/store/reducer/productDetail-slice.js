import { createSlice } from "@reduxjs/toolkit";

const productDetailSlice = createSlice({
  name: "productDetail",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
    isProductAdded: {}, // add to bag을 한 상품이 장바구니에 추가되었는지 true, false
  },

  reducers: {
    addCartItem(state, action) {
      const { itemId, size, quantity } = action.payload;
      const existingItem = state.items.find(
        (item) => item.itemId === itemId && item.size === size
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ itemId, size, quantity });
      }

      state.totalQuantity += quantity; // 전체 수량
      state.totalAmount += quantity * 49000; // 단가 * 수량
      state.isProductAdded[itemId] = true;

      console.log(
        "이건 productDetail 슬라이스에서 출력되는:",
        itemId,
        size,
        quantity
      );
    },
  },
});

export const productDetailActions = productDetailSlice.actions;

export default productDetailSlice;
