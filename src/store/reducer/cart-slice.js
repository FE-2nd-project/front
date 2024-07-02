import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import cap from "../../assets/cap.png";

export const getCartData = (currentEmail) => {
  return async (dispatch) => {
    const accessToken = localStorage.getItem("accessToken");

    // 실제 장바구니 조회 GET axios 요청 로직
    // axios
    //   .get(
    // `${process.env.REACT_APP_SERVER_URL}/api/cart`,
      //     {},
      //     {
      //       headers: {
      //         Authorization: `Bearer ${accessToken}`,
      //       },
      //     }
      //   )
      //   .then((response) => {
      //     if (response.status === 200) {
      //       dispatch(
      //         cartActions.setCartItemData({
      //           email: currentEmail,
      //           cartItemData: response.data,
      //         })
      //       );
      //     } else {
      //       console.log("장바구니 조회 서버 응답의 코드가 200이 아닙니다.");
      //     }
      //   })
      //   .catch((error) => {
      //     console.error(error, "장바구니 조회 요청 실패");
      //   });

      console.log(currentEmail);
    // 임시 장바구니 조회 데이터 로직
    dispatch(
      cartActions.setCartItemData({
        email: currentEmail,
        cartItemData: [
          {
            cartItemId: 1,
            productPicture: { cap },
            productName: "언스트럭쳐 볼캡 뉴욕 양키스",
            productSize: "Large",
            productQuantity: 3,
            productTotalPrice: 36000,
            productPrice: 12000,
            optionSize: ["Small", "Medium", "Large"],
          },
          {
            cartItemId: 2,
            productPicture: { cap },
            productName: "쌈뽕한 모자쓰",
            productSize: "Small",
            productQuantity: 2,
            productTotalPrice: 48000,
            productPrice: 24000,
            optionSize: ["Small", "Medium", "Large"],
          },
        ],
      })
    );
  };
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItemData: {},
    cartQuantity: {},
  },
  reducers: {
    setCartItemData(state, action) {
      const { email, cartItemData } = action.payload;
      //state.cartItemData[email] = cartItemData;
      state.cartItemData = { ...state.cartItemData, [email]: cartItemData };
    },
    setCartQuantity(state, action) {
      const { email, cartQuantity } = action.payload;
      // state.cartQuantity[email] = cartQuantity;
      state.cartQuantity = { ...state.cartQuantity, [email]: cartQuantity };
    },
    addQuantity(state, action) {
      const { email } = action.payload;

      if (!state.cartQuantity[email]) {
        state.cartQuantity[email] = 1;
      } else {
        state.cartQuantity[email] += 1;
      }
    },
    subtractQuantity(state, action) {
      const { email } = action.payload;

      if (state.cartQuantity[email] >= 1) {
        state.cartQuantity[email] -= 1;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
