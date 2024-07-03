import React, { useState } from "react";

import Cookies from "js-cookie";

import "./Login.css";
import show from "../../assets/show-password.png";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";

import { cartActions } from "../../store/reducer/cart-slice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const cartQuantity = useSelector((state) => state.cart.cartQuantity);

  const inputChangeHandler = (e, setInput) => {
    const changedInput = e.target.value;
    setInput(changedInput.trim());
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regex.test(email)) {
      return true;
    } else {
      return false;
    }
  };

  // 로그인 버튼 핸들 함수
  const loginClickHandler = (e) => {
    e.preventDefault();

    if (!validateEmail(emailInput)) {
      alert("이메일 형식의 아이디를 적어주세요.");
      return;
    }

    // 실제 로그인 axios 요청
    axios.defaults.withCredentials = true;
    
    axios
      .post(
        `${process.env.REACT_APP_SERVER_URL}/api/auth/login`,
        {
          email: emailInput,
          password: passwordInput,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        const { token, cartQuantity } = response.data;
        const accessToken = token.accessToken;
        const refreshToken = token.refreshToken;

        if (response.status === 200) {
          localStorage.setItem("accessToken", accessToken);
          Cookies.set("refreshToken", refreshToken, {
            expires: 7,
          });

          dispatch(cartActions.setCartQuantity(cartQuantity));
          navigate("/");
        } else {
          alert("이메일이나 패스워드가 일치하지 않습니다.");
        }
      })
      .catch((error) => {
        console.error(error, "서버에 로그인 요청 실패");
      });
  };

  return (
    <>
      <div className="login-container">
        <h2 className="login-text">로그인</h2>
        <form className="login-form">
          <div className="login-email-container">
            <label className="login-email-label">이메일</label>
            <input
              className="email-input"
              placeholder="이메일을 입력해 주세요"
              type="email"
              value={emailInput}
              onChange={(e) => inputChangeHandler(e, setEmailInput)}
              required
            />
          </div>
          <div className="login-password-container">
            <label className="login-password-label">비밀번호</label>
            <input
              className="password-input"
              placeholder="비밀번호를 입력해 주세요"
              type={showPassword ? "text" : "password"}
              value={passwordInput}
              onChange={(e) => inputChangeHandler(e, setPasswordInput)}
              required
            />
            <img
              src={show}
              className="show-password-icon"
              alt="show-password"
              onClick={() => setShowPassword((prev) => !prev)}
            />
          </div>
          <button className="login-button" onClick={loginClickHandler}>
            로그인
          </button>
        </form>
        <div className="lookfor-email-password">
          <div>아이디 찾기</div>
          <div className="line"></div>
          <div>비밀번호 찾기</div>
        </div>
        <div className="direct-to-signup">
          <div className="signup-text">
            회원 가입하고 1만 마일리지를 받으세요
          </div>
          <button className="signup-button" onClick={() => navigate("/signup")}>
            회원가입
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
