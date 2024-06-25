import React from "react";
import "./OrderPayment.css"; // CSS 파일 import
import NavBar from "../components/NavBar/NavBar";

const OrderPayment = () => {
  return (
    <div>
      <NavBar />
      <div className="order-payment-container">
        <div className="order-Information-container">
          <div className="order-section-container">
            <div className="order-section-Personal-information">
              <h2 className="section-title">주문자 정보</h2>
              <form className="order-form">
                <div className="form-group">
                  <label>이름</label>
                  <input
                    type="text"
                    name="name"
                    defaultValue="홍길동"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>연락처</label>
                  <input
                    type="tel"
                    name="phone"
                    defaultValue="010-1234-5678"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>이메일</label>
                  <input
                    type="email"
                    name="email"
                    defaultValue="example@example.com"
                    required
                  />
                </div>
              </form>
            </div>

            <div className="order-section-address-information">
              <h2 className="section-title">배송지 정보</h2>
              <form className="order-form">
                <div className="form-group">
                  <label>주소</label>
                  <input type="text" name="address" required />
                </div>
                <div className="form-group">
                  <label>우편번호</label>
                  <input type="text" name="zipcode" required />
                </div>
              </form>
            </div>

            <div className="order-section-product-information">
              <h2 className="section-title">주문상품 정보</h2>
              <div className="order-product">
                <img
                  src="/product-image.jpg"
                  alt="Product"
                  className="product-image"
                />
                <div className="product-details">
                  <p>상품명: 특별한 상품</p>
                  <p>옵션: 옵션 A</p>
                  <p>수량: 2개</p>
                  <p>가격: $29.99</p>
                </div>
              </div>
            </div>

            <div className="order-section-payment-information">
              <h2 className="section-title">결제수단</h2>
              <select name="payment-method">
                <option value="credit-card">신용카드</option>
                <option value="bank-transfer">계좌이체</option>
                <option value="paypal">페이팔</option>
              </select>
            </div>
          </div>
        </div>

        <div className="Payment-Information-container">
          <div className="payment-section-container">
            <h2 className="section-title">최종 결제 금액</h2>
            <div className="order-summary">
              <p>상품 금액: $29.99</p>
              <p>배송비: $5.00</p>
              <p>총 결제 금액: $34.99</p>
              <button className="pay-button">결제하기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPayment;
