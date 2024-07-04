import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const SidebarContainer = styled.div`
  flex: 1;
  padding: 0;
  position: sticky;
  top: 0;
  overflow-y: hidden;
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
  color: ${({ active }) => (active ? "#007bff" : "inherit")};
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  &:hover {
    text-decoration: underline;
    color: #007bff;
  }
`;

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuItemClick = (path) => {
    window.scrollTo({ top: 0 });
    navigate(path);
  };

  const getMenuItemProps = (path) => ({
    active: location.pathname === path,
    onClick: () => handleMenuItemClick(path),
  });

  return (
    <SidebarContainer>
      <SidebarTitle>마이페이지</SidebarTitle>
      <MenuSection>
        <MenuHeader>나의 쇼핑정보</MenuHeader>
        <MenuItem>주문/배송 조회</MenuItem>
        <MenuItem {...getMenuItemProps("/mypage/purchases")}>
          물품구매 내역
        </MenuItem>
        <MenuItem>증빙서류 조회</MenuItem>
      </MenuSection>
      <MenuSection>
        <MenuHeader>나의 활동정보</MenuHeader>
        <MenuItem {...getMenuItemProps("/mypage/wishlist")}>
          위시리스트
        </MenuItem>
        <MenuItem {...getMenuItemProps("/mypage/register")}>
          판매 상품 등록
        </MenuItem>
        <MenuItem {...getMenuItemProps("/mypage/product-registered")}>
          등록된 판매 상품 조회
        </MenuItem>
        <MenuItem>재입고 알림 내역</MenuItem>
      </MenuSection>
      <MenuSection>
        <MenuHeader>나의 혜택정보</MenuHeader>
        <MenuItem>마일리지</MenuItem>
        <MenuItem>포인트</MenuItem>
      </MenuSection>
      <MenuSection>
        <MenuHeader>나의 계정설정</MenuHeader>
        <MenuItem>간편로그인 계정관리</MenuItem>
        <MenuItem {...getMenuItemProps("/mypage/withdrawal")}>
          회원 탈퇴
        </MenuItem>
      </MenuSection>
    </SidebarContainer>
  );
};

export default Sidebar;
