
import React, { useState } from 'react';
import img1 from "../../assets/images/test/7.jpg"
import img2 from "../../assets/images/test/8.jpg"
import img3 from "../../assets/images/test/9.jpg"
import Perference_funding from '../main/Perference_funding';
import "../../style/myfunding.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper"; // 추가
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import MyFundingList from '../../pages/user/mypage/MyFundingList';

const Myfunding = () => {

    const [myFundingLoad,setMyFundingLoad] = useState([
        {img: img1,
        title: " 충전 셀카봉 삼각대를 하나로 인생샷 건지기 필수템",
        catagory: "가전",
        maker: "제이씨 컴퍼니",
        price: "15,000,000 원",
        percent: "150%",
        like: "15",},
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
        ]);
 

    return (
        <div className='my_funding_list_wrap'>
            <div className='my_funding_list'>
                <h2> 내가 펀딩한 펀딩 갯수 : 3</h2>
                <Swiper
              style={{ width: "600px"}}
              spaceBetween={10}
              slidesPerView={2}
              navigation
              autoplay={{ delay: 8000 }} // 추가
            >
                {myFundingLoad && myFundingLoad.map((data,idx)=>
                     <SwiperSlide  key={idx}>
                    <MyFundingList data={data} idx={idx} key={idx}/>
                    </SwiperSlide>
                )}
                </Swiper>
            </div>
        </div>
    );
};

export default Myfunding;