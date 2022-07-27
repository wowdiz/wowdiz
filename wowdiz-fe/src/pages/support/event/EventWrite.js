import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import AxiosService from "../../../service/AxiosService";
import { useNavigate, useParams } from "react-router-dom";

const EventWrite = () => {
  const navi = useNavigate();
  const [event_title, setEvent_title] = useState("");
  const [event_content, setEvent_content] = useState("");
  const [event_status, setEvent_status] = useState("");
  const [event_start_date, setEvent_start_date] = useState("");
  const [event_end_date, setEvent_end_date] = useState("");

  const { event_id } = useParams;

  const eventWriteUrl = "supportboard/eventwrite";

  const EventSubmit = (e) => {
    alert("제출 되었습니다.");
    e.preventDefault();
    AxiosService.post(eventWriteUrl, {
      event_id,
      event_title,
      event_content,
      event_status,
      event_start_date,
      event_end_date,
    }).then((res) => {
      navi("/supportboard/event");
    });
  };
  return (
    <form className="faq_write_form">
      <div className="event_write_container">
        <p style={{ margin: "0px 0px 8px" }}>문의유형</p>
        <select
          className="event_type"
          name="event_type"
          defaultChecked="진행중"
          onChange={(e) => {
            setEvent_status(e.target.value);
          }}
        >
          <option value="-선택-">--선택--</option>
          <option value="Y">진행중</option>
          <option value="N">마감</option>
        </select>
        <div className="event_date">
          <input
            type="date"
            name="event_start_date"
            class="form-control"
            onChange={(e) => {
              setEvent_start_date(e.target.value);
            }}
          />
          <input
            type="date"
            name="event_end_date"
            class="form-control"
            onChange={(e) => {
              setEvent_end_date(e.target.value);
            }}
          />
        </div>
        <div className="event_write_title">
          <label for="event_write_title">제목</label>
          <input
            type="text"
            id="event_write_title"
            name="event_write_title"
            className="form-control"
            placeholder="제목을 입력하세요."
            onChange={(e) => {
              setEvent_title(e.target.value);
            }}
          />
        </div>
        <div className="event_write_editor">
          <CKEditor
            editor={ClassicEditor}
            data="<p>Hello from CKEditor 5!</p>"
            onReady={(editor) => {
              console.log("Editor is ready to use!", editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
            }}
            onBlur={(event, editor) => {
              console.log("Blur.", editor);
            }}
            onFocus={(event, editor) => {
              console.log("Focus.", editor);
            }}
          />
        </div>
        <button type="submit" className="faq_write_btn" onClick={EventSubmit}>
          저장
        </button>
      </div>
    </form>
  );
};

export default EventWrite;
