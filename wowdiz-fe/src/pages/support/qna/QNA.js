import React from 'react';
import '../../../style/qna.css'

const QNA = () => {
    return (
        <div className="container">
            <div>
                <label for="user_name">이름</label>
                <input type="text" id="user_name" className="form-control" placeholder="이름을 입력하세요."/>
            </div>
            <div>
                <label for="mail">이메일</label>
                <input type="text" id="mail" className="form-control" placeholder="이메일"/>
                <label for="phone">휴대폰 번호</label>
                <input type="text" id="phone" className="form-control" placeholder="'-'없이 숫자만 입력해주세요."/>
            </div>
            <div>
                <label for="title">제목</label>
                <input type="text" id="title" className="form-control" placeholder="제목을 입력해 주세요"/>
            </div>
            <div>
                <label for="content">문의 내용</label>
                <textarea name="content" id="content" className="form-control" placeholder="문의하실 내용을 입력해 주세요"/>
            </div>          
                <label for="file">파일 첨부하기 (선택)</label>
            <div className='file_form'>   
                <label className="file_label">
                <input type="file" id="file" className  ="file_input"/>
                <span className="file_name">파일업로드</span>
                </label>
            </div>
            <div className="qna_btn">
                <button type="submit" className="btn_qna">제출</button>
            </div>
        </div>
    );
};

export default QNA;