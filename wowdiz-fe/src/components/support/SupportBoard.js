import React from "react";
import "../../style/notice.css";
const SupportBoard = ({ data, setData }) => {
  return (
    <div>
      {data.map((row, idx) => (
        <div className="support_main" key={idx}>
          <ul className="support_wrap">
            <li className="support_container">
              <b className="support_important">
                {row.event_status === "Y" ? <p>마감</p> : <p>진행중</p>}
              </b>
              <div className="support_info">
                <div className="support_thum">{row.thum}</div>
                <h3 className="support_title">{row.event_title}</h3>
                <br />
                <span className="support_admin">wowdiz</span>
                <span className="support_date">{row.write_date}</span>
                <span></span>
              </div>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SupportBoard;
