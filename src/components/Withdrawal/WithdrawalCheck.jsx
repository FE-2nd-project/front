import React from "react";

import "./WithdrawalCheck.css";
import explanationMark from "../../assets/explanation-mark.png";
import { useNavigate } from "react-router-dom";

const WithdrawalCheck = () => {
  const navigate = useNavigate();
  return (
    <div className="withdrawal-check-container">
      <div className="withdraw-check-statements">
        <div className="first-check-statement">
          회원 탈퇴를 진행하시겠습니까?
        </div>
        <div className="second-check-statement">
          <img
            className="explanation-mark"
            src={explanationMark}
            alt="explanation-mark"
          />
          <div>
            회원 탈퇴 시, 모든 정보 및 구입/판매 물품 조회가 불가능합니다.
          </div>
        </div>
        <div className="third-check-statement">
          <img
            className="explanation-mark"
            src={explanationMark}
            alt="explanation-mark"
          />
          <div>
            회원 탈퇴 후, 보유하신 쿠폰과 포인트도 함께 사라집니다. 추후에 동일
            계정으로 재가입하셔도 복구되지 않습니다!
          </div>
        </div>
      </div>
      <div className="withdraw-checkbox-container">
        <input className="withdraw-checkbox" type="checkbox" required />
        <label className="withdraw-checkbox-label">
          회원 탈퇴 유의사항을 확인하였으며 동의합니다.
        </label>
      </div>
      <div className="withdraw-buttons">
        <button
          className="withdraw-cancel-button"
          onClick={() => navigate("/")}
        >
          취소
        </button>
        <button className="withdraw-confirm-button">회원 탈퇴</button>
      </div>
    </div>
  );
};

export default WithdrawalCheck;
