import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "../common/Sidebar";
import { Link } from "react-router-dom";
import WishlistItem from "../components/MyPage/WishlistItem";

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
  const [items, setItems] = useState([
    {
      id: 1,
      image: "https://via.placeholder.com/200",
      title: "루키 언스트럭처 블캡 LAC다저스",
      price: "36,000",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/200",
      title: "루키 언스트럭처 블캡 LAC다저스",
      price: "36,000",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/200",
      title: "루키 언스트럭처 블캡 LAC다저스",
      price: "36,000",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/200",
      title: "루키 언스트럭처 블캡 LAC다저스",
      price: "36,000",
    },
    {
      id: 5,
      image: "https://via.placeholder.com/200",
      title: "N-COVER 언스트럭처 캡",
      price: "36,000",
    },
  ]);

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
            &gt; 위시리스트
          </Breadcrumbs>
          <TitleContainer>
            <Title>총 {items.length}건의 내역</Title>
            <RemoveAll onClick={handleRemoveAll}>전체삭제</RemoveAll>
          </TitleContainer>
          <WishlistContainer>
            {items.length === 0 ? (
              <WishlistMessage>
                보관한 위시리스트가 없습니다
                <br />
                추천 상품을 둘러보세요
              </WishlistMessage>
            ) : (
              items.map((item) => <WishlistItem key={item.id} item={item} />)
            )}
          </WishlistContainer>
        </MainContent>
      </Container>
    </PageContainer>
  );
};

export default Wishlist;
