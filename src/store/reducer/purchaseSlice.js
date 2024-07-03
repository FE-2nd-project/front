import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPurchases = (token) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/api/mypage/order`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(purchaseActions.setPurchases(response.data.data.orders));
    } catch (error) {
      console.error("Error fetching purchases:", error);
    }
  };
};

const purchaseSlice = createSlice({
  name: "purchase",
  initialState: {
    purchases: [],
  },
  reducers: {
    setPurchases(state, action) {
      state.purchases = action.payload;
    },
  },
});

export const purchaseActions = purchaseSlice.actions;

export default purchaseSlice;
