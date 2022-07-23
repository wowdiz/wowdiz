import React, { useState } from "react";
import ClassicEditor from "../../../components/editor/CKEditorClassic";
import "../../../style/faq_write.css";
import AxiosService from "../../../service/AxiosService";
import { useNavigate, useParams } from "react-router-dom";

const FAQWrite = () => {
  const navi = useNavigate();
  const [faq_title, setFaq_title] = useState("");
  const [faq_content, setFaq_content] = useState("");
  const { faq_id } = useParams;
  // const SPRING_URL = "http://localhost:9150/";
  const faqWriteUrl = "/supportboard/faqwrite";

  const faqsubmit = (e) => {
    alert("제출 되었습니다.");
    e.preventDefault();

    AxiosService.post(faqWriteUrl, {
      faq_id,
      faq_title,
      faq_content,
    }).then((res) => {
      navi("/supportboard/faq");
    });
  };

  return (
    <div className="faq_write_container">
      <form className="faq_write_form" action={faqWriteUrl} method="post">
        <input type="hidden" value={faq_id} />
        <div>
          <p className="write_title">제목</p>
          <input
            type="text"
            className="faq_write_title"
            id="faq_title"
            onChange={(e) => {
              setFaq_title(e.target.value);
            }}
          />
        </div>
        <ClassicEditor setFaq_content={setFaq_content} />

        <div>
          <button type="submit" className="faq_write_btn" onClick={faqsubmit}>
            저장
          </button>
        </div>
      </form>
    </div>
  );
};

export default FAQWrite;
