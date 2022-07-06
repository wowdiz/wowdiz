import React from 'react';
import "../../../style/login.css";
import "../../../../src/assets/images/logo/logo.png";
import logoimage from "../../../assets/images/logo/logo.png"
import kakao from "../../../assets/images/register/kakao.png";
import naver from "../../../assets/images/register/naver.png";
import { NavLink } from 'react-router-dom';

// 최초 작업자: 이기민
// 2022-07-06
// 로그인 페이지 디자인

const Login = () => {
    return (
        <div>
            {/* login header */}
            <div className='login_top_header'>
                <img src={logoimage} className='logoimage' alt=''/>
            </div>
            {/* login main full layout */}
            <div className='login_main_form'>
                <h1>로그인</h1>
                {/* login form */}
                <form className='login_action_data'>
                    {/* login id text box */}
                    <div className='input_id_text_div'>
                        <input type='email' className='user_email' placeholder='이메일 아이디' title='이메일 아이디'/>
                    </div>
                    {/* login password text box */}
                    <div className='input_password_text_div'>
                        <input type='password' className='user_password' maxlength='17' placeholder='비밀번호(영문, 숫자, 특수 문자 포함 8자 이상)' title='비밀번호(영문, 숫자, 특수 문자 포함 8자 이상)'/>
                    </div>
                    {/* id and password input type design */}
                    <div className='login_id_save'>
                        <input type='checkbox' className='login_id_save_checkbox'/>
                        <span>아이디 저장</span>
                        <span className='login_id_password_search'>아이디∙비밀번호 찾기</span>
                    </div>
                    <button type='button' className='login_data_button'><b>로그인</b></button>
                </form>

                <div className="login_or">
                    <span>또는</span>
                </div>
                <div>
                    <div className="social_regist_login">
                        <button className="kakao" style={{ backgroundImage: `URL(${kakao})` }}/>
                        <button className="naver" style={{ backgroundImage: `URL(${naver})` }}/>
                    </div>
                    <div className='email_register'>
                        <div className='email_register_text'>
                            <span>아직 와우디즈 계정이 없나요?</span>
                        </div>
                        <div className='email_register_nav_text'>
                            <NavLink to="/register" style={{ textDecoration: "none" }}>
                                <span>회원가입</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
