import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import AxiosService from "../../../service/AxiosService";
import { useNavigate, useParams } from "react-router-dom";
import Editor from "@ckeditor/ckeditor5-build-classic";
import '../../../style/event.css'

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

  console.log('event_content',event_content)

  const API_URl = "http://localhost:9150/ckeditorImages";
  const UPLOAD_ENDPOINT = "file/upload";

  function uploadAdapter(loader) {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          let body = new FormData();
          loader.file.then((file) => {
            body.append("files", file);
            AxiosService.post("/file/upload", body, {
              headers: { "Content-Type": "multipart/form-data" },
            })
              .then((res) => {
                // res.json();
                console.log("axios성공");
                console.log(res.data);
                console.log(resolve);
                resolve({
                  default: `${API_URl}/${res.data}`,
                });
              })
              .then((res) => {
                resolve({
                  default: `${API_URl}/${res.data}`,
                });
              })
              .catch((err) => {
                reject(err);  
              });
          });
        });
      },
    };
  }

  function uploadPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return uploadAdapter(loader);
    };
  }
  return (
    <form className="faq_write_form">
      <div className="event_write_container">
        <div>
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
        </div>
        <div className="event_start">
            <p style={{ margin: "0px 0px 8px" }}>진행날짜</p>
            <input
              type="date"
              className="event_start_date"
              onChange={(e) => {
                setEvent_start_date(e.target.value);
              }}
            />
          </div>
          <div className="event_end">
            <input
              type="date"
              className="event_end_date"
              onChange={(e) => {
                setEvent_end_date(e.target.value);
              }}
            />
        </div>
        <div className="event_write_title">
          <span className="event_write_title">제목</span>
          <input
            type="text"
            id="event_write_title"
            name="event_write_title"
            placeholder="제목을 입력하세요."
            onChange={(e) => {
              setEvent_title(e.target.value);
            }}
          />
        </div>
        <div className="event_write_editor">
          <CKEditor
            config={{
              extraPlugins: [uploadPlugin],
            }}
            editor={Editor}
            data={event_content}
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
              console.log("Editor is ready to use!", editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
              setEvent_content(data);
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
