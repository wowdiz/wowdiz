import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo/logo.png";
import "../../style/header.css";
import LogoutComponent from "./LogoutComponent";
import LoginComponent from "./LoginComponent";
import UserService from "../../service/UserService";

// 최초 작업자: 이광호
// 2022-06-30
// Header 작업
const Header = () => {
  const isLoggedIn = UserService.isLoggedIn();
  console.log(isLoggedIn);

  return (
    <div className="header_wrap">
      <div className="header">
        {/* 헤더 메뉴버튼 */}
        <NavLink to="/">
          <img src={logo} className="logo_image" alt="" />
        </NavLink>
        <ul className="header_menu">
          <li>
            <NavLink to="/funding" className="menu_li">
              펀딩
            </NavLink>
          </li>
          <li>
            <NavLink to="/supportboard/event" className="menu_li">
              이벤트
            </NavLink>
          </li>
          <li>
            <NavLink to="/supportboard/1" className="menu_li">
              고객센터
            </NavLink>
          </li>
        </ul>
        {/* 서치 폼  */}
        <div className="search_bar">
          <form
            method="GET"
            action="/pundingproject/search"
            className="search_form"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
            <input
              type="search"
              placeholder="프로젝트를 찾으시나요?"
              className="keyword"
              autoComplete="off"
            />
          </form>
        </div>
        {/* 유저 로그인 회원가입 버튼 */}
        {/* 로그인 전에는 LoginComponent , 로그인후에는 LogoutComponent로 바껴야함 */}

        {isLoggedIn ? <LogoutComponent /> : <LoginComponent />}

        {/* <LogoutComponent /> */}
        {/* <span className="user_bar">
          {!isUserLoggedIn && <NavLink to="/login" className="user_bar_li">로그인</NavLink>}
          {!isUserLoggedIn && <NavLink to="/register" className="user_bar_li">회원가입</NavLink>}
          {isUserLoggedIn && <NavLink className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</NavLink>}
        </span>*/}
      </div>
    </div>
  );
};

export default Header;
