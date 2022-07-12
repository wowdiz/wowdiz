import React from "react";
import "../../../style/register_form.css";
import kakao from "../../../assets/images/register/kakao.png";
import naver from "../../../assets/images/register/naver.png";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { NavLink } from "react-router-dom";

// 최초 작업자: 이광호
// 2022-07-04
// 리액트 홈페이지 메인 프론트엔드
const RegisterForm = () => {
  return (
    <div className="register_wrap">
      <div className="register_form_container">
        <div className="register_form_title">
          <h1> 회원가입</h1>
          <p>
            와우디즈 신규회원 가입하고 <br></br> 다양한 해택을 받아보세요.
          </p>
        </div>
        <div className="social_regist">
          <button
            className="kakao"
            style={{ backgroundImage: `URL(${kakao})` }}
          />
          <button
            className="naver"
            style={{ backgroundImage: `URL(${naver})` }}
          />
        </div>
        <div className="separator">
          <span>또는</span>
        </div>
        <NavLink to="/register_join" style={{ textDecoration: "none" }}>
          <button className="email_register">
            <MailOutlineIcon style={{ textAlign: "center" }} /> 이메일로 가입
          </button>
        </NavLink>
        <div className="bottom_message">
          <p> 이미 와우디즈 계정이 있나요?</p>
          <NavLink to="/login" className="bottom_login">
            로그인
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
