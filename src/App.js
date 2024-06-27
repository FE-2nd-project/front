import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import MyPage from "./pages/MyPage";
import Root from "./pages/Root";
import Error from "./pages/Error";
import MainPage from "./pages/MainPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import ProductPage from "./pages/ProductPage";

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
