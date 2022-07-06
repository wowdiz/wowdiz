import React from "react";

// 최초 작업자: 이광호
// 2022-07-04
// 펀딩 프로젝트 컴포넌트

const Perference_funding = ({ data, idx }) => {
  return (
    <div className="perference_funding_detail">
      <span>
        <img
          className="perference_funding_detail_image"
          src={data.img}
          alt=""
        ></img>
        <p className="perference_fundig_title">{data.title}</p>
        <p className="fundig_category_component">{data.catagory}</p>
        <p className="perference_fundig_maker">{data.maker}</p>
        <div className="middle_div">
          <hr className="midle_bar"></hr>
          <hr
            className="midle_bar_gauge"
            style={{
              width: data.percent <= 100 ? "100%" : data.percent,
              backgroundSize: data.percent <= 100 ? "100%" : data.percent,
            }}
          ></hr>
        </div>
        <p className="perference_funding_percent">{data.percent}</p>
        <p className="perference_funding_price">{data.price}</p>
      </span>
    </div>
  );
};

export default Perference_funding;
