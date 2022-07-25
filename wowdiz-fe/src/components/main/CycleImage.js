import React from "react";

// 최초 작업자: 이광호
// 2022-07-04
// 싸이클 이미지

const CycleImage = ({ data }) => {
  return (
    <label className="home_mainpage_Support_layout">
      <div
        className="cycle_image"
        style={{ backgroundImage: `URL(${data.image})` }}
      >
        <h1> {data.text}</h1>
      </div>
    </label>
  );
};

export default CycleImage;
