import React from "react";

import "./Signup.css";

const Signup = () => {
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
            <input className="email" type="email" required></input>
          </div>
          <div className="password-container">
            <label className="password-label">
              비밀번호 <span className="password-span">(6글자 이상)</span>
            </label>
            <input className="password" type="password" required></input>
          </div>
          <div className="password-check-container">
            <label className="password-check-label">비밀번호 확인</label>
            <input className="password-check" type="password" required></input>
          </div>
          <div className="nickname-container">
            <label className="nickname-label">닉네임</label>
            <input className="nickname"></input>
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
              required
            ></input>
          </div>
          <div className="address-container">
            <label className="address-label">주소</label>
            <input className="address" required></input>
          </div>
          <button className="submit-button">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Signup;
