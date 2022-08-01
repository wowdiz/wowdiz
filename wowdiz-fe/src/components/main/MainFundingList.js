import React from "react";
import { useNavigate } from "react-router-dom";

// 최초 작업자: 이광호
// 2022-07-04
// 펀딩 프로젝트 컴포넌트

const MainFundingList = ({ data, idx }) => {
  const navi = useNavigate();
  return (
    <div className="perference_funding_detail">
      <span>
        <img
          className="perference_funding_detail_image"
          src={"http://localhost:9150/save/"+data.project_thumbnail}
          onClick={() => {
            navi(`/admin/funding/detail/${data.project_id}`)
          }}
          alt=""
        ></img>
        <p className="perference_fundig_title">{data.project_name}</p>
        <p className="fundig_category_component">"카테고리" | "사업자명"</p>
        <div className="middle_div">
          <hr className="midle_bar"></hr>
          <hr
            className="midle_bar_gauge"
            // style={{
            //   width: data.percent <= 100 ? "100%" : data.percent,
            //   backgroundSize: data.percent <= 100 ? "100%" : data.percent,
            // }}
          ></hr>
        </div>
        <p className="perference_funding_percent">100%</p>
        <p className="perference_funding_price">₩8,900,153</p>
      </span>
    </div>
  );
};

export default MainFundingList;
