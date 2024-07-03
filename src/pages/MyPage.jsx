import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Sidebar from "../common/Sidebar";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserData } from "../store/reducer/userSlice";
import proflie_Image from "../assets/proflie_Image.png";

const PageContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 2rem;
`;

const Container = styled.div`
  display: flex;
`;

const MainContent = styled.div`
  flex: 6;
  margin-left: 2rem;
`;

const UserPreview = styled.div`
  width: 100%;
  margin: 2rem 0;
  padding: 1.5rem 2rem;
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  gap: 1.5rem;
  border-radius: 10px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

const UserName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  div {
    font-size: 1.5rem;
    font-weight: bold;
  }
  span {
    margin-top: 0.5rem;
    color: white;
    border-radius: 10px;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
  }
`;

const UserCash = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

const UserHold = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  div:nth-child(1) {
    font-size: 1.5rem;
    font-weight: bold;
  }
  div:nth-child(2) {
    font-size: 1rem;
    color: #999;
  }
`;

const Separator = styled.div`
  height: 40px;
  width: 1px;
  background-color: #999;
  margin: 0 1rem;
`;

const MyPageTitle = styled.h1`
  width: 100%;
  padding: 1rem 0;
  font-size: 1.5rem;
  font-weight: 500;
`;

const UserInfoContainer = styled.div`
  border-top: 2px solid #000;
  padding-top: 2rem;
  padding-left: 1rem;
`;

const UserInfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  font-size: 1rem;
`;

const UserInfoLabel = styled.div`
  font-weight: bold;
  color: #333;
  flex: 0.3;
`;

const UserInfoValue = styled.div`
  color: #666;
  flex: 2;
  text-align: left;
`;

const Breadcrumb = styled.div`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
`;

function MyPage() {
  const [token, setToken] = useState("");
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    // 토큰을 직접 설정 (테스트용)
    const testToken =
      "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqb21pbnN1QGV4YW1wbGUzLmNvbSIsInRva2VuVHlwZSI6ImFjY2VzcyIsInVzZXJJZCI6NiwiaWF0IjoxNzE5OTI4OTE0LCJleHAiOjE3MTk5Mjk1MTR9.vTBNXhYm_ORNbwiAcixxxSzA1Lx6P44SJu6yo2YGT6YzPwurCdsLJqCAYpjM48xNL3fsnCY3rwHYScKegqb6kA";
    setToken(testToken);
  }, []);

  useEffect(() => {
    if (token) {
      dispatch(fetchUserData(token));
    }
  }, [dispatch, token]);

  return (
    <PageContainer>
      <Container>
        <Sidebar />
        <MainContent>
          <Breadcrumb>
            <Link to="/">HOME</Link> &gt; <Link to="/mypage">마이페이지</Link>
          </Breadcrumb>
          <UserPreview>
            <UserInfo>
              <UserProfile>
                <ProfileImage
                  src={user.profile_picture_url || proflie_Image}
                  alt="Profile"
                />
                <UserName>
                  <div>{user.name} 님</div>
                  <span>회원등급/혜택 보기 &gt;</span>
                </UserName>
              </UserProfile>
            </UserInfo>
            <UserCash>
              <UserHold>
                <div>{user.shopping_pay.toLocaleString()}</div>
                <div>마일리지</div>
              </UserHold>
              <Separator />
              <UserHold>
                <div>5</div>
                <div>포인트</div>
              </UserHold>
              <Separator />
              <UserHold>
                <div>0</div>
                <div>쿠폰</div>
              </UserHold>
            </UserCash>
          </UserPreview>
          <MyPageTitle>회원 정보</MyPageTitle>
          <UserInfoContainer>
            <UserInfoRow>
              <UserInfoLabel>이름</UserInfoLabel>
              <UserInfoValue>{user.name}</UserInfoValue>
            </UserInfoRow>
            <UserInfoRow>
              <UserInfoLabel>연락처</UserInfoLabel>
              <UserInfoValue>{user.phone_num}</UserInfoValue>
            </UserInfoRow>
            <UserInfoRow>
              <UserInfoLabel>이메일</UserInfoLabel>
              <UserInfoValue>{user.email}</UserInfoValue>
            </UserInfoRow>
            <UserInfoRow>
              <UserInfoLabel>주소</UserInfoLabel>
              <UserInfoValue>{user.address}</UserInfoValue>
            </UserInfoRow>
            <UserInfoRow>
              <UserInfoLabel>소개글</UserInfoLabel>
              <UserInfoValue>{user.about_me}</UserInfoValue>
            </UserInfoRow>
          </UserInfoContainer>
        </MainContent>
      </Container>
    </PageContainer>
  );
}

export default MyPage;
