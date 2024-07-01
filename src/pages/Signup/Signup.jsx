import React, { useState } from "react";

import "./Signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("FEMALE");
  const [profilePicture, setProfilePicture] = useState(null);
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  // 이메일, 비밀번호, 이름, 주소 change handler
  const stringInputChangeHandler = (e, setInput) => {
    const changedInput = e.target.value;
    setInput(changedInput.trim());
  };

  const genderSelectHandler = (e) => {
    const selectedGender = e.target.value;
    setGender(selectedGender);
  };

  const phoneChangeHandler = (e) => {
    const phoneInput = e.target.value;
    setPhone(phoneInput.trim());
  };

  // 백에 어떤 형식의 사진 파일을 보내는지 알아내기 / 사진을 올리지 않았을 시, 기본 유저 사진을 백에다가 보내기!
  const profilePictureChangeHandler = (e) => {
    const selectedProfilePicture = e.target.files[0];
    setProfilePicture(selectedProfilePicture); // 객체 형식의 File
  };

  // 비밀번호 유효성 검사
  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/;

    if (regex.test(password)) {
      return true;
    } else {
      alert("비밀번호를 영문자와 숫자의 조합으로 생성해주세요.");
      return false;
    }
  };

  // 전화번호 유효성 검사
  const validatePhone = (phone) => {
    if (/^\d+$/.test(phone)) {
      return true;
    } else {
      alert("숫자로 된 전화번호를 입력해주세요.");
      return false;
    }
  };

  // submit 처리 함수
  const submitHandler = (e) => {
    e.preventDefault();

    if (!validatePassword(password)) {
      return;
    }

    if (!validatePhone(phone)) {
      return;
    }

    axios
      .post(
        "/api/auth/signup",
        {
          email,
          password,
          name,
          gender,
          profilePicture,
          phone,
          address,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          console.log("서버에 회원가입 전송 성공:", response.data);
          navigate("/login");
        }
      })
      .catch((error) => {
        console.error("서버에 회원가입 전송 실패:", error);
      });
  };

  return (
    <>
      <div className="signup-container">
        <h2 className="signup-text">Sign Up</h2>
        <div className="signup-explanation">
          The information you write below will be privately secured, and your
          name and photo would be shown when logged in.
        </div>
        <form className="signup-form">
          <div className="email-container">
            <label className="email-label">이메일</label>
            <input
              className="email"
              type="email"
              value={email}
              onChange={(e) => stringInputChangeHandler(e, setEmail)}
              required
            ></input>
          </div>
          <div className="password-container">
            <label className="password-label">
              비밀번호{" "}
              <span className="password-span">
                (영문자, 숫자의 조합으로 8자 이상 20자 이하)
              </span>
            </label>
            <input
              className="password"
              type="password"
              value={password}
              onChange={(e) => stringInputChangeHandler(e, setPassword)}
              required
            ></input>
          </div>
          <div className="name-container">
            <label className="name-label">이름</label>
            <input
              className="name"
              value={name}
              onChange={(e) => stringInputChangeHandler(e, setName)}
              required
            ></input>
          </div>
          <div className="gender-container">
            <label className="gender-label">성별</label>
            <select
              className="gender-select"
              value={gender}
              onChange={genderSelectHandler}
            >
              <option className="gender-option" value="FEMALE">
                FEMALE
              </option>
              <option className="gender-option" value="MALE">
                MALE
              </option>
            </select>
          </div>
          <div className="profile-picture-container">
            <label className="profile-picture-label">Profile Photo</label>
            <label className="custom-file-upload" htmlFor="profile-picture">
              <div className="change-profile">Change</div>
              <input
                id="profile-picture"
                className="profile-picture"
                type="file"
                style={{ display: "none" }}
                onChange={profilePictureChangeHandler}
              />
            </label>
          </div>
          <div className="phone-number-container">
            <label className="phone-number-label">
              전화번호 <span className="phone-span">(- 없이 10자리)</span>
            </label>
            <input
              className="phone-number"
              type="tel"
              pattern="[0-9]{10}"
              value={phone}
              onChange={phoneChangeHandler}
              required
            ></input>
          </div>
          <div className="address-container">
            <label className="address-label">주소</label>
            <input
              className="address"
              value={address}
              onChange={(e) => stringInputChangeHandler(e, setAddress)}
              required
            ></input>
          </div>
          <button className="submit-button" onClick={submitHandler}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
