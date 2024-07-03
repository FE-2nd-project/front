import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';
import styled from 'styled-components';

const ProductUnit = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  background: rgba(10, 10, 10, 0.03);
  padding: 15px;
`;

const ProductImg = styled.img`
  width: 100%;
`;

const ProductName = styled.div`
  color: black;
  margin-bottom: 40px;
`;

const ProducPrice = styled.div`
  text-align: end;
  font-weight: 700;
`;

export function Product({ id, name, price, url }) {
  return (
    <ProductUnit>
      {/* <Link to=`/product-detail/${product_id}`> */}
      <Link to="/product-detail" className="productLink">
        <ProductImg src={url} alt="" />
        <ProductName>{name}</ProductName>
      </Link>
      <ProducPrice>{price}</ProducPrice>
    </ProductUnit>
  );
}
