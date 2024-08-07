import React, { useEffect, useState } from "react";
import CartNavLink from "../../components/Cart/CartNavLink/CartNavLink";

import "./OrderCompletion.css";
import confirmation from "../../assets/confirmation.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const OrderCompletion = () => {
  const navigate = useNavigate();
  const [orderDetails, setOrderDetails] = useState({
    orderNumber: null,
    orderDate: null,
    totalPrice: null,
  });
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phoneNumber: "",
    email: "",
  });
  console.log("유저", customerInfo);
  console.log("아이템:", orderDetails);
  const OrderId = useSelector((state) => state.OrderPayment.OrderPaymentId);

  //get요청
  useEffect(() => {
    const axiosGetOrderCompletion = async () => {
      const accessToken = localStorage.getItem("accessToken");
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/api/cart/order/success/${OrderId}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        if (response.status === 200) {
          console.log("주문 데이터 받음:", response.data);
          const { orderNumber, orderDate, totalPrice, customerInfo } =
            response.data;
          setOrderDetails({
            orderNumber,
            orderDate,
            totalPrice,
          });
          setCustomerInfo(customerInfo);
        } else {
          console.log("서버에서 데이터를 가져오지 못했습니다.");
        }
      } catch (error) {
        console.error("주문 데이터 요청 에러:", error);
      }
    };
    axiosGetOrderCompletion();
  }, [OrderId]);

  //const { orderNumber, orderDate, totalPrice, customerInfo } = orderDetails;
  const { orderNumber, orderDate, totalPrice } = orderDetails;

  return (
    <>
      <CartNavLink />
      <div className="order-completion-container">
        <div className="top-completed-container">
          <div className="top-completed-icon">
            <img src={confirmation} className="completed-icon" />
          </div>
          <div className="top-completed-right">
            <div className="completed-right-title">
              고객님의 주문이 완료 되었습니다.
            </div>
            <div className="completed-right-subtitle">
              주문내역 및 배송에 관한 안내는{" "}
              <span className="order-inquiry">주문조회</span>를 통하여 확인
              가능합니다.
            </div>
            <div className="completed-right-order-number">
              주문번호 :{" "}
              <span className="only-order-number">{orderNumber}</span>
            </div>
            <div className="completed-right-order-date">
              주문일자 :{" "}
              {orderDate ? new Date(orderDate).toLocaleDateString() : ""}
            </div>
          </div>
        </div>
        <div className="bottom-completed-container">
          <div className="bottom-completed">
            <div className="bottom-completed-title">결제정보</div>
            <div className="bottom-completed-box-container">
              <table className="bottom-completed-table">
                <tr>
                  <th className="bottom-completed-totalprice-text">
                    최종 결제금액
                  </th>
                  <td className="bottom-completed-totalprice-price">
                    {totalPrice ? `${totalPrice.toLocaleString()} 원` : ""}
                  </td>
                </tr>
                <tr>
                  <th className="bottom-completed-PaymentMethod-text">
                    결제수단
                  </th>
                  <td className="bottom-completed-PaymentMethod-method">
                    <table className="PaymentMethod-group">
                      <tr>
                        <th>입금자:</th>
                        <td>{customerInfo.name}</td>
                      </tr>
                      <tr>
                        <th>결제수단:</th>
                        <td>신용카드</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <button className="continue-button" onClick={() => navigate("/")}>
          쇼핑 계속하기
        </button>
      </div>
    </>
  );
};

export default OrderCompletion;
