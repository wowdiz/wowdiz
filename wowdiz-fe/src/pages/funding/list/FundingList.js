import React from "react";
import "../../../style/funding.css";
import Banner from "../../../components/main/Banner";
import Perference_funding from "../../../components/main/Perference_funding";
import banner1 from "../../../assets/images/test/7.jpg";
import banner2 from "../../../assets/images/test/8.jpg";
import banner3 from "../../../assets/images/test/9.jpg";
import banner4 from "../../../assets/images/test/10.jpg";
import banner5 from "../../../assets/images/test/11.jpg";
import banner6 from "../../../assets/images/test/12.jpg";
import banner7 from "../../../assets/images/test/banner7.jpg";
import banner8 from "../../../assets/images/test/banner8.jpg";
import banner9 from "../../../assets/images/test/banner9.jpg";
import banner10 from "../../../assets/images/test/banner10.jpg";
import banner11 from "../../../assets/images/test/banner11.jpg";
import banner12 from "../../../assets/images/test/banner12.jpg";
import banner13 from "../../../assets/images/test/banner13.jpg";
import banner14 from "../../../assets/images/test/banner14.jpg";
import banner15 from "../../../assets/images/test/banner15.jpg";
import banner16 from "../../../assets/images/test/banner16.jpg";
import banner17 from "../../../assets/images/test/banner17.jpg";
import banner18 from "../../../assets/images/test/banner18.jpg";
import banner19 from "../../../assets/images/test/banner19.jpg";
import banner20 from "../../../assets/images/test/banner20.jpg";
import banner21 from "../../../assets/images/test/banner21.jpg";

const FundingList = () => {
  const banner_Top = [
    {
      img: banner1,
      ranking: "rangking1",
      title: "기미닉보이가 엄선한 고품격 OLED TV",
      catagory: "가전",
      maker: "기미닉 전자",
      price: "15,000,000 원",
      percent: "150%",
      like: "15",
    },
    {
      img: banner2,
      ranking: "rangking2",
      title: "다이어트 후레이크 아침식사 대용으로 굿",
      maker: "쩝쩝 박사",
      price: "5,000,000 원",
      catagory: "음식",
      percent: "60%",
    },
    {
      img: banner3,
      ranking: "rangking3",
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
  ]
  const banner_List = [
    {
      img: banner1,
      ranking: "rangking1",
      title: "기미닉보이가 엄선한 고품격 OLED TV",
      catagory: "가전",
      maker: "기미닉 전자",
      price: "15,000,000 원",
      percent: "150%",
      like: "15",
    },
    {
      img: banner2,
      ranking: "rangking2",
      title: "다이어트 후레이크 아침식사 대용으로 굿",
      maker: "쩝쩝 박사",
      price: "5,000,000 원",
      catagory: "음식",
      percent: "60%",
    },
    {
      img: banner3,
      ranking: "rangking3",
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
    {
      img: banner7,
      title: "7,000mg 초고함량 아르기닌!! 오늘부터, 리볼드!",
      price: "1,890,150 원",
      catagory: "푸드",
      maker: "능이푸드",
      percent: "60%",
    },
    {
      img: banner8,
      title: "권능이 사랑하는 애착인형",
      price: "215,220 원",
      catagory: "패션·잡화",
      maker: "지원상회",
      percent: "15%",
    },
    {
      img: banner9,
      title: "[개발비10억] 이것 넣고 기름값 아꼈어요",
      price: "21,187,400 원",
      catagory: "여행·레저",
      maker: "주식회사 만수르",
      percent: "90%",
    },
    {
      img: banner10,
      title:
        "물자국/스크래치 없는 와인잔의 비밀 | 소믈리에와 개발한 와인잔 관리키트",
      price: "2,948,000 원",
      catagory: "패션·잡화",
      maker: "광광우는 광호",
      percent: "60%",
    },
    {
      img: banner11,
      title: "[8/15 광복절] '태극기 썬캐쳐'로 방 안에서 게양하세요!",
      price: "8,005,200 원",
      catagory: "패션·잡화",
      maker: "8/15광복절",
      percent: "95%",
    },
    {
      img: banner12,
      title: "포커게임 그냥하지 말고, '전통 패턴 플레잉 카드'로 즐기자",
      price: "1,600,000 원",
      catagory: "여행·레저",
      maker: "allin ziwon",
      percent: "50%",
    },
    {
      img: banner13,
      title:
        "컬메이즈 14k 라벤더사파이어, 시뮬런트 모이사나이트 컨플라워 목걸이",
      price: "1,976,000 원",
      catagory: "패션·잡화",
      maker: "기민주식회사",
      percent: "85%",
    },
    {
      img: banner14,
      title:
        "컬메이즈 14k 라벤더사파이어, 시뮬런트 모이사나이트 컨플라워 목걸이",
      price: "1,976,000 원",
      catagory: "패션·잡화",
      maker: "기민주식회사",
      percent: "85%",
    },
    {
      img: banner15,
      title: "RABEE rose water",
      price: "659,900 원",
      catagory: "푸드",
      maker: "돼지단비",
      percent: "60%",
    },
    {
      img: banner16,
      title: "[극장판 명탐정 코난 : 할로윈의 신부] 개봉 기념! 스페셜 굿즈",
      price: "111,000 원",
      catagory: "패션·잡화",
      maker: "워아이니지워니",
      percent: "35%",
    },
    {
      img: banner17,
      title:
        "[에이밍뷰] 골프 에이밍, 이제는 감으로 하지 말고 각도로 직접 보자!",
      price: "6,724,000 원",
      catagory: "패션·잡화",
      maker: "우니기리성우니",
      percent: "99%",
    },
    {
      img: banner18,
      title: "삼겹살 10분!! 넣고 돌리면 요리가 되는 자동회전쿠커",
      price: "21,552,000 원",
      catagory: "테크·가전",
      maker: "능지처참",
      percent: "50%",
    },
    {
      img: banner19,
      title: "닥터콤부차, 클리닉 대표의사가 만든 가볍고 맛있는 비결",
      price: "28,090,000 원",
      catagory: "푸드",
      maker: "광호의 콤부차",
      percent: "60%",
    },
    {
      img: banner20,
      title: "[맛있는 숙취해소] 발.효.헛.개. 숙취해소음료 '모닝화이팅'",
      price: "41,483,000 원",
      catagory: "푸드",
      maker: "사이먼기미닉",
      percent: "80%",
    },
    {
      img: banner21,
      title: "지금 그 머릿결, 제가 살려 보겠습니다.",
      price: "2,868,000 원",
      catagory: "뷰티",
      maker: "대머리아저씨",
      percent: "10%",
    },
  ];
  return (
    <div>
      <div>
        <Banner data={banner_Top} />
      </div>
      <div className="category_wrap">
        <div className="category_container">
          <div className="category_icon1">
            <div className="category_name">테크·가전</div>
          </div>
        </div>
        <div className="category_container">
          <div className="category_icon2">
            <div className="category_name">패션·잡화</div>
          </div>
        </div>
        <div className="category_container">
          <div className="category_icon3">
            <div className="category_name">뷰티</div>
          </div>
        </div>
        <div className="category_container">
          <div className="category_icon4">
            <div className="category_name">푸드</div>
          </div>
        </div>
        <div className="category_container">
          <div className="category_icon5">
            <div className="category_name">여행·레저</div>
          </div>
        </div>
      </div>
      <div className="funding_content">
        {banner_List &&
          banner_List.map((data, idx) => (
            <Perference_funding data={data} idx={idx} key={idx} />
          ))}
      </div>
    </div>
  );
};

export default FundingList;
