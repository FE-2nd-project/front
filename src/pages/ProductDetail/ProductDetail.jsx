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
  const [selectedColor, setSelectedColor] = useState("Black");

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  const totalPrice = unitPrice * quantity;

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
          <div className="product-options">
            <label className="benefit-title">Option</label>
            <select
              className="option-select"
              value={selectedColor}
              onChange={handleColorChange}
            >
              <option value="Black">Black</option>
              <option value="White">White</option>
              <option value="Red">Red</option>
              <option value="Blue">Blue</option>
            </select>
          </div>
          <div className="quantity-container">
            <label className="quantity-label" htmlFor="quantity-input">
              {selectedColor}
            </label>
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
