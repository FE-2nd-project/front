import { createSlice } from "@reduxjs/toolkit";

export const getProductRegisteredData = (currentEmail) => {
  return async (dispatch) => {
    //실제 등록된 판매 물품 조회 axios 요청 로직
    // axios
    //   .get(
    // `${process.env.REACT_APP_SERVER_URL}/api/sale/current`,
      //     {},
      //     {
      //       headers: {
      //         Authorization: `Bearer ${currentEmail}`,
      //       },
      //     }
      //   )
      //   .then((response) => {
      //     if (response.status === 200) {
      //       dispatch(
      //         productRegisteredActions.setProductRegisteredData({
      //           email: currentEmail,
      //           productRegisteredData: response.data,
      //         })
      //       );
      //     }
      //   })
      //   .catch((error) => {
      //     console.error(error, "등록된 판매 상품 조회 요청 실패");
      //   });

      // 임시 등록된 판매 물품 조회 로직
      dispatch(
        productRegisteredActions.setProductRegisteredData({
          email: currentEmail,
          productRegisteredData: [
            {
              productId: 1,
              productImage: "",
              productName: "언스트럭쳐 볼캡 뉴욕양키스 - BLACK",
              productPrice: 40000,
              genderCategory: "women",
              shopCategory: "cap",
              sizes: [
                { size: "Small", stock: 10 },
                { size: "Medium", stock: 15 },
              ],
              registerDate: "2024-06-29",
              sellByDate: "2024-12-31",
            },
            {
              productId: 2,
              productImage: "",
              productName: "쌈뽕쌈뽕한 모자",
              productPrice: 20000,
              genderCategory: "men",
              shopCategory: "cap",
              sizes: [{ size: "F", stock: 200 }],
              registerDate: "2024-07-02",
              sellByDate: "2024-11-31",
            },
          ],
        })
      );
  };
};

const productRegisteredSlice = createSlice({
  name: "productRegistered",
  initialState: {
    productRegisteredData: {},
  },
  reducers: {
    setProductRegisteredData(state, action) {
      const { email, productRegisteredData } = action.payload;
      state.productRegisteredData = {
        ...state.productRegisteredData,
        [email]: productRegisteredData,
      };
    },
  },
});

export const productRegisteredActions = productRegisteredSlice.actions;

export default productRegisteredSlice;
