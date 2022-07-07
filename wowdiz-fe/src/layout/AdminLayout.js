import React from "react";
import Header from "../components/header/AdminHeader";
import Footer from "../components/footer/AdminFooter";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="admin_wrap">
      <div className="admin_header_full">
        <Header />
      </div>
      <div className="admin_content_wrap">
        <Outlet />
      </div>
      <div className="admin_footer_full">
        <Footer />
      </div>
    </div>
  );
};

export default AdminLayout;
