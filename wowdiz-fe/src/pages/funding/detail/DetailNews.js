import React from "react";
import "../../../style/detail_news.css";

const DetailNews = () => {
  return (
    <div className="content_news">
      <div className="news_title">
        <h2>새소식</h2>
      </div>
      <div className="news_list">
        <p style={{ margin: 0 }}>
          <span className="news_list_head">리워드 안내</span>
        </p>
        <p className="news_list_title">title 제목을 넣어주세요</p>
        <p className="news_list_date">2020 date 날짜</p>
      </div>
    </div>
  );
};

export default DetailNews;
