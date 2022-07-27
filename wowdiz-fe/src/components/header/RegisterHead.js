import React from "react";
import "../../../src/style/login.css";
import logoimage from "../../../src/assets/images/logo/logo.png";
import { NavLink } from "react-router-dom";
const RegisterHead = () => {
  return (
    <div>
      <div className="login_top_header">
        <NavLink to="/">
          <img src={logoimage} className="logoimage" alt="" />
        </NavLink>
      </div>
    </div>
  );
};

export default RegisterHead;
