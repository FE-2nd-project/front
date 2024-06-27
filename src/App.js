import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Cart from "./pages/Cart/Cart";
import MyPage from "./pages/MyPage";
import Root from "./pages/Root";
import Error from "./pages/Error";
import Main from "./pages/Main";
import Product from "./pages/Product";
import Wishlist from "./pages/Wishlist";
import Purchases from "./pages/Purchases";
import OrderPayment from "./pages/OrderPayment/OrderPayment";
import OrderCompletion from "./pages/OrderCompletion/OrderCompletion";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "/mypage",
        element: <MyPage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/product-detail",
        element: <ProductDetail />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/mypage/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/mypage/purchases",
        element: <Purchases />,
      },
      {
        path: "/Order-payment",
        element: <OrderPayment />,
      },
      {
        path: "/order-completed",
        element: <OrderCompletion />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />;
    </div>
  );
}

export default App;
