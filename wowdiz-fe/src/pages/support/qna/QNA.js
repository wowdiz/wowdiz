import React from "react";
import "../../../style/qna.css";

const QNA = () => {
  return (
    <div className="container">
      <div className="container_header">
        궁금한 점/의견을 남겨주시면 빠른 시일 내에 답변 드리겠습니다.
      </div>
      <form className="asas">
        <label for="user_name">이름</label>
        <input
          type="text"
          id="user_name"
          required="required"
          className="form-control"
          placeholder="이름을 입력하세요."
        />
        <div className="warp">
          <div className="wa">
            <label for="mail">이메일</label>
            <input
              type="text"
              id="mail"
              required="required"
              className="form-control"
              placeholder="이메일"
            />
          </div>
          <div className="was">
            <label for="phone">휴대폰 번호</label>
            <input
              type="text"
              id="phone"
              required="required"
              className="form-control"
              placeholder="'-'없이 숫자만 입력해주세요."
            />
          </div>
        </div>
        <label for="title">제목</label>
        <input
          type="text"
          id="title"
          className="form-control"
          required="required"
          placeholder="제목을 입력해 주세요"
        />
        <div style={{ position: "relative" }}>
          <label for="content">문의 내용</label>
          <textarea
            name="content"
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
            ></input>
            &nbsp;개인정보 수집·이용에 동의
          </label>
          <div className="consent_info">
            * 목적 : 문의 답변 / 제공 항목 : 이름, 이메일 및 휴대폰번호
          </div>
        </div>
        <div className="qna_btn">
          <button type="submit" className="btn_qna">
            제출
          </button>
        </div>
      </form>
    </div>
  );
};

export default QNA;
