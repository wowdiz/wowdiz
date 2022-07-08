import React from "react";
import { NavLink } from "react-router-dom";

const LoginComponent = () => {
  // 최초 작업자: 이광호
  // 2022-07-04
  // 헤더 상단 우측 컴포넌트
  return (
    <span className="user_bar">
      <NavLink to="/login" className="user_bar_li">
        로그인
      </NavLink>
      <NavLink to="/register" className="user_bar_li">
        회원가입
      </NavLink>
    </span>
  );
};

export default LoginComponent;