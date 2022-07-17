import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../../style/qna_detail.css";

const QNADetail = () => {
    const { inquiry_id } = useParams();
    const [detail, setDetail] = useState([]);

    const SPRING_URL = "http://localhost:9150/";
    let detailtUrl = SPRING_URL+"supportboard/qnadetail?inquriy_id="+ inquiry_id;

    const getData = () => {
        axios.get(detailtUrl, inquiry_id).then((res) => {
          setDetail(res.data);
          console.log("res.data11", res.data);
        });
    };

    useEffect(() => {
        getData();
    }, []);

    return (
      <div className="board_detail_wrap">
        <div className="detail_head">
          <p className="detail_title">{detail.inquiry_title}</p>
          <div className="detail_writer">
            <span>{detail.user_name}</span>
            <span style={{ marginLeft: "20px" }}>{detail.write_date}</span>
          </div>
          <div className="detail_content">
            <div>{detail.inquiry_content}</div>
          </div>
        </div>
      </div>
    );
};

export default QNADetail;
