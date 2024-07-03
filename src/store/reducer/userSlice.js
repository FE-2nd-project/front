import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserData = (token) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/api/mypage/user`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(userActions.setUser(response.data.data.mypageUserInfos[0]));
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    phone_num: "",
    email: "",
    address: "",
    profile_picture_url: "",
    shopping_pay: 0,
    about_me: "",
  },
  reducers: {
    setUser(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
