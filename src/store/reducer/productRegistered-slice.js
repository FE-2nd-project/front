import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductRegisteredData = () => {
  return async (dispatch) => {
    const accessToken = localStorage.getItem("accessToken");

    //실제 등록된 판매 물품 조회 axios 요청 로직
    // axios
    //   .get(`${process.env.REACT_APP_SERVER_URL}/api/sale/current`, {
    //     headers: {
    //       Authorization: `Bearer ${accessToken}`,
    //     },
    //   })
    //   .then((response) => {
    //     if (response.status === 200) {
    //       dispatch(
    //         productRegisteredActions.setProductRegisteredData(response.data)
    //       );
    //     }
    //   })
    //   .catch((error) => {
    //     console.error(error, "등록된 판매 상품 조회 요청 실패");
    //   });

    // 임시 등록된 판매 물품 조회 로직
    dispatch(
      productRegisteredActions.setProductRegisteredData([
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
        {
          productId: 3,
          productImage: "",
          productName: "쌈뽕쌈뽕한 모자",
          productPrice: 20000,
          genderCategory: "men",
          shopCategory: "cap",
          sizes: [{ size: "F", stock: 200 }],
          registerDate: "2024-07-02",
          sellByDate: "2024-11-31",
        },
        {
          productId: 4,
          productImage: "",
          productName: "쌈뽕쌈뽕한 모자",
          productPrice: 20000,
          genderCategory: "men",
          shopCategory: "cap",
          sizes: [{ size: "F", stock: 200 }],
          registerDate: "2024-07-02",
          sellByDate: "2024-11-31",
        },
        {
          productId: 5,
          productImage: "",
          productName: "쌈뽕쌈뽕한 모자",
          productPrice: 20000,
          genderCategory: "men",
          shopCategory: "cap",
          sizes: [{ size: "F", stock: 200 }],
          registerDate: "2024-07-02",
          sellByDate: "2024-11-31",
        },
        {
          productId: 6,
          productImage: "",
          productName: "쌈뽕쌈뽕한 모자",
          productPrice: 20000,
          genderCategory: "men",
          shopCategory: "cap",
          sizes: [{ size: "F", stock: 200 }],
          registerDate: "2024-07-02",
          sellByDate: "2024-11-31",
        },
        {
          productId: 7,
          productImage: "",
          productName: "쌈뽕쌈뽕한 모자",
          productPrice: 20000,
          genderCategory: "men",
          shopCategory: "cap",
          sizes: [{ size: "F", stock: 200 }],
          registerDate: "2024-07-02",
          sellByDate: "2024-11-31",
        },
        {
          productId: 8,
          productImage: "",
          productName: "쌈뽕쌈뽕한 모자",
          productPrice: 20000,
          genderCategory: "men",
          shopCategory: "cap",
          sizes: [{ size: "F", stock: 200 }],
          registerDate: "2024-07-02",
          sellByDate: "2024-11-31",
        },
        {
          productId: 9,
          productImage: "",
          productName: "쌈뽕쌈뽕한 모자",
          productPrice: 20000,
          genderCategory: "men",
          shopCategory: "cap",
          sizes: [{ size: "F", stock: 200 }],
          registerDate: "2024-07-02",
          sellByDate: "2024-11-31",
        },
        {
          productId: 10,
          productImage: "",
          productName: "쌈뽕쌈뽕한 모자",
          productPrice: 20000,
          genderCategory: "men",
          shopCategory: "cap",
          sizes: [{ size: "F", stock: 200 }],
          registerDate: "2024-07-02",
          sellByDate: "2024-11-31",
        },
        {
          productId: 11,
          productImage: "",
          productName: "쌈뽕쌈뽕한 모자",
          productPrice: 20000,
          genderCategory: "men",
          shopCategory: "cap",
          sizes: [{ size: "F", stock: 200 }],
          registerDate: "2024-07-02",
          sellByDate: "2024-11-31",
        },
        {
          productId: 12,
          productImage: "",
          productName: "쌈뽕쌈뽕한 모자",
          productPrice: 20000,
          genderCategory: "men",
          shopCategory: "cap",
          sizes: [{ size: "F", stock: 200 }],
          registerDate: "2024-07-02",
          sellByDate: "2024-11-31",
        },
        {
          productId: 13,
          productImage: "",
          productName: "쌈뽕쌈뽕한 모자",
          productPrice: 20000,
          genderCategory: "men",
          shopCategory: "cap",
          sizes: [{ size: "F", stock: 200 }],
          registerDate: "2024-07-02",
          sellByDate: "2024-11-31",
        },
      ])
    );
  };
};

const productRegisteredSlice = createSlice({
  name: "productRegistered",
  initialState: {
    productRegisteredData: [],
  },
  reducers: {
    setProductRegisteredData(state, action) {
      state.productRegisteredData = action.payload;
    },
  },
});

export const productRegisteredActions = productRegisteredSlice.actions;

export default productRegisteredSlice;
