import React, { useEffect } from "react";
import styled from "styled-components";
import Sidebar from "../common/Sidebar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPurchases } from "../store/reducer/purchaseSlice";
import PurchasesItem from "../components/MyPage/PurchasesItem";

const PageContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 2rem;
`;

const Container = styled.div`
  display: flex;
`;

const MainContent = styled.div`
  flex: 6;
  margin-left: 1rem;
`;

const Breadcrumbs = styled.div`
  font-size: 0.9rem;
  color: #666;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
`;

const PurchaseContainer = styled.div`
  border-top: 2px solid #000;
  padding-top: 2rem;
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(250px, 1fr)
  ); /* 가로로 배치되도록 조정 */
  gap: 0.1rem; /* 그리드 간격 조정 */
`;

const PurchaseMessage = styled.div`
  text-align: center;
  font-size: 1rem;
  color: #999;
  grid-column: span 1;
`;

const OrderCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 0.4rem; /* 마진 조정 */
  width: 100%; /* 너비를 100%로 설정 */
  max-width: 240px;
`;

const OrderInfo = styled.div`
  font-size: 0.9rem;
  color: #333;
  margin-bottom: 0.5rem; /* 마진 조정 */
`;

const ItemsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const Purchases = () => {
  const dispatch = useDispatch();
  const purchases = useSelector((state) => state.purchase.purchases);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    dispatch(fetchPurchases(token));
  }, [dispatch]);

  return (
    <PageContainer>
      <Container>
        <Sidebar />
        <MainContent>
          <Breadcrumbs>
            <Link to="/">HOME</Link> &gt; <Link to="/mypage">마이페이지</Link>
            &gt; 구매내역
          </Breadcrumbs>
          <TitleContainer>
            <Title>총 {purchases.length}건의 주문</Title>
          </TitleContainer>
          <PurchaseContainer>
            {purchases.length === 0 ? (
              <PurchaseMessage>
                보관한 구매내역이 없습니다
                <br />
                추천 상품을 둘러보세요
              </PurchaseMessage>
            ) : (
              purchases.map((order) => (
                <OrderCard key={order.order_id}>
                  <OrderInfo>주문번호: {order.order_number}</OrderInfo>
                  <OrderInfo>
                    구매일: {new Date(order.order_date).toLocaleDateString()}
                  </OrderInfo>
                  <OrderInfo>
                    총액: {order.total_price.toLocaleString()}원
                  </OrderInfo>
                  <ItemsContainer>
                    {order.items.map((item) => (
                      <PurchasesItem key={item.item_id} item={item} />
                    ))}
                  </ItemsContainer>
                </OrderCard>
              ))
            )}
          </PurchaseContainer>
        </MainContent>
      </Container>
    </PageContainer>
  );
};

export default Purchases;
