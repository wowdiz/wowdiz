import React, { useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";	// 추가
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import banner1 from '../../assets/images/test/1.jpg';
import banner2 from '../../assets/images/test/2.jpg';
import banner3 from '../../assets/images/test/3.jpg';
import banner4 from '../../assets/images/test/4.jpg';
import banner5 from '../../assets/images/test/5.jpg';
import banner6 from '../../assets/images/test/6.jpg';
import '../../style/home.css';
import laengking1 from '../../assets/images/main/laengking_1.png';
import laengking2 from '../../assets/images/main/laengking_2.png';
import laengking3 from '../../assets/images/main/laengking_3.png';


SwiperCore.use([Navigation, Pagination, Autoplay])	// 추가
const Home = () => {
  axios.get("http://localhost:9150").then(function(response){
    console.log(response)
  });
 const banner=([
  {img: banner1,
    title: '기미닉보이가 엄선한 고품격 OLED TV',
    catagory: '가전',
   percent: '150%'
  },  {img: banner2,
    title: '다이어트 후레이크 아침식사 대용으로 굿',
    catagory: '음식',
  percent: '60%'
  },  {img: banner3, 
    title: '특별 제작품 와이퍼',
    catagory: '음식',
  percent: '30%'
  },  {img: banner4,
    title: '기똥차게 큰 우산',
    catagory: '음식',
  percent: '50%'
  },  {img: banner5,
    title: '섭섭박사 성운이형표 곰국',
    catagory: '음식',
  percent: '50%'
  },  {img: banner6,
    title: '기미닉보이가 엄선한 파워슈즈',
    catagory: '음식',
  percent: '60%'
  }]);


  return (
    <div className="main">
    {/* 슬라이더 시작 */}

      <Swiper style={{width:'100%'}}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}	// 추가
    >
    {/* 슬라이드 배너 반복문  */}

  {
        banner.map((img,idx) =>(
          <SwiperSlide key={idx}>    
          <div className="main_banner"style={{backgroundImage:`URL(${img.img})`}}> 
            <p className="banner_title">{img.title} </p>
            <p className="banner_type">펀딩</p>
          </div>  
          </SwiperSlide>
        ))
  }
    </Swiper>
    {/* 2번째 영역 */}
    <div className="main_line">
      {/* 취향 맟춤 펀딩 영역 */}
      <div className="preference_funding_form">
      <div className="preference_funding">
        <h2 className="preference_line">취향 맞춤 펀딩 프로젝트</h2>
        <p className="preference_line_sub"> 고객 맞춤 Best 펀딩 </p> 
      </div>
      {
        banner.map((img,idx) =>(                  
          <div className="perference_funding_detail" key={idx}> 
            <img className="perference_funding_detail_image"src={img.img} alt=""></img>
            <p className="perference_fundig_title">{img.title}</p>
            <p className="perference_fundig_category">{img.catagory}</p>
            <hr className="midle_var"></hr>
            <p className="perference_funding_percent">{img.percent}</p>
          </div>  
           ))    
      }
      
      </div>
      <div className="laengking_funding_form">
        {/* 실시간 순위보기 영여 */}
        <div className="laengking_funding">
      <h2 className="laengking_line">실시간 랭킹 펀딩</h2>
        <p className="laengking_line_sub"> 실시간 Best 펀딩 </p> 
        </div>
        <hr/>
        <Swiper style={{width:'100%'}}
      spaceBetween={50}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}	// 추가
    >
     

      {
        banner.map((img,idx) =>(
          <SwiperSlide key={idx}>    
          <div className="laengking_funding_detail" key={idx}> 
            <img className="laengking_funding_detail_image"src={img.img} alt=""></img>
            <p className="laengking_fundig_title">{img.title}</p>
            <img className="laenking_chart" src={`laengking${idx+1}`} alt=""></img>
            <p className="laengking_fundig_category">{img.catagory}</p>
            <hr className="midle_laengking_var"></hr>
            <p className="laengking_funding_percent">{img.percent}</p>
          </div>  
          </SwiperSlide>
        ))
  }
   </Swiper>
      </div>
    </div>
 
  </div>
   
   
  );
};

export default Home;