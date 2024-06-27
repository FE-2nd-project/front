import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import MyPage from "./pages/MyPage";
import Root from "./pages/Root";
import Error from "./pages/Error";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Product from "./pages/Product";
import Wishlist from "./pages/Wishlist";
import Purchases from "./pages/Purchases";

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
        path: "/mypage/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/mypage/purchases",
        element: <Purchases />,
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
