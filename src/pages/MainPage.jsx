import React from 'react';
import { TopSlider } from '../components/Main/TopSlider';
import { MDPICKSlider } from '../components/Main/MDPICKSlider';
import { BestItemSlider } from '../components/Main/BestItemSlider';
import { BottomSlider } from '../components/Main/BottomSlider';
import './MainPage.css';
import { useNavigate } from 'react-router-dom';

const sample = {
  id: 1,
  name: '바시티 넘버 그래픽 오버핏 반팔 티셔츠 뉴욕양키스',
  price: 59000,
  url: 'https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=1668,format=auto,fit=contain,onerror=redirect/images/goods/ec/M24F3ATSV034450BKS/thnail/003E33A99D7442FF843084080CB6F0D3.png',
};

const items = [sample, sample, sample, sample, sample, sample, sample, sample, sample, sample];

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
        <BestItemSlider products={items} />
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
