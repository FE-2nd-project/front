import React from "react";
import ImageSlider from "./ProductDetailComponent/ImageSlider";
import NavBar from "./components/NavBar/NavBar";
import "./ProductDetail.css";
import share from "./assets/share.svg";
import heart from "./assets/heart.svg";

const ProductDetail = () => {
  return (
    <>
      <NavBar />
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
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
