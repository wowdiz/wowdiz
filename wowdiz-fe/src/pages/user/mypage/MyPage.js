import React, { useEffect, useState } from "react";
import AxiosService from "../../../service/AxiosService";
import "../../../style/mypage.css";
import defaultImage from "../../../assets/images/user/default_image.jpg";
import { useNavigate } from "react-router-dom";
import Perferencefunding from "../../../components/main/Perference_funding";
import UserInfoUpdate from "../../../components/user/UserInfoUpdate";
import img1 from "../../../assets/images/test/7.jpg"
import img2 from "../../../assets/images/test/8.jpg"
import img3 from "../../../assets/images/test/9.jpg"
import img4 from "../../../assets/images/test/10.jpg"
import img5 from "../../../assets/images/test/11.jpg"
import img6 from "../../../assets/images/test/12.jpg"

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper"; // 추가
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import Myfunding from "../../../components/user/Myfunding";
import Point from "../../../components/user/Point";
// 최초 작업자: 이기민, 이광호
// 2022-07-13
// 마이 페이지 디자인
// 작업자 : 이광호
// 프론트 엔드 및 백엔드 작업
// 2022-07-25


const MyPage = () => {
  const navigation = useNavigate();

  const fundingDagtaload = [
    {
      img: img1,
      title: " 충전 셀카봉 삼각대를 하나로 인생샷 건지기 필수템",
      catagory: "가전",
      maker: "제이씨 컴퍼니",
      price: "15,000,000 원",
      percent: "150%",
      like: "15",
    },
    {
      img: img2,
      title: "10초면 청담동 미용실을 느낄수 있어요! 헤어시럽",
      maker: "뉴웨이브",
      price: "5,000,000 원",
      catagory: "뷰티",
      percent: "60%",
    },
    {
      img: img3,
      title: "여행&직장인 필수템 4대 100년 의료명가 가글",
      maker: "민아카데미",
      price: "1,000,000 원",
      catagory: "홈·리빙",
      percent: "30%",
    },
    {
      img: img4,
      title: "10만원대 접는 스트래칭 마사지기 3D 파워에어셀로 마사지샵",
      price: "3,000,000 원",
      catagory: "가전",
      maker: "(주)수련",
      percent: "50%",
    },
    {
      img: img5,
      title: "5일만에 37.5% 모공 쪼이는 5D 오디앰플 [8중 임상 화제]",
      price: "3,000,000 원",
      catagory: "뷰티",
      maker: "(주)케이티씨에스",
      percent: "50%",
    },
    {
      img: img6,
      title: "39,000원으로 여러분의 여름을 책임지겠습니다",
      price: "3,000,000 원",
      catagory: "패션·잡화",
      maker: "(주)라티그래",
      percent: "60%",
    },
  ];

  const [myPageHandler, setmyPageHandler] = useState({
    userInfoChange: "false",
  });

  const userInfoOpen = () => {
    setmyPageHandler({
      ...myPageHandler,
      userInfoChange: "true",
    });
  };

  const userPointOpen = () => {
    setmyPageHandler({
      ...myPageHandler,
      userInfoChange: "point",
    });
  }

  const userFundingListOpen = () =>{
    setmyPageHandler({
      ...myPageHandler,
      userInfoChange: "funding",
    });
  }

  const myPageHome = () => {
    setmyPageHandler({
      ...myPageHandler,
      userInfoChange: "false",
    });
  };

  // const [userDataLoad, setUserDataLoad] = useState({
  //   user_id: "",
  //   name: "",
  //   nickname: "",
  //   profile_picture: "",
  //   phone: "",
  //   point: "",
  //   category_id: "",
  // });

  const [userDataLoad, setUserDataLoad] = useState(null);

  const loadUserInfo = () => {
    const uri =
      "/api/user/info?user_email=" + localStorage.getItem("authenticatedUser");
    AxiosService.get(uri).then((res) => {
      console.log("res.data", res.data);
      const user_id = res.data.user_id;
      const point = res.data.point;
      const category_id = res.data.category_id;

      console.log("카테고리:" + category_id);

      // setUserDataLoad({
      //   ...userDataLoad,
      //   user_id: user_id,
      //   name: res.data.user_name,
      //   nickname: res.data.user_nickname,
      //   profile_picture: res.data.profile_picture,
      //   category_id: category_id,
      //   phone: res.data.user_phone,
      //   point: res.data.point,
      // });
      setUserDataLoad(res.data);
    });
    console.log(userDataLoad);
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
    <div>{userDataLoad ===null ? "":(<div>
      <div className="mypage_top_background" />
      <div className="mypage_full_layout_form">
        <div className="mypage_left_layout_form">
          <div
            className="mypage_profile_image_box"
            onClick={myPageHome}
            style={{ cursor: "pointer" }}
          >
            <img
              src={userDataLoad.profile_picture===null?defaultImage:"http://localhost:9150/save/"+userDataLoad.profile_picture}
              alt=""
              className="profile_image"
            />
          </div>
          <div className="mypage_profile_text_box">
            <span onClick={myPageHome} style={{ cursor: "pointer" }}>
              <b>{userDataLoad.user_name}</b>님
            </span>
            <p>서포터 ∙ 개인 회원</p>
            <button
              type="button"
              className="mypage_data_button"
              onClick={userInfoOpen}
            >
              회원 정보 변경
            </button>
            <button type="button" className="mypage_data_button"
             onClick={userPointOpen}>
              포인트 사용내역 
            </button>
            <button type="button" className="mypage_data_button">
              로그아웃
            </button>
          </div>
        </div>
        {myPageHandler.userInfoChange === "false" ? (
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
              <div className="mypage_punding_point_mypunding_layout_right" onClick={userFundingListOpen}>
                <b>MY 펀딩 List</b>
              </div>
            </div>
            <div className="mypage_like_funding_text">
              <b>{userDataLoad.name} 님께서 최근 관심있는 I like Funding</b>
            </div>
            <div className="mypage_like_funding_image_layout">
            { (fundingDagtaload === null || fundingDagtaload.length === 0) ? 
            <div className="like_nothing_text">
              <p> 아직 좋아요 한 펀딩이 없습니다</p>
            </div> :              
            <Swiper
              style={{ width: "80%", height:"320px"}}
              spaceBetween={4}
              slidesPerView={2}
              navigation
              autoplay={{ delay: 3000 }} // 추가
            >
             { fundingDagtaload && fundingDagtaload.map((data,idx)=>(
              <SwiperSlide  key={idx}>
              <Perferencefunding data={data} key={idx}/>
              </SwiperSlide>
              ))}
              </Swiper>
              }
            </div>
          </div>
        ) : myPageHandler.userInfoChange === "true" ? (
          <UserInfoUpdate userDataLoad={userDataLoad} setUserDataLoad={setUserDataLoad} />
        ) : myPageHandler.userInfoChange === "funding" ? (
          <Myfunding/>
        ) : (<Point dataLoad={userDataLoad}/>)}
      </div>
      
      </div>)}
    </div>
  );
};

export default MyPage;
