import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";
import styled from "styled-components";

const ColorOption = styled.div`
  border: none;
  border-radius: 100%;
  width: 16px;
  height: 16px;
  background-color: ${(props) => props.color};
`;

export function Product({
  id,
  name,
  price,
  url,
  colors,
  isNew,
  isBest,
  stock,
}) {
  return (
    <div className="Product">
      {/* <Link to=`/product-detail/${product_id}`> */}
      <Link to="/product-detail" className="productLink">
        <div className="productImgWrapper">
          <img src={url} alt="" />
          {stock ? <></> : <div className="productIsSoldOut">일시 품절</div>}
        </div>
        <div className="productName">{name}</div>
      </Link>
      <div className="productInfo">
        <div className="producPrice">{price}</div>
        <div className="colorOptionWrapper">
          {colors.map((color) => (
            <ColorOption color={color} />
          ))}
        </div>
        <div className="badgeWrapper">
          {isNew ? <div className="badge">신상품</div> : <></>}
          {isBest ? <div className="badge">Best</div> : <></>}
        </div>
      </div>
    </div>
  );
}
