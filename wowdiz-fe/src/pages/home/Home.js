/* eslint-disable react/jsx-pascal-case */
import React from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper"; // 추가
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import banner1 from "../../assets/images/test/1.jpg";
import banner2 from "../../assets/images/test/2.jpg";
import banner3 from "../../assets/images/test/3.jpg";
import banner4 from "../../assets/images/test/4.jpg";
import banner5 from "../../assets/images/test/5.jpg";
import banner6 from "../../assets/images/test/6.jpg";
import "../../style/home.css";
import rangking1 from "../../assets/images/main/rangking_1.png";
import rangking2 from "../../assets/images/main/rangking_2.png";
import rangking3 from "../../assets/images/main/rangking_3.png";
import Perference_funding from "../../components/main/Perference_funding";
import Ranking_funding from "../../components/main/Ranking_funding";
import Banner from "../../components/main/Banner";
import back_image from "../../assets/images/main/project_create_back.jpg";
import Button from "@mui/material/Button";
import notice from "../../assets/images/main/notice.png";
import guide from "../../assets/images/main/guide.png";
import introduce from "../../assets/images/main/introduce.png";
import qa from "../../assets/images/main/qa.png";
import event from "../../assets/images/main/event.png";
import support from "../../assets/images/main/support.png";
import CycleImage from "../../components/main/CycleImage";

// 최초 작업자: 이광호
// 2022-07-04
// 리액트 홈페이지 메인 프론트엔드

SwiperCore.use([Navigation, Pagination, Autoplay]); //

const Home = () => {
  axios.get("http://localhost:9150").then(function (response) {
    console.log(response);
  });

  const image1 = back_image;

  const cycleImage = [
    { image: notice, text: "Notice" },
    { image: guide, text: "Guide" },
    { image: introduce, text: "Introduce" },
    { image: qa, text: "Q/A" },
    { image: event, text: "Event" },
    { image: support, text: "Support" },
  ];

  const banner = [
    {
      img: banner1,
      ranking: rangking1,
      title: "기미닉보이가 엄선한 고품격 OLED TV",
      catagory: "가전",
      maker: "기미닉 전자",
      price: "15,000,000 원",
      percent: "150%",
      like: "15",
    },
    {
      img: banner2,
      ranking: rangking2,
      title: "다이어트 후레이크 아침식사 대용으로 굿",
      maker: "쩝쩝 박사",
      price: "5,000,000 원",
      catagory: "음식",
      percent: "60%",
    },
    {
      img: banner3,
      ranking: rangking3,
      title: "특별 제작품 와이퍼",
      maker: "깔끔주식sdsdsdadadadadadadassdsdsdssdsddsdsdsdad",
      price: "1,000,000 원",
      catagory: "생활",
      percent: "30%",
    },
    {
      img: banner4,
      title: "기똥차게 큰 우산",
      price: "3,000,000 원",
      catagory: "생활",
      maker: "비사이로막가 주식",
      percent: "50%",
    },
    {
      img: banner5,
      title: "쩝쩝박사 성운이형표 곰국",
      price: "3,000,000 원",
      catagory: "음식",
      maker: "킹메이커 주식",
      percent: "50%",
    },
    {
      img: banner6,
      title: "기미닉보이가 엄선한 파워슈즈",
      price: "3,000,000 원",
      catagory: "의류",
      maker: "기미닉패션 주식",
      percent: "60%",
    },
  ];

  return (
    <div className="main">
      {/* 슬라이드 배너 영역 */}
      <Banner data={banner} />
      {/* 취향맞춤 펀딩 및 실시간랭킹 펀딩 영역*/}
      <div className="main_line">
        {/* 취향 맟춤 펀딩 영역 */}
        <div className="preference_funding_form">
          <div className="preference_funding">
            <h2 className="preference_line">취향 맞춤 펀딩 프로젝트</h2>
            <p className="preference_line_sub"> 고객 맞춤 Best 펀딩 </p>
          </div>
          {banner &&
            banner.map((data, idx) => (
              <Perference_funding data={data} idx={idx} key={idx} />
            ))}
        </div>
        {/* 실시간 순위보기 영역 */}
        <div className="rangking_funding_form">
          <div className="rangking_funding">
            <h2 className="rangking_line">실시간 랭킹 펀딩</h2>
            {/* <p className="rangking_line_sub">  Best of best </p>  */}
          </div>
          <hr />
          <p className="rangking_line_sub"> 펀딩 참가 Best</p>
          <Ranking_funding data={banner} />
          <hr />
          <p className="rangking_line_sub"> 좋아요 많이한 Best</p>
          <Ranking_funding data={banner} />
        </div>
      </div>
      {/* 프로젝트 만들기 */}
      <div className="project">
        <h1>What's your idea?</h1>
      </div>
      <div
        className="project_wrap"
        style={{ backgroundImage: `URL(${image1})` }}
      >
        <h2 className="project_button_title"> WOW diz, ProJect Open </h2>
        <p className="project_button_content">
          Introduce your story and meet
          <br />
          investors and supporters
        </p>
        <Button
          variant="contained"
          className="project_button"
          style={{ width: "150px", backgroundColor: "#00c4c4" }}
        >
          Open
        </Button>
      </div>
      {/* 주목해야할만한 펀딩 , 신규 펀딩 */}
      <div className="main_line2">
        <div className="new_funding_form">
          <div className="preference_funding">
            <h2 className="preference_line">주목해야할 신규 펀딩</h2>
            <p className="preference_line_sub"> 주목해라 이것이 권능이다 </p>
          </div>
          <div className="new_funding">
            <Swiper
              style={{ width: "100%" }}
              spaceBetween={10}
              slidesPerView={3}
              navigation
              autoplay={{ delay: 3000 }} // 추가
            >
              {banner &&
                banner.map((data, idx) => (
                  <SwiperSlide key={idx}>
                    <Perference_funding data={data} idx={idx} key={idx} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
          <div className="preference_funding">
            <h2 className="preference_line">놓치면 아쉬운 종료 임박 펀딩</h2>
            <p className="preference_line_sub"> 놓치면 찾아간다 권능이가 </p>
          </div>
          <div className="new_funding">
            <Swiper
              style={{ width: "100%" }}
              spaceBetween={10}
              slidesPerView={3}
              navigation
              autoplay={{ delay: 3000 }} // 추가
            >
              {banner &&
                banner.map((data, idx) => (
                  <SwiperSlide key={idx}>
                    <Perference_funding data={data} idx={idx} key={idx} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>

        <div className="support_line">
          <div className="preference_funding">
            <h2 className="preference_line">친절상담, 고객센터 </h2>
            <p className="preference_line_sub"> 친절한 상담을 약속합니다</p>
          </div>
          {cycleImage &&
            cycleImage.map((data, idx) => (
              <CycleImage data={data} key={idx}></CycleImage>
            ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
