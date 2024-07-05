import React from 'react';
import { TopSlider } from '../components/Main/TopSlider';
import { MDPICKSlider } from '../components/Main/MDPICKSlider';
import { BestItemSlider } from '../components/Main/BestItemSlider';
import { BottomSlider } from '../components/Main/BottomSlider';
import './MainPage.css';
import { useNavigate } from 'react-router-dom';

const bestItems = [
  {
    id: 13,
    name: '루키 언스트럭쳐 볼캡 LA다저스',
    price: 36000,
    url: 'https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=1668,format=auto,fit=contain,onerror=redirect/images/goods/ec/M21N3ACP7701N07GNS/thnail/14D2E8DA8F054ED0802972053CA37EEB.png',
  },
  {
    id: 14,
    name: '청키러너 샌들 LA다저스',
    price: 99000,
    url: 'https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=510,format=auto,fit=contain,onerror=redirect/images/goods/ec/M24S3ASDRNS4307WHS/thnail/20964154BEB248A3A5EB2A206313D1B2.png',
  },
  {
    id: 15,
    name: '바시티 넘버 그래픽 오버핏 반팔 티셔츠 뉴욕양키스',
    price: 59000,
    url: 'https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=510,format=auto,fit=contain,onerror=redirect/images/goods/ec/M24F3ATSV034450CRS/thnail/5F564FF089D54E309D174536E34BA753.png',
  },
  {
    id: 53,
    name: '청키라이너 미드 클래식 모노그램 뉴욕양키스',
    price: 179000,
    url: 'https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=1668,format=auto,fit=contain,onerror=redirect/images/goods/ec/M24N3ASXCMM4N50PKS/thnail/CA4AFE8FE4F64B0E8BFA61D9AF51BC58.png',
  },
  {
    id: 17,
    name: '바시티 자카드 스몰 토트백 LA다저스',
    price: 139000,
    url: 'https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=1668,format=auto,fit=contain,onerror=redirect/images/goods/ec/M24N3AORS024N07CRM/thnail/79ABF25EB6F144B0AA5605B258FAE232.png',
  },
  {
    id: 38,
    name: 'N-COVER 언스트럭쳐 볼캡 뉴욕양키스',
    price: 36000,
    url: 'https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=1668,format=auto,fit=contain,onerror=redirect/images/goods/ec/M21N3ACP6601N50BKS/thnail/9326F48C2ABF4D47ACC5BC82CFF82B03.png',
  },
  {
    id: 19,
    name: '스트릿 레터링 오버핏 반팔 티셔츠 뉴욕양키스',
    price: 69000,
    url: 'https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=1668,format=auto,fit=contain,onerror=redirect/images/goods/ec/M24S3ATSB224350BKS/thnail/79CCF9B532064D85834C45E093A7B164.png',
  },
  {
    id: 20,
    name: '다이아 모노그램 자카드 미니 크로스백 뉴욕양키스',
    price: 139000,
    url: 'https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=1668,format=auto,fit=contain,onerror=redirect/images/goods/ec/M24N3ACRS054N50BKS/thnail/4FC68A56E1994EA99C26D54A92B53662.png',
  },
  {
    id: 21,
    name: '베이직 빅로고 나일론 4부 보드숏 뉴욕양키스',
    price: 69000,
    url: 'https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=1668,format=auto,fit=contain,onerror=redirect/images/goods/ec/M24S3ASMB024350BKS/thnail/206E777611564C98988F5ED37579230D.png',
  },
  {
    id: 22,
    name: '바시티 반팔 맨투맨 뉴욕양키스',
    price: 79000,
    url: 'https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=1668,format=auto,fit=contain,onerror=redirect/images/goods/ec/M24S3ARSV014350MGL/thnail/891D29FFB2464ADD9DDF75B571A309B8.png',
  },
];

const Main = () => {
  const navigate = useNavigate();

  return (
    <div className="MainPageContainer">
      <TopSlider />
      <section>
        <div className="sectionTitle">MD's PICK</div>
        <MDPICKSlider />
      </section>
      <section>
        <div className="sectionTitle">Best Item</div>
        <div className="desc">가장 사랑받는 베스트 아이템</div>
        <BestItemSlider products={bestItems} />
        <button className="viewAll" onClick={() => navigate('/product/ALL')}>
          {' '}
          전체보기{' '}
        </button>
      </section>
      <section>
        <BottomSlider />
      </section>
    </div>
  );
};

export default Main;
