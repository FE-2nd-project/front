// PurchasesItem.jsx
import React from "react";
import styled from "styled-components";

const ItemCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 0.3rem; /* 패딩 조정 */
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 0.4rem; /* 마진 조정 */
`;

const ItemImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 100px;
  border-radius: 10px;
  margin-bottom: 0.5rem; /* 마진 조정 */
`;

const ItemTitle = styled.div`
  font-size: 0.9rem;
  font-weight: bold;
  margin-bottom: 0.3rem;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
`;

const ItemInfo = styled.div`
  font-size: 0.8rem;
  color: #666;
  text-align: center;
`;

const PurchasesItem = ({ item }) => {
  return (
    <ItemCard>
      <ItemImage src={item.image_url} alt={item.name} />
      <ItemTitle>{item.name}</ItemTitle>
      <ItemInfo>수량: {item.quantity}</ItemInfo>
      <ItemInfo>단가: {item.price_per_unit.toLocaleString()}원</ItemInfo>
    </ItemCard>
  );
};

export default PurchasesItem;
