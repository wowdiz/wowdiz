import React from 'react';
import "../../../style/mypage.css";

// 최초 작업자: 이기민
// 2022-07-13
// 마이 페이지 디자인

const MyPage = () => {
    return (
        <div>
            <div className='mypage_top_background'/>
                <div className='mypage_full_layout_form'>
                    <div className='mypage_left_layout_form'>
                        <div className='mypage_profile_image_box'>
                            <b>Input<br/>Images</b>
                        </div>
                        <div className='mypage_profile_text_box'>
                            <span><b>이기민</b>님</span>
                                <p>서포터 ∙ 개인 회원</p>
                            <button type='button' className='mypage_data_button'>회원정보 변경</button>
                            <button type='button' className='mypage_data_button'>포인트 충전</button>
                            <button type='button' className='mypage_data_button'>로그아웃</button>
                        </div>
                    </div>
                    <div className='mypage_right_layout_form'>
                        <div className='mypage_right_data_form'>
                            <div className='mypage_punding_data'>
                                <span><b>0</b></span>
                                <p><b>펀딩</b></p>
                            </div>
                            <div className='mypage_questions_data'>
                                <span><b>0</b></span>
                                <p><b>질문</b></p>
                            </div>
                        </div>
                        <div className='mypage_punding_point_mypunding_layout'>
                            <div className='mypage_punding_point_mypunding_layout_left'>
                                <b>펀딩: 0 WON</b>
                            </div>
                            <div className='mypage_punding_point_mypunding_layout_center'>
                                <b>포인트 : 0 P</b>
                            </div>
                            <div className='mypage_punding_point_mypunding_layout_right'>
                                <b>MY 펀딩</b>
                            </div>
                        </div>
                        <div className='mypage_like_funding_text'>
                            <b>이기민 님께서 최근 관심있는 I like Funding</b>
                        </div>
                        <div className='mypage_like_funding_image_layout'>
                            <div className='mypage_like_funding_image_layout_left'>
                                <div className='mypage_funding_image_layout'/>
                                <b>이미지 제목1</b>
                            </div>
                            <div className='mypage_like_funding_image_layout_center'>
                                <div className='mypage_funding_image_layout'/>
                                <b>이미지 제목2</b>
                            </div>
                            <div className='mypage_like_funding_image_layout_right'>
                                <div className='mypage_funding_image_layout'/>
                                <b>이미지 제목3</b>
                            </div>
                        </div>
                    </div>
                </div>
            <div className='mypage_new_funding_text'>
                <b>이기민 님께서 최근 열어본 Funding</b>
            </div>
            <div className='mypage_new_funding_image_layout'>
                <div className='mypage_new_funding_image_layout_left'>
                    <div className='mypage_funding_image_layout'/>
                    <b>이미지 제목1</b>
                </div>
                <div className='mypage_new_funding_image_layout_center'>
                    <div className='mypage_funding_image_layout'/>
                    <b>이미지 제목2</b>
                </div>
                <div className='mypage_new_funding_image_layout_right'>
                    <div className='mypage_funding_image_layout'/>
                    <b>이미지 제목3</b>
                </div>
            </div>
        </div>
    );
};

export default MyPage;