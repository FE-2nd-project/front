import React, { useState } from "react";
import "./OrderPayment.css";
import CartNavLink from "../../components/CartNavLink/CartNavLink";
import PaymentInformation from "../../components/PaymentInformation/PaymentInformation";

const OrderPayment = () => {
  const unitPrice = 49000; //제품 단가
  const quantity = 1; //수량
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
              <div className="order-product-container">
                <div className="order-product">
                  <img src="/hat.jpg" alt="Product" className="product-image" />

                  <div className="product-details">
                    <div className="product-General-order">
                      <p>일반주문</p>
                    </div>
                    <div className="product-details-group">
                      <p>특별한 상품</p>
                      <div className="product-details-option">
                        <p>{option}</p>
                        <span className="separator">|</span>
                        <p>F</p>
                        <span className="separator">|</span>
                        <p>{quantity}개</p>
                      </div>

                      <p>{unitPrice}</p>
                    </div>
                  </div>
                </div>
                <div className="order-product-description">
                  <ul>
                    <li>• 사은품은 주문 상품과 별도로 배송될 수 있습니다.</li>
                    <li>
                      • 결제완료 이후 품절이 발생한 경우, 영업일 4일 이내
                      고객님께 별도로 안내를 드립니다.
                    </li>
                    <li>
                      • 품절 안내 이후 결제하신 금액은 자동취소 처리해 드리며,
                      재결제가 필요한 경우 추가로 안내 드립니다.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="order-section-payment-information">
              <h2 className="section-title">결제수단</h2>
              <div className="payment-method-container">
                <button className="custom-select-button">신용카드</button>
              </div>
            </div>
          </div>
        </div>
        <div className="Payment-Information-container">
          <div className="Payment-Information">
            <PaymentInformation />
            <button className="pay-button">결제하기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPayment;
