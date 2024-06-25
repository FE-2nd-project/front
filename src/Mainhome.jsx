import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

const Mainhome = () => {
  return (
    <div>
      <NavBar />
      <Link to="/product-detail">Product-detail</Link>
    </div>
  );
};

export default Mainhome;
