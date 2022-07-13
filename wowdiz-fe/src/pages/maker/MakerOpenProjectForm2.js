import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CKEditorClassic from '../../components/editor/CKEditorClassic';

const MakerOpenProjectForm2 = () => {
    return (
        <div className='maker_open_project_form'>
            <div>
                <h3>프로젝트 소개 이미지를 등록해주세요</h3>

                <h4>프로젝트 스토리를 적어주세요</h4>
                <h2>Using CKEditor 5 build in React</h2>
                <CKEditorClassic />
            </div>
        </div>
    );
};

export default MakerOpenProjectForm2;