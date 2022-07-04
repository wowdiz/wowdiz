import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper"; // 추가
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";

// 최초 작업자: 이광호
// 2022-07-04
// 랭킹 슬라이드 컴포넌트

const Rangking_funding = ({ data, idx }) => {
  return (
    <div className="rangking_funding_1">
      <Swiper
        style={{ width: "100%" }}
        spaceBetween={10}
        slidesPerView={2}
        navigation
        autoplay={{ delay: 3000 }} // 추가
      >
        {data &&
          data.map((data, idx) => (
            <SwiperSlide key={idx}>
              <div className="rangking_funding_detail">
                <img
                  className="rangking_funding_detail_image"
                  src={data.img}
                  alt=""
                ></img>
                <img className="rangking_chart" src={data.ranking} alt=""></img>
                <p className="rangking_fundig_title">
                  {idx + 1}.{data.title}
                </p>
                <p className="fundig_category_component">{data.catagory}</p>
                <p className="fundig_maker">{data.maker}</p>
                <div className="middle_div">
                  <hr className="midle_rangking_bar"></hr>
                  <hr
                    className="midle_rangking_bar_gauge"
                    style={{
                      width: data.percent <= 100 ? "100%" : data.percent,
                      backgroundColor: data.percernt <= 100 ? "red" : "#00c4c4",
                    }}
                  ></hr>
                </div>
                <p className="rangking_funding_percent">{data.percent}</p>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Rangking_funding;
