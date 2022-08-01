import React from "react";

import ranking_1 from "../../assets/images/test/ranking5.jpg";
const RankingView5 = () => {
  return (
        <div>
          <div className="ranking_funding_list">
            <div className="ranking_funding_list_main">
              <span>5</span>
            </div>
            <div className="ranking_funding_list_main_component">
              <div className="ranking_funding_list_main_component_text">
                한눈에 보는 코스모스 한국사 세계사 연표
              </div>
              <div className="ranking_funding_list_main_component_sub">
                <span className="ranking_funding_list_main_component_sub_color">15%</span><span className="ranking_funding_list_main_component_sub_color_sub">3,500,000 원</span>
              </div>
            </div>
            <div className="ranking_funding_list_main_image_layout">
              <img className="ranking_funding_list_main_image_file" src={ranking_1} alt="" />
            </div>
          </div>
        </div>

);
};

export default RankingView5;