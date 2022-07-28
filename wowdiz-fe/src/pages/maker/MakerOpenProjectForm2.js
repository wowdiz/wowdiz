import React, { Component, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import MyCkeditor from './MyCkeditor';
import HTMLReactParser from 'html-react-parser';

const MakerOpenProjectForm2 = ({ form, setForm, handleProject, processSelector, setProcessSelector }) => {
    
    useEffect(() => {
        window.scroll(0,0);
    },[])

    return (
        <div className='maker_open_project_form'>
            <div>
                <h3>프로젝트 요약을 적어주세요</h3>
                <textarea className="project_summary"
                name="project_summary"
                maxLength={100} type="text"
                onChange={(e) => {
                    setForm({
                        ...form,
                        [e.target.name] : e.target.value
                    })
                }}
                defaultValue={form.project_summary}
                />
                <h3>프로젝트 스토리를 적어주세요</h3>
                <MyCkeditor form={form} setForm={setForm} handleProject={handleProject}/>
                <div className='process_wrap'>
                    <div className='prevBtn' onClick={() => {
                        setProcessSelector(processSelector -1);
                    }}>PREV</div>
                    <div className='nextBtn' onClick={() => {
                        setProcessSelector(processSelector +1);
                    }}>NEXT</div>
                </div>
            </div>
        </div>
    );
};

export default MakerOpenProjectForm2;