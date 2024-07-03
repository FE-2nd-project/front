import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Product } from '../components/Product/Product';
import './ProductPage.css';
import axios from 'axios';
import { Pagination } from '../components/Product/Pagination'; // 페이지네이션 컴포넌트 임포트

const extractCategoryFromPath = (pathname) => {
  const match = pathname.match(/\/product\/([^/]+)/);
  return match ? match[1] : null;
};

const ProductPage = () => {
  const location = useLocation();
  const categoryName = extractCategoryFromPath(location.pathname);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(5); // 한 페이지에 표시할 아이템 수
  const [totalPages, setTotalPages] = useState(0); // 전체 페이지 수

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/api/item/category/${categoryName}?page=${page}&size=${size}`
        );
        const data = response.data;
        console.log(data);
        setProducts(data.content);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, [categoryName, page, size]);

  return (
    <div className="productPage">
      <div className="productList">
        {products.map((data) => (
          <Product key={data.id} id={data.id} name={data.name} price={data.price} url={data.url} />
        ))}
      </div>
      <Pagination page={page} setPage={setPage} totalPages={totalPages} size={size} setSize={setSize} />
    </div>
  );
};

export default ProductPage;
