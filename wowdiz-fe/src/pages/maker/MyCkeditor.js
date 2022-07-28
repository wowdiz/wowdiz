import React from 'react';
import Editor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react'
import AxiosService from '../../service/AxiosService';

const MyCkeditor = ({form, setForm, handleProject}) => {
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
                    headers:{'Content-Type':'multipart/form-data'}
                    })
                    .then((res) => {
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
                <CKEditor
                    config={{
                        extraPlugins: [uploadPlugin]
                    }}
                    editor={Editor}
                    data={form.project_story}
                    onReady={editor => {
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