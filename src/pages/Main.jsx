import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Link to="/product-detail">제품 설명 페이지</Link>
    </div>
  );
};

export default Main;
