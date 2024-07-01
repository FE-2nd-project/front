import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../components/Product/Product';
import './ProductPage.css';

const ProductPage = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`/api/productList/${category}`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, [category]);

  return (
    <div className="productPage">
      {products.map((data) => (
        <Product
          key={data.id}
          id={data.id}
          name={data.name}
          price={data.price}
          urls={data.urls}
          options={data.options}
        />
      ))}
    </div>
  );
};

export default ProductPage;

