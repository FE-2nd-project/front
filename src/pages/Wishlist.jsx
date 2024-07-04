import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Sidebar from "../common/Sidebar";
import { Link } from "react-router-dom";
import WishlistItem from "../components/MyPage/WishlistItem";
import axios from "axios";

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
  margin-left: 2rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
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
  font-size: 1.2rem; /* 글씨 크기 줄이기 */
  font-weight: bold;
`;

const RemoveAll = styled.div`
  font-size: 0.9rem;
  color: #999;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const WishlistContainer = styled.div`
  border-top: 2px solid #000;
  padding-top: 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4개씩 한 줄에 */
  gap: 1rem;
  min-height: 200px; /* 컨테이너 높이 지정 */
  align-items: center; /* 컨테이너 중앙 정렬 */
  justify-content: center; /* 컨테이너 중앙 정렬 */
`;

const WishlistMessage = styled.div`
  text-align: center;
  font-size: 1rem;
  color: #999;
  grid-column: span 4; /* 그리드 전체를 차지하도록 */
`;

const Wishlist = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/api/mypage/cart`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.data.data) {
          setItems(response.data.data);
        } else {
          setError("No cart items found");
        }
      })
      .catch((error) => {
        console.error("There was an error fetching the wishlist data!", error);
        setError("There was an error fetching the wishlist data!");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleRemoveAll = () => {
    setItems([]);
  };

  return (
    <PageContainer>
      <Container>
        <Sidebar />
        <MainContent>
          <Breadcrumbs>
            <Link to="/">HOME</Link> &gt; <Link to="/mypage">마이페이지</Link>{" "}
            &gt; 장바구니 조회
          </Breadcrumbs>
          <TitleContainer>
            <Title>총 {items.length}건의 내역</Title>
            <RemoveAll onClick={handleRemoveAll}>전체삭제</RemoveAll>
          </TitleContainer>
          <WishlistContainer>
            {loading ? (
              <WishlistMessage>로딩 중...</WishlistMessage>
            ) : error ? (
              <WishlistMessage>{error}</WishlistMessage>
            ) : items.length === 0 ? (
              <WishlistMessage>
                보관한 위시리스트가 없습니다
                <br />
                추천 상품을 둘러보세요
              </WishlistMessage>
            ) : (
              items.map((item, index) => (
                <WishlistItem key={index} item={item} />
              ))
            )}
          </WishlistContainer>
        </MainContent>
      </Container>
    </PageContainer>
  );
};

export default Wishlist;
