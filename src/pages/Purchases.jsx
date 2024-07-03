// Purchases.jsx
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Sidebar from "../common/Sidebar";
import { Link } from "react-router-dom";
import axios from "axios";
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
  margin-left: 2rem;
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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`;

const PurchaseMessage = styled.div`
  text-align: center;
  font-size: 1rem;
  color: #999;
  grid-column: span 4;
`;

const Purchases = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [filteredItems, setFilteredItems] = useState([]); // Add this line
  const dispatch = useDispatch();
  const purchases = useSelector((state) => state.purchase.purchases);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    dispatch(fetchPurchases(token));
  }, [dispatch]);

  useEffect(() => {
    setFilteredItems(purchases); // Initialize filtered items
  }, [purchases]);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const applyFilter = () => {
    let filtered = purchases;
    const currentDate = new Date();

    if (selectedFilter === "3개월") {
      const dateLimit = new Date();
      dateLimit.setMonth(currentDate.getMonth() - 3);
      filtered = purchases.filter(
        (item) => new Date(item.purchaseDate) >= dateLimit
      );
    } else if (selectedFilter === "6개월") {
      const dateLimit = new Date();
      dateLimit.setMonth(currentDate.getMonth() - 6);
      filtered = purchases.filter(
        (item) => new Date(item.purchaseDate) >= dateLimit
      );
    } else if (selectedFilter === "기간선택") {
      if (year && month) {
        filtered = purchases.filter((item) => {
          const purchaseDate = new Date(item.purchaseDate);
          return (
            purchaseDate.getFullYear() === parseInt(year) &&
            purchaseDate.getMonth() === parseInt(month) - 1
          );
        });
      }
    }

    setFilteredItems(filtered);
    toggleFilter();
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, i) => currentYear - i);

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
            <Title>총 {filteredItems.length}건의 내역</Title>
            <FilterContainer>
              <FilterButton onClick={toggleFilter}>기간조회 ▾</FilterButton>
              {isFilterOpen && (
                <FilterDropdown>
                  <FilterButtonGroup>
                    <FilterButtonOption
                      onClick={() => setSelectedFilter("3개월")}
                      style={{
                        backgroundColor:
                          selectedFilter === "3개월" ? "#007bff" : "white",
                        color: selectedFilter === "3개월" ? "white" : "black",
                      }}
                    >
                      3개월
                    </FilterButtonOption>
                    <FilterButtonOption
                      onClick={() => setSelectedFilter("6개월")}
                      style={{
                        backgroundColor:
                          selectedFilter === "6개월" ? "#007bff" : "white",
                        color: selectedFilter === "6개월" ? "white" : "black",
                      }}
                    >
                      6개월
                    </FilterButtonOption>
                    <FilterButtonOption
                      onClick={() => setSelectedFilter("기간선택")}
                      style={{
                        backgroundColor:
                          selectedFilter === "기간선택" ? "#007bff" : "white",
                        color:
                          selectedFilter === "기간선택" ? "white" : "black",
                      }}
                    >
                      기간선택
                    </FilterButtonOption>
                  </FilterButtonGroup>
                  <FilterInputs>
                    <FilterInput
                      disabled={selectedFilter !== "기간선택"}
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                    >
                      <option value="">년</option>
                      {years.map((year) => (
                        <option key={year} value={year}>
                          {year}년
                        </option>
                      ))}
                    </FilterInput>
                    <FilterInput
                      disabled={selectedFilter !== "기간선택"}
                      value={month}
                      onChange={(e) => setMonth(e.target.value)}
                    >
                      <option value="">월</option>
                      <option value="1">1월</option>
                      <option value="2">2월</option>
                      <option value="3">3월</option>
                      <option value="4">4월</option>
                      <option value="5">5월</option>
                      <option value="6">6월</option>
                      <option value="7">7월</option>
                      <option value="8">8월</option>
                      <option value="9">9월</option>
                      <option value="10">10월</option>
                      <option value="11">11월</option>
                      <option value="12">12월</option>
                    </FilterInput>
                  </FilterInputs>
                  <FilterMessage>
                    선택하신 기간으로부터 1년 단위로 조회가 됩니다.
                  </FilterMessage>
                  <FilterActions>
                    <FilterButtonCancel onClick={toggleFilter}>
                      취소
                    </FilterButtonCancel>
                    <FilterButtonApply onClick={applyFilter}>
                      적용하기
                    </FilterButtonApply>
                  </FilterActions>
                </FilterDropdown>
              )}
            </FilterContainer>
          </TitleContainer>
          <PurchaseContainer>
            {filteredItems.length === 0 ? (
              <PurchaseMessage>
                보관한 구매내역이 없습니다
                <br />
                추천 상품을 둘러보세요
              </PurchaseMessage>
            ) : (
              filteredItems.map((item) => (
                <PurchasesItem key={item.id} item={item} />
              ))
            )}
          </PurchaseContainer>
        </MainContent>
      </Container>
    </PageContainer>
  );
};

export default Purchases;
