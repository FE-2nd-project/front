import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { GrNext } from 'react-icons/gr';
import { GrPrevious } from 'react-icons/gr';
import { SlArrowLeft } from 'react-icons/sl';
import { SlArrowRight } from 'react-icons/sl';

const SlideContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Slide = styled.div`
  position: relative;
  min-width: 100%;
  height: 100%;
  display: ${(props) => (props.currentIndex ? 'block' : 'none')};
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SlideText = styled.div`
  position: absolute;
  bottom: 20%;
  left: 40%;
  color: ${(props) => props.contentColor};
  display: flex;
  flex-direction: column;
  gap: 5px;
  text-align: center;

  div:nth-child(1) {
    font-size: 36px;
    font-weight: 700;
  }

  div:nth-child(2) {
    font-size: 36px;
    font-weight: 700;
  }
`;

const LeftButton = styled(SlArrowLeft)`
  left: 10px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.9);
  font-size: 35px;
  cursor: pointer;
  z-index: 1;
`;

const RightButton = styled(SlArrowRight)`
  right: 10px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.9);
  font-size: 35px;
  cursor: pointer;
  z-index: 1;
`;

export function BottomSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      url: 'https://cdn-onlinemall.mlb-korea.com/cdn-cgi/image/q=75,w=1754,format=auto,fit=contain,onerror=redirect/images/27126fa7-012b-4321-a731-6ce2d7100d51.png',
      text1: '공식몰 전상품',
      text2: '무료배송/무료반품',
      color: 'white',
    },
    {
      url: 'https://cdn-onlinemall.mlb-korea.com/cdn-cgi/image/q=75,w=1754,format=auto,fit=contain,onerror=redirect/images/49d631ea-7f06-4c05-a7b4-cca115b5ff48.png',
      text1: '카카오톡 채널 추가',
      text2: '10% 할인쿠폰',
      color: 'white',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <SlideContainer>
      {slides.map((content, i) => (
        <Slide key={i} currentIndex={i === currentIndex}>
          <SlideImage src={content.url} />

          <SlideText contentColor={content.color}>
            <div>{content.text1}</div>
            <div>{content.text2}</div>
            <div>{content.text3}</div>
          </SlideText>

          <LeftButton onClick={prevSlide}>
            <GrPrevious />
          </LeftButton>
          <RightButton onClick={nextSlide}>
            <GrNext />
          </RightButton>
        </Slide>
      ))}
    </SlideContainer>
  );
}
