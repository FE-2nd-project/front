import React from "react";
import styled from "styled-components";

const ItemCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 1rem;
  width: 100%; /* 너비를 조절 */
  box-sizing: border-box;
`;

const ItemImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 1rem;
`;

const ItemTitle = styled.div`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
`;

const OrderInfo = styled.div`
  font-size: 0.9rem;
  color: #666;
  text-align: left;
`;

const PurchasesItem = ({ item }) => {
  return (
    <ItemCard>
      <ItemImage src={item.image} alt={item.title} />
      <ItemTitle>{item.title}</ItemTitle>
      <OrderInfo>주문번호: {item.orderNumber}</OrderInfo>
      <OrderInfo>구매일: {item.purchaseDate}</OrderInfo>
    </ItemCard>
  );
};

export default PurchasesItem;
