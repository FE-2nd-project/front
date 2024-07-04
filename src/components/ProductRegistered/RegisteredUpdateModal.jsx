import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import "./RegisteredUpdateModal.css";
import cap from "../../assets/cap.png";
import exit from "../../assets/exit.png";
import axios from "axios";
import {
  getProductRegisteredData,
  productRegisteredActions,
} from "../../store/reducer/productRegistered-slice";

const genders = ["Men", "Women"];
const products = ["Apparel", "Cap", "Shoes", "Bag"];

const RegisteredUpdateModal = ({
  isUpdate,
  setIsUpdate,
  productId,
  productImage,
  productName,
  productPrice,
  genderCategory,
  shopCategory,
  sizes,
}) => {
  const dispatch = useDispatch();

  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [gender, setGender] = useState("");
  const [product, setProduct] = useState("");
  const [productSizes, setProductSizes] = useState([]);
  const isUpdateModalOpen = useSelector(
    (state) => state.productRegistered.isUpdateModalOpen
  );

  console.log(
    "초기값을 찍어봄",
    image,
    name,
    price,
    gender,
    product,
    productSizes
  );

  console.log("이건 성별입니다~", gender);

  useEffect(() => {
    if (isUpdateModalOpen[productId]) {
      setImage(productImage);
      setName(productName);
      setPrice(productPrice);
      setGender(genderCategory);
      setProduct(shopCategory);
      setProductSizes(sizes);
    }
  }, [
    productId,
    productImage,
    productName,
    productPrice,
    genderCategory,
    shopCategory,
    sizes,
    isUpdateModalOpen,
  ]);

  if (!isUpdate) return null;
  if (!image && !name && !price && !gender && !product) return null;

  const optionSelect = () => {
    return (
      <div className="registered-modal-info-size">
        옵션 및 수량:
        {productSizes.map((size, index) => (
          <div key={index} className="registered-modal-info-size-flex">
            <div className="registered-modal-info-size-option">{size.size}</div>
            <div className="registered-modal-info-size-quantity">
              <input
                type="number"
                min="0"
                value={size.stock}
                onChange={(e) =>
                  handleSizeQuantityChange(index, e.target.value)
                }
              />
            </div>
          </div>
        ))}
      </div>
    );
  };

  const handleSizeQuantityChange = (index, value) => {
    const newSizes = [...productSizes]; // productSizes 배열을 복사하여 새로운 배열 생성
    newSizes[index] = {
      ...newSizes[index], // 기존 객체의 속성들을 복사
      stock: Number(value), // 새로운 값을 설정
    };
    setProductSizes(newSizes);
  };

  const handleUpdate = async () => {
    const accessToken = localStorage.getItem("accessToken");
    try {
      let updatedData;

      if (product.toLowerCase() === "bag") {
        updatedData = {
          itemId: productId,
          newStock: productSizes[0]?.stock,
        };
      } else {
        updatedData = {
          itemId: productId,
          optionSize: productSizes[0]?.size,
          newStock: productSizes[0]?.stock || 0,
        };
      }
      console.log("업데이트 할 데이터", updatedData);
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
        dispatch(productRegisteredActions.updateProductRegistered(updatedData));
        setIsUpdate(false);
        dispatch(getProductRegisteredData());
        console.log("상품업데이트 성공");
      } else {
        console.error("상품 업데이트 실패");
      }
    } catch (error) {
      console.error("상품 업데이트 에러:", error);
    }
  };

  return createPortal(
    <div className="registered-modal-overlay" key={productId}>
      <div className="registered-modal-content">
        <img
          src={exit}
          alt="exit"
          onClick={() => setIsUpdate(false)}
          className="registered-modal-close-btn"
        />

        <div className="registered-modal-info-container">
          <div className="registered-modal-info-img">
            <img src={image} alt="cap" />
          </div>
          <div className="registered-modal-info">
            <div className="registered-modal-info-name">
              {name ? name : "홍길동"}
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
                  //defaultValue={gender ? gender : "성별"}
                >
                  <option value="성별">성별</option>
                  <option value="man">Man</option>
                  <option value="woman">Woman</option>
                </select>
              </div>
              <div className="registered-modal-info-category">
                상품
                <select
                  value={product && product}
                  onChange={(e) => setProduct(e.target.value)}
                >
                  {/* {products.map((prod) => (
                    <option key={prod} value={prod}>
                      {prod}
                    </option>
                  ))} */}
                  <option value="apparel">Apparel</option>
                  <option value="cap">Cap</option>
                  <option value="shoes">Shoes</option>
                  <option value="bag">Bag</option>
                </select>
              </div>
            </div>

            <div className="registered-section"></div>

            {/* 옵션및수량 */}
            {optionSelect()}
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
