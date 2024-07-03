import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const PageButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  margin: 0 5px;
  cursor: pointer;
  border-radius: 4px;

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: #0056b3;
  }
`;

const PageInfo = styled.span`
  margin: 0 10px;
  font-size: 16px;
`;

const SizeSelector = styled.select`
  padding: 8px;
  margin-left: 10px;
  border-radius: 4px;
  border: 1px solid #cccccc;
`;

export function Pagination ({ page, setPage, totalPages, size, setSize }) {
  const handlePrevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handleSizeChange = (event) => {
    setSize(Number(event.target.value));
    setPage(1); // 페이지 크기 변경 시 첫 페이지로 이동
  };

  return (
    <PaginationContainer>
      <PageButton onClick={handlePrevPage} disabled={page === 1}>Prev</PageButton>
      <PageInfo>Page {page} of {totalPages + 1}</PageInfo>
      <PageButton onClick={handleNextPage} disabled={page === totalPages}>Next</PageButton>
      <PageInfo>product/page</PageInfo>
      <SizeSelector value={size} onChange={handleSizeChange}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={50}>50</option>
      </SizeSelector>
    </PaginationContainer>
  );
};

