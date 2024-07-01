import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Sidebar from "../../common/Sidebar";

import styled from "styled-components";
import "./ProductRegistered.css";

import RegisteredUpdateModal from "../../components/ProductRegistered/RegisteredUpdateModal";
import EachProductRegistered from "../../components/ProductRegistered/EachProductRegistered";
import { useDispatch, useSelector } from "react-redux";
import { getProductRegisteredData } from "../../store/reducer/productRegistered-slice";

const Breadcrumbs = styled.div`
  font-size: 0.9rem;
  color: #666;
`;

const ProductRegistered = () => {
  const [isUpdate, setIsUpdate] = useState(false);

  const dispatch = useDispatch();

  const currentEmail = localStorage.getItem("email");

  useEffect(() => {
    dispatch(getProductRegisteredData(currentEmail));
  }, [dispatch, currentEmail]);

  const productRegisteredData = useSelector(
    (state) => state.productRegistered.productRegisteredData[currentEmail]
  );

  return (
    <>
      <RegisteredUpdateModal isUpdate={isUpdate} setIsUpdate={setIsUpdate} />

      <div className="product-registered-page">
        <div className="sidebar-container">
          <Sidebar />
        </div>
        <div className="products-registered-container">
          <Breadcrumbs>
            <Link to="/">HOME</Link> &gt; <Link to="/mypage">마이페이지</Link>{" "}
            &gt; 등록된 판매 상품 조회
          </Breadcrumbs>
          <div className="product-registered">
            <div className="registered-each-container">
              <table className="registered-table">
                <tr className="registered-table-title">
                  <th className="table-title-number">번호</th>
                  <th className="table-title-name">상품명</th>
                  <th className="table-title-price">판매가</th>
                  <th className="table-title-category">카테고리</th>
                  <th className="table-title-option">옵션 및 수량</th>
                  <th className="table-title-registered-date">상품 등록일</th>
                  <th className="table-title-end-date">상품 마감일</th>
                </tr>
                {productRegisteredData &&
                  productRegisteredData.map((eachProduct) => {
                    return (
                      <EachProductRegistered
                        setIsUpdate={setIsUpdate}
                        key={eachProduct.productId}
                        productId={eachProduct.productId}
                        productImage={eachProduct.productImage}
                        productName={eachProduct.productName}
                        productPrice={eachProduct.productPrice}
                        genderCategory={eachProduct.genderCategory}
                        shopCategory={eachProduct.shopCategory}
                        sizes={eachProduct.sizes}
                        registerDate={eachProduct.registerDate}
                        sellByDate={eachProduct.sellByDate}
                      />
                    );
                  })}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductRegistered;
