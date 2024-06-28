import React, { useState } from "react";
import ImageSlider from "./ImageSlider";
import "./ProductDetail.css";
import share from "../../assets/share.svg";
import heart from "../../assets/heart.svg";
import minus from "../../assets/minus.svg";
import plus from "../../assets/plus.svg";

const ProductDetail = () => {
  const unitPrice = 49000; //제품 단가
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("S"); //사이즈

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const totalPrice = unitPrice * quantity;

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  return (
    <>
      <div className="product-root">
        <ImageSlider />
        <div className="product-container">
          <div className="product-best">
            <div className="product-best-text">베스트</div>
          </div>
          <div className="product-title-container">
            <div className="product-title-text">
              바시티 컬시브 레터링 데님 언스트럭쳐 볼캡 뉴욕양키스
            </div>
            <div className="product-title-side-icons">
              <img src={share} className="product-side-icon" alt="공유"></img>
              <img src={heart} className="product-side-icon" alt="하트"></img>
            </div>
          </div>
          <div className="product-price-container">
            <div className="product-price-text">49,000원</div>
          </div>
          <div className="product-shipping-info">
            <div className="product-shipping-detail-info">
              사계절 내내 쓰고 다닐 수 있는 멋진 모자!
            </div>
          </div>
          <div className="product-shipping-info">
            <div className="product-shipping-title">배송비</div>
            <div className="product-shipping-detail">전 상품 무료배송</div>
          </div>
          <div className="product-additional-benefits">
            <div className="benefit-title">추가혜택</div>
            <ul className="benefit-list">
              <li className="benefit-item">첫 구매 시 10% 할인 쿠폰 지급</li>
              <li className="benefit-item">
                리뷰 작성 시 최대 1천 마일리지 적립
              </li>
              <li className="benefit-item">전 상품 무료반품 서비스 제공</li>
            </ul>
          </div>
          <div className="product-options-container">
            <div className="product-option-size">
              <label className="benefit-title">Size</label>
              <select
                className="option-select-size"
                value={selectedSize}
                onChange={handleSizeChange}
              >
                <option value="" disabled>
                  사이즈를 선택해주세요
                </option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
              </select>
            </div>
          </div>

          <div className="quantity-container">
            <div className="quantity-size-container">
              <div className="quantity-label">{selectedSize}</div>
              <div className="out-of-stock-text">재고없음</div>
              {quantity === 0 && (
                <div className="out-of-stock-text">재고없음</div>
              )}
            </div>

            <div className="quantity-button-container">
              <button
                className="quantity-button quantity-decrement"
                onClick={decreaseQuantity}
              >
                <img src={minus} alt="minus"></img>
              </button>
              <div className="quantity-text">{quantity}</div>
              <button
                className="quantity-button quantity-increment"
                onClick={increaseQuantity}
              >
                <img src={plus} alt="plus"></img>
              </button>
            </div>
          </div>
          <div className="total-price-container">
            <div className="total-price-label">총 결제금액</div>
            <div className="total-price-text">
              {totalPrice.toLocaleString()}원
            </div>
          </div>
          <div className="add-to-bag-container">
            <button className="add-to-bag-text">Add to bag</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
