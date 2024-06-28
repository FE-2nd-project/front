import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { BsImages } from 'react-icons/bs';

const RegisterPageContainer = styled.form`
  width: 100%;
  padding: 15px 100px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.form`
  font-size: 35px;
  font-weight: 600;
`;

const ItemForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const DetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const InputUnit = styled.div`
  display: flex;
  align-items: center;
  label {
    font-size: 20px;
    width: 250px;
  }
  input {
    font-size: 20px;
  }
  select{
    font-size: 20px;
  }
`;

const Thumbnail = styled.div`
  position: relative;
  border: 2px solid black;
  width: 100%;
  min-height: 400px;
  display: flex;
  overflow: scroll;
  gap: 1rem;

  div {
    align-self: center;
    margin-left: 45%;
  }

  li {
    list-style: none;
  }
  img {
    width: 400px;
    height: 400px;
    object-fit: cover;
  }
`;

const SubmitButton = styled.button`

`

const RegisterPage = () => {
  const uploadRef = useRef();

  const handleUploadImg = () => {
    uploadRef.current.click();
  };

  const [uploadImgs, setUploadImgs] = useState([]);

  const updateImgs = (event) => {
    const imgs = Array.from(event.target.files);
    imgs.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        const dataURL = reader.result;
        setUploadImgs((prev) => [...prev, dataURL]);
      };
      reader.readAsDataURL(file);
    });
  };
  const registerItem = (event) => {
    event.preventDefault();
  };

  return (
    <RegisterPageContainer>
      <Title>판매 상품 등록</Title>
      <ItemForm onSubmit={registerItem}>
        <Thumbnail>
          {uploadImgs.length == 0 ? (
            <div>사진을 등록해주세요</div>
          ) : (
            <>
              {uploadImgs.map((dataURL, index) => (
                <li key={index}>
                  <img src={dataURL} alt="" />
                </li>
              ))}
            </>
          )}
        </Thumbnail>

        <DetailInfo>
          <InputUnit>
            <label htmlFor="itemImage">상품 사진</label>
            <input
              type="file"
              multiple
              accept="image/*"
              ref={uploadRef}
              onChange={updateImgs}
              style={{ display: 'none' }}
            />
            <button type="button" onClick={handleUploadImg}>
              <BsImages />
            </button>
          </InputUnit>

          <InputUnit>
            <label htmlFor="itemCategory">카테고리</label>
            <select name="itemCategory">
              <option value="women">women</option>
              <option value="men">men</option>
              <option value="cap">cap</option>
              <option value="shoes">shoes</option>
              <option value="bag">bag</option>
            </select>
          </InputUnit>

          <InputUnit>
            <label htmlFor="itemName">이름</label>
            <input type="text" id="itemName" placeholder="상품 이름" />
          </InputUnit>

          <InputUnit>
            <label htmlFor="itemColor">색상</label>
            <input type="text" id="itemColor" placeholder="영어로 입력" />
          </InputUnit>

          <InputUnit>
            <label htmlFor="itemSize">사이즈</label>
            <select name="sizeOptions">
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
            </select>
          </InputUnit>

          <InputUnit>
            <label htmlFor="itemPrice">가격</label>
            <input type="text" id="itemPrice" placeholder="상품 가격" />
          </InputUnit>

          <InputUnit>
            <label htmlFor="itemStock">재고</label>
            <input type="text" id="itemStock" placeholder="재고" />
          </InputUnit>

          <InputUnit>
            <label htmlFor="itemDesc">상세 설명</label>
            <input type="text" id="itemDesc" placeholder="설명 입력" />
          </InputUnit>
        </DetailInfo>
        <SubmitButton>등록하기</SubmitButton>
      </ItemForm>
    </RegisterPageContainer>
  );
};

export default RegisterPage;
