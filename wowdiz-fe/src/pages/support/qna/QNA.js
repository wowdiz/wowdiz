import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "../../../style/qna.css";

const QNA = ({ history }) => {
  const [checkbutton, setCheckbutton] = useState([]);
  const [num, setNum] = useState("");
  const phoneRef = useRef();

  const SPRING_URL = "http://localhost:9150/";
  const pagelistUrl = SPRING_URL + "supportboard/qna";

  const changeHandle = (checked, id) => {
    if (checked) {
      setCheckbutton([...checkbutton, id]);
      /* console.log("체크");*/
    } else {
      setCheckbutton(checkbutton.filter((button) => button !== id));
      /* console.log("체크");*/
    }
  };
  const isAllChecked = checkbutton.length === 1;
  const disabled = !isAllChecked;

  // 휴대폰 번호 입력 함수
  const handlePhone = (e) => {
    const value = phoneRef.current.value.replace(/\D+/g, "");
    const numberLength = 11;

    let result;
    result = "";

    for (let i = 0; i < value.length && i < numberLength; i++) {
      switch (i) {
        case 3:
          result += "-";
          break;
        case 7:
          result += "-";
          break;

        default:
          break;
      }

      result += value[i];
    }

    phoneRef.current.value = result;

    setNum(e.target.value);
  };
  const qnasubmit = () => {
    alert("제출 되었습니다.");
    document.location.href = "http://localhost:4200/supportboard/qna";
  };

  return (
    <div className="container">
      <div className="container_header">
        궁금한 점/의견을 남겨주시면 빠른 시일 내에 이메일로 답변 드리겠습니다.
      </div>
      <form className="qna_form" action={pagelistUrl} method="post">
        <div className="warp">
          <div className="qna_type_warp">
            <p style={{ margin: "0px 0px 8px" }}>문의유형</p>
            <select className="qna_type" name="inquiry_type">
              <option value="일반문의">일반문의</option>
              <option value="리워드문의">리워드문의</option>
              <option value="배송문의">배송문의</option>
              <option value="결제문의">결제문의</option>
            </select>
          </div>
          <div className="user_name_warp">
            <label for="user_name">이름</label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              required="required"
              className="form-control"
              placeholder="이름을 입력하세요."
            />
          </div>
        </div>
        <div className="warp">
          <div className="mail_warp">
            <label for="mail">이메일</label>
            <input
              type="text"
              id="mail"
              name="user_email"
              required="required"
              className="form-control"
              placeholder="이메일을 입력해주세요."
            />
          </div>
          <div className="phone_warp">
            <label for="phone">휴대폰 번호</label>
            <input
              type="tel"
              id="phone"
              name="user_phone"
              required="required"
              className="form-control"
              value={num}
              ref={phoneRef}
              onChange={handlePhone}
              placeholder="휴대폰 번호를 입력해주세요."
            />
          </div>
        </div>
        <label for="title">제목</label>
        <input
          type="text"
          id="title"
          name="inquiry_title"
          className="form-control"
          required="required"
          placeholder="제목을 입력해 주세요"
        />
        <div style={{ position: "relative" }}>
          <label for="content">문의 내용</label>
          <textarea
            name="inquiry_content"
            id="content"
            required="required"
            className="form-control"
            placeholder="문의하실 내용을 입력해 주세요"
          />
        </div>

        <label for="file">파일 첨부하기 (선택)</label>
        <div className="file_form">
          <label className="file_label">
            <input type="file" id="file" className="file_input" />
            <span className="file_name">파일업로드</span>
          </label>
        </div>
        <div className="consent_container">
          <label for="qna_consent" className="consent_wrap">
            <input
              type="checkbox"
              name="qna_consent"
              id="qna_consent"
              class="form-checkbox"
              onChange={(e) => {
                changeHandle(e.currentTarget.checked, "check");
              }}
              checked={checkbutton.includes("check") ? true : false}
            ></input>
            &nbsp;개인정보 수집·이용에 동의
          </label>
          <div className="consent_info">
            * 목적 : 문의 답변 / 제공 항목 : 이름, 이메일 및 휴대폰번호
          </div>
        </div>
        <div className="qna_btn">
          <button
            type="submit"
            className="btn_qna"
            disabled={disabled}
            style={
              disabled
                ? { backgroundColor: "#acd4ff", cursor: "default" }
                : { backgroundColor: "#9ac7f8" }
            }
            onClick={qnasubmit}
          >
            제출하기
          </button>
        </div>
      </form>
      <div>
        <NavLink to="/supportboard/qnapage/1">
          <button type="button" className="admin_button">
            QNA리스트
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default QNA;
