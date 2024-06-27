import React from "react";
import { Product } from "../components/Product/Product";
import "./ProductPage.css";

const productData = [
  {
    id: 1,
    name: "바시티 컬시브 레터링 데님 언스트럭쳐 볼캡 뉴욕양키스",
    price: 49000,
    url: "https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=652,format=auto,fit=contain,onerror=redirect/images/goods/ec/M21N3ACP6601N50SAP/thnail/97E668F33405423A866D7D469FB19C41.png",
    colors: ["black", "blue"],
    isNew: true,
    isBest: true,
    stock: 0,
  },
  {
    id: 1,
    name: "바시티 컬시브 레터링 데님 언스트럭쳐 볼캡 뉴욕양키스",
    price: 49000,
    url: "https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=652,format=auto,fit=contain,onerror=redirect/images/goods/ec/M21N3ACP6601N50SAP/thnail/97E668F33405423A866D7D469FB19C41.png",
    colors: ["black", "blue"],
    isNew: true,
    isBest: true,
    stock: 0,
  },
  {
    id: 1,
    name: "바시티 컬시브 레터링 데님 언스트럭쳐 볼캡 뉴욕양키스",
    price: 49000,
    url: "https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=652,format=auto,fit=contain,onerror=redirect/images/goods/ec/M21N3ACP6601N50SAP/thnail/97E668F33405423A866D7D469FB19C41.png",
    colors: ["black", "blue"],
    isNew: true,
    isBest: true,
    stock: 0,
  },
  {
    id: 1,
    name: "바시티 컬시브 레터링 데님 언스트럭쳐 볼캡 뉴욕양키스",
    price: 49000,
    url: "https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=652,format=auto,fit=contain,onerror=redirect/images/goods/ec/M21N3ACP6601N50SAP/thnail/97E668F33405423A866D7D469FB19C41.png",
    colors: ["black", "blue"],
    isNew: true,
    isBest: true,
    stock: 0,
  },
  {
    id: 1,
    name: "바시티 컬시브 레터링 데님 언스트럭쳐 볼캡 뉴욕양키스",
    price: 49000,
    url: "https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=652,format=auto,fit=contain,onerror=redirect/images/goods/ec/M21N3ACP6601N50SAP/thnail/97E668F33405423A866D7D469FB19C41.png",
    colors: ["black", "blue"],
    isNew: true,
    isBest: true,
    stock: 0,
  },
  {
    id: 1,
    name: "바시티 컬시브 레터링 데님 언스트럭쳐 볼캡 뉴욕양키스",
    price: 49000,
    url: "https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=652,format=auto,fit=contain,onerror=redirect/images/goods/ec/M21N3ACP6601N50SAP/thnail/97E668F33405423A866D7D469FB19C41.png",
    colors: ["black", "blue"],
    isNew: true,
    isBest: true,
    stock: 0,
  },
  {
    id: 1,
    name: "바시티 컬시브 레터링 데님 언스트럭쳐 볼캡 뉴욕양키스",
    price: 49000,
    url: "https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=652,format=auto,fit=contain,onerror=redirect/images/goods/ec/M21N3ACP6601N50SAP/thnail/97E668F33405423A866D7D469FB19C41.png",
    colors: ["black", "blue"],
    isNew: true,
    isBest: true,
    stock: 0,
  },
];

const ProductPage = () => {
  return (
    <div className="productPage">
      {productData.map((data) => (
        <Product
          id={data.id}
          name={data.name}
          price={data.price}
          url={data.url}
          colors={data.colors}
          isNew={data.isNew}
          isBest={data.isBest}
          stock={data.stock}
        />
      ))}
    </div>
  );
};

export default ProductPage;
