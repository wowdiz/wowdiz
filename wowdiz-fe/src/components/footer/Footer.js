import React from 'react';
import "../../style/footer.css";
import logo from "../../assets/images/logo/logo.png";

const Footer = () => {
    return (
        
            <div className='footer_wrap'>
                <img src={logo} className="logo_image_footer" alt="" />
                <div className='footer_wrap1'>와우디즈(주) 대표이사 bit219,<br/>통신판매업신고번호 2022-강남C-2022</div>
                <div className='footer_wrap2'>회사소개 | 이용약관 | 개인정보처리방침 | 취소/환불 정책 | 자주 묻는 질문 | 공지사항</div>
            </div>

    );
};

export default Footer;