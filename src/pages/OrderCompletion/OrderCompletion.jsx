import React from "react";
import CartNavLink from "../../components/Cart/CartNavLink/CartNavLink";

import "./OrderCompletion.css";
import confirmation from "../../assets/confirmation.png";
import { useNavigate } from "react-router-dom";

const OrderCompletion = () => {
  const navigate = useNavigate();
  // 현재 시간
  const currentTime = new Date().toLocaleString();

  // 랜덤 오더 넘버 생성
  const generateOrderNumber = () => {
    let result = "";
    const numbers = "0123456789";

    for (let i = 0; i <= 15; i++) {
      const randomNum = Math.floor(Math.random() * numbers.length);
      result += numbers[randomNum];
    }

    return result;
  };

  return (
    <>
      <CartNavLink />
      <div className="order-completion-container">
        <div className="top-completed-container">
          <div className="top-completed-icon">
            <img src={confirmation} className="completed-icon" />
          </div>
          <div className="top-completed-right">
            <div className="completed-right-title">
              고객님의 주문이 완료 되었습니다.
            </div>
            <div className="completed-right-subtitle">
              주문내역 및 배송에 관한 안내는{" "}
              <span className="order-inquiry">주문조회</span>를 통하여 확인
              가능합니다.
            </div>
            <div className="completed-right-order-number">
              주문번호 :{" "}
              <span className="only-order-number">{generateOrderNumber()}</span>
            </div>
            <div className="completed-right-order-date">
              주문일자 : {currentTime}
            </div>
          </div>
        </div>
        <div className="bottom-completed-container">
          <div className="bottom-completed">
            <div className="bottom-completed-title">결제정보</div>
            <div className="bottom-completed-box-container">
              <table className="bottom-completed-table">
                <tr>
                  <th className="bottom-completed-totalprice-text">
                    최종 결제금액
                  </th>
                  <td className="bottom-completed-totalprice-price">price</td>
                </tr>
                <tr>
                  <th className="bottom-completed-PaymentMethod-text">
                    결제수단
                  </th>
                  <td className="bottom-completed-PaymentMethod-method">
                    <table className="PaymentMethod-group">
                      <tr>
                        <th>입금자:</th>
                        <td>주문자이름</td>
                      </tr>
                      <tr>
                        <th>결제수단:</th>
                        <td>신용카드</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <button className="continue-button" onClick={() => navigate("/")}>
          쇼핑 계속하기
        </button>
      </div>
    </>
  );
};

export default OrderCompletion;
