import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductDetail from "../src/ProductDetail/ProductDetail";
import Mainhome from "./Mainhome";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Cart from "./pages/Cart/Cart";
import OrderPayment from "./pages/OrderPayment/OrderPayment";
import OrderCompleted from "./pages/OrderCompleted/OrderCompleted";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Mainhome />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product-detail" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Order-payment" element={<OrderPayment />} />
          <Route path="/order-payment-completed" element={<OrderCompleted />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
