import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../style/funding_detail.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { NavLink, Outlet, useParams } from "react-router-dom";

const FundingDetail = () => {
  // const { project_id } = useParams();
  const project_id = 70;
  const [style, setStyle] = useState(1);
  const [like, setLike] = useState("false");

  useEffect(() => {}, []);

  return (
    <div>
      <div className="reward_header">
        <p className="reward_category">홈·리빙</p>
        <h1 className="reward_title">[1억 앵콜] 베개의 상식을 부순다!</h1>
      </div>
      <div className="info_container">
        <div className="info_continer_banner">
          <Swiper
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
          </Swiper>
          <div className="order_container">
            <div className="order_wrap">
              <div className="order_icon"></div>
              <div className="order_name">펀딩종료일</div>
              <div className="order_date">2022.07.08</div>
            </div>
            <div className="arrow">
              <ArrowRightAltIcon
                sx={{ fontSize: 50 }}
                style={{ marginBottom: "20px", marginRight: "10px" }}
              />
            </div>
            <div className="order_wrap">
              <div className="order_icon"></div>
              <div className="order_name">결제예정일</div>
              <div className="order_date">2022.07.08</div>
            </div>
            <div className="arrow">
              <ArrowRightAltIcon
                sx={{ fontSize: 50, fontWeight: -10 }}
                style={{ marginBottom: "20px", marginRight: "10px" }}
              />
            </div>
            <div className="order_wrap">
              <div className="order_icon"></div>
              <div className="order_name">발송예정일</div>
              <div className="order_date">2022.07.08</div>
            </div>
          </div>
          <div className="funding_goal">
            <p style={{ lineHeight: "30px", margin: "5px" }}>
              <b>목표 금액</b> 1,000,000원
              <br />
              <b> 펀딩 기간</b> 2022.07.04-2022.07.18 <br />
            </p>
            <p style={{ fontSize: "15px" }}>
              100% 이상 모이면 펀딩이 성공되며, 펀딩 마감일까지 목표 금액이 100%
              모이지 않으면 결제가 진행되지 않습니다.
            </p>
          </div>
        </div>
        <div className="info_box">
          <div className="info_state">
            <h2 style={{ marginTop: "15px" }}>14일 남음</h2>
            <hr className="info_bar" />
            <p>
              <strong>1150%</strong> 달성
            </p>
            <p>
              <strong>10,090,00원</strong> 펀딩
            </p>
            <p>
              <strong>12명</strong> 서포터
            </p>
          </div>
          <div className="funding_btn">
            <button type="button" className="btn_funding">
              펀딩하기
            </button>
            <button className="funding_like">
              <i
                className={like === "false" ? "icon_like" : "icon_unlike"}
                onClick={() => {
                  setLike(false);
                }}
              />
            </button>
          </div>
          <div className="info_caution">
            펀딩을 마치면 결제 예약 상태입니다. 종료일에 100% 이상이 달성되었을
            경우에만 결제예정일에 결제가 됩니다.
          </div>
          <div className="info_seller">판매자 정보</div>
        </div>
      </div>
      <div className="content_menu_bar">
        <div className="content_menu">
          <p className="menu_bar_title">
            <NavLink
              className={style === 1 ? "menu_bar_style" : "menu_bar_style_sub"}
              to="/fundingdetail/"
              style={{ textDecoration: "none" }}
              onClick={() => {
                setStyle(1);
              }}
            >
              스토리
            </NavLink>
          </p>
          <p className="menu_bar_title">
            <NavLink
              className={style === 2 ? "menu_bar_style" : "menu_bar_style_sub"}
              to="/fundingdetail/news"
              style={{ textDecoration: "none" }}
              onClick={() => {
                setStyle(2);
              }}
            >
              새소식
            </NavLink>
          </p>
          <p className="menu_bar_title">
            <NavLink
              className={style === 3 ? "menu_bar_style" : "menu_bar_style_sub"}
              to="/fundingdetail/comm"
              style={{ textDecoration: "none" }}
              onClick={() => {
                setStyle(3);
              }}
            >
              커뮤니티
            </NavLink>
          </p>
          <p className="menu_bar_title">
            <NavLink
              className={style === 4 ? "menu_bar_style" : "menu_bar_style_sub"}
              to="/fundingdetail/info"
              style={{ textDecoration: "none" }}
              onClick={() => {
                setStyle(4);
              }}
            >
              안내
            </NavLink>
          </p>
        </div>
      </div>
      <h4 style={{ marginLeft: "830px" }}>리워드 선택</h4>
      <div className="content_container">
        <div className="content">
          <Outlet />
        </div>
        <div className="funding_select">13,000원 펀딩</div>
      </div>
    </div>
  );
};

export default FundingDetail;
