import React, { useRef, useState } from "react";
import "../../../style/login.css";
import "../../../../src/assets/images/logo/logo.png";
import logoimage from "../../../assets/images/logo/logo.png";
import kakao from "../../../assets/images/register/kakao.png";
import naver from "../../../assets/images/register/naver.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import UserService from "../../../service/UserService";
import AxiosService from "../../../service/AxiosService";

// 최초 작업자: 이기민
// 2022-07-06
// 로그인 페이지 디자인
const Login = () => {
  const navigation = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = (userData) => {
    //    console.log(UserService.login(userData));

    //맨 처음에 값이 제대로 반영이 안되는 이유는
    //리액트는 렌더링될 때,  이미 모든 값을 읽은 후라서 그런다.
    //로그인눌러서 if문 체크해도 이미 false값을 받아놓은 상태이다.
    UserService.login(userData);
    console.log("isLoggedIn()", isLoggedIn());

    if (isLoggedIn) {
      navigation("/");
    } else {
      alert("아이디 비밀번호를 확인해주세요.");
    }
  };

  const isLoggedIn = () => {
    return UserService.isLoggedIn();
  };

  //   <form onSubmit={handleSubmit(onSubmit)}>
  //     <input {...register('user_email')}/><br/>
  //     <input {...register('user_pwd')}/><br/>
  //     <input type="submit" />
  //   </form>

  return (
    <div>
      {/* login header */}
      <div className="login_top_header">
        <img src={logoimage} className="logoimage" alt="" />
      </div>
      {/* login main full layout */}
      <div className="login_main_form">
        <h1>로그인</h1>
        {/* login form */}
        <form className="login_action_data" onSubmit={handleSubmit(onSubmit)}>
          {/* login id text box */}
          <div className="input_id_text_div">
            <input
              type="email"
              {...register("user_email")}
              className="user_email"
              placeholder="이메일 아이디"
              title="이메일 아이디"
            />
          </div>
          {/* login password text box */}
          <div className="input_password_text_div">
            <input
              type="password"
              {...register("user_pwd")}
              className="user_password"
              maxLength="17"
              placeholder="비밀번호(영문, 숫자, 특수 문자 포함 8자 이상)"
              title="비밀번호(영문, 숫자, 특수 문자 포함 8자 이상)"
            />
          </div>
          {/* id and password input type design */}
          <div className="login_id_save">
            <input type="checkbox" className="login_id_save_checkbox" />
            <span>아이디 저장</span>
            <span className="login_id_password_search">
              아이디∙비밀번호 찾기
            </span>
          </div>
          <button type="submit" className="login_data_button">
            <b>로그인</b>
          </button>
        </form>

        <div className="login_or">
          <span>또는</span>
        </div>
        <div>
          <div className="social_regist_login">
            <button
              className="kakao"
              style={{ backgroundImage: `URL(${kakao})` }}
            />
            <button
              className="naver"
              style={{ backgroundImage: `URL(${naver})` }}
            />
          </div>
          <div className="email_register">
            <div className="email_register_text">
              <span>아직 와우디즈 계정이 없나요?</span>
            </div>
            <div className="email_register_nav_text">
              <NavLink to="/register" style={{ textDecoration: "none" }}>
                <span>회원가입</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
