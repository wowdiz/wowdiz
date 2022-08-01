import React from "react";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";
import RegisterHead from "../components/header/RegisterHead";
const UserLayout = () => {
  return (
    <div className="wrap">
      <RegisterHead />
      <div>
        {/* 실제 컨텐츠가 바뀌는 영역 */}
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default UserLayout;
