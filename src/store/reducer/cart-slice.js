import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import cap from "../../assets/cap.png";

export const getCartData = () => {
  return async (dispatch) => {
    const accessToken = localStorage.getItem("accessToken");
    console.log(accessToken);
    // 실제 장바구니 조회 GET axios 요청 로직
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/api/cart`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data, "서버측 응답 데이터");
          dispatch(cartActions.setCartItemData(response.data.getCartItems));
        } else {
          console.log("장바구니 조회 서버 응답의 코드가 200이 아닙니다.");
        }
      })
      .catch((error) => {
        console.error(error, "장바구니 조회 요청 실패");
      });

    // 임시 장바구니 조회 데이터 로직
    // dispatch(
    //   cartActions.setCartItemData([
    //     {
    //       cartItemId: 1,
    //       productPicture: { cap },
    //       productName: "언스트럭쳐 볼캡 뉴욕 양키스",
    //       productSize: "Large",
    //       productQuantity: 3,
    //       productTotalPrice: 36000,
    //       productPrice: 12000,
    //       optionSize: ["Small", "Medium", "Large"],
    //     },
    //     {
    //       cartItemId: 2,
    //       productPicture: { cap },
    //       productName: "쌈뽕한 모자쓰",
    //       productSize: "Small",
    //       productQuantity: 2,
    //       productTotalPrice: 48000,
    //       productPrice: 24000,
    //       optionSize: ["Small", "Medium", "Large"],
    //     },
    //   ])
    // );
  };
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItemData: [],
    cartQuantity: 0,
  },
  reducers: {
    setCartItemData(state, action) {
      state.cartItemData = action.payload;
    },
    setCartQuantity(state, action) {
      state.cartQuantity = action.payload;
    },
    addQuantity(state, action) {
      state.cartQuantity += 1;
    },
    subtractQuantity(state, action) {
      if (state.cartQuantity >= 1) {
        state.cartQuantity -= 1;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
