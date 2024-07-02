import React, { useMemo, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { SlArrowLeft } from 'react-icons/sl';
import { SlArrowRight } from 'react-icons/sl';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import './MDPICKInnerSlider.css';

const ElementSliderContainer = styled.div`
  position: relative;
  max-width: 100%;
`;

const LeftButton = styled(SlArrowLeft)`
  top: 30%;
  position: absolute;
  background: lightgrey;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  z-index: 1;
  padding: 12px;
`;

const RightButton = styled(SlArrowRight)`
  top: 30%;
  left: 61%;
  position: absolute;
  background: lightgrey;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  z-index: 1;
  padding: 12px;
`;

const ElementSlider = styled.div`
  display: flex;
`;

const ElementSliderBlock = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ElementImage = styled.img`
  width: 100%;
`;

const ElementTitle = styled.div`
  font-size: 11px;
  font-weight: 600;
`;

const ElementPrice = styled.div`
  font-size: 14px;
  font-weight: 500;
`;

const MDPICKSliderInnerDatas = [
  [
    {
      id: 1,
      url: 'https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=518,format=auto,fit=contain,onerror=redirect/images/goods/ec/M24N3ACPVD14N50INS/thnail/0006C085E9C248938E54F6B5ED88E1DB.png',
      title: '바시티 뭐시기',
      price: '49,000',
    },
    {
      id: 1,
      url: 'https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=518,format=auto,fit=contain,onerror=redirect/images/goods/ec/M24N3ACPVD14N50INS/thnail/0006C085E9C248938E54F6B5ED88E1DB.png',
      title: '바시티 뭐시기',
      price: '49,000',
    },
    {
      id: 1,
      url: 'https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=518,format=auto,fit=contain,onerror=redirect/images/goods/ec/M24N3ACPVD14N50INS/thnail/0006C085E9C248938E54F6B5ED88E1DB.png',
      title: '바시티 뭐시기',
      price: '49,000',
    },
    {
      id: 1,
      url: 'https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=518,format=auto,fit=contain,onerror=redirect/images/goods/ec/M24N3ACPVD14N50INS/thnail/0006C085E9C248938E54F6B5ED88E1DB.png',
      title: '바시티 뭐시기',
      price: '49,000',
    },
    {
      id: 1,
      url: 'https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=518,format=auto,fit=contain,onerror=redirect/images/goods/ec/M24N3ACPVD14N50INS/thnail/0006C085E9C248938E54F6B5ED88E1DB.png',
      title: '바시티 뭐시기',
      price: '49,000',
    },
    {
      id: 1,
      url: 'https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=518,format=auto,fit=contain,onerror=redirect/images/goods/ec/M24N3ACPVD14N50INS/thnail/0006C085E9C248938E54F6B5ED88E1DB.png',
      title: '바시티 뭐시기',
      price: '49,000',
    },
    {
      id: 1,
      url: 'https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=518,format=auto,fit=contain,onerror=redirect/images/goods/ec/M24N3ACPVD14N50INS/thnail/0006C085E9C248938E54F6B5ED88E1DB.png',
      title: '바시티 뭐시기',
      price: '49,000',
    },
    {
      id: 1,
      url: 'https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=518,format=auto,fit=contain,onerror=redirect/images/goods/ec/M24N3ACPVD14N50INS/thnail/0006C085E9C248938E54F6B5ED88E1DB.png',
      title: '바시티 뭐시기',
      price: '49,000',
    },
  ],
  [
    {
      id: 1,
      url: 'https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=386,format=auto,fit=contain,onerror=redirect/images/goods/ec/M24S3FOPB064350BKS/thnail/4FBB13468BAE4BECAC1E977BBC3946BA.png',
      title: '여성 베이직 뭐시기',
      price: '89,000',
    },
    {
      id: 1,
      url: 'https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=386,format=auto,fit=contain,onerror=redirect/images/goods/ec/M24S3FOPB064350BKS/thnail/4FBB13468BAE4BECAC1E977BBC3946BA.png',
      title: '여성 베이직 뭐시기',
      price: '89,000',
    },
    {
      id: 1,
      url: 'https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=386,format=auto,fit=contain,onerror=redirect/images/goods/ec/M24S3FOPB064350BKS/thnail/4FBB13468BAE4BECAC1E977BBC3946BA.png',
      title: '여성 베이직 뭐시기',
      price: '89,000',
    },
    {
      id: 1,
      url: 'https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=386,format=auto,fit=contain,onerror=redirect/images/goods/ec/M24S3FOPB064350BKS/thnail/4FBB13468BAE4BECAC1E977BBC3946BA.png',
      title: '여성 베이직 뭐시기',
      price: '89,000',
    },
    {
      id: 1,
      url: 'https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=386,format=auto,fit=contain,onerror=redirect/images/goods/ec/M24S3FOPB064350BKS/thnail/4FBB13468BAE4BECAC1E977BBC3946BA.png',
      title: '여성 베이직 뭐시기',
      price: '89,000',
    },
    {
      id: 1,
      url: 'https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=386,format=auto,fit=contain,onerror=redirect/images/goods/ec/M24S3FOPB064350BKS/thnail/4FBB13468BAE4BECAC1E977BBC3946BA.png',
      title: '여성 베이직 뭐시기',
      price: '89,000',
    },
    {
      id: 1,
      url: 'https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=386,format=auto,fit=contain,onerror=redirect/images/goods/ec/M24S3FOPB064350BKS/thnail/4FBB13468BAE4BECAC1E977BBC3946BA.png',
      title: '여성 베이직 뭐시기',
      price: '89,000',
    },
  ],
  [
    {
      id: 1,
      url: 'https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=386,format=auto,fit=contain,onerror=redirect/images/goods/ec/M24S3FOPB064350BKS/thnail/4FBB13468BAE4BECAC1E977BBC3946BA.png',
      title: '여성 베이직 뭐시기',
      price: '89,000',
    },
    {
      id: 1,
      url: 'https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=386,format=auto,fit=contain,onerror=redirect/images/goods/ec/M24S3FOPB064350BKS/thnail/4FBB13468BAE4BECAC1E977BBC3946BA.png',
      title: '여성 베이직 뭐시기',
      price: '89,000',
    },
    {
      id: 1,
      url: 'https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=386,format=auto,fit=contain,onerror=redirect/images/goods/ec/M24S3FOPB064350BKS/thnail/4FBB13468BAE4BECAC1E977BBC3946BA.png',
      title: '여성 베이직 뭐시기',
      price: '89,000',
    },
    {
      id: 1,
      url: 'https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=386,format=auto,fit=contain,onerror=redirect/images/goods/ec/M24S3FOPB064350BKS/thnail/4FBB13468BAE4BECAC1E977BBC3946BA.png',
      title: '여성 베이직 뭐시기',
      price: '89,000',
    },
    {
      id: 1,
      url: 'https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=386,format=auto,fit=contain,onerror=redirect/images/goods/ec/M24S3FOPB064350BKS/thnail/4FBB13468BAE4BECAC1E977BBC3946BA.png',
      title: '여성 베이직 뭐시기',
      price: '89,000',
    },
    {
      id: 1,
      url: 'https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=386,format=auto,fit=contain,onerror=redirect/images/goods/ec/M24S3FOPB064350BKS/thnail/4FBB13468BAE4BECAC1E977BBC3946BA.png',
      title: '여성 베이직 뭐시기',
      price: '89,000',
    },
    {
      id: 1,
      url: 'https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=386,format=auto,fit=contain,onerror=redirect/images/goods/ec/M24S3FOPB064350BKS/thnail/4FBB13468BAE4BECAC1E977BBC3946BA.png',
      title: '여성 베이직 뭐시기',
      price: '89,000',
    },
  ],
  [
    {
      id: 1,
      url: 'https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=386,format=auto,fit=contain,onerror=redirect/images/goods/ec/M24S3FOPB064350BKS/thnail/4FBB13468BAE4BECAC1E977BBC3946BA.png',
      title: '여성 베이직 뭐시기',
      price: '89,000',
    },
    {
      id: 1,
      url: 'https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=386,format=auto,fit=contain,onerror=redirect/images/goods/ec/M24S3FOPB064350BKS/thnail/4FBB13468BAE4BECAC1E977BBC3946BA.png',
      title: '여성 베이직 뭐시기',
      price: '89,000',
    },
    {
      id: 1,
      url: 'https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=386,format=auto,fit=contain,onerror=redirect/images/goods/ec/M24S3FOPB064350BKS/thnail/4FBB13468BAE4BECAC1E977BBC3946BA.png',
      title: '여성 베이직 뭐시기',
      price: '89,000',
    },
    {
      id: 1,
      url: 'https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=386,format=auto,fit=contain,onerror=redirect/images/goods/ec/M24S3FOPB064350BKS/thnail/4FBB13468BAE4BECAC1E977BBC3946BA.png',
      title: '여성 베이직 뭐시기',
      price: '89,000',
    },
    {
      id: 1,
      url: 'https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=386,format=auto,fit=contain,onerror=redirect/images/goods/ec/M24S3FOPB064350BKS/thnail/4FBB13468BAE4BECAC1E977BBC3946BA.png',
      title: '여성 베이직 뭐시기',
      price: '89,000',
    },
    {
      id: 1,
      url: 'https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=386,format=auto,fit=contain,onerror=redirect/images/goods/ec/M24S3FOPB064350BKS/thnail/4FBB13468BAE4BECAC1E977BBC3946BA.png',
      title: '여성 베이직 뭐시기',
      price: '89,000',
    },
    {
      id: 1,
      url: 'https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=386,format=auto,fit=contain,onerror=redirect/images/goods/ec/M24S3FOPB064350BKS/thnail/4FBB13468BAE4BECAC1E977BBC3946BA.png',
      title: '여성 베이직 뭐시기',
      price: '89,000',
    },
  ],
];

export function MDPICKInnerSlider({ index, setSliderState }) {
  useEffect(() => {
    setSliderState((prev) => ({ ...prev, index, initialized: true }));
  }, [index, setSliderState]);

  const slickRef = useRef(null);

  const MDPICKSliderInnerData = useMemo(() => MDPICKSliderInnerDatas[index], [index]);

  const prevSlide = () => {
    slickRef.current.slickPrev();
  };

  const nextSlide = () => {
    slickRef.current.slickNext();
  };

  const setSlider = {
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    waitForAnimate: false,
    autoplay: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <ElementSliderContainer>
      <LeftButton onClick={prevSlide} />
      <RightButton onClick={nextSlide} />
      <Slider ref={slickRef} {...setSlider}>
        {MDPICKSliderInnerData.map((data, i) => (
          <ElementSlider key={`${data.id}-${i}`}>
            <ElementSliderBlock>
              <ElementImage src={data.url} />
              <ElementTitle>{data.title}</ElementTitle>
              <ElementPrice>{data.price}</ElementPrice>
            </ElementSliderBlock>
          </ElementSlider>
        ))}
      </Slider>
    </ElementSliderContainer>
  );
}