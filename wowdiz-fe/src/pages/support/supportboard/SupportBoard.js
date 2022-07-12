import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../../../style/support_board.css";

const SupportBoard = () => {
  const [title, setTitle] = useState("공지사항");
  const [style, setStyle] = useState(1);

  return (
    <div>
      <div className="support_home_layout">
        {/* 메뉴 선택시 변경되는 title text */}
        <div className="board_title">{title}</div>
        {/* 공지사항, 이벤트, FAQ, 1:1문의 네비게이션 바 */}
        <div className="support_menu_navi">
          {/* 네비게이션 버튼 */}
          <span className="support_menu">
            <NavLink
              className={style === 1 ? "menu_style" : "menu_title"}
              to="/supportboard"
              style={{ textDecoration: "none" }}
              onClick={() => {
                setTitle("공지사항");
                setStyle(1);
              }}
            >
              공지사항
            </NavLink>
          </span>
          {/* 네비게이션 버튼 구분자 */}
          <span className="delimiter">|</span>
          <span className="support_menu">
            <NavLink
              className={style === 2 ? "menu_style" : "menu_title"}
              to="/supportboard/event"
              style={{ textDecoration: "none" }}
              onClick={() => {
                setTitle("이벤트");
                setStyle(2);
              }}
            >
              이벤트
            </NavLink>
          </span>
          <span className="delimiter">|</span>
          <span className="support_menu">
            <NavLink
              className={style === 3 ? "menu_style" : "menu_title"}
              to="/supportboard/faq"
              style={{ textDecoration: "none" }}
              onClick={() => {
                setTitle("F A Q");
                setStyle(3);
              }}
            >
              F A Q
            </NavLink>
          </span>
          <span className="delimiter">|</span>
          <span className="support_menu last">
            <NavLink
              className={style === 4 ? "menu_style" : "menu_title"}
              to="/supportboard/qna"
              style={{ textDecoration: "none" }}
              onClick={() => {
                setTitle("1:1 문의");
                setStyle(4);
              }}
            >
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
