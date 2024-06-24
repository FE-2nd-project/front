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
              <img src={share} className="product-side-icon"></img>
              <img src={heart} className="product-side-icon"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
