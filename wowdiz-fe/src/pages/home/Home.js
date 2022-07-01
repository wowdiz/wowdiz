/* eslint-disable react/jsx-pascal-case */
import React from "react";
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
import rangking1 from '../../assets/images/main/rangking_1.png';
import rangking2 from '../../assets/images/main/rangking_2.png';
import rangking3 from '../../assets/images/main/rangking_3.png';
import Perference_funding from '../../components/main/Perference_funding';
import Ranking_funding from '../../components/main/Ranking_funding';
import Banner from '../../components/main/Banner';

SwiperCore.use([Navigation, Pagination, Autoplay])	// 추가


const Home = () => {
  axios.get("http://localhost:9150").then(function(response){
    console.log(response)
  });

 const banner = ([
  { img : banner1,
    ranking : rangking1,
    title : '기미닉보이가 엄선한 고품격 OLED TV',
    catagory : '가전',
    maker : '기미닉 전자',
    price : '15,000,000 원',
    percent : '150%'
  },  {img : banner2,
    ranking : rangking2,
    title : '다이어트 후레이크 아침식사 대용으로 굿',
    maker : '쩝쩝 박사',
    price : '5,000,000 원',
    catagory : '음식',
    percent: '60%'
  }, {img: banner3, 
      ranking: rangking3,
      title: '특별 제작품 와이퍼',
      maker: '깔끔주식sdsdsdadadadadadadassdsdsdssdsddsdsdsdad',
      price : '1,000,000 원',
      catagory: '생활',
      percent: '30%'
  }, {img: banner4,
      title: '기똥차게 큰 우산',
      price : '3,000,000 원',
      catagory: '생활',
      maker: '비사이로막가 주식',
    percent: '50%'
  }, {img: banner5,
      title: '쩝쩝박사 성운이형표 곰국',
      price : '3,000,000 원',
      catagory: '음식',
      maker: '킹메이커 주식',
    percent: '50%'
  }, {img: banner6,
      title: '기미닉보이가 엄선한 파워슈즈',
      price : '3,000,000 원',
      catagory: '의류',
      maker: '기미닉패션 주식',
    percent: '60%'
  }]);

  return (
    <div className="main">
    {/* 슬라이드 배너 영역 */}
      <Banner data={banner}/>
    {/* 취향맞춤 펀딩 및 실시간랭킹 펀딩 영역*/}
      <div className="main_line">
        {/* 취향 맟춤 펀딩 영역 */}
        <div className="preference_funding_form">
          <div className="preference_funding">
            <h2 className="preference_line">취향 맞춤 펀딩 프로젝트</h2>
            <p className="preference_line_sub"> 고객 맞춤 Best 펀딩 </p> 
          </div>
          {
            banner && banner.map((data,idx) =>(                  
              <Perference_funding data={data} idx={idx} key={idx} />
              ))    
          }          
        </div>
         {/* 실시간 순위보기 영역 */}
        <div className="rangking_funding_form">         
          <div className="rangking_funding">
            <h2 className="rangking_line">실시간 랭킹 펀딩</h2>
            <p className="rangking_line_sub"> 실시간 Best 펀딩 </p> 
          </div>
          <hr/>
          <Swiper style={{width:'100%'}}
          spaceBetween={40}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}	// 추가
          >
            {
              banner && banner.map((data,idx) =>(
                <SwiperSlide key={idx}>    
                  <Ranking_funding data={data} key={idx}/>
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