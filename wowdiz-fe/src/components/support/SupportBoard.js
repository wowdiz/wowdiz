import React from "react";
import "../../style/notice.css";
const SupportBoard = ({data}) => {
  console.log(data);
  return (
    <div className="notice_main">
      <ul className="notice_wrap">
        <li className="notice_container">
          <div className="notice_info">
            <div className="notice_important"><b>{(
              data.important ==="Y"
                  ? <p>중요 · BEST</p>
                  : null
                )}</b></div>
            <div className="notice_thum">{data.notice_thumbnail}</div>
            <div className="notice_title" Link to="#">{data.notice_title}</div>
            <br/>
            <span className="notice_admin">{data.admin_id}</span>
            <span className="notice_date">{data.write_date}</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SupportBoard;
