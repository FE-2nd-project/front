import React, { useState } from "react";
import Sidebar from "../../common/Sidebar";

import "./Withdrawal.css";
import show from "../../assets/show-password.png";
import styled from "styled-components";

import { Link, useNavigate } from "react-router-dom";
import WithdrawalCheck from "../../components/Withdrawal/WithdrawalCheck";

const Breadcrumbs = styled.div`
  font-size: 0.9rem;
  color: #666;
`;

const Withdrawal = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  // 비밀번호 확인 성공시 WithdrawalCheck 컴포넌트 띄우기
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
          <div className="withdrawal-password-container">
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
          </div>
          <button
            className="check-password-button"
            onClick={() => navigate("/mypage/withdrawal-check")}
          >
            확인
          </button>
        </div>
        <WithdrawalCheck />
      </div>
    </div>
  );
};

export default Withdrawal;
