import React, { useEffect, useState } from "react";
import "./OrderPayment.css";
import axios from "axios";
import PaymentInformation from "../../components/PaymentInformation/PaymentInformation";
import CartNavLink from "../../components/Cart/CartNavLink/CartNavLink";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import qs from "qs";
import { OrderPaymentActions } from "../../store/reducer/OrderPayment-slice";

const OrderPayment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItemData = useSelector((state) => state.cart.cartItemData);
  const cartTotalPrice = useSelector((state) => state.cart.cartTotalPrice);

  const [cartProducts, setCartProducts] = useState([]);
  const [customerInfo, setCustomerInfo] = useState({
    username: "",
    phoneNumber: "",
    email: "",
    address: "",
  });
  console.log("유저", customerInfo);
  console.log("카트아이템", cartProducts);

  //Get요청 함수
  useEffect(() => {
    const axiosGetOrderData = async () => {
      const accessToken = localStorage.getItem("accessToken");
      try {
        const cartItemIds = cartItemData.map((cartItem) => cartItem.cartItemId);

        console.log("이게 카트아이템아이디", cartItemIds);
        console.log("카트데이터", cartItemData);

        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/api/cart/order`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
            params: {
              cartItemId: cartItemIds,
            },
            paramsSerializer: (params) => {
              const serializedParams = qs.stringify(params, {
                arrayFormat: "repeat",
              });
              console.log("Serialized Params:", serializedParams);
              return serializedParams;
            },
          }
        );
        console.log("response다음", cartItemData);
        if (response.status === 200) {
          console.log("주문데이터확인: ", response.data);
          const { username, phoneNumber, email, address, orderItems } =
            response.data;

          setCustomerInfo({ username, phoneNumber, email, address });
          setCartProducts(orderItems);
        } else {
          console.log("200을 받아오지 못함");
        }
      } catch (error) {
        console.log("주문 get요청 실패:", error);
        if (error.response) {
          console.log("응답 데이터:", error.response.data);
          console.log("응답 상태 코드:", error.response.status);
          console.log("응답 헤더:", error.response.headers);
        }
      }
    };
    if (cartItemData.length > 0) {
      axiosGetOrderData();
    }
  }, [cartItemData]);

  const products = cartProducts.map((cartProduct) => ({
    id: cartProduct.cartItemId,
    itemsizeid: cartProduct.itemSizeId,
    image: cartProduct.itemUrl,
    name: cartProduct.itemName,
    size: cartProduct.itemSize,
    quantity: cartProduct.itemQuantity,
    unitPrice: cartProduct.itemPrice,
    stockStatus: cartProduct.stockStatus || "available",
  }));

  //Post요청
  const handlePayment = async () => {
    const accessToken = localStorage.getItem("accessToken");
    try {
      console.log("카트아이템아이디와 총가격", {
        cartItemId: cartProducts.map((product) => product.cartItemId),
        totalPrice: cartTotalPrice,
      });
      console.log(cartProducts.map((product) => product.cartItemId));
      console.log("cartProducts: ", cartProducts);

      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/cart/order`,
        {
          cartItemId: cartProducts.map((product) => product.cartItemId),
          totalPrice: cartTotalPrice,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (response.status === 200) {
        console.log("결제 성공: ", response.data);
        const { message, orderId } = response.data;
        console.log("리스폰스데이터", response.data);
        dispatch(OrderPaymentActions.setOrderPaymentId(orderId));
        console.log("오더아이디", orderId);
        navigate("/order-completed");
        window.scrollTo({ top: 0, behavior: "auto" });
      } else {
        console.log("서버 응답 오류");
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        Array.isArray(error.response.data)
      ) {
        console.log("결제 실패했음~: ", error.response.data);
        error.response.data.forEach(({ itemSizeId, quantity }) => {
          updateProductsStock(itemSizeId, quantity);
          console.log(itemSizeId, quantity);
        });
      } else {
        console.log("결제 실패: ", error);
      }
    }
  };

  const updateProductsStock = (itemSizeId, quantity) => {
    const updatedProducts = cartProducts.map((product) => {
      if (
        product.itemSizeId === itemSizeId &&
        product.itemQuantity > quantity
      ) {
        // const updatedQuantity = product.itemQuantity - quantity;
        const newQuantity = 0;
        const stockStatus = newQuantity > 0 ? "available" : "outOfStock";

        return {
          ...product,
          itemQuantity: newQuantity,
          stockStatus,
        };
      }
      return product;
    });
    console.log("재고없을때 업데이트되어야하는물품", updatedProducts);
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
                  defaultValue={customerInfo.username || ""}
                  required
                />
              </div>
              <div className="form-group">
                <label>연락처</label>
                <input
                  type="tel"
                  name="phone"
                  defaultValue={customerInfo.phoneNumber || ""}
                />
              </div>
              <div className="form-group">
                <label>이메일</label>
                <input
                  type="email"
                  name="email"
                  defaultValue={customerInfo.email || ""}
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
                  defaultValue={customerInfo.address || ""}
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
                          {product.stockStatus === "outOfStock"
                            ? "재고부족"
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
          <button className="payment-order-button" onClick={handlePayment}>
            결제하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderPayment;
