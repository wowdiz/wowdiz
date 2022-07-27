import React, { useEffect, useState } from "react";
import "../../../style/login.css";
import "../../../../src/assets/images/logo/logo.png";
import kakaoImage from "../../../assets/images/register/kakao.png";
import naverImage from "../../../assets/images/register/naver.png";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import UserService from "../../../service/UserService";
import AxiosService from "../../../service/AxiosService";
import kakaoLogin from "../../../assets/images/user/kakaoWide.png";
// 최초 작업자: 이기민
// 2022-07-06
// 로그인 페이지 디자인

// 작업자: 이광호
// 2022-07-17
// kakao 시큐리티 로그인, 일반 로그인 유저 기능 완성  프론트 엔드

const { Kakao } = window;

const Login = () => {
  const navigation = useNavigate();
  const { register, handleSubmit, getValues, setValue } = useForm();

  const kakaoLoginClickHandler = () => {
    Kakao.Auth.login({
      success: function (authObj) {
        console.log(authObj);
        AxiosService.post(
          "/api/user/oauth2/kakao",
          { access_token: authObj.access_token },
          { withCredentials: true }
        )
          .then((res) => {
            console.log(res.data.sns_type);
            if (res.data.sns_type === "kakao") {
              localStorage.setItem("snsToken", res.data.token);
              navigation("/snsregister_join");
            }
            if (res.data.sns_type.includes("kakao_user=")) {
              localStorage.setItem("jwtToken", res.data.token);
              localStorage.setItem(
                "authenticatedUser",
                res.data.sns_type.substring(11)
              );
              navigation("/");
            }
          })
          .catch((error) => {
            console.log("login fail");
            console.log(error);
          });
      },
      fail: function (err) {
        alert(JSON.stringify(err));
      },
    });
  };

  // 체크박스 상태
  const [isRemember, setIsRemember] = useState();

  //페이지가 최초 렌더링 될 경우
  useEffect(() => {
    //저장된 로컬스토리지가 있으면, CheckBox TRUE 및 UserID에 값 셋팅
    if (localStorage.getItem("rememberUserId") !== undefined) {
      setValue("user_email", localStorage.getItem("rememberUserId"));
      // setTimeout(() => setIsRemember(true), 700);
    } else if (!localStorage.getItem("rememberUserId") === true) {
      // setTimeout(() => setIsRemember(false), 700);
    }
  }, []);
  const handleOnChange = (e) => {
    setIsRemember(e.target.checked);
  };

  const onSubmit = (userData) => {
    //맨 처음에 값이 제대로 반영이 안되는 이유는
    //리액트는 렌더링될 때,  이미 모든 값을 읽은 후라서 그런다.
    //로그인눌러서 if문 체크해도 이미 false값을 받아놓은 상태이다.
    UserService.login(userData);
    console.log("isLoggedIn()", isLoggedIn());

    if (isLoggedIn) {
      if (isRemember === false) {
        localStorage.removeItem("rememberUserId");
        setIsRemember(false);
        setTimeout(() => navigation("/"), 700);
      } else {
        const userId = getValues("user_email");
        setIsRemember(true);
        localStorage.setItem("rememberUserId", userId);
        setTimeout(() => navigation("/"), 700);
      }
    } else {
      alert("아이디 비밀번호를 확인해주세요.");
    }
  };

  const isLoggedIn = () => {
    return UserService.isLoggedIn();
  };

  return (
    <div>
      {/* login main full layout */}
      <div className="login_main_form">
        <h1>로그인</h1>
        {/* login form */}
        <form className="login_action_data" onSubmit={handleSubmit(onSubmit)}>
          {/* login id text box */}
          <div className="input_id_text_div">
            <input
              type="email"
              defaultValue={
                localStorage.getItem("rememberUserId") !== undefined
                  ? localStorage.getItem("remeberUserId")
                  : ""
              }
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
              placeholder="비밀번호(영문, 숫자, 특수 문자 포함 6자 이상)"
              title="비밀번호(영문, 숫자, 특수 문자 포함 6자 이상)"
            />
          </div>
          {/* id and password input type design */}
          <div className="login_id_save">
            <input
              type="checkbox"
              className="login_id_save_checkbox"
              id="saveId"
              onChange={(e) => {
                handleOnChange(e);
              }}
              defaultChecked={
                isRemember === true || localStorage.getItem("rememberUserId")
                  ? true
                  : false
              }
            />
            <span style={{ display: "inline-block" }}>아이디 저장</span>
            <NavLink to="../find" style={{ textDecoration: "none" }}>
              <span className="login_id_password_search">
                아이디∙비밀번호 찾기
              </span>
            </NavLink>
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
              style={{ backgroundImage: `URL(${kakaoLogin})` }}
              onClick={kakaoLoginClickHandler}
            />
          </div>
          <div className="email_register">
            <div className="email_register_text">
              <span>아직 와우디즈 계정이 없나요?</span>
            </div>
            <div className="email_register_nav_text">
              <NavLink to="../register" style={{ textDecoration: "none" }}>
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
