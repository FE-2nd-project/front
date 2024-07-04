import React, { useState } from "react";
import styled from "styled-components";
import { GrNext, GrPrevious } from "react-icons/gr";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { Product } from "../Product/Product";
import { useNavigate } from "react-router-dom";

const SlideContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Slide = styled.div`
  position: relative;
  min-width: 100%;
  height: 100%;
  display: ${(props) => (props.currentIndex ? "flex" : "none")};
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
  height: 35rem;
  aspect-ratio: 1;
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

const ViewAllButton = styled.button`
  width: 7%;
  align-self: center;
  border: 1.5px solid rgb(232, 232, 232);
  border-radius: 10px;
  background: white;
  padding: 10px 0;
`;

export function MDPICKSlider() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      mainUrl:
        "https://fnf-image-prod.s3.ap-northeast-2.amazonaws.com/sns/5c131c56-92b8-48d4-b3d4-23ad97b34d6e/3372004328782812146.JPEG",
      title: "Apparel",
      products: [
        {
          id: 1,
          name: "바시티 넘버 그래픽 오버핏 반팔 티셔츠 뉴욕양키스",
          price: 59000,
          url: "https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=1668,format=auto,fit=contain,onerror=redirect/images/goods/ec/M24F3ATSV034450BKS/thnail/003E33A99D7442FF843084080CB6F0D3.png",
        },
        {
          id: 2,
          name: "베이직 카라배색 컴퍼터블핏 티셔츠 뉴욕양키스",
          price: 89000,
          url: "https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=1668,format=auto,fit=contain,onerror=redirect/images/goods/ec/M24S3APQB024350IVS/thnail/7B3DB3D57B1142F385CFAD2FC67F1246.png",
        },
        {
          id: 3,
          name: "하트 스몰로고 오버핏 반팔 티셔츠 뉴욕양키스",
          price: 59000,
          url: "https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=498,format=auto,fit=contain,onerror=redirect/images/goods/ec/M24S3ATSH014350BKS/thnail/DC34EBD698724A819656B2C7D4C4CCE7.png",
        },
      ],
    },
    {
      mainUrl:
        "https://fnf-image-prod.s3.ap-northeast-2.amazonaws.com/sns/3daf0b81-2878-4df8-b837-7125ac0552c8/3360552285429348401.JPEG",
      title: "Cap",
      products: [
        {
          id: 4,
          name: "빈티지 컬시브 언스트럭쳐 볼캡 뉴욕양키스",
          price: 43000,
          url: "https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=1668,format=auto,fit=contain,onerror=redirect/images/goods/ec/M24N3ACPVL64N50CGS/thnail/E76A0878D6B64BA3B9A5A0D49E8386D6.png",
        },
        {
          id: 5,
          name: "뉴핏 스트럭쳐 볼캡 샌프란시스코 자이언츠",
          price: 36000,
          url: "https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=1668,format=auto,fit=contain,onerror=redirect/images/goods/ec/M22N3ACP0802N14BKS/thnail/E0F2E66C59FA4A63B8502C5B9FD801EC.png",
        },
        {
          id: 6,
          name: "스포티브 바시티 버킷햇 뉴욕양키스",
          price: 63000,
          url: "https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=1668,format=auto,fit=contain,onerror=redirect/images/goods/ec/M24N3AHTS044N50BKS/thnail/868EE53FF85749DFA8A1F61272E35D3D.png",
        },
      ],
    },
    {
      mainUrl:
        "https://cdn-onlinemall.mlb-korea.com/cdn-cgi/image/q=75,w=700,format=auto,fit=contain,onerror=redirect/images/5bf7da72-0652-49f3-9f8d-ecfac3aaf4e8.jpg",
      title: "Shoes",
      products: [
        {
          id: 7,
          name: "커브 러너 뉴욕양키스",
          price: 139000,
          url: "https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=1668,format=auto,fit=contain,onerror=redirect/images/goods/ec/M24N3ARNSPL4N50WHS/thnail/40E7D9C4379A4D4BB1B958A44C4EF1C4.png",
        },
        {
          id: 8,
          name: "커브 러너 LA다저스",
          price: 139000,
          url: "https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=1668,format=auto,fit=contain,onerror=redirect/images/goods/ec/M24N3ARNSPL4N07BKS/thnail/07ED87BB11414CC68F6D6B149C784FE1.png",
        },
        {
          id: 9,
          name: "에이스러너 뉴욕양키스",
          price: 99000,
          url: "https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=1668,format=auto,fit=contain,onerror=redirect/images/goods/ec/M24N3ARNACE4N50IVS/thnail/F461C432B3C74109BAA54E66F2EA5ADC.png",
        },
      ],
    },
    {
      mainUrl:
        "https://fnf-image-prod.s3.ap-northeast-2.amazonaws.com/sns/749b4749-b954-438b-993d-767cbed4fd4b/3355390594062290621.JPEG",
      title: "Bag",
      products: [
        {
          id: 10,
          name: "나일론 카고백 뉴욕양키스",
          price: 129000,
          url: "https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=1668,format=auto,fit=contain,onerror=redirect/images/goods/ec/M24N3ABQM044N50BKS/thnail/5305443380CB487B9839BC22A111AEA6.png",
        },
        {
          id: 11,
          name: "클래식 모노그램 엠보 호보백 뉴욕양키스",
          price: 139000,
          url: "https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=1668,format=auto,fit=contain,onerror=redirect/images/goods/ec/M22N3ABQS022N50CRS/thnail/B6BE15EFB9DE4459ABDB17BF05066C07.png",
        },
        {
          id: 12,
          name: "베이직 럭슬레저 크로스백 LA다저스",
          price: 109000,
          url: "https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=1668,format=auto,fit=contain,onerror=redirect/images/goods/ec/M24N3ACRM024N07BKS/thnail/41F0E8D2312246938FEBBB1721AC46B8.png",
        },
      ],
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
            <SlideImage src={content.mainUrl} />
            {index === currentIndex &&
              content.products.map((data) => (
                <Product
                  id={data.id}
                  name={data.name}
                  price={data.price}
                  url={data.url}
                />
              ))}
          </SlideContents>
          <ViewAllButton onClick={() => navigate(`/product/${content.title}`)}>
            {" "}
            전체보기{" "}
          </ViewAllButton>
        </Slide>
      ))}
    </SlideContainer>
  );
}
