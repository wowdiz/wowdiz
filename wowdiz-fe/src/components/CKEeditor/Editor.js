import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import AxiosService from "../../service/AxiosService";

const API_URL = "http://localhost:9150";
const UPLOAD_ENDPOINT = "file/upload";

export default function Editor({ handleChange, SetContent }) {
  function uploadAdapter(loader) {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          let body = new FormData();
          loader.file.then((file) => {
            body.append("files", file);
            AxiosService.post("/file/upload", body, {
              headers:{'Content-Type':'multipart/form-data'}
            })
              .then((res) => {
                // res.json();
                console.log('성공');
              })
              // .then((res) => {
              //   resolve({
              //     default: `${API_URL}/${res.filename}`
              //   });
              // })
              .catch((err) => {
                reject(err);
              });
          });
        });
      }
    };
  }


  function uploadPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return uploadAdapter(loader);
    };
  }


  return (
    <div className="form-wrapper">
      <CKEditor className='editor'
        config={{
          extraPlugins: [uploadPlugin]
        }}
        data="<p>게시글을 작성해주세요</p>"
        editor={ClassicEditor}
        onReady={(editor) => {}}
        onBlur={(event, editor) => {}}
        onFocus={(event, editor) => {}}
        // onChange={(event, editor) => {
        //   handleChange(editor.getData())
        //   console.log(editor.getData())
        // }}
        onChange={(event, editor) => {
          const data2 = editor.getData();
          SetContent(data2)
          console.log(data2)
        }}
      />
    </div>
  );
}