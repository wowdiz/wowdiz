import React from "react";
import "../../../style/register_form.css";
import kakao from "../../../assets/images/register/kakao.png";
import naver from "../../../assets/images/register/naver.png";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { NavLink } from "react-router-dom";
import RegisterHead from "../../../components/header/RegisterHead";
import axios from "axios";
import { useNavigate, withRouter } from "react-router-dom";
import AxiosService from "../../../service/AxiosService";
import kakaoLogin from "../../../assets/images/user/kakaoWide.png";
// 최초 작업자: 이광호
// 2022-07-04
// 리액트 홈페이지 메인 프론트엔드
const { Kakao } = window;
const RegisterForm = () => {
  const navigation = useNavigate();
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

  return (
    <div>
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
              style={{ backgroundImage: `URL(${kakaoLogin})` }}
              onClick={kakaoLoginClickHandler}
            />
          </div>
          <div className="separator">
            <span>또는</span>
          </div>
          <NavLink to="../register_join" style={{ textDecoration: "none" }}>
            <button className="email_register">
              <MailOutlineIcon style={{ textAlign: "center" }} /> 이메일로 가입
            </button>
          </NavLink>
          <div className="bottom_message">
            <p> 이미 와우디즈 계정이 있나요?</p>
            <NavLink to="../login" className="bottom_login">
              로그인
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
