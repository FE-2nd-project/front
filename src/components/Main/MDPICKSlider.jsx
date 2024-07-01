import React, { useState } from 'react';
import styled from 'styled-components';
import { GrNext } from 'react-icons/gr';
import { GrPrevious } from 'react-icons/gr';
import { SlArrowLeft } from 'react-icons/sl';
import { SlArrowRight } from 'react-icons/sl';
import { MDPICKInnerSlider } from './MDPICKInnerSlider';

const SlideContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Slide = styled.div`
  position: relative;
  min-width: 100%;
  height: 100%;
  display: ${(props) => (props.currentIndex ? 'flex' : 'none')};
  flex-direction: column;
  gap: 30px;
`;

const SlideHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SlideContents = styled.div`
  position: relative;
  max-width: 100%;
  overflow: hidden;
  display: flex;
  gap: 30px;
`;

const SlideImage = styled.img`
  width: 35%;
  object-fit: cover;
`;

const SlideText = styled.div`
  position: relative;
  color: black;
  font-size: 36px;
  font-weight: 400;
  line-height: 48px;
`;

const LeftButton = styled(SlArrowLeft)`
  position: relative;
  background: transparent;
  border: none;
  color: black;
  font-size: 20px;
  cursor: pointer;
  z-index: 1;
`;

const RightButton = styled(SlArrowRight)`
  position: relative;
  background: transparent;
  border: none;
  color: black;
  font-size: 20px;
  cursor: pointer;
  z-index: 1;
`;

export function MDPICKSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      url: 'https://cdn-onlinemall.mlb-korea.com/cdn-cgi/image/q=75,w=918,format=auto,fit=contain,onerror=redirect/images/3b0a80a7-7d18-45e5-a5a7-289f0053e307.jpg',
      title: '의류',
    },
    {
      url: 'https://cdn-onlinemall.mlb-korea.com/cdn-cgi/image/q=75,w=674,format=auto,fit=contain,onerror=redirect/images/0062cf44-3bfc-4bcc-84d6-9a3eba58ae77.jpg',
      title: '볼캡',
    },
    {
      url: 'https://cdn-onlinemall.mlb-korea.com/cdn-cgi/image/q=75,w=674,format=auto,fit=contain,onerror=redirect/images/0062cf44-3bfc-4bcc-84d6-9a3eba58ae77.jpg',
      title: '신발',
    },
    {
      url: 'https://cdn-onlinemall.mlb-korea.com/cdn-cgi/image/q=75,w=674,format=auto,fit=contain,onerror=redirect/images/0062cf44-3bfc-4bcc-84d6-9a3eba58ae77.jpg',
      title: '가방',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  return (
    <SlideContainer>
      {slides.map((content, index) => (
        <Slide key={index} currentIndex={index === currentIndex}>
          <SlideHeader>
            <SlideText>{content.title}</SlideText>
            <ButtonWrapper>
              <LeftButton onClick={prevSlide}>
                <GrPrevious />
              </LeftButton>
              {currentIndex + 1} / {slides.length}
              <RightButton onClick={nextSlide}>
                <GrNext />
              </RightButton>
            </ButtonWrapper>
          </SlideHeader>
          <SlideContents>
            <SlideImage src={content.url} />
            <MDPICKInnerSlider index={index} />
          </SlideContents>
        </Slide>
      ))}
    </SlideContainer>
  );
}
