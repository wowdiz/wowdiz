import React, { useRef, useState }  from 'react';
import "../../../style/login.css";
import "../../../../src/assets/images/logo/logo.png";
import logoimage from "../../../assets/images/logo/logo.png"
import kakao from "../../../assets/images/register/kakao.png";
import naver from "../../../assets/images/register/naver.png";
import { NavLink, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import AuthenticationService from '../../../service/AuthenticationService';

// 최초 작업자: 이기민
// 2022-07-06
// 로그인 페이지 디자인
const Login = () => {
    const navigation = useNavigate();
    const {register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        AuthenticationService.executeJwtAuthenticationService(data)
        .then(res => {
            const token = res.data.token;
            if(token){
                localStorage.setItem('jwtToken', token);
                navigation("/   ");
            }
            
        });
    }
     

        //   <form onSubmit={handleSubmit(onSubmit)}>
    //     <input {...register('user_email')}/><br/>
    //     <input {...register('user_pwd')}/><br/>
    //     <input type="submit" />
    //   </form>


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
                <form className='login_action_data' onSubmit={handleSubmit(onSubmit)}>
                    {/* login id text box */}
                    <div className='input_id_text_div'>
                        <input type='email' {...register('user_email')} className='user_email' placeholder='이메일 아이디' title='이메일 아이디' />
                    </div>
                    {/* login password text box */}
                    <div className='input_password_text_div'>
                        <input type='password' {...register('user_pwd')} className='user_password' maxLength='17' placeholder='비밀번호(영문, 숫자, 특수 문자 포함 8자 이상)' title='비밀번호(영문, 숫자, 특수 문자 포함 8자 이상)'/>
                    </div>
                    {/* id and password input type design */}
                    <div className='login_id_save'>
                        <input type='checkbox' className='login_id_save_checkbox'/>
                        <span>아이디 저장</span>
                        <span className='login_id_password_search'>아이디∙비밀번호 찾기</span>
                    </div>
                    <button type='submit' className='login_data_button'><b>로그인</b></button>
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
