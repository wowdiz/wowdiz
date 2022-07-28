import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AxiosService from "../../../service/AxiosService";

const FAQUpdate = ({ title, content, faqid }) => {
  const navi = useNavigate();
  const [updatetitle, setUpdatetitle] = useState(title);
  const [updatecontent, setUpdatecontent] = useState(content);

  const faqUpdateUrl = "/supportboard/faqupdate";

  const postData = (e) => {
    e.preventDefault();
    AxiosService.post(faqUpdateUrl, {
      faq_id: faqid,
      faq_title: updatetitle,
      faq_content: updatecontent,
    }).then((res) => {
      console.log("res.datai1", res.data);
      navi("/supportboard/faqpage/"); 
    });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          className="faq_update_title"
          style={{ width: "600px", height: "84px" }}
          value={updatetitle}
          onChange={(e) => {
            setUpdatetitle(e.target.value);
          }}
        />
        <input
          type="text"
          className="faq_update_content"
          style={{ width: "600px", height: "48px" }}
          value={updatecontent}
          onChange={(e) => {
            setUpdatecontent(e.target.value);
          }}
        />
        <button type="button" onClick={postData}>
          완료
        </button>
        <button type="button" onClick={() => navi("/supportboard/faqpage")}>
          취소
        </button>
      </form>
    </div>
  );
};

export default FAQUpdate;
