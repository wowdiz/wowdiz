import React, { useEffect, useState } from "react";
import AxiosService from "../../../service/AxiosService";
import { useNavigate, useParams } from 'react-router-dom';
import "../../../style/notice_detail.css";
import logo from "../../../assets/images/logo/wowdiz_board_logo.png";


const NoticeDetail = ({currentPage}) => {
  const { notice_id } = useParams();
  const [detail, setDetail] = useState("");
  const navi = useNavigate();
 

  let detailtUrl = "/notice/noticedetail?notice_id="+notice_id;
  console.log('notice_id',notice_id)
  
  const getData = () => {
    AxiosService.get(detailtUrl).then((res) => {
      setDetail(res.data);
      console.log("res.detail", res.data);
    });
  };

  const noticeDelete = () =>{
    const delteUrl = "/notice/delete?notice_id="+notice_id;
    AxiosService.get(delteUrl).then((res)=>{
      if(window.confirm("해당 게시글을 삭제하시겠습니까?")===true){
      alert("삭제 완료")
      navi("/supportboard/1");
      }
    }).catch((err)=>{
      console.log("에러 :"+err);
    })
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="notice_detail_layout">
      <span><p>{detail.notice_title}</p></span>
      <div className="notice_board_logo_layout">
        <img src={logo} className="notice_board_logo" alt="" />
      </div>
      <div className="notice_board_admin_and_write_date">
        <div className="notice_board_admin_and_write_date_sub">
          <span>{detail.admin_id}
          {(
              detail.admin_id === null
                  ? <span>wowdiz</span>
                  : <span></span>
          )}</span>
          <br/>
          <span>{detail.write_date}</span>
        </div>
      </div>
      <div className="notice_content">
        <pre>{detail.notice_content}</pre>
      </div>

      {/* 버튼 이전, 등록, 삭제버튼 */}
      <div className="notice_back_create_delete_button_layout">
        <div className="notice_back_layout">
          <button type="button" onClick={() => {
            navi('/supportboard/1')
          }}>목록</button>
        </div>
        <div className="notice_delete_layout">
          <button onClick={noticeDelete}>삭제</button>
        </div>
        <div className="notice_update_layout">
          <button onClick={() => {
             navi("/supportboard/noticeupdate/"+notice_id)
          }}>수정</button>
        </div>
      </div>
    </div>
  );
};

export default NoticeDetail;
