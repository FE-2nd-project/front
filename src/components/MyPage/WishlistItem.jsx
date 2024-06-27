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
  margin-bottom: 1rem;
  text-align: left;
`;

const WishlistItem = ({ item }) => {
  return (
    <ItemCard>
      <ItemImage src={item.image} alt={item.title} />
      <ItemTitle>{item.title}</ItemTitle>
      <ItemPrice>{item.price}</ItemPrice>
    </ItemCard>
  );
};

export default WishlistItem;
