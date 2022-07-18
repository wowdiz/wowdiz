import React from "react";
import "../../style/notice.css";
const SupportBoard = (props) => {
  return (
    <div className="notice_main">
      <ul className="notice_wrap">
        <li className="notice_container">
          <div className="notice_info">
            <div className="notice_important"><b>중요(select)</b></div>
            <div className="notice_thum"></div>
            <div className="notice_title">title</div>
            <br/>
            <span className="notice_admin">wowdiz</span>
            <span className="notice_date">2022.06.30</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SupportBoard;
