import React from "react";
import "../../../src/style/login.css";
import logoimage from "../../../src/assets/images/logo/logo.png";
const RegisterHead = () => {
  return (
    <div>
      <div className="login_top_header">
        <img src={logoimage} className="logoimage" alt="" />
      </div>
    </div>
  );
};

export default RegisterHead;
