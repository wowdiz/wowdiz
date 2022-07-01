import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";	// 추가
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";


SwiperCore.use([Navigation, Pagination, Autoplay])

const Banner =({data,idx}) => {
    return (
    <div className='banner_content'>
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
        data && data.map((data,idx) =>(
        <SwiperSlide key={idx}> 
            <div className="main_banner"style={{backgroundImage:`URL(${data.img})`}}> 
                <p className="banner_title">{data.title} </p>
                <p className="banner_type">펀딩</p>
            </div>    
        </SwiperSlide>
            ))
        }
        </Swiper>
    </div>
    );
};

export default Banner;