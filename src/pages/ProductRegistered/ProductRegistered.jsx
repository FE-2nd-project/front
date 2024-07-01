import React, { useState } from "react";
import { Link } from "react-router-dom";

import Sidebar from "../../common/Sidebar";

import styled from "styled-components";
import "./ProductRegistered.css";
import cap from "../../assets/cap.png";
import bag from "../../assets/bag-icon.png";
import RegisteredUpdateModal from "../../components/ProductRegistered/RegisteredUpdateModal";

const Breadcrumbs = styled.div`
  font-size: 0.9rem;
  color: #666;
`;

const ProductRegistered = () => {
  const [isUpdate, setIsUpdate] = useState(false);

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
                <tr className="registered-table-data">
                  <th className="table-data-productId">
                    <div>2</div>{" "}
                    <button
                      className="data-modify-button"
                      onClick={() => setIsUpdate((prev) => !prev)}
                    >
                      수정
                    </button>
                  </th>
                  <th className="table-data-photo-name">
                    <div className="table-data-photo-name-flex">
                      <img className="table-data-photo" src={cap} alt="cap" />
                      <div className="table-data-name-container">
                        <div className="table-data-name">
                          언스트럭쳐 볼캡 뉴욕양키스 - BLACK
                        </div>
                      </div>
                    </div>
                  </th>
                  <th className="table-data-price">40,000원</th>
                  <th className="table-data-categories">
                    <div className="data-categories-gender">Gender: Women</div>
                    <div className="data-categories-appparel">BAG</div>
                  </th>
                  <th className="table-data-option-quantity">
                    <div className="table-data-option-quantity-flex">
                      {" "}
                      <div className="data-option">L:</div>
                      <div className="data-quantity">130</div>
                    </div>
                    <div className="table-data-option-quantity-flex">
                      {" "}
                      <div className="data-option">M:</div>
                      <div className="data-quantity">20</div>
                    </div>
                  </th>
                  <th className="table-data-registered-date">2024-05-02</th>
                  <th className="table-data-end-date">2024-08-31</th>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductRegistered;
