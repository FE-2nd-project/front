import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "../common/Sidebar";
import { Link } from "react-router-dom";

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

const FilterContainer = styled.div`
  position: relative;
`;

const FilterButton = styled.div`
  font-size: 0.9rem;
  color: #999;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const FilterDropdown = styled.div`
  position: absolute;
  top: 3rem;
  right: 0;
  width: 350px;
  background: white;
  border: 1px solid #ddd;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  z-index: 10;
`;

const FilterButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const FilterButtonOption = styled.button`
  flex: 1;
  margin-right: 0.5rem;
  padding: 0.5rem;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
`;

const FilterInputs = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const FilterInput = styled.select`
  flex: 1;
  margin-right: 0.5rem;
  padding: 0.5rem;
  border: 1px solid #ddd;
  background: white;
  &:last-child {
    margin-right: 0;
  }
`;

const FilterMessage = styled.div`
  font-size: 0.8rem;
  color: #999;
  margin-bottom: 1rem;
`;

const FilterActions = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FilterButtonCancel = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
`;

const FilterButtonApply = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  background: #007bff;
  color: white;
  cursor: pointer;
`;

const PurchaseContainer = styled.div`
  border-top: 2px solid #000;
  padding-top: 2rem;
  padding-left: 1rem; /* 컨테이너 크기 조절 */
`;

const PurchaseMessage = styled.div`
  text-align: center;
  font-size: 1rem;
  color: #999;
`;

const Purchases = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

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
            <Title>총 0건의 내역</Title>
            <FilterContainer>
              <FilterButton onClick={toggleFilter}>기간조회 ▾</FilterButton>
              {isFilterOpen && (
                <FilterDropdown>
                  <FilterButtonGroup>
                    <FilterButtonOption>3개월</FilterButtonOption>
                    <FilterButtonOption>6개월</FilterButtonOption>
                    <FilterButtonOption>기간선택</FilterButtonOption>
                  </FilterButtonGroup>
                  <FilterInputs>
                    <FilterInput>
                      <option>년</option>
                    </FilterInput>
                    <FilterInput>
                      <option>월</option>
                    </FilterInput>
                  </FilterInputs>
                  <FilterMessage>
                    선택하신 기간으로부터 1년 단위로 조회가 됩니다.
                  </FilterMessage>
                  <FilterActions>
                    <FilterButtonCancel onClick={toggleFilter}>
                      취소
                    </FilterButtonCancel>
                    <FilterButtonApply>적용하기</FilterButtonApply>
                  </FilterActions>
                </FilterDropdown>
              )}
            </FilterContainer>
          </TitleContainer>
          <PurchaseContainer>
            <PurchaseMessage>
              보관한 구매내역이 없습니다
              <br />
              추천 상품을 둘러보세요
            </PurchaseMessage>
          </PurchaseContainer>
        </MainContent>
      </Container>
    </PageContainer>
  );
};

export default Purchases;
