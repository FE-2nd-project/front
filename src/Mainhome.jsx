import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import "./Mainhome.css";

const Mainhome = () => {
  return (
    <div>
      <NavBar />
      <div className="links-container">
        <Link to="/product-detail">제품 상세 페이지</Link>
        <Link to="/Order-payment">결제 페이지</Link>
      </div>
    </div>
  );
};

export default Mainhome;
