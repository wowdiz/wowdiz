import AxiosService from "../../../service/AxiosService";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../../../style/qna_detail.css";

const QNADetail = () => {
  const { inquiry_id } = useParams();
  const { inquiry_status } = useParams();
  const [detail, setDetail] = useState([]);
  const navi = useNavigate();

  let detailtUrl = "/supportboard/qnadetail?inquiry_id=" + inquiry_id;
  let qnadeleteUrl = "/supportboard/qnadelete?inquiry_id=" + inquiry_id;

  const getData = () => {
    AxiosService.get(detailtUrl, inquiry_id).then((res) => {
      setDetail(res.data);
      console.log("res.datai1", res.data);
    });
  };

  const getDelete = () => {
    AxiosService.get(qnadeleteUrl, inquiry_id).then((res) => {
      console.log(res);
      alert("삭제되었습니다.");
      window.location.href = "/supportboard/qnalist";
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="board_detail_container">
      <div className="detail_wrap">
        <p className="detail_title">
          [{detail.inquiry_type}] {detail.inquiry_title}
        </p>
        <div className="detail_writer">
          <span>{detail.user_name}</span>
          <span style={{ marginLeft: "20px" }}>{detail.user_email}</span>
          <span style={{ marginLeft: "20px" }}>{detail.write_date}</span>
        </div>
        <div className="detail_content">
          <div><b>문의내용 : </b>{detail.inquiry_content}</div>
        </div>
        <div className="button_warp">
          <button
            type="button"
            className="button_answer"
            onClick={() => navi("/supportboard/qnaanswer/" + detail.inquiry_id)}
          >
            답변하기
          </button>

          <button type="button" className="button_delete" onClick={getDelete}>
            삭제
          </button>
        </div>
      </div>
    </div>
  );
};

export default QNADetail;
