import React from "react";
import styled from "styled-components";

const SidebarContainer = styled.div`
  flex: 1;
  padding: 2rem;
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: hidden; /* 스크롤 제거 */
`;

const SidebarTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: left;
`;

const MenuSection = styled.div`
  margin-bottom: 1rem;
  text-align: left;
`;

const MenuHeader = styled.div`
  font-weight: bold;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: #333;
`;

const MenuItem = styled.div`
  padding: 0.5rem 0;
  font-size: 0.8rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    color: #007bff;
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarTitle>마이페이지</SidebarTitle>
      <MenuSection>
        <MenuHeader>나의 쇼핑정보</MenuHeader>
        <MenuItem>주문/배송 조회</MenuItem>
        <MenuItem>취소/교환/반품 내역</MenuItem>
        <MenuItem>매장구매 내역</MenuItem>
        <MenuItem>증빙서류 조회</MenuItem>
      </MenuSection>
      <MenuSection>
        <MenuHeader>나의 활동정보</MenuHeader>
        <MenuItem>위시리스트</MenuItem>
        <MenuItem>최근 본 상품</MenuItem>
        <MenuItem>상품 리뷰</MenuItem>
        <MenuItem>1:1 문의 내역</MenuItem>
        <MenuItem>재입고 알림 내역</MenuItem>
      </MenuSection>
      <MenuSection>
        <MenuHeader>나의 혜택정보</MenuHeader>
        <MenuItem>마일리지</MenuItem>
        <MenuItem>포인트</MenuItem>
        <MenuItem>쿠폰함</MenuItem>
        <MenuItem>회원 등급/혜택 안내</MenuItem>
      </MenuSection>
      <MenuSection>
        <MenuHeader>나의 계정설정</MenuHeader>
        <MenuItem>배송지 관리</MenuItem>
        <MenuItem>내정보 관리</MenuItem>
        <MenuItem>간편로그인 계정관리</MenuItem>
        <MenuItem>회원 탈퇴</MenuItem>
      </MenuSection>
    </SidebarContainer>
  );
};

export default Sidebar;
