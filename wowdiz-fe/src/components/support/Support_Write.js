import React from "react";
import "../../../style/qna.css";

const Support_Write = () => {
  return (
    <div className="container">
      <form className="qna_form">
        <label for="title">제목</label>
        <input
          type="text"
          id="title"
          className="form-control"
          required="required"
          placeholder="제목을 입력해 주세요"
        />
        <div style={{ position: "relative" }}>
          <label for="content">내용</label>
          <textarea
            name="content"
            id="content"
            required="required"
            className="form-control"
            placeholder="내용을 입력해 주세요"
          />
        </div>

        <label for="file">파일 첨부하기 (선택)</label>
        <div className="file_form">
          <label className="file_label">
            <input type="file" id="file" className="file_input" />
            <span className="file_name">파일업로드</span>
          </label>
        </div>

        <div className="qna_btn">
          <button type="submit" className="btn_qna">
            글쓰기
          </button>
        </div>
      </form>
    </div>
  );
};

export default Support_Write;
