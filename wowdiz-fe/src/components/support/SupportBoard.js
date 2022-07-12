import React from "react";
import "../../style/notice.css";
const SupportBoard = (props) => {
  return (
    <div className="notice_main">
      <ul className="notice_wrap">
        <li className="notice_container">
          <b className="notice_important">중요(select)</b>

          <div className="notice_info">
            <div className="notice_thum">thum</div>
            <h3 className="notice_title">title</h3>
            <br />
            <span className="notice_admin">wowdiz</span>
            <span className="notice_date">2022.06.30</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SupportBoard;
