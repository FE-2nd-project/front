import React from 'react';
import { TopSlider } from '../components/Main/TopSlider';
import { MDPICKSlider } from '../components/Main/MDPICKSlider';
import { BottomSlider } from '../components/Main/BottomSlider';
import './MainPage.css';

const Main = () => {
  return (
    <div className="MainPageContainer">
      <TopSlider />
      <section>
        <div className="sectionTitle">MD's PICK</div>
        <MDPICKSlider />
      </section>
      <section>
        <div className="sectionTitle">NEW IN</div>
      </section>
      <section>
        <BottomSlider />
      </section>
    </div>
  );
};

export default Main;
