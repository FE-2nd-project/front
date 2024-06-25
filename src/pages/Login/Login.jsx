import React from "react";
import NavBar from "../../components/NavBar/NavBar";

import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <div className="login-container">
        <h2 className="login-text">로그인</h2>
        <form className="login-form">
          <div className="login-email-container">
            <label className="login-email-label">이메일</label>
            <input
              className="email-input"
              placeholder="이메일을 입력해 주세요"
              required
            />
          </div>
          <div className="login-password-container">
            <label className="login-password-label">비밀번호</label>
            <input
              className="password-input"
              placeholder="비밀번호를 입력해 주세요"
              required
            />
          </div>
          <button className="login-button">로그인</button>
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
