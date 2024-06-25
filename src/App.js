import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductDetail from "../src/ProductDetail/ProductDetail";
import Mainhome from "./Mainhome";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Cart from "./pages/Cart/Cart";
import MyPage from "./pages/MyPage";
import Root from "./pages/Root";
import Error from "./pages/Error";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Product from "./pages/Product";

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
