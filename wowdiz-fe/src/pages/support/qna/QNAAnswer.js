import AxiosService from "../../../service/AxiosService";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../../style/qna_answer.css";
import { useForm } from "react-hook-form";

const QNAAnswer = () => {
  const { inquiry_id } = useParams();
  const [answer, setAnswer] = useState([]);

  const { register, handleSubmit, watch } = useForm();

  let answertUrl = "/supportboard/qnaanswer?inquiry_id=" + inquiry_id;
  const getData = () => {
    AxiosService.get(answertUrl, inquiry_id).then((res) => {
      setAnswer({
        ...res.data,
        user_name: res.data.user_name,
        user_email: res.data.user_email,
        inquiry_content: "문의내용 : " + res.data.inquiry_content,
        inquiry_title:
          "[WOWDIZ] " + res.data.user_name + "님의 1:1문의에 대한 답변입니다.",
      });
      console.log("res.answer", res.data);
    });
  };
  const onSubmit = (data) => {
    console.log(DataTransfer);
    const url = "/supportboard/qnaanswersend";
    console.log("보내기전" + data);
    AxiosService.post(url, {
      ...data,
      answer_user_name:
        watch("answer_user_name") !== ""
          ? data.answer_user_name
          : answer.user_name,
      answer_user_email:
        watch("answer_user_email") !== ""
          ? data.answer_user_email
          : answer.user_email,
      title: watch("title") !== "" ? data.title : answer.inquiry_title,
      content: watch("content") !== "" ? data.content : answer.inquiry_content,
    }).then((res) => {
      console.log(data);
      console.log(res);
      alert("이메일 성공");
    });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="answer_container">
      <form className="asd" onSubmit={handleSubmit(onSubmit)}>
        <div className="user_info_warp">
          <p className="user_info">이름</p>
          <input
            type="text"
            className="answer_user_name"
            defaultValue={answer.user_name}
            {...register("answer_user_name")}
          />
          <p className="user_info">이메일</p>
          <input
            type="text"
            className="answer_user_email"
            defaultValue={answer.user_email}
            {...register("answer_user_email")}
          />
        </div>
        <label for="title">제목</label>
        <input
          type="text"
          id="title"
          className="form-control"
          defaultValue={answer.inquiry_title}
          {...register("title")}
        />
        <div style={{ position: "relative" }}>
          <label for="content">내용</label>
          <textarea
            name="content"
            id="content"
            className="form-control"
            defaultValue={answer.inquiry_content}
            {...register("content")}
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
