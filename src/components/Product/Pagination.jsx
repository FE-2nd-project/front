import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const PageButton = styled.button`
  background-color: black;
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

export function Pagination({ page, setPage, totalPages, size, setSize }) {
  const handlePrevPage = () => {
    if (page > 0) setPage(page - 1);
  };

  const handleNextPage = () => {
    if (page < totalPages - 1) setPage(page + 1);
  };

  const handleSizeChange = (event) => {
    setSize(Number(event.target.value));
    setPage(0); // 페이지 크기 변경 시 첫 페이지로 이동
  };

  return (
    <PaginationContainer>
      <PageButton onClick={handlePrevPage} disabled={page === 0}>
        Prev
      </PageButton>
      <PageInfo>
        Page {page + 1} of {totalPages}
      </PageInfo>
      <PageButton onClick={handleNextPage} disabled={page === totalPages-1}>
        Next
      </PageButton>
      <SizeSelector value={size} onChange={handleSizeChange}>
        <option value={8}>8</option>
        <option value={16}>16</option>
        <option value={24}>24</option>
        <option value={32}>32</option>
      </SizeSelector>
      <PageInfo>개 씩 보기</PageInfo>
    </PaginationContainer>
  );
}
