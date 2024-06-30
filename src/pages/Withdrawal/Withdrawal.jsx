import React, { useState } from "react";
import Sidebar from "../../common/Sidebar";

import "./Withdrawal.css";
import show from "../../assets/show-password.png";
import styled from "styled-components";

import { Link, useNavigate } from "react-router-dom";
import WithdrawalCheck from "../../components/Withdrawal/WithdrawalCheck";
import axios from "axios";

const Breadcrumbs = styled.div`
  font-size: 0.9rem;
  color: #666;
`;

const Withdrawal = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [isPasswordValidated, setIsPasswordValidated] = useState(false);

  const passwordInputChangeHandler = (e) => {
    const passwordInput = e.target.value;
    setPasswordInput(passwordInput.trim());
  };

  const passwordCheckButtonHandler = (e) => {
    e.preventDefault();

    //임시의 비밀번호 확인 성공 로직
    setIsPasswordValidated(true);

    // 실제 회원탈퇴 비밀번호 확인 axios 요청 로직
    // const accessToken = localStorage.getItem("accessToken");

    // axios
    //   .post(
    //     "/api/auth/delete_user",
    //     { password: passwordInput },
    //     {
    //       headers: {
    //         Authorization: `Bearer ${accessToken}`,
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   )
    //   .then((response) => {
    //     if (response.status === 200) {
    //       setIsPasswordValidated(true);
    //     } else {
    //       alert("회원님의 비밀번호와 일치하지 않습니다.");
    //     }
    //   })
    //   .catch((error) => {
    //     console.error(error, "회원 탈퇴 비밀번호 확인 요청 실패");
    //   });
  };

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
        {!isPasswordValidated && (
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
                value={passwordInput}
                onChange={passwordInputChangeHandler}
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
              onClick={passwordCheckButtonHandler}
            >
              확인
            </button>
          </div>
        )}
        {isPasswordValidated && <WithdrawalCheck />}
      </div>
    </div>
  );
};

export default Withdrawal;
