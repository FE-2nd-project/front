import React, { useState } from "react";

import "./CartProduct.css";
import cap from "../../../assets/cap.png";
import CartDeleteModal from "../CartDeleteModal/CartDeleteModal";
import CartUpdateModal from "../CartUpdateModal/CartUpdateModal";

const CartProduct = ({
  itemId,
  productPicture,
  name,
  size,
  quantity,
  totalPrice,
  price,
  optionSize,
}) => {
  const [isUpdateClicked, setIsUpdateClicked] = useState(false);
  const [isDeleteClicked, setIsDeleteClicked] = useState(false);
  console.log(
    itemId,
    productPicture,
    name,
    size,
    quantity,
    totalPrice,
    price,
    optionSize
  );

  return (
    <>
      <CartUpdateModal
        isUpdateClicked={isUpdateClicked}
        setIsUpdateClicked={setIsUpdateClicked}
        itemId={itemId}
        productPicture={productPicture}
        name={name}
        optionSize={optionSize}
        size={size}
        quantity={quantity}
        totalPrice={totalPrice}
        price={price}
      />
      <CartDeleteModal
        isDeleteClicked={isDeleteClicked}
        setIsDeleteClicked={setIsDeleteClicked}
        itemId={itemId}
      />
      <div className="cart-product-container">
        <div className="product-left">
          <div className="product-img-container">
            {/* <input className="product-checkbox" type="checkbox"></input> */}
            <img className="product-img" src={cap} alt="productPicture" />
          </div>
          <div className="product-info-container">
            <div className="product-name">{name}</div>
            <div className="product-details-container">
              <div className="details-size">{size}</div>
              <div className="details-line"></div>
              <div className="details-quantity">{quantity}개</div>
            </div>
            <div className="product-price">{totalPrice.toLocaleString()}원</div>
          </div>
        </div>
        <div className="product-right">
          <button
            className="product-update"
            onClick={() => setIsUpdateClicked((prev) => !prev)}
          >
            옵션 변경
          </button>
          <button
            className="product-delete"
            onClick={() => setIsDeleteClicked((prev) => !prev)}
          >
            삭제
          </button>
        </div>
      </div>
    </>
  );
};

export default CartProduct;
