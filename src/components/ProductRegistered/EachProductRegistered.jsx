import React, { useState } from "react";
import RegisteredUpdateModal from "./RegisteredUpdateModal";
import { useDispatch } from "react-redux";
import { productRegisteredActions } from "../../store/reducer/productRegistered-slice";

const EachProductRegistered = ({
  isUpdate,
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
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false); // 각 상품별 모달 열림 상태를 관리

  const openModal = () => {
    setIsModalOpen(true); // 모달 열기
    dispatch(productRegisteredActions.setIsUpdateModalOpen({ productId }));
  };

  const closeModal = () => {
    setIsModalOpen(false); // 모달 닫기
    dispatch(productRegisteredActions.setIsUpdateModalOpen({ productId }));
  };

  return (
    <>
      {isModalOpen && (
        <RegisteredUpdateModal
          isUpdate={isModalOpen}
          setIsUpdate={closeModal}
          productId={productId}
          productImage={productImage}
          productName={productName}
          productPrice={productPrice}
          genderCategory={genderCategory}
          shopCategory={shopCategory}
          sizes={sizes}
          registerDate={registerDate}
          sellByDate={sellByDate}
        />
      )}

      <tr className="registered-table-data">
        <th className="table-data-productId">
          <div>{productId}</div>{" "}
          <button
            className="data-modify-button"
            // onClick={() => {
            //   setIsUpdate((prev) => !prev);
            //   dispatch(
            //     productRegisteredActions.setIsUpdateModalOpen({ productId })
            //   );
            // }}
            onClick={() => openModal()}
          >
            수정
          </button>
        </th>
        <th className="table-data-photo-name">
          <div className="table-data-photo-name-flex">
            <img
              className="table-data-photo"
              src={productImage}
              alt="productImage"
            />
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
    </>
  );
};

export default EachProductRegistered;
