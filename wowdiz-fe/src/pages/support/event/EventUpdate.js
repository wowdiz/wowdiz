import React, { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import AxiosService from "../../../service/AxiosService";
import { useNavigate, useParams } from "react-router-dom";

const EventUpdate = () => {
  const navi = useNavigate();
  const { event_id } = useParams();
  const [selectData, setSelectData] = useState([]);
  const [event_title, setEvent_title] = useState("");
  // const [event_content, setEventContent] = useState("");
  const [event_start_date, setEvent_start_date] = useState("");
  const [event_end_date, setEvent_end_date] = useState("");
  const [event_status, setEvent_status] = useState("");

  const eventUpdateUrl = "/supportboard/eventupdate";
  const eventSelectUrl = "/supportboard/eventdetail?event_id=" + event_id;

  const onDataReceive = () => {
    AxiosService.get(eventSelectUrl).then((res) => {
      setSelectData(res.data);
      setEvent_title(res.data.event_title);
      setEvent_start_date(res.data.start_date);
      setEvent_end_date(res.data.event_end_date);
      setEvent_status(res.data.event_status);
    });
  };
  useEffect(() => {
    onDataReceive();
  }, []);

  const updateSubmit = (e) => {
    AxiosService.post(eventUpdateUrl, {
      event_title,
      event_start_date,
      event_end_date,
      event_status,
      event_id,
    }).then(() => {
      navi("/supportboard/event");
    });
  };

  return (
    <div className="event_write_container">
      <form>
        <p style={{ margin: "0px 0px 8px" }}>문의유형</p>
        <div>
          <select
            className="event_type"
            name="event_type"
            defaultChecked="진행중"
            defaultValue={selectData.event_status}
            onChange={(e) => {
              setEvent_status(e.target.value);
            }}
          >
            <option value="-선택-">--선택--</option>
            <option value="Y">진행중</option>
            <option value="N">마감</option>
          </select>
        </div>
        <div className="event_start">
          <div>시작날짜</div>
          <input
            type="date"
            name="event_start_date"
            className="event_start_date"
            defaultValue={selectData.event_start_date}
            onChange={(e) => {
              setEvent_start_date(e.target.value);
            }}
          />
        </div>

        <div className="event_date">
          <div>종료날짜</div>
          <input
            type="date"
            name="event_end_date"
            className="event_end_date"
            defaultValue={selectData.event_end_date}
            onChange={(e) => {
              setEvent_end_date(e.target.value);
            }}
          />
        </div>

        <div className="event_write_title1">
          <p for="event_write_title">제목</p>
          <input
            type="text"
            id="event_write_title"
            name="event_write_title"
            className="form-control"
            defaultValue={selectData.event_title}
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
        <button
          type="button"
          className="event_write_btn"
          onClick={updateSubmit}
        >
          저장
        </button>
      </form>
    </div>
  );
};

export default EventUpdate;
