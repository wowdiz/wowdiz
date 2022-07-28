import React, { useEffect, useState } from "react";
import AxiosService from "../../../service/AxiosService";
import "../../../style/mypage.css";
import defaultImage from "../../../assets/images/user/default_image.jpg";
import { useNavigate } from "react-router-dom";
import Perference_funding from "../../../components/main/Perference_funding";
import UserInfoUpdate from "../../../components/user/UserInfoUpdate";

// 최초 작업자: 이기민
// 2022-07-13
// 마이 페이지 디자인

const MyPage = () => {
  const navigation = useNavigate();

  const [myPageHandler, setmyPageHandler] = useState({
    userInfoChange: false,
  });

  const userInfoOpen = () => {
    setmyPageHandler({
      ...myPageHandler,
      userInfoChange: true,
    });
  };

  const myPageHome = () => {
    setmyPageHandler({
      ...myPageHandler,
      userInfoChange: false,
    });
  };

  const [userDataLoad, setUserDataLoad] = useState({
    userId: "",
    name: "",
    nickname: "",
    profile_image: defaultImage,
    phone: "",
    point: "",
    category_id: "",
  });
  const loadUserInfo = () => {
    const uri =
      "/api/user/info?user_email=" + localStorage.getItem("authenticatedUser");
    AxiosService.get(uri).then((res) => {
      console.log("res.data", res.data);
      const user_id = res.data.user_id;
      const point = res.data.point;
      const category_id = res.data.category_id;

      console.log("카테고리:" + category_id);

      setUserDataLoad({
        ...userDataLoad,
        user_id: user_id,
        name: res.data.user_name,
        nickname: res.data.user_nickname,
        profile_image: defaultImage,
        category_id: category_id,
        phone: res.data.user_phone,
        point: res.data.point,
      });
    });
    const jwtToken = localStorage.getItem("jwtToken");
    if (jwtToken === null) {
      navigation("/");
      return () => {};
    }
  };

  useEffect(() => {
    loadUserInfo();
  }, []);

  return (
    <div>
      <div className="mypage_top_background" />
      <div className="mypage_full_layout_form">
        <div className="mypage_left_layout_form">
          <div
            className="mypage_profile_image_box"
            onClick={myPageHome}
            style={{ cursor: "pointer" }}
          >
            <img
              src={userDataLoad.profile_image}
              alt=""
              className="profile_image"
            />
          </div>
          <div className="mypage_profile_text_box">
            <span onClick={myPageHome} style={{ cursor: "pointer" }}>
              <b>{userDataLoad.name}</b>님
            </span>
            <p>서포터 ∙ 개인 회원</p>
            <button
              type="button"
              className="mypage_data_button"
              onClick={userInfoOpen}
            >
              회원 정보 변경
            </button>
            <button type="button" className="mypage_data_button">
              포인트 충전
            </button>
            <button type="button" className="mypage_data_button">
              로그아웃
            </button>
          </div>
        </div>
        {myPageHandler.userInfoChange === false ? (
          <div className="mypage_right_layout_form">
            <div className="mypage_right_data_form">
              <div className="mypage_punding_data">
                <span>
                  <b>0</b>
                </span>
                <p>
                  <b>펀딩</b>
                </p>
              </div>
              <div className="mypage_questions_data">
                <span>
                  <b>0</b>
                </span>
                <p>
                  <b>질문</b>
                </p>
              </div>
            </div>
            <div className="mypage_punding_point_mypunding_layout">
              <div className="mypage_punding_point_mypunding_layout_left">
                <b>펀딩: 0 WON</b>
              </div>
              <div className="mypage_punding_point_mypunding_layout_center">
                <b>포인트 : {userDataLoad.point} P</b>
              </div>
              <div className="mypage_punding_point_mypunding_layout_right">
                <b>MY 펀딩</b>
              </div>
            </div>
            <div className="mypage_like_funding_text">
              <b>{userDataLoad.name} 님께서 최근 관심있는 I like Funding</b>
            </div>
            <div className="mypage_like_funding_image_layout">
              <div className="mypage_like_funding_image_layout_left">
                <b>이미지 제목1</b>
              </div>
              <div className="mypage_like_funding_image_layout_center">
                <div className="mypage_funding_image_layout" />
                <b>이미지 제목2</b>
              </div>
              <div className="mypage_like_funding_image_layout_right">
                <div className="mypage_funding_image_layout" />
                <b>이미지 제목3</b>
              </div>
            </div>
          </div>
        ) : myPageHandler.userInfoChange === true ? (
          <UserInfoUpdate userDataLoad={userDataLoad} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default MyPage;
