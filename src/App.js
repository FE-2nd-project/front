// src/App.js
import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import Mainhome from "./Mainhome";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Mainhome />} />
          <Route path="/product-detail" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
