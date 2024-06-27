import React from "react";
import { Link } from "react-router-dom";
import { TopSlider } from "../components/Main/TopSlider";
import { FocusEditionSlider } from "../components/Main/FocusEditionSlider";
import "./MainPage.css";

const Main = () => {
  return (
    <div className="MainPageContainer">
      <Link to="/product-detail">Product-detail</Link>
      <TopSlider />
      <section className="focusEditionSection">
        <div className="sectionTitle">FOCUS EDITION</div>
        <FocusEditionSlider />
      </section>
      <section className="bestItemSection">
        <div className="sectionTitle">BEST ITEM</div>
      </section>
      <section className="seasonPickSection">
        <div className="sectionTitle">SEASON PICK</div>
      </section>
      <section className="kidsPickSection">
        <div className="sectionTitle">KIDS PICK</div>
      </section>
      <section className="newInSection">
        <div className="sectionTitle">NEW IN</div>
      </section>
    </div>
  );
};

export default Main;
