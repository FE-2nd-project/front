import React, { useState } from 'react';
import styled from 'styled-components';
import { Product } from '../Product/Product';
const SliderContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
`;
const SliderWrapper = styled.div`
  display: flex;
  overflow: hidden;
`;
const SliderContent = styled.div`
  display: flex;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-${(props) => props.translateValue}%);
`;
const SliderItem = styled.div`
  flex: 0 0 calc(100% / ${(props) => props.itemsToShow});
  box-sizing: border-box;
  padding: 10px;
  text-align: center;
`;
const LeftButton = styled.button`
  background-color: black;
  border: none;
  color: white;
  padding: 10px;
  cursor: pointer;
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
  position: absolute;
  top: 45%;
  z-index: 1;
`;
const RightButton = styled.button`
  background-color: black;
  border: none;
  color: white;
  padding: 10px;
  cursor: pointer;
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
  position: absolute;
  top: 45%;
  right: 0;
  z-index: 1;
`;
export function BestItemSlider({ products }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 5;
  const itemsLength = products.length;
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };
  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, itemsLength - itemsToShow));
  };
  const translateValue = (currentIndex * (100 / itemsToShow));

  return (
    <SliderContainer>
      <LeftButton onClick={handlePrev} disabled={currentIndex === 0}>
        {'<'}
      </LeftButton>
      <SliderWrapper>
        <SliderContent translateValue={translateValue}>
          {products.map((product) => (
            <SliderItem key={product.id} itemsToShow={itemsToShow}>
              <Product id={product.id} name={product.name} price={product.price} url={product.url} />
            </SliderItem>
          ))}
        </SliderContent>
      </SliderWrapper>
      <RightButton onClick={handleNext} disabled={currentIndex >= itemsLength - itemsToShow}>
        {'>'}
      </RightButton>
    </SliderContainer>
  );
}
