import React from "react";
import { TopSlider } from "../components/Main/TopSlider";
import { MDPICKSlider } from "../components/Main/MDPICKSlider";
import "./MainPage.css";

const Main = () => {
  return (
    <div className="MainPageContainer">
      <TopSlider />
      <section className="focusEditionSection">
        <div className="sectionTitle">MD's PICK</div>
        <MDPICKSlider />
      </section>
      <section className="newInSection">
        <div className="sectionTitle">NEW IN</div>
      </section>
    </div>
  );
};

export default Main;
