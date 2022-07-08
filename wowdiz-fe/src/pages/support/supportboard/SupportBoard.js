import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../../../style/support_board.css";

const SupportBoard = () => {
  return (
    <div>
      <div className="support_home_layout">
        {/* 메뉴 선택시 변경되는 title text */}
        <div className="board_title">공지사항</div>
        {/* 공지사항, 이벤트, FAQ, 1:1문의 네비게이션 바 */}
        <div className="support_menu_navi">
          {/* 네비게이션 버튼 */}
          <span className="support_menu">
            <NavLink className="menu_style" to="/supportboard/notice">
              공지사항
            </NavLink>
          </span>
          {/* 네비게이션 버튼 구분자 */}
          <span className="delimiter">|</span>
          <span className="support_menu">
            <NavLink className="menu_style" to="/supportboard/event">
              이벤트
            </NavLink>
          </span>
          <span className="delimiter">|</span>
          <span className="support_menu">
            <NavLink className="menu_style" to="/supportboard/faq">
              F A Q
            </NavLink>
          </span>
          <span className="delimiter">|</span>
          <span className="support_menu last">
            <NavLink className="menu_style" to="/supportboard/qna">
              1:1 문의
            </NavLink>
          </span>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SupportBoard;
