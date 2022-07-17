import React from "react";
import "../../../style/funding.css";
import Banner from "../../../components/main/Banner";
import Perference_funding from "../../../components/main/Perference_funding";


const FundingList = () => {
  const banner = [
    {
      img: "banner1",
      ranking: "rangking1",
      title: "기미닉보이가 엄선한 고품격 OLED TV",
      catagory: "가전",
      maker: "기미닉 전자",
      price: "15,000,000 원",
      percent: "150%",
      like: "15",
    },
    {
      img: "banner2",
      ranking: "rangking2",
      title: "다이어트 후레이크 아침식사 대용으로 굿",
      maker: "쩝쩝 박사",
      price: "5,000,000 원",
      catagory: "음식",
      percent: "60%",
    },
    {
      img: "banner3",
      ranking: "rangking3",
      title: "특별 제작품 와이퍼",
      maker: "깔끔주식sdsdsdadadadadadadassdsdsdssdsddsdsdsdad",
      price: "1,000,000 원",
      catagory: "생활",
      percent: "30%",
    },
    {
      img: "banner4",
      title: "기똥차게 큰 우산",
      price: "3,000,000 원",
      catagory: "생활",
      maker: "비사이로막가 주식",
      percent: "50%",
    },
    {
      img: "banner5",
      title: "쩝쩝박사 성운이형표 곰국",
      price: "3,000,000 원",
      catagory: "음식",
      maker: "킹메이커 주식",
      percent: "50%",
    },
    {
      img: "banner6",
      title: "기미닉보이가 엄선한 파워슈즈",
      price: "3,000,000 원",
      catagory: "의류",
      maker: "기미닉패션 주식",
      percent: "60%",
    },
  ];
  return (
    <div>
      <div>
        <Banner data={banner} />
      </div>
      <div className="category_wrap">
        <div className="category_container">
          <div className="category_icon">
            <div className="category_name">category</div>
          </div>
        </div>
        <div className="category_container">
          <div className="category_icon">
            <div className="category_name">category</div>
          </div>
        </div>
        <div className="category_container">
          <div className="category_icon">
            <div className="category_name">category</div>
          </div>
        </div>
        <div className="category_container">
          <div className="category_icon">
            <div className="category_name">category</div>
          </div>
        </div>
        <div className="category_container">
          <div className="category_icon">
            <div className="category_name">category</div>
          </div>
        </div>
      </div>
      <div className="funding_content">
        <Perference_funding data={banner} />
      </div>
    </div>
  );
};

export default FundingList;
