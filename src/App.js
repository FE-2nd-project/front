import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import React from "react";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Cart from "./pages/Cart/Cart";
import MyPage from "./pages/MyPage";
import Root from "./pages/Root";
import Error from "./pages/Error";
import MainPage from "./pages/MainPage";
import ProductPage from "./pages/ProductPage";
import Wishlist from "./pages/Wishlist";
import Purchases from "./pages/Purchases";
import OrderPayment from "./pages/OrderPayment/OrderPayment";
import OrderCompletion from "./pages/OrderCompletion/OrderCompletion";
import Withdrawal from "./pages/Withdrawal/Withdrawal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <MainPage />,
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
        element: <ProductPage />,
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
        path: "/mypage/withdrawal",
        element: <Withdrawal />,
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
