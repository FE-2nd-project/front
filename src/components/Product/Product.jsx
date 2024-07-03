import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';
import styled from 'styled-components';

const ProductUnit = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ProductImg = styled.img``;

const ProductName = styled.div`
  color: black;
`;
const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ProducPrice = styled.div`
  font-weight: 700;
`;

export function Product({ id, name, price, url }) {
  return (
    <ProductUnit>
      {/* <Link to=`/product-detail/${product_id}`> */}
      <Link to="/product-detail" className="productLink">
        <ProductImg src={url} alt="이미지를 불러오지 못했습니다" />
        <ProductName>{name}</ProductName>
      </Link>
      <ProductInfo>
        <ProducPrice>{price}</ProducPrice>
      </ProductInfo>
    </ProductUnit>
  );
}
