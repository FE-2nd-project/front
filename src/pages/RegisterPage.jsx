import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { BsImages } from 'react-icons/bs';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const RegisterPageContainer = styled.div`
  width: 100%;
  padding: 0 100px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.div`
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
  select {
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
    position: relative;
  }
  img {
    width: 400px;
    height: 400px;
    object-fit: cover;
  }
  button {
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 16px;
    background-color: red;
    color: white;
    border: none;
    cursor: pointer;
    padding: 5px;
  }
`;

const SubmitButton = styled.button`
  font-size: 20px;
  padding: 5px 10px;
  cursor: pointer;
  margin-top: 10px;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const AddSizeButton = styled.button`
  font-size: 20px;
  padding: 5px 10px;
  cursor: pointer;
  margin-top: 10px;
`;

const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const accessToken = localStorage.getItem('accessToken');

  useEffect(() => {
    if (!accessToken) {
      alert('로그인을 먼저 해주십시오.');
      navigate('/login');
    }
  }, [dispatch]);

  const uploadRef = useRef();

  const handleUploadImg = () => {
    if (uploadImgs.length >= 3) {
      alert('이미지는 3개까지 등록 가능합니다.');
    } else {
      uploadRef.current.click();
    }
  };

  const [uploadImgs, setUploadImgs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [sizeStockList, setSizeStockList] = useState([{ size: '', stock: '' }]);
  const [sizeError, setSizeError] = useState('');
  const [itemName, setItemName] = useState('');
  const [itemDesc, setItemDesc] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [registerDate, setRegisterDate] = useState('');
  const [sellByDate, setSellByDate] = useState('');
  const [totalStock, setTotalStock] = useState(0);

  const updateImgs = (event) => {
    const imgs = Array.from(event.target.files);
    const currentImgCnt = uploadImgs.length;
    const addImgCnt = imgs.length;
    if (currentImgCnt + addImgCnt > 3) {
      alert('이미지는 3개까지 등록 가능합니다.');
      return;
    }
    console.log(imgs);
    setUploadImgs((prev) => [...prev, ...imgs]);
  };

  const removeImg = (index) => {
    setUploadImgs((prev) => prev.filter((_, i) => i !== index));
  };

  const removeSizeStock = (index) => {
    setSizeStockList((prev) => prev.filter((_, i) => i !== index));
  };

  const validateFileSize = (file) => {
    const maxSize = 1 * 1024 * 1024;

    if (file.size > maxSize) {
      alert('파일 크기가 너무 큽니다. 1MB 이하의 파일을 업로드해주세요.');
      return false;
    }
    return true;
  };

  const registerItem = (e) => {
    e.preventDefault();

    uploadImgs.forEach((img) => {
      if (!validateFileSize(img)) {
        return;
      }
    });

    const formData = new FormData();

    uploadImgs.forEach((img, index) => {
      formData.append('images', img); // images라는 키로 이미지 파일 추가
    });

    const salePostDto = {
      name: itemName,
      description: itemDesc,
      price: Number(itemPrice),
      totalStock: totalStock,
      categoryGender: selectedGender,
      categoryKind: selectedCategory,
      listedDate: registerDate,
      endDate: sellByDate,
      itemSizes: sizeStockList.map((item) => ({ size: item.size, stock: Number(item.stock) })),
    };

    formData.append('salePostDto', JSON.stringify(salePostDto));

    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/api/sale/add`, formData, {
        headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'multipart/form-data' },
      })
      .then((response) => {
        if (response.status === 200) {
          console.log('Item registered successfully!');
        } else {
          console.error('Failed to register item');
        }
      })
      .catch((error) => console.error('Error:', error));
  };

  const isFormValid = () => {
    const isCategorySelected = selectedCategory !== '';
    const isGenderSelected = selectedGender !== '';
    const areSizesValid = selectedCategory === 'bag' || sizeStockList.every((item) => item.size !== '');
    const areStocksValid = sizeStockList.every(
      (item) => item.stock !== '' && item.stock > 0 && Number.isInteger(Number(item.stock))
    );
    const isItemNameValid = itemName !== '';
    const isItemDescValid = itemDesc !== '';
    const isItemPriceValid = itemPrice !== '' && !isNaN(itemPrice) && Number(itemPrice) > 0;
    const isRegisterDateValid = registerDate !== '';
    const isSellByDateValid = sellByDate !== '';
    const isImageUploaded = uploadImgs.length > 0;

    return (
      isCategorySelected &&
      isGenderSelected &&
      areSizesValid &&
      areStocksValid &&
      isItemNameValid &&
      isItemDescValid &&
      isItemPriceValid &&
      isRegisterDateValid &&
      isSellByDateValid &&
      isImageUploaded
    );
  };

  useEffect(() => {
    if (sizeError) {
      const timer = setTimeout(() => setSizeError(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [sizeError]);

  return (
    <RegisterPageContainer>
      <Title>판매 상품 등록</Title>
      <ItemForm onSubmit={registerItem}>
        <Thumbnail>
          {uploadImgs.length === 0 ? (
            <div>사진을 등록해주세요</div>
          ) : (
            <>
              {uploadImgs.map((img, index) => (
                <li key={index}>
                  <img src={URL.createObjectURL(img)} alt="" />
                  <button type="button" onClick={() => removeImg(index)}>
                    삭제
                  </button>
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
            <label htmlFor="itemName">이름</label>
            <input
              type="text"
              id="itemName"
              placeholder="상품 이름"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
          </InputUnit>

          <InputUnit>
            <label htmlFor="itemDesc">설명</label>
            <input
              type="text"
              id="itemDesc"
              placeholder="상품 상세 설명"
              value={itemDesc}
              onChange={(e) => setItemDesc(e.target.value)}
            />
          </InputUnit>

          <InputUnit>
            <label htmlFor="genderCategory">성별</label>
            <select name="genderCategory" value={selectedGender} onChange={(e) => setSelectedGender(e.target.value)}>
              <option value="">Select Gender</option>
              <option value="woman">woman</option>
              <option value="man">man</option>
            </select>
          </InputUnit>

          <InputUnit>
            <label htmlFor="itemCategory">카테고리</label>
            <select
              name="itemCategory"
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setSizeStockList([{ size: '', stock: '' }]);
              }}
            >
              <option value="">Select Category</option>
              <option value="apparel">apparel</option>
              <option value="cap">cap</option>
              <option value="shoes">shoes</option>
              <option value="bag">bag</option>
            </select>
          </InputUnit>

          {selectedCategory && selectedCategory !== 'bag' && (
            <>
              {sizeStockList.map((item, index) => (
                <InputUnit key={index}>
                  <label htmlFor={`itemSize-${index}`}>사이즈</label>
                  <select
                    name="sizeOptions"
                    value={item.size}
                    onChange={(e) => {
                      const value = e.target.value;
                      setSizeStockList((prev) =>
                        prev.map((item, idx) =>
                          idx === index
                            ? prev.some((stockItem) => stockItem.size === value)
                              ? { ...item, size: '' }
                              : { ...item, size: value }
                            : item
                        )
                      );
                      setSizeError(
                        sizeStockList.some((stockItem) => stockItem.size === value) ? '이미 선택된 사이즈입니다.' : ''
                      );
                    }}
                  >
                    <option value="">Select Size</option>
                    {selectedCategory === 'apparel' || selectedCategory === 'cap' ? (
                      <>
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                      </>
                    ) : selectedCategory === 'shoes' ? (
                      <>
                        <option value="220">220</option>
                        <option value="225">225</option>
                        <option value="230">230</option>
                        <option value="235">235</option>
                        <option value="240">240</option>
                        <option value="245">245</option>
                        <option value="250">250</option>
                        <option value="255">255</option>
                        <option value="260">260</option>
                        <option value="265">265</option>
                        <option value="270">270</option>
                        <option value="275">275</option>
                        <option value="280">280</option>
                      </>
                    ) : null}
                  </select>
                  <label htmlFor={`itemStock-${index}`}>재고</label>
                  <input
                    type="number"
                    id={`itemStock-${index}`}
                    value={item.stock}
                    onChange={(e) => {
                      const value = parseInt(e.target.value, 10);
                      setSizeStockList((prev) =>
                        prev.map((item, idx) => (idx === index ? { ...item, stock: value > 0 ? value : '' } : item))
                      );
                    }}
                    placeholder="재고"
                    min="1"
                  />
                  {sizeStockList.length > 1 ? (
                    <button type="button" onClick={() => removeSizeStock(index)}>
                      삭제
                    </button>
                  ) : (
                    <></>
                  )}
                </InputUnit>
              ))}
              {selectedCategory !== 'bag' && sizeStockList.length < (selectedCategory === 'shoes' ? 12 : 3) && (
                <AddSizeButton
                  type="button"
                  onClick={() => setSizeStockList([...sizeStockList, { size: '', stock: '' }])}
                >
                  +
                </AddSizeButton>
              )}
              {sizeError && <p style={{ color: 'red' }}>{sizeError}</p>}
            </>
          )}

          {selectedCategory === 'bag' && (
            <>
              {sizeStockList.map((item, index) => (
                <InputUnit key={index}>
                  <label htmlFor={`itemStock-${index}`}>재고</label>
                  <input
                    type="number"
                    id={`itemStock-${index}`}
                    value={item.stock}
                    onChange={(e) => {
                      const value = parseInt(e.target.value, 10);
                      setSizeStockList((prev) =>
                        prev.map((item, idx) => (idx === index ? { ...item, stock: value > 0 ? value : '' } : item))
                      );
                    }}
                    placeholder="재고"
                    min="1"
                  />
                </InputUnit>
              ))}
            </>
          )}

          <InputUnit>
            <label htmlFor="itemPrice">가격</label>
            <input
              type="text"
              id="itemPrice"
              placeholder="상품 가격"
              value={itemPrice}
              onChange={(e) => setItemPrice(e.target.value)}
            />
          </InputUnit>

          <InputUnit>
            <label htmlFor="registerDate">등록 날짜</label>
            <input
              type="date"
              id="registerDate"
              value={registerDate}
              onChange={(e) => setRegisterDate(e.target.value)}
            />
          </InputUnit>

          <InputUnit>
            <label htmlFor="sellByDate">판매 기한</label>
            <input type="date" id="sellByDate" value={sellByDate} onChange={(e) => setSellByDate(e.target.value)} />
          </InputUnit>
        </DetailInfo>
        {/* <SubmitButton >등록하기</SubmitButton> */}
        <SubmitButton disabled={!isFormValid()}>등록하기</SubmitButton>
      </ItemForm>
    </RegisterPageContainer>
  );
};

export default RegisterPage;
