import AxiosService from "../../../service/AxiosService";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../../style/qna_answer.css";
import { useForm } from "react-hook-form";
import { DoDisturb } from "@mui/icons-material";

const QNAAnswer = () => {
  const navi = useNavigate();
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
        inquiry_content:
          "<br/><br/>" +
          "안녕하세요 WOWDIZ 입니다."+"<br/><br/>" +"고객님의 1:1문의에 대해 답변드립니다." +
          "<br/><br/>" +
          "문의내용 : " +
          res.data.inquiry_content +
          "\r\n" +
          "<br/><br/>" +
          "\r\n" +
          "답변 : ",
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
      inquiry_status: "1",
      inquiry_id: inquiry_id,
    }).then((res) => {
      console.log(data);
      console.log(res);
      alert("빠른 시일내에 답변드리겠습니다. 감사합니다");
      navi("/supportboard/qna");
    });
  };

  useEffect(() => {
    getData();
  }, []);


  return (
    <div className="answer_container">
      <form className="answer_form" onSubmit={handleSubmit(onSubmit)}>
        <div className="user_info_warp">
          <div className="answer_user_name_warp">
            <div className="user_info">이름</div>
            <input
              type="text"
              className="answer_user_name"
              defaultValue={answer.user_name}
              {...register("answer_user_name")}
            />
          </div>
          <div className="answer_user_mail_warp">
            <div className="user_info">이메일</div>
            <input
              type="text"
              className="answer_user_email"
              defaultValue={answer.user_email}
              {...register("answer_user_email")}
            />
          </div>
        </div>
        <div className="answer_title">
          제목
          <input
            type="text"
            className="answer_title_name"
            defaultValue={answer.inquiry_title}
            {...register("title")}
          />
        </div>

        <div className="answer_content">
          <div className="answer_content_name">
            내용
            <textarea
              className="answer_user_content"
              defaultValue={answer.inquiry_content}
              {...register("content")}
            ></textarea>
          </div>
        </div>
        <div className="answer__btn">
          <button type="submit" className="answer_btn_submit">
            전송
          </button>
          <button type="button" className="answer_btn_cencel">
            취소
          </button>
        </div>
      </form>
    </div>
  );
};

export default QNAAnswer;
