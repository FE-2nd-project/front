import React, { useState } from "react";
import "./OrderPayment.css";
import CartNavLink from "../../components/CartNavLink/CartNavLink";
import PaymentInformation from "../../components/PaymentInformation/PaymentInformation";

const OrderPayment = () => {
  const unitPrice = 49000; //제품 단가
  const [quantity, setQuantity] = useState(1); //수량
  const totalPrice = unitPrice * quantity; // 총금액
  const option = "black";
  return (
    <div>
      <CartNavLink />
      <div className="order-payment-container">
        <div className="order-Information-container">
          <div className="order-section-container">
            <div className="order-section-Personal-information">
              <h2 className="section-title">주문자 정보</h2>
              <form className="order-form">
                <div className="form-group">
                  <label>주문자명</label>
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
                  <p>옵션: {option}</p>
                  <p>수량: {quantity}개</p>
                  <p>가격: {unitPrice}</p>
                </div>
              </div>
            </div>

            <div className="order-section-payment-information">
              <h2 className="section-title">결제수단</h2>
              <div className="order-product">
                <select name="payment-method">
                  <option value="credit-card">신용카드</option>
                  <option value="bank-transfer">계좌이체</option>
                  <option value="paypal">페이팔</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPayment;
