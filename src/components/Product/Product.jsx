import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Product.css";
import styled from "styled-components";

const ProductUnit = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  background: rgba(10, 10, 10, 0.03);
  padding: 15px;
`;

const ProductImg = styled.img`
  width: 100%;
  height: 80%;
  aspect-ratio: 0.8;
`;

const ProductName = styled.div`
  color: black;
  height: 40px;
  text-transform: capitalize;
  margin-bottom: 0;
  font-weight: 600;
`;

const ProductPrice = styled.div`
  text-align: end;
  font-weight: 500;
`;

const ImageWithFallback = ({ src, alt, fallbackSrc }) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    setImgSrc(fallbackSrc);
  };

  return <ProductImg src={imgSrc} alt={alt} onError={handleError} />;
};

export function Product({ id, name, price, url }) {
  return (
    <ProductUnit>
      <Link to={`/product-detail/${id}`} className="productLink">
        <ImageWithFallback
          src={url}
          alt=""
          fallbackSrc="/img_load_failed.png"
        />
        <ProductName>{name}</ProductName>
      </Link>
      <ProductPrice>{price.toLocaleString()}원</ProductPrice>
    </ProductUnit>
  );
}
