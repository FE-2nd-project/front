import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../components/Product/Product';
import './ProductPage.css';
import axios from 'axios';
import { Pagination } from '../components/Product/Pagination'; // 페이지네이션 컴포넌트 임포트

const ProductPage = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(5); // 한 페이지에 표시할 아이템 수
  const [totalPages, setTotalPages] = useState(0); // 전체 페이지 수

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`/api/item/category/${categoryName}?page=${page}&size=${size}`);
        const data = response.data;
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
      {products.map((data) => (
        // <Product
        //   key={data.id}
        //   id={data.id}
        //   name={data.name}
        //   price={data.price}
        //   urls={data.urls}
        //   options={data.options}
        // />
        <Product key={data.id} id={data.id} name={data.name} price={data.price} url={data.url} stock={data.stock} />
      ))}
      <Pagination page={page} setPage={setPage} totalPages={totalPages} size={size} setSize={setSize} />
    </div>
  );
};

export default ProductPage;
