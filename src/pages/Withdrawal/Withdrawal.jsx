import React, { useState } from "react";
import Sidebar from "../../common/Sidebar";

import "./Withdrawal.css";
import show from "../../assets/show-password.png";
import styled from "styled-components";

import { Link } from "react-router-dom";

const Breadcrumbs = styled.div`
  font-size: 0.9rem;
  color: #666;
`;

const Withdrawal = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="withdrawal-page">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="withdrawal-container">
        <Breadcrumbs>
          <Link to="/">HOME</Link> &gt; <Link to="/mypage">마이페이지</Link>{" "}
          &gt; 회원탈퇴
        </Breadcrumbs>
        <div className="withdrawal">
          <div className="password-check-statement">
            회원님의 개인정보를 안전하게 보호하기 위해 비밀번호를 다시 한번
            확인해주세요
          </div>
          <input
            type={showPassword ? "text" : "password"}
            className="withdrawal-check-password"
            placeholder="비밀번호를 입력해 주세요."
            required
          />
          <img
            src={show}
            className="check-show-password"
            alt="show-password"
            onClick={() => setShowPassword((prev) => !prev)}
          />
          <button className="check-password-button">확인</button>
        </div>
      </div>
    </div>
  );
};

export default Withdrawal;
