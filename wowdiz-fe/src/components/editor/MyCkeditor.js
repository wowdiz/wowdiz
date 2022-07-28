import React from 'react';
// import Editor from 'ckeditor5-custom-build/build/ckeditor';
import Editor from '@ckeditor/ckeditor5-build-classic';
// import {Editor as ClassicEditor} from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react'
import AxiosService from '../../service/AxiosService';

const MyCkeditor = ({form, setForm, handleProject}) => {
    const API_URl = "http://localhost:9150/ckeditorImages";
    const UPLOAD_ENDPOINT = "file/upload";
    //document.querySelector('.ck.ck-content.ck-editor__editable.ck-rounded-corners.ck-editor__editable_inline.ck-blurred').innerHTML

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
                        console.log('axios성공');
                        console.log(res.data);
                        console.log(resolve);
                        resolve({
                            default: `${API_URl}/${res.data}`
                        });
                    })
                    .then((res) => {
                        resolve({
                        default: `${API_URl}/${res.data}`
                        });
                    })
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
        <div>

            <div className="App">
                {/* <h2>Using CKEditor 5 from online builder in React</h2> */}
                <CKEditor
                    config={{
                        extraPlugins: [uploadPlugin]
                    }}
                    editor={Editor}
                    data={form.project_story}
                    onReady={editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        console.log({ event, editor, data });
                        setForm({
                            ...form,
                            project_story : data
                        })
                    }}
                    onBlur={(event, editor) => {
                        console.log('Blur.', editor);
                    }}
                    onFocus={(event, editor) => {
                        console.log('Focus.', editor);
                    }}
                />
            </div>
        </div>
    )
}

export default MyCkeditor;