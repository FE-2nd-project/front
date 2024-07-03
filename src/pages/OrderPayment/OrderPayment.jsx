import React, { useState } from "react";
import "./OrderPayment.css";

import PaymentInformation from "../../components/PaymentInformation/PaymentInformation";
import CartNavLink from "../../components/Cart/CartNavLink/CartNavLink";
import { useNavigate } from "react-router-dom";

const OrderPayment = () => {
  const navigate = useNavigate();
  const unitPrice = 49000; //제품 단가
  const quantity = 1; //수량
  const totalPrice = unitPrice * quantity; // 총금액
  const option = "black";

  const products = [
    {
      id: 1,
      image: "/hat.jpg",
      name: "특별한 상품",
      option: "옵션1",
      size: "F",
      quantity: 2,
      unitPrice: "49,000원",
    },
    {
      id: 2,
      image: "/hat.jpg",
      name: "멋진 셔츠",
      option: "옵션2",
      size: "M",
      quantity: 1,
      unitPrice: "39,000원",
    },
    {
      id: 3,
      image: "/hat.jpg",
      name: "이쁜 가방",
      option: "옵션4",
      size: "L",
      quantity: 0,
      unitPrice: "109,000원",
    },
  ];

  return (
    <div>
      <CartNavLink />
      <div className="order-payment-container">
        <div className="order-section-container">
          <div className="order-section-Personal-information">
            <h2 className="section-title">주문자 정보</h2>

            <form className="order-form">
              <div className="form-group">
                <label>주문자명</label>
                <input type="text" name="name" defaultValue="홍길동" required />
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
                <input
                  type="text"
                  name="address"
                  defaultValue="서울특별시 oo구"
                  required
                />
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
              <div className="order-product-group">
                {products.map((product) => (
                  <div key={product.id} className="order-product">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-image"
                    />

                    <div className="product-details">
                      <div className="product-General-order">
                        <p>일반주문</p>
                      </div>
                      <div className="product-details-group">
                        <p>{product.name}</p>
                        <div className="product-details-option">
                          <p>{product.option}</p>
                          <span className="separator">|</span>
                          <p>{product.size}</p>
                          <span className="separator">|</span>
                          <p
                            className={
                              product.quantity === 0
                                ? "product-details-out-of-stock"
                                : ""
                            }
                          >
                            {product.quantity > 0
                              ? `${product.quantity}개`
                              : "재고없음"}
                          </p>
                        </div>
                        <p>
                          {product.quantity === 0
                            ? `주문불가`
                            : `${product.unitPrice}`}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="order-product-description">
                <ul>
                  <li>• 사은품은 주문 상품과 별도로 배송될 수 있습니다.</li>
                  <li>
                    • 결제완료 이후 품절이 발생한 경우, 영업일 4일 이내 고객님께
                    별도로 안내를 드립니다.
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
        <div className="Payment-Information-container">
          <PaymentInformation topText="최종 결제금액" total="총 주문금액" />
          <button
            className="payment-order-button"
            onClick={() => {
              navigate("/order-completed");
              window.scrollTo({ top: 0, behavior: "auto" });
            }}
          >
            결제하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderPayment;
