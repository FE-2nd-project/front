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
  const dispatch = useDispatch();

  const [isUpdate, setIsUpdate] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const PAGE_SIZE = 10;

  const productRegisteredData = useSelector(
    (state) => state.productRegistered.productRegisteredData
  );

  console.log(
    "등록된 판매 물품 조회 페이지에서의 product registered data",
    productRegisteredData
  );

  // productRegisteredData에서 현재 페이지의 인덱스 물품 보여주기
  const currentPageProducts = productRegisteredData
    ? productRegisteredData.slice(
        (currentPage - 1) * PAGE_SIZE,
        currentPage * PAGE_SIZE
      )
    : [];

  // productRegisteredData를 기반으로 전체 페이지 수 계산
  const totalPages = productRegisteredData
    ? Math.ceil(productRegisteredData.length / PAGE_SIZE)
    : 0;

  //페이지 변환되면 currentPage 바꿔주기
  const handlePageChange = (page) => {
    setCurrentPage(page);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    dispatch(getProductRegisteredData());
  }, [dispatch]);

  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) return null;

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
                  currentPageProducts.map((eachProduct) => {
                    return (
                      <EachProductRegistered
                        setIsUpdate={setIsUpdate}
                        key={eachProduct.id}
                        productId={eachProduct.id}
                        productImage={eachProduct.firstImageUrl}
                        productName={eachProduct.name}
                        productPrice={eachProduct.price}
                        genderCategory={eachProduct.categoryGender}
                        shopCategory={eachProduct.categoryKind}
                        sizes={eachProduct.itemSizes}
                        registerDate={eachProduct.listedDate}
                        sellByDate={eachProduct.endDate}
                      />
                    );
                  })}
              </table>
              <div className="pagination">
                {Array.from({ length: totalPages }).map((_, index) => {
                  return (
                    <button
                      key={index}
                      onClick={() => handlePageChange(index + 1)}
                      className={
                        currentPage === index + 1
                          ? "pagination-button-active"
                          : "pagination-button"
                      }
                    >
                      {index + 1}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductRegistered;
