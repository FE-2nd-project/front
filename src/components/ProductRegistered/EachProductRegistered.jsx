import React from "react";

import cap from "../../assets/cap.png";

const EachProductRegistered = ({
  setIsUpdate,
  productId,
  productImage,
  productName,
  productPrice,
  genderCategory,
  shopCategory,
  sizes,
  registerDate,
  sellByDate,
}) => {
  return (
    <tr className="registered-table-data">
      <th className="table-data-productId">
        <div>{productId}</div>{" "}
        <button
          className="data-modify-button"
          onClick={() => setIsUpdate((prev) => !prev)}
        >
          수정
        </button>
      </th>
      <th className="table-data-photo-name">
        <div className="table-data-photo-name-flex">
          <img className="table-data-photo" src={cap} alt="productImage" />
          <div className="table-data-name-container">
            <div className="table-data-name">{productName}</div>
          </div>
        </div>
      </th>
      <th className="table-data-price">{productPrice.toLocaleString()}원</th>
      <th className="table-data-categories">
        <div className="data-categories-gender">
          <div className="registered-gender">{genderCategory}</div>
        </div>
        <div className="data-categories-appparel">{shopCategory}</div>
      </th>
      <th className="table-data-option-quantity">
        {sizes.map((sizeInfo, index) => (
          <div key={index} className="table-data-option-quantity-flex">
            <div className="data-option">{sizeInfo.size}:</div>
            <div className="data-quantity">{sizeInfo.stock}개</div>
          </div>
        ))}
      </th>
      <th className="table-data-registered-date">{registerDate}</th>
      <th className="table-data-end-date">{sellByDate}</th>
    </tr>
  );
};

export default EachProductRegistered;
