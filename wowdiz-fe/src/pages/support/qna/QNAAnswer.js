import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../../style/qna_answer.css";

const QNAAnswer = () => {
  const { inquiry_id } = useParams();
  const [answer, setAnswer] = useState([]);

  let answertUrl =
    "http://localhost:9150/supportboard/qnaanswer?inquiry_id=" + inquiry_id;

  const getData = () => {
    axios.get(answertUrl, inquiry_id).then((res) => {
      setAnswer(res.data);
      console.log("res.answer", res.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="answer_container">
      <form className="asd">
        <div className="user_info_warp">
          <p className="user_info">이름</p>
          <div className="answer_user_name">{answer.user_name}</div>
          <p className="user_info">이메일</p>
          <div className="answer_user_email">{answer.user_email}</div>
        </div>
        <label for="title">제목</label>
        <input
          type="text"
          id="title"
          className="form-control"
          placeholder="제목을 입력해 주세요"
        />
        <div style={{ position: "relative" }}>
          <label for="content">내용</label>
          <textarea
            name="content"
            id="content"
            className="form-control"
            value={answer.inquiry_content}
          ></textarea>
        </div>
        <div className="qna_btn">
          <button type="submit" className="btn_qna">
            전송
          </button>
          <button type="button" className="btn_qna">
            취소
          </button>
        </div>
      </form>
    </div>
  );
};

export default QNAAnswer;
