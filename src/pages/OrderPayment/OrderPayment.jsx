import React, { useEffect, useState } from "react";
import "./OrderPayment.css";
import axios from "axios";
import PaymentInformation from "../../components/PaymentInformation/PaymentInformation";
import CartNavLink from "../../components/Cart/CartNavLink/CartNavLink";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const OrderPayment = () => {
  const navigate = useNavigate();
  const cartItemData = useSelector((state) => state.cart.cartItemData);

  // const products = cartItemData
  //   ? cartItemData.map((cartItem) => ({
  //       id: cartItem.cartItemId,
  //       image: cartItem.productPicture,
  //       name: cartItem.productName,
  //       size: cartItem.productSize,
  //       quantity: cartItem.productQuantity,
  //       unitPrice: cartItem.productPrice,
  //     }))
  //   : [];

  const [cartProducts, setCartProducts] = useState([]);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    contact: "",
    email: "",
    address: "",
  });
  const [totalPrice, setTotalPrice] = useState(0); //이거 int로 받음

  //Get요청 함수
  useEffect(() => {
    const axiosGetOrderData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/api/cart/order`,
          {
            params: {
              cartItemId: cartItemData.map((cartItem) => cartItem.cartItemId),
            },
          }
        );
        if (response.status === 200) {
          console.log("주문데이터확인: ", response.data);
          const { customerInfo, orderItems, totalPrice } = response.data;
          setCustomerInfo(customerInfo);
          setCartProducts(orderItems);
          setTotalPrice(totalPrice);
        } else {
          console.log("200을 받아오지 못함");
        }
      } catch (error) {
        console.log("주문 get요청 실패:", error);
      }
    };
    if (cartItemData.length > 0) {
      axiosGetOrderData();
    }
  }, [cartItemData]);

  const products = cartProducts.map((cartProduct) => ({
    id: cartProduct.cartItemId,
    image: cartProduct.productPicture,
    name: cartProduct.productName,
    size: cartProduct.productSize,
    quantity: cartProduct.productQuantity,
    unitPrice: cartProduct.productPrice,
  }));

  //Post요청
  const handlePayment = async () => {
    const accessToken = localStorage.getItem("accessToken");
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/cart/order`,
        {
          cartItemId: cartProducts.map((product) => product.id),
          totalPrice: totalPrice,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (response.status === 200) {
        console.log("결제 성공: ", response.data);
        navigate("/order-completed");
      } else {
        console.log("서버 응답 오류");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        console.log("결제 실패: ", error.response.data);
        updateProductsStock(error.response.data.stockErrors);
      } else {
        console.log("결제 실패: ", error);
      }
    }
  };

  const updateProductsStock = (stockErrors) => {
    const updatedProducts = products.map((product) => {
      const error = stockErrors.find((err) => err.itemId === product.id);
      if (error) {
        return { ...product, quantity: 0, orderStatus: "주문불가" };
      }
      return product;
    });
    setCartProducts(updatedProducts);
  };

  return (
    <div>
      <CartNavLink />
      <div className="order-payment-container">
        <div className="order-section-container">
          <div className="order-section-Personal-information">
            <h2 className="section-title">주문자 정보</h2>

            <form className="order-form">
              <div className="form-group">
                <label>주문자명</label>
                <input
                  type="text"
                  name="name"
                  //defaultValue="홍길동"
                  defaultValue={customerInfo.name}
                  required
                />
              </div>
              <div className="form-group">
                <label>연락처</label>
                <input
                  type="tel"
                  name="phone"
                  //defaultValue="010-1234-5678"
                  defaultValue={customerInfo.contact}
                />
              </div>
              <div className="form-group">
                <label>이메일</label>
                <input
                  type="email"
                  name="email"
                  //defaultValue="example@example.com"
                  defaultValue={customerInfo.email}
                  required
                />
              </div>
            </form>
          </div>

          <div className="order-section-address-information">
            <h2 className="section-title">배송지 정보</h2>
            <form className="order-form">
              <div className="form-group">
                <label>주소</label>
                <input
                  type="text"
                  name="address"
                  //defaultValue="서울특별시 oo구"
                  defaultValue={customerInfo.address}
                  required
                />
              </div>
              <div className="form-group">
                <label>우편번호</label>
                <input type="text" name="zipcode" />
              </div>
            </form>
          </div>

          <div className="order-section-product-information">
            <h2 className="section-title">주문상품 정보</h2>
            <div className="order-product-container">
              <div className="order-product-group">
                {products.map((product) => (
                  <div key={product.id} className="order-product">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-image"
                    />

                    <div className="product-details">
                      <div className="product-General-order">
                        <p>일반주문</p>
                      </div>
                      <div className="product-details-group">
                        <p>{product.name}</p>
                        <div className="product-details-option">
                          <p>{product.size}</p>
                          <span className="separator">|</span>
                          <p
                            className={
                              product.quantity === 0
                                ? "product-details-out-of-stock"
                                : ""
                            }
                          >
                            {product.quantity > 0
                              ? `${product.quantity}개`
                              : "재고없음"}
                          </p>
                        </div>
                        <p>
                          {product.quantity === 0
                            ? `주문불가`
                            : `${product.unitPrice}`}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="order-product-description">
                <ul>
                  <li>• 사은품은 주문 상품과 별도로 배송될 수 있습니다.</li>
                  <li>
                    • 결제완료 이후 품절이 발생한 경우, 영업일 4일 이내 고객님께
                    별도로 안내를 드립니다.
                  </li>
                  <li>
                    • 품절 안내 이후 결제하신 금액은 자동취소 처리해 드리며,
                    재결제가 필요한 경우 추가로 안내 드립니다.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="order-section-payment-information">
            <h2 className="section-title">결제수단</h2>
            <div className="payment-method-container">
              <button className="custom-select-button">신용카드</button>
            </div>
          </div>
        </div>
        <div className="Payment-Information-container">
          <PaymentInformation topText="최종 결제금액" total="총 주문금액" />
          <button
            className="payment-order-button"
            onClick={() => {
              navigate("/order-completed");
              window.scrollTo({ top: 0, behavior: "auto" });
            }}
          >
            결제하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderPayment;
