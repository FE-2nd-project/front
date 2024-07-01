import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ImageSlider from "./ImageSlider";
import "./ProductDetail.css";
import share from "../../assets/share.svg";
import heart from "../../assets/heart.svg";
import minus from "../../assets/minus.svg";
import plus from "../../assets/plus.svg";
import { useDispatch, useSelector } from "react-redux";
import { productDetailActions } from "../../store/reducer/productDetail-slice";
import { cartActions } from "../../store/reducer/cart-slice";

const ProductDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.cartQuantity);
  const isProductAdded = useSelector(
    (state) => state.productDetail.isProductAdded
  );

  const productId = "123"; //테스트용 제품아이디
  const currentEmail = localStorage.getItem("email");
  const currentcartQuantity = useSelector(
    (state) => state.cart.cartQuantity[currentEmail]
  );

  const unitPrice = 49000; // 제품 단가
  const [quantity, setQuantity] = useState(1); // 초기 수량
  const [category, setCategory] = useState("옷"); // 카테고리
  const [sizeOptions, setSizeOptions] = useState([]); // 사이즈 설정
  const [quantities, setQuantities] = useState({}); // 수량
  const defaultSize = category === "옷" ? "S" : "250";
  const [selectedSize, setSelectedSize] = useState(defaultSize); // 사이즈
  const totalPrice = unitPrice * quantity;
  const selectedSizeQuantity = quantities[selectedSize] || 0;

  useEffect(() => {
    if (category === "옷") {
      setSizeOptions(["S", "M", "L"]);
      setQuantities({ S: 10, M: 5, L: 0 });
      setSelectedSize("S");
    } else if (category === "신발") {
      setSizeOptions(["220", "230", "240", "250", "260", "270", "280"]);
      setQuantities({ 220: 3, 230: 7, 240: 0, 250: 4, 260: 2, 270: 6, 280: 0 });
      setSelectedSize("250");
    }
    setQuantity(1);
  }, [category]);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    const maxQuantity = quantities[selectedSize] || 0;
    if (quantity < maxQuantity) {
      setQuantity(quantity + 1);
    }
  };

  const handleSizeChange = (e) => {
    const newSize = e.target.value;
    setSelectedSize(newSize);
    setQuantity(1);
  };

  const handleAddToBag = () => {
    const itemData = { itemId: productId, size: selectedSize, quantity };
    dispatch(productDetailActions.addCartItem(itemData));
    if (!isProductAdded[productId]) {
      //해당 물품이 추가가 된적이 없으면
      dispatch(cartActions.addQuantity({ email: currentEmail })); //장바구니 수량 +1증가
    }
    navigate("/cart");
  };

  console.log(currentcartQuantity);

  return (
    <>
      <div className="product-root">
        <ImageSlider />
        <div className="product-container">
          <div className="product-best">
            <div className="product-best-text">베스트</div>
          </div>
          <div className="product-title-container">
            <div className="product-title-text">
              바시티 컬시브 레터링 데님 언스트럭쳐 볼캡 뉴욕양키스
            </div>
            <div className="product-title-side-icons">
              <img src={share} className="product-side-icon" alt="공유"></img>
              <img src={heart} className="product-side-icon" alt="하트"></img>
            </div>
          </div>
          <div className="product-price-container">
            <div className="product-price-text">49,000원</div>
          </div>
          <div className="product-shipping-info">
            <div className="product-shipping-detail-info">
              사계절 내내 쓰고 다닐 수 있는 멋진 모자!
            </div>
          </div>
          <div className="product-shipping-info">
            <div className="product-shipping-title">배송비</div>
            <div className="product-shipping-detail">전 상품 무료배송</div>
          </div>
          <div className="product-additional-benefits">
            <div className="benefit-title">추가혜택</div>
            <ul className="benefit-list">
              <li className="benefit-item">첫 구매 시 10% 할인 쿠폰 지급</li>
              <li className="benefit-item">
                리뷰 작성 시 최대 1천 마일리지 적립
              </li>
              <li className="benefit-item">전 상품 무료반품 서비스 제공</li>
            </ul>
          </div>
          <div className="product-options-container">
            <div className="product-option-size">
              <label className="benefit-title">Size</label>
              <select
                className="option-select-size"
                value={selectedSize}
                onChange={handleSizeChange}
              >
                <option value="" disabled>
                  사이즈를 선택해주세요
                </option>
                {sizeOptions.map((size) => (
                  <option key={size} value={size}>
                    {size}{" "}
                    {quantities[size] > 0
                      ? `(${quantities[size]}개 남음)`
                      : "(재고없음)"}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="quantity-container">
            <div className="quantity-size-container">
              <div className="quantity-label">
                {selectedSize}{" "}
                {selectedSizeQuantity > 0
                  ? `(${selectedSizeQuantity}개 남음)`
                  : "(재고없음)"}
              </div>
              {/* {quantity === 0 && (
                <div className="out-of-stock-text">(재고없음)</div>
              )} */}
            </div>

            <div className="quantity-button-container">
              <button
                className="quantity-button quantity-decrement"
                onClick={decreaseQuantity}
                disabled={quantity === 0 || selectedSizeQuantity === 0}
              >
                <img src={minus} alt="minus"></img>
              </button>
              <div className="quantity-text">{quantity}</div>
              <button
                className="quantity-button quantity-increment"
                onClick={increaseQuantity}
                disabled={
                  quantity >= selectedSizeQuantity || selectedSizeQuantity === 0
                }
              >
                <img src={plus} alt="plus"></img>
              </button>
            </div>
          </div>
          <div className="total-price-container">
            <div className="total-price-label">총 결제금액</div>
            <div className="total-price-text">
              {totalPrice.toLocaleString()}원
            </div>
          </div>
          <div className="add-to-bag-container">
            <button className="add-to-bag-text" onClick={handleAddToBag}>
              Add to bag
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
