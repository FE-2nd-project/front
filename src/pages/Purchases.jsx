import React, { useEffect } from "react";
import styled from "styled-components";
import Sidebar from "../common/Sidebar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPurchases } from "../store/reducer/purchaseSlice";

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
  padding-top: 1rem;
`;

const OrderCard = styled.div`
  padding: 0.2rem;
  margin-bottom: 0.5rem;
  width: 100%;
`;

const ItemsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`;

const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 0.5rem;
  background-color: #f5f5f5;
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 0.5rem;
  text-align: center;
  vertical-align: middle; /* 수직 정렬을 중앙으로 설정 */
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
              <div>
                보관한 구매내역이 없습니다
                <br />
                추천 상품을 둘러보세요
              </div>
            ) : (
              purchases.map((order) => (
                <OrderCard key={order.order_id}>
                  <ItemsTable>
                    <thead>
                      <tr>
                        <TableHeader rowSpan={order.items.length + 1}>
                          구매일:{" "}
                          {new Date(order.order_date).toLocaleDateString()}
                        </TableHeader>
                        <TableHeader>이미지</TableHeader>
                        <TableHeader>제품 이름</TableHeader>
                        <TableHeader>수량</TableHeader>
                        <TableHeader>제품 가격</TableHeader>
                        <TableHeader>합계</TableHeader>
                      </tr>
                    </thead>
                    <tbody>
                      {order.items.map((item, index) => (
                        <tr key={item.item_id}>
                          {index === 0 && (
                            <TableCell rowSpan={order.items.length}>
                              <div>
                                주문번호: {order.order_number}
                                <br />
                                총액: {order.total_price.toLocaleString()}원
                              </div>
                            </TableCell>
                          )}
                          <TableCell>
                            <img
                              src={item.image_url}
                              alt={item.name}
                              style={{ width: "50px", height: "50px" }}
                            />
                          </TableCell>
                          <TableCell>{item.name}</TableCell>
                          <TableCell>{item.quantity}</TableCell>
                          <TableCell>
                            {item.price_per_unit.toLocaleString()}원
                          </TableCell>
                          <TableCell>
                            {(
                              item.quantity * item.price_per_unit
                            ).toLocaleString()}
                            원
                          </TableCell>
                        </tr>
                      ))}
                    </tbody>
                  </ItemsTable>
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
