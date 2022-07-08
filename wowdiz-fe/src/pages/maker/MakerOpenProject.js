import React, { useState } from 'react';
import '../../style/maker.css';
import Form1 from './MakerOpenProjectForm1';
import Form2 from './MakerOpenProjectForm2';
import Form3 from './MakerOpenProjectForm3';
import Form4 from './MakerOpenProjectForm4';
import Form5 from './MakerOpenProjectForm5';

const MakerOpenProject = () => {
    const [processSelector, setProcessSelector] = useState(1);
    const [styler, setStyler] = useState(1);
    const [title, setTitle] = useState('기본정보');

    return (
        <div className='maker_open_project'>
            <div className='maker_open_project_header'>
                <h2>{title}</h2>
            </div>
            <div className='maker_open_project_menu'>
                <h3>프로젝트 만들기</h3>
                <div className='maker_open_project_rowmenu'>
                    <h4 className={styler===1?'rowmenu_clicked':''} onClick={() => {
                        setStyler(1);
                        setProcessSelector(1);
                        setTitle("기본정보")}}>1.기본정보</h4>
                    <h4 className={styler===2?'rowmenu_clicked':''} onClick={() => {
                        setStyler(2);
                        setProcessSelector(2);
                        setTitle('스토리')}}>2.스토리</h4>
                    <h4 className={styler===3?'rowmenu_clicked':''} onClick={() => {
                        setStyler(3);
                        setProcessSelector(3);
                        setTitle('리워드')}}>3.리워드</h4>
                    <h4 className={styler===4?'rowmenu_clicked':''} onClick={() => {
                        setStyler(4);
                        setProcessSelector(4);
                        setTitle('안내사항')}}>4.안내사항</h4>
                    <h4 className={styler===5?'rowmenu_clicked':''} onClick={() => {
                        setStyler(5);
                        setProcessSelector(5);
                        setTitle('제작자/부가정보')}}>5.제작자/부가정보</h4>
                </div>
            </div>
            {processSelector===1?<Form1/>:processSelector===2?<Form2/>:processSelector===3?<Form3/>:processSelector===4?<Form4/>:<Form5/>}
        </div>
    );
};

export default MakerOpenProject;