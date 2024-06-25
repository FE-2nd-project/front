import React from "react";
import styled from "styled-components";
import Sidebar from "../common/Sidebar";

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
  flex: 3;
  margin-left: 2rem;
`;

const UserPreview = styled.div`
  width: 100%;
  margin: 2rem 0;
  padding: 1.5rem 2rem;
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  gap: 1.5rem;
  border-radius: 10px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ProfileImage = styled.div`
  width: 80px;
  height: 80px;
  background-color: grey;
  border-radius: 50%;
`;

const UserName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  div {
    font-size: 1.5rem;
    font-weight: bold;
  }
  span {
    margin-top: 0.5rem;
    color: white;
    border-radius: 10px;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
  }
`;

const UserCash = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

const UserHold = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  div:nth-child(1) {
    font-size: 1.5rem;
    font-weight: bold;
  }
  div:nth-child(2) {
    font-size: 1rem;
    color: #999;
  }
`;

const Separator = styled.div`
  height: 40px;
  width: 1px;
  background-color: #999;
  margin: 0 1rem;
`;

const MyPageTitle = styled.h1`
  width: 100%;
  padding: 1rem 0;
  border-bottom: 1px solid #ddd;
  font-size: 1.5rem;
  font-weight: 500;
`;

const OrderList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #666;
  padding: 1rem 0;
  border-bottom: 1px solid #ddd;
`;

const OrderItem = styled.div`
  flex: 1;
  text-align: center;
  font-size: 1rem;
`;

const NoOrderMessage = styled.div`
  text-align: center;
  color: #999;
  padding: 2rem 0;
`;

const BottomButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  gap: 1rem;
`;

const BottomButton = styled.div`
  flex: 1;
  text-align: center;
  padding: 1.5rem;
  background-color: #f8f8f8;
  border-radius: 10px;
  cursor: pointer;
  img {
    display: block;
    margin: 0 auto 1rem;
  }
  span {
    display: block;
    font-size: 1rem;
  }
`;

function MyPage() {
  const userEmail = localStorage.getItem("email") || "unknown@domain.com";

  return (
    <PageContainer>
      <Container>
        <Sidebar />
        <MainContent>
          <UserPreview>
            <UserInfo>
              <UserProfile>
                <ProfileImage />
                <UserName>
                  <div>{userEmail.split("@")[0]} 님</div>
                  <span>회원등급/혜택 보기 &gt;</span>
                </UserName>
              </UserProfile>
            </UserInfo>
            <UserCash>
              <UserHold>
                <div>10,000</div>
                <div>마일리지</div>
              </UserHold>
              <Separator />
              <UserHold>
                <div>5</div>
                <div>포인트</div>
              </UserHold>
              <Separator />
              <UserHold>
                <div>0</div>
                <div>쿠폰</div>
              </UserHold>
            </UserCash>
          </UserPreview>
          <MyPageTitle>주문/배송 조회 (3개월 기준)</MyPageTitle>
          <OrderList>
            <OrderItem>결제완료</OrderItem>
            <OrderItem>배송준비중</OrderItem>
            <OrderItem>배송중</OrderItem>
            <OrderItem>배송완료</OrderItem>
          </OrderList>
          <NoOrderMessage>최근 3개월 내 주문 내역이 없습니다.</NoOrderMessage>
          <BottomButtons>
            <BottomButton>
              <img src="https://via.placeholder.com/40" alt="위시리스트" />
              <span>위시리스트</span>
            </BottomButton>
            <BottomButton>
              <img src="https://via.placeholder.com/40" alt="취소/교환/반품" />
              <span>취소/교환/반품</span>
            </BottomButton>
            <BottomButton>
              <img src="https://via.placeholder.com/40" alt="1:1문의 내역" />
              <span>1:1문의 내역</span>
            </BottomButton>
            <BottomButton>
              <img src="https://via.placeholder.com/40" alt="재입고 알림내역" />
              <span>재입고 알림내역</span>
            </BottomButton>
          </BottomButtons>
        </MainContent>
      </Container>
    </PageContainer>
  );
}

export default MyPage;
