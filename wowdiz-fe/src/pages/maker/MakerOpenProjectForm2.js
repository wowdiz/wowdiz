import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


const MakerOpenProjectForm2 = ({ form, setForm, handleProject }) => {
    return (
        <div className='maker_open_project_form'>
            <div>
                <h3>프로젝트 소개 이미지를 등록해주세요</h3>

                <h4>프로젝트 스토리를 적어주세요</h4>
                <h2>Using CKEditor 5 build in React</h2>
                <CKEditor
                    editor={ ClassicEditor }
                    data={form.project_story}
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                        setForm({
                            ...form,
                            project_story : data
                        })
                    } }
                    onBlur={ ( event, editor ) => {
                        // console.log( 'Blur.', editor );
                        
                    } }
                    // onBlur={handleContent}
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
            </div>
        </div>
    );
};

export default MakerOpenProjectForm2;