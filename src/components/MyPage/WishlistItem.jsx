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

const ItemPrice = styled.div`
  font-size: 1rem;
  color: #666;
  text-align: left;
`;

const SizeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;
`;

const SizeBox = styled.div`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  background-color: #f8f8f8;
  text-align: center;
`;

const ItemQuantity = styled.div`
  font-size: 1rem;
  color: #666;
  text-align: left;
`;

const WishlistItem = ({ item }) => {
  return (
    <ItemCard>
      <ItemImage src={item.image_url} alt={item.item_name} />
      <ItemTitle>{item.item_name}</ItemTitle>
      <SizeContainer>
        <SizeBox>{item.size}</SizeBox>
      </SizeContainer>
      <ItemPrice>{item.price.toLocaleString()} 원</ItemPrice>
      <ItemQuantity>수량: {item.quantity}</ItemQuantity>
    </ItemCard>
  );
};

export default WishlistItem;
