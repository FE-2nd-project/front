import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Mainhome = () => {
  return (
    <div>
      <Link to="/product-detail">Product-detail</Link>
    </div>
  );
};

export default Mainhome;
