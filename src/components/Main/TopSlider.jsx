import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

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
  display: ${(props) => (props.currentIndex ? "block" : "none")};
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SlideText = styled.div`
  position: absolute;
  bottom: 32%;
  left: 10%;
  color: ${(props) => props.contentColor};
  font-size: 30px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  div:nth-child(1) {
    font-size: 56px;
    font-weight: 700;
  }

  div:nth-child(2) {
    font-size: 56px;
    font-weight: 700;
  }

  div:nth-child(3) {
    font-size: 20px;
    padding-top: 25px;
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
  font-size: 50px;
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
  font-size: 50px;
  cursor: pointer;
  z-index: 1;
`;

export function TopSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      url: "https://cdn-onlinemall.mlb-korea.com/cdn-cgi/image/q=88,w=2880,format=auto,fit=contain,onerror=redirect/images/014529e7-780d-407c-985c-e7cb8ebe9c00.png",
      text1: "Sportive Heritage",
      text2: "VARSITY TEES",
      text3: "스포티한 데일리 라이프를 위한 MLB 티셔츠",
      color: "white",
    },
    {
      url: "https://cdn-onlinemall.mlb-korea.com/cdn-cgi/image/q=88,w=2880,format=auto,fit=contain,onerror=redirect/images/8467e671-fe4e-4b21-9112-fd9c8c567cad.png",
      text1: "SUMMER HEADWEAR",
      text2: "MLB CAP & HAT",
      text3: "여름 스타일링의 머스트해브 아이템! 볼캡 & 버킷햇",
      color: "white",
    },
    {
      url: "https://cdn-onlinemall.mlb-korea.com/cdn-cgi/image/q=88,w=2880,format=auto,fit=contain,onerror=redirect/images/e2d055bb-3bea-46c3-b6e9-e4ae6ecfd310.png",
      text1: "Perfect Summer",
      text2: "RUNNER SANDAL",
      text3: "인플루언서 조하나의 썸머 슈즈 PICK!",
      color: "white",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
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
