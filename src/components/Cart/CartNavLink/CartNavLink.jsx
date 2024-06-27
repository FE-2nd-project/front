import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import "./CartNavLink.css";

const CartNavLink = () => {
  const navigate = useNavigate();

  return (
    <nav className="nav-container">
      <div className="cart-nav-container">
        <NavLink
          to="/cart"
          activeClassName="active"
          className="navLink"
          onClick={(e) => e.preventDefault()}
        >
          <div>장바구니</div>
          <div className="navLink-line"></div>
        </NavLink>
      </div>
      <div className="payment-nav-container">
        <NavLink
          to="/Order-payment"
          activeClassName="active"
          className="navLink"
          onClick={(e) => e.preventDefault()}
        >
          <div>주문결제</div>
          <div className="navLink-line"></div>
        </NavLink>
      </div>
      <div className="completed-nav-container">
        <NavLink
          to="/order-payment-completed"
          activeClassName="active"
          className="navLink"
          onClick={(e) => e.preventDefault()}
        >
          <div>주문완료</div>
          <div className="navLink-line"></div>
        </NavLink>
      </div>
    </nav>
  );
};

export default CartNavLink;
