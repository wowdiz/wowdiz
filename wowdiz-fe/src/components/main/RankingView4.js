import React from "react";
import ranking_1 from "../../assets/images/test/ranking4.jpg";

const RankingView4 = () => {
  return (
        <div>
          <div className="ranking_funding_list">
            <div className="ranking_funding_list_main">
              <span>4</span>
            </div>
            <div className="ranking_funding_list_main_component">
              <div className="ranking_funding_list_main_component_text">
              극장판 명탐정 코난 할로윈의 신부 개봉 기념 스페셜 굿즈
              </div>
              <div className="ranking_funding_list_main_component_sub">
                <span className="ranking_funding_list_main_component_sub_color">66%</span><span className="ranking_funding_list_main_component_sub_color_sub">2,000,000 원</span>
              </div>
            </div>
            <div className="ranking_funding_list_main_image_layout">
              <img className="ranking_funding_list_main_image_file" src={ranking_1} alt="" />
            </div>
          </div>
        </div>

);
};

export default RankingView4;
