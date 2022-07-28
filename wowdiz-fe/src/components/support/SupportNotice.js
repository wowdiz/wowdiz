import React from "react";
import "../../style/notice.css";
import { useNavigate } from "react-router-dom";

  const SupportBoard = ({data, idx}) => {
    console.log("  성공 "+data);
  const navi=useNavigate();

  return (
    <div className="notice_main">
      <ul className="notice_wrap">
        <li className="notice_container">
          <div className="notice_info">
            <div className="notice_important"><b>{(
              data.important ==="Y"
                  ? <p>중요 · Best</p>
                  : <p>일반 · Board </p>
                )}</b></div>
            <div className="notice_thum" onClick={()=>
              navi("/supportboard/noticedetail/"+data.notice_id)
            }>{(data.notice_thumbnail === null
                  ? <></>
                  : <div className="notice_thum_img_box"><img alt='' src={"http://localhost:9150/save/" + data.notice_thumbnail} className="notice_thum_img" /></div>
                  )}</div>
            <div className="notice_title" onClick={()=>
              navi("/supportboard/noticedetail/"+data.notice_id)
            }>{data.notice_title}</div>
            <br/>
            <span className="notice_admin">{data.admin_id}
            {(
              data.admin_id === null
                  ? <span>wowdiz</span>
                  : <span></span>
                )}</span>

            <span className="notice_date" >{data.write_date}</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SupportBoard;
