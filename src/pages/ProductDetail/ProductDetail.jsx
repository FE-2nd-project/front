import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ImageSlider from "./ImageSlider";
import "./ProductDetail.css";
import share from "../../assets/share.svg";
import heart from "../../assets/heart.svg";
import minus from "../../assets/minus.svg";
import plus from "../../assets/plus.svg";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/reducer/cart-slice";
import { useQueryClient } from "react-query";

const ProductDetail = () => {
  const { productId } = useParams();
  const queryClient = useQueryClient();
  const currentEmail = localStorage.getItem("email");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [productData, setProductData] = useState(null);
  const [quantity, setQuantity] = useState(1); // 유저가 선택한 수량
  const [selectedSize, setSelectedSize] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [maxQuantity, setMaxQuantity] = useState(1); // 각 사이즈의 현재 수량
  const isProductAdded = useSelector(
    (state) => state.productDetail.isProductAdded
  );

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/api/item/${productId}`
        );
        setProductData(response.data);
        setLoading(false);

        // 초기 선택된 사이즈 및 수량 설정
        if (response.data.size_options_with_stock.length > 0) {
          setSelectedSize(
            response.data.size_options_with_stock[0].split(": ")[0]
          );
          setMaxQuantity(
            parseInt(
              response.data.size_options_with_stock[0].split(": ")[1],
              10
            )
          );
        }
        setTotalPrice(response.data.item_price);
      } catch (error) {
        console.error("Error fetching product data:", error);
        setLoading(false);
      }
    };

    fetchProductData();
  }, [productId]);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    if (quantity < maxQuantity) {
      setQuantity(quantity + 1);
    }
  };

  const handleSizeChange = (e) => {
    const newSize = e.target.value;
    setSelectedSize(newSize);
    setQuantity(1);
    const selectedOption = productData.size_options_with_stock.find((option) =>
      option.startsWith(newSize)
    );
    if (selectedOption) {
      const stock = parseInt(selectedOption.split(": ")[1], 10);
      setMaxQuantity(stock);
    }
  };

  const handleAddToBag = async () => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      navigate("/login");
      return;
    }
    const itemData = {
      itemId: productId,
      size: selectedSize,
      quantity,
    };
    console.log("post요청할 아이템데이터들입니다", itemData);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/cart/add`,
        itemData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (response.status === 200 && !isProductAdded[productId]) {
        dispatch(cartActions.addQuantity(itemData.quantity));
      }
      navigate("/cart");
      window.scrollTo({ top: 0 });
      console.log("성공");
      //데이터 업데이트에 성공 후, 쿼리 무효화로 다음 요청 시 서버에 요청하게 됨
      queryClient.invalidateQueries("getCartData");
    } catch (error) {
      console.error("post 요청 에러:", error);
    }
  };

  return (
    <div className="product-root">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {productData && (
            <>
              <ImageSlider images={productData.image_urls} />
              <div className="product-container">
                <div className="product-best">
                  <div className="product-best-text">베스트</div>
                </div>
                <div className="product-title-container">
                  <div className="product-title-text">
                    {productData.item_name}
                  </div>
                  <div className="product-title-side-icons">
                    <img src={share} className="product-side-icon" alt="공유" />
                    <img src={heart} className="product-side-icon" alt="하트" />
                  </div>
                </div>
                <div className="product-price-container">
                  <div className="product-price-text">
                    {productData.item_price.toLocaleString()} 원
                  </div>
                </div>

                <div className="product-shipping-info">
                  <div className="product-shipping-detail-info">
                    {productData.item_description}
                  </div>
                </div>

                <div className="product-shipping-info">
                  <div className="product-shipping-title">배송비</div>
                  <div className="product-shipping-detail">
                    전 상품 무료배송
                  </div>
                </div>
                <div className="product-additional-benefits">
                  <div className="benefit-title">추가혜택</div>
                  <ul className="benefit-list">
                    <li className="benefit-item">
                      첫 구매 시 10% 할인 쿠폰 지급
                    </li>
                    <li className="benefit-item">
                      리뷰 작성 시 최대 1천 마일리지 적립
                    </li>
                    <li className="benefit-item">
                      전 상품 무료반품 서비스 제공
                    </li>
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
                      {productData.size_options_with_stock.map(
                        (option, index) => {
                          const [size, stock] = option.split(": ");
                          return (
                            <option key={index} value={size}>
                              {size}{" "}
                              {parseInt(stock, 10) > 0
                                ? `(${stock}개 남음)`
                                : `(재고없음)`}
                            </option>
                          );
                        }
                      )}
                    </select>
                  </div>
                </div>

                <div className="quantity-container">
                  <div className="quantity-size-container">
                    <div className="quantity-label">
                      {selectedSize}{" "}
                      {maxQuantity > 0
                        ? `(${maxQuantity}개 남음)`
                        : "(재고없음)"}
                    </div>
                  </div>
                  <div className="quantity-button-container">
                    <button
                      className="quantity-button quantity-decrement"
                      onClick={decreaseQuantity}
                      disabled={quantity === 1}
                    >
                      <img src={minus} alt="minus" />
                    </button>
                    <div className="quantity-text">{quantity}</div>
                    <button
                      className="quantity-button quantity-increment"
                      onClick={increaseQuantity}
                      disabled={quantity >= maxQuantity}
                    >
                      <img src={plus} alt="plus" />
                    </button>
                  </div>
                </div>

                <div className="total-price-container">
                  <div className="total-price-label">총 결제금액</div>
                  <div className="total-price-text">
                    {(productData.item_price * quantity).toLocaleString()} 원
                  </div>
                </div>

                <div className="add-to-bag-container">
                  <button className="add-to-bag-text" onClick={handleAddToBag}>
                    Add to bag
                  </button>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ProductDetail;
