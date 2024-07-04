import React, { useState } from "react";
import { createPortal } from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import "./RegisteredUpdateModal.css";
import cap from "../../assets/cap.png";
import exit from "../../assets/exit.png";
import axios from "axios";

const genders = ["Men", "Women"];
const products = ["Apparel", "Cap", "Shoes", "Bag"];

const RegisteredUpdateModal = ({ isUpdate, setIsUpdate }) => {
  const dispatch = useDispatch();
  const productRegisteredData = useSelector(
    (state) => state.productRegistered.productRegisteredData
  );

  const [price, setPrice] = useState(
    productRegisteredData.productPrice || "40,000"
  );
  const [gender, setGender] = useState(
    productRegisteredData.genderCategory || "Women"
  );
  const [product, setProduct] = useState(
    productRegisteredData.shopCategory || "Bag"
  );
  const [sizes, setSizes] = useState(
    productRegisteredData.sizes || [
      { size: "Small", quantity: 0 },
      { size: "Medium", quantity: 20 },
      { size: "Large", quantity: 130 },
    ]
  );
  const [quantity, setQuantity] = useState(productRegisteredData.quantity || 0);

  // const [price, setPrice] = useState("40,000");
  // const [gender, setGender] = useState("Women");
  // const [product, setProduct] = useState("Bag");
  // const [sizes, setSizes] = useState([
  //   { size: "Small", quantity: 0 },
  //   { size: "Medium", quantity: 20 },
  //   { size: "Large", quantity: 130 },
  // ]);
  // const [quantity, setQuantity] = useState(0); // Bag의 경우

  // const handleQuantityChange = (value) => {
  //   setQuantity(value);
  // };

  if (!isUpdate) return null;

  const renderSizeOptions = () => {
    if (product !== "Bag" && product !== "Cap") {
      return (
        <div className="registered-modal-info-size">
          옵션 및 수량:
          {sizes.map((size, index) => (
            <div key={index} className="registered-modal-info-size-flex">
              <div className="registered-modal-info-size-option">
                {size.size}
              </div>
              <div className="registered-modal-info-size-quantity">
                <input
                  type="number"
                  value={size.quantity}
                  onChange={(e) =>
                    handleSizeQuantityChange(index, e.target.value)
                  }
                />
              </div>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div className="registered-modal-info-size">
          수량:
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
      );
    }
  };

  const handleSizeQuantityChange = (index, value) => {
    const newSizes = [...sizes];
    newSizes[index].quantity = value;
    setSizes(newSizes);
  };

  const handleUpdate = async () => {
    const accessToken = localStorage.getItem("accessToken");
    try {
      const updatedData = {
        productId: productRegisteredData.productId,
        productPrice: price,
        genderCategory: gender.toLowerCase(),
        shopCategory: product.toLowerCase(),
        sizes: sizes.filter((size) => size.stock > 0),
      };
      const response = await axios.put(
        `${process.env.REACT_APP_SERVER_URL}/api/sale/update-stock`,
        updatedData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (response.status === 200) {
        //dispatch(updateProductRegistered(updatedData));
        setIsUpdate(false);
      } else {
        console.error("상품 업데이트 실패");
      }
    } catch (error) {
      console.error("상품 업데이트 에러:", error);
    }
  };

  return createPortal(
    <div className="registered-modal-overlay">
      <div className="registered-modal-content">
        <img
          src={exit}
          alt="exit"
          onClick={() => setIsUpdate(false)}
          className="registered-modal-close-btn"
        />

        <div className="registered-modal-info-container">
          <div className="registered-modal-info-img">
            <img src={cap} alt="cap" />
          </div>
          <div className="registered-modal-info">
            <div className="registered-modal-info-name">
              언스트럭쳐 볼캡 뉴욕양키스 - BLACK
            </div>
            <div className="registered-section"></div>
            <div className="registered-modal-info-price">
              판매가
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="registered-modal-info-price-input"
              />
            </div>
            <div className="registered-section"></div>

            <div className="registered-modal-info-category-group">
              <div className="registered-modal-info-category">
                성별
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  {genders.map((gen) => (
                    <option key={gen} value={gen}>
                      {gen}
                    </option>
                  ))}
                </select>
              </div>
              <div className="registered-modal-info-category">
                상품
                <select
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                >
                  {products.map((prod) => (
                    <option key={prod} value={prod}>
                      {prod}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="registered-section"></div>

            {/* 옵션및수량 */}
            {renderSizeOptions()}
          </div>
        </div>
        <button
          className="registered-modal-update-button"
          onClick={handleUpdate}
        >
          변경하기
        </button>
      </div>
    </div>,
    document.getElementById("overlays-modal")
  );
};

export default RegisteredUpdateModal;
